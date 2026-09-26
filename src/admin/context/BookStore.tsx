import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Book } from "../../data/books";
import { books as seedBooks } from "../../data/books";

interface BookStore {
  books: Book[];
  addBook: (book: Book) => void;
  removeBook: (id: number) => void;
  updateBook: (id: number, updated: Book) => void;
}

const STORAGE_KEY = "mw_admin_books";
const seedIds = new Set(seedBooks.map((b) => b.id));

function loadStored(): Book[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Book[]) : [];
  } catch {
    return [];
  }
}

function persist(books: Book[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books.filter((b) => !seedIds.has(b.id))));
}

const Ctx = createContext<BookStore | null>(null);

export const BookStoreProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>(() => {
    const stored = loadStored();
    const storedIds = new Set(stored.map((b) => b.id));
    return [...seedBooks, ...stored.filter((b) => !storedIds.has(b.id))];
  });

  const addBook = useCallback((book: Book) => {
    setBooks((prev) => { const next = [...prev, book]; persist(next); return next; });
  }, []);

  const removeBook = useCallback((id: number) => {
    setBooks((prev) => { const next = prev.filter((b) => b.id !== id); persist(next); return next; });
  }, []);

  const updateBook = useCallback((id: number, updated: Book) => {
    setBooks((prev) => { const next = prev.map((b) => (b.id === id ? updated : b)); persist(next); return next; });
  }, []);

  return <Ctx.Provider value={{ books, addBook, removeBook, updateBook }}>{children}</Ctx.Provider>;
};

export const useBookStore = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useBookStore must be used within BookStoreProvider");
  return ctx;
};
