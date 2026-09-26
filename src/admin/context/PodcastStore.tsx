import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Podcast } from "../../data/podcasts";

interface PodcastStore {
  podcasts: Podcast[];
  addPodcast: (podcast: Podcast) => void;
  removePodcast: (id: number) => void;
}

const STORAGE_KEY = "mw_admin_podcasts";

function loadStored(): Podcast[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Podcast[]) : [];
  } catch {
    return [];
  }
}

function persist(podcasts: Podcast[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(podcasts));
}

const Ctx = createContext<PodcastStore | null>(null);

export const PodcastStoreProvider = ({ children }: { children: ReactNode }) => {
  const [podcasts, setPodcasts] = useState<Podcast[]>(loadStored);

  const addPodcast = useCallback((podcast: Podcast) => {
    setPodcasts((prev) => {
      const next = [...prev, podcast];
      persist(next);
      return next;
    });
  }, []);

  const removePodcast = useCallback((id: number) => {
    setPodcasts((prev) => {
      const next = prev.filter((p) => p.id !== id);
      persist(next);
      return next;
    });
  }, []);

  return <Ctx.Provider value={{ podcasts, addPodcast, removePodcast }}>{children}</Ctx.Provider>;
};

export const usePodcastStore = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("usePodcastStore must be used within PodcastStoreProvider");
  return ctx;
};
