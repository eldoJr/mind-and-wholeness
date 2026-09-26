import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Tag, Calendar, Monitor, Phone, Clock, Instagram, Linkedin } from "lucide-react";
import { courses } from "./data";
import logo from "../../../assets/icons/logo-icon.png";

const CoursePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find((c) => c.slug === slug);

  if (!course) return <Navigate to="/programs/institute" replace />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 font-sans">
      {/* Back nav */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8">
        <Link
          to="/programs/institute"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition"
        >
          <ChevronLeft size={16} />
          Back to Institute
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left — main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full object-contain bg-gray-50 max-h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                Mind & Wholeness Institute
              </p>
              <h1 className="font-serif text-3xl text-white leading-snug">{course.title}</h1>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6"
          >
            <h2 className="font-serif text-lg font-semibold text-gray-800 mb-3">About this course</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{course.description}</p>

            {/* Topics */}
            <div className="flex flex-wrap gap-2 mt-5">
              {course.topics.map((topic) => (
                <span
                  key={topic}
                  className="inline-flex items-center gap-1.5 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                >
                  <Tag size={11} />
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Lessons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6"
          >
            <h2 className="font-serif text-lg font-semibold text-gray-800 mb-4">Course Lessons</h2>
            <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Clock size={22} className="text-primary/50" />
              </div>
              <p className="text-sm font-medium text-gray-500">Lessons will be revealed once the course begins</p>
              <p className="text-xs text-gray-400">Starting {course.date ?? "soon"}</p>
            </div>
          </motion.div>
        </div>

        {/* Right — sidebar */}
        <div className="space-y-5">
          {/* Instructor card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="M&W" className="h-10 w-auto" />
              <div>
                <p className="text-sm font-semibold text-gray-800">{course.instructor}</p>
                <p className="text-xs text-gray-400">{course.instructorRole}</p>
              </div>
            </div>
            <div className="h-px bg-gray-100 mb-4" />
            <p className="text-xs text-gray-500 leading-relaxed">
              This course is part of the Mind & Wholeness Institute series — curated teachings
              designed to nurture spiritual growth and wholeness.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-5 space-y-4"
          >
            {course.date && (
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Starts</p>
                  <p className="text-sm font-semibold text-gray-800">{course.date}</p>
                </div>
              </div>
            )}
            {course.format && (
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Monitor size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Format</p>
                  <p className="text-sm font-semibold text-gray-800">{course.format}</p>
                </div>
              </div>
            )}
            {course.contact && (
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">More information</p>
                  <p className="text-sm font-semibold text-gray-800">{course.contact}</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Link
              to="/signup/signup"
              className="block w-full text-center bg-primary hover:bg-primary/90 text-white py-3 rounded-xl text-sm font-medium tracking-wide transition shadow-sm hover:shadow-md"
            >
              Join to Access Course
            </Link>
            <div className="flex items-center justify-center gap-4 mt-3">
              <a
                href="https://www.instagram.com/liliantitus_1?igsh=MXdsbXU2NjUxMXJ6bA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-primary transition flex items-center gap-1"
              >
                <Instagram size={13} /> @liliantitus_1
              </a>
              <a
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-primary transition flex items-center gap-1"
              >
                <Linkedin size={13} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
