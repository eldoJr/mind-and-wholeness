export interface CourseLesson {
  title: string;
  duration: string;
}

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  instructor: string;
  instructorRole: string;
  instructorImage?: string;
  thumbnail: string;
  students: number;
  date?: string;
  format?: string;
  contact?: string;
  seatsLeft?: number;
  lessons: CourseLesson[];
  topics: string[];
}
