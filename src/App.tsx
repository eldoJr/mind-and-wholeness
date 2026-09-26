// src/App.tsx
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider } from "./context/AuthContext";
import { PodcastStoreProvider } from "./admin/context/PodcastStore";
import { BookStoreProvider } from "./admin/context/BookStore";
import { ArticleStoreProvider } from "./admin/context/ArticleStore";
import "./index.css";

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <PodcastStoreProvider>
          <BookStoreProvider>
            <ArticleStoreProvider>
              <RouterProvider router={router} />
            </ArticleStoreProvider>
          </BookStoreProvider>
        </PodcastStoreProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;