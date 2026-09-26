import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Course, CourseLesson } from "../../pages/institute/course/types";
import { courses as seedCourses } from "../../pages/institute/course/data";

interface CourseStore {
  courses: Course[];
  addCourse: (course: Course) => void;
  removeCourse: (slug: string) => void;
  updateCourse: (slug: string, updated: Course) => void;
}

const STORAGE_KEY = "mw_admin_courses";

function loadStored(): Course[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Course[]) : [];
  } catch {
    return [];
  }
}

function persist(courses: Course[]) {
  // Only persist admin-added (non-seed) courses
  const slugs = new Set(seedCourses.map((c) => c.slug));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses.filter((c) => !slugs.has(c.slug))));
}

const Ctx = createContext<CourseStore | null>(null);

export const CourseStoreProvider = ({ children }: { children: ReactNode }) => {
  const [courses, setCourses] = useState<Course[]>(() => {
    const stored = loadStored();
    const storedSlugs = new Set(stored.map((c) => c.slug));
    return [...seedCourses, ...stored.filter((c) => !storedSlugs.has(c.slug) || true)];
  });

  const addCourse = useCallback((course: Course) => {
    setCourses((prev) => {
      const next = [...prev, course];
      persist(next);
      return next;
    });
  }, []);

  const removeCourse = useCallback((slug: string) => {
    setCourses((prev) => {
      const next = prev.filter((c) => c.slug !== slug);
      persist(next);
      return next;
    });
  }, []);

  const updateCourse = useCallback((slug: string, updated: Course) => {
    setCourses((prev) => {
      const next = prev.map((c) => (c.slug === slug ? updated : c));
      persist(next);
      return next;
    });
  }, []);

  return <Ctx.Provider value={{ courses, addCourse, removeCourse, updateCourse }}>{children}</Ctx.Provider>;
};

export const useCourseStore = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCourseStore must be used within CourseStoreProvider");
  return ctx;
};

export type { CourseLesson };
