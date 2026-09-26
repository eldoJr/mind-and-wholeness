import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Article } from "../../data/articles";

interface ArticleStore {
  articles: Article[];
  addArticle: (article: Article) => void;
  removeArticle: (id: number) => void;
  updateArticle: (id: number, updates: Partial<Article>) => void;
}

const STORAGE_KEY = "mw_admin_articles";

function loadStored(): Article[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Article[]) : [];
  } catch {
    return [];
  }
}

function persist(articles: Article[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

const Ctx = createContext<ArticleStore | null>(null);

export const ArticleStoreProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>(loadStored);

  const addArticle = useCallback((article: Article) => {
    setArticles((prev) => {
      const next = [...prev, article];
      persist(next);
      return next;
    });
  }, []);

  const removeArticle = useCallback((id: number) => {
    setArticles((prev) => {
      const next = prev.filter((a) => a.id !== id);
      persist(next);
      return next;
    });
  }, []);

  const updateArticle = useCallback((id: number, updates: Partial<Article>) => {
    setArticles((prev) => {
      const next = prev.map((a) => (a.id === id ? { ...a, ...updates } : a));
      persist(next);
      return next;
    });
  }, []);

  return (
    <Ctx.Provider value={{ articles, addArticle, removeArticle, updateArticle }}>
      {children}
    </Ctx.Provider>
  );
};

export const useArticleStore = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useArticleStore must be used within ArticleStoreProvider");
  return ctx;
};
