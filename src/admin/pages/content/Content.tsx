import { motion } from "framer-motion";
import { FileText, Mic2, CalendarDays, BookOpen, Plus, Trash2, ExternalLink, BookMarked, Newspaper } from "lucide-react";
import { useArticleStore } from "../../context/ArticleStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCourseStore } from "../../context/CourseStore";
import { usePodcastStore } from "../../context/PodcastStore";
import { useBookStore } from "../../context/BookStore";

const tabs = [
  { label: "Articles", icon: FileText },
  { label: "Podcasts", icon: Mic2 },
  { label: "Events", icon: CalendarDays },
  { label: "Courses", icon: BookOpen },
  { label: "Books", icon: BookMarked },
];

const Content = () => {
  const [active, setActive] = useState("Courses");
  const navigate = useNavigate();
  const { courses, removeCourse } = useCourseStore();
  const { podcasts, removePodcast } = usePodcastStore();
  const { books, removeBook } = useBookStore();
  const { articles, removeArticle } = useArticleStore();

  return (
    <div className="space-y-6 max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <p className="text-xs uppercase tracking-widest text-primary font-medium mb-1">Library</p>
        <h2 className="font-serif text-3xl font-semibold text-gray-800">Content</h2>
        <p className="text-sm text-gray-400 mt-1">Manage articles, podcasts, events and courses.</p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08 }}
        className="flex gap-2 flex-wrap"
      >
        {tabs.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition ${
              active === label
                ? "bg-primary text-white shadow-sm"
                : "bg-white/70 backdrop-blur-xl border border-white/60 text-gray-500 hover:text-primary hover:bg-primary/5"
            }`}
          >
            <Icon size={14} />
            {label}
            {label === "Articles" && (
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${active === label ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
                {articles.length}
              </span>
            )}
            {label === "Courses" && (
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${active === label ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
                {courses.length}
              </span>
            )}
            {label === "Podcasts" && (
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${active === label ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
                {podcasts.length}
              </span>
            )}
            {label === "Books" && (
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${active === label ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
                {books.length}
              </span>
            )}
          </button>
        ))}
      </motion.div>

      {/* Panel */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6"
      >
        <div className="flex items-center justify-between mb-5">
          <p className="font-serif text-base font-semibold text-gray-800">{active}</p>
          <button
            onClick={() => {
            if (active === "Courses") navigate("/admin/courses/add");
            else if (active === "Podcasts") navigate("/admin/podcasts/add");
            else if (active === "Articles") navigate("/admin/articles/add");
          }}
            className="inline-flex items-center gap-1.5 text-xs bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/90 transition"
          >
            <Plus size={13} /> Add {active.slice(0, -1)}
          </button>
        </div>

        {/* Articles list */}
        {active === "Articles" ? (
          articles.length > 0 ? (
            <div className="space-y-3">
              {articles.map((article) => (
                <div key={article.id} className="flex items-center gap-4 px-4 py-3 rounded-xl bg-gray-50 hover:bg-primary/5 transition group">
                  <div className="h-12 w-16 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                    {article.coverImage && <img src={article.coverImage} alt={article.title} className="h-full w-full object-cover" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{article.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{article.author} · {article.category} · {article.readTime}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${article.published ? "bg-emerald-50 text-emerald-700" : "bg-gray-100 text-gray-400"}`}>
                        {article.published ? "Published" : "Draft"}
                      </span>
                      {article.featured && <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-primary/10 text-primary">Featured</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <button onClick={() => removeArticle(article.id)} className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState icon={Newspaper} label="articles" />
          )
        ) : active === "Podcasts" ? (
          podcasts.length > 0 ? (
            <div className="space-y-3">
              {podcasts.map((podcast) => (
                <div key={podcast.id} className="flex items-center gap-4 px-4 py-3 rounded-xl bg-gray-50 hover:bg-primary/5 transition group">
                  <div className="h-12 w-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                    {podcast.image && <img src={podcast.image} alt={podcast.title} className="h-full w-full object-cover" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{podcast.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">S{podcast.season} · E{podcast.episode} · {podcast.duration} · {podcast.host}</p>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <button onClick={() => removePodcast(podcast.id)} className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState icon={Mic2} label="podcasts" />
          )
        ) : active === "Courses" ? (
          courses.length > 0 ? (
            <div className="space-y-3">
              {courses.map((course) => (
                <div
                  key={course.slug}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl bg-gray-50 hover:bg-primary/5 transition group"
                >
                  {/* Thumbnail */}
                  <div className="h-12 w-16 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                    <img src={course.thumbnail} alt={course.title} className="h-full w-full object-cover" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{course.title}</p>
                    <p className="text-xs text-gray-400 truncate mt-0.5">{course.subtitle || course.description.slice(0, 60) + "…"}</p>
                    <div className="flex items-center gap-3 mt-1">
                      {course.date && <span className="text-xs text-primary">{course.date}</span>}
                      <span className="text-xs text-gray-400">{course.lessons.length} lessons</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <a
                      href={`/programs/institute/${course.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition"
                    >
                      <ExternalLink size={14} />
                    </a>
                    <button
                      onClick={() => removeCourse(course.slug)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState icon={BookOpen} label="courses" />
          )
        ) : active === "Books" ? (
          books.length > 0 ? (
            <div className="space-y-3">
              {books.map((book) => (
                <div key={book.id} className="flex items-center gap-4 px-4 py-3 rounded-xl bg-gray-50 hover:bg-primary/5 transition group">
                  <div className="h-14 w-10 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                    <img src={book.image} alt={book.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{book.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{book.author} · {book.category} · ${book.price}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${book.available ? "bg-emerald-50 text-emerald-700" : "bg-gray-100 text-gray-400"}`}>
                        {book.available ? "Available" : "Coming Soon"}
                      </span>
                      {book.featured && <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-primary/10 text-primary">Featured</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <a href="/bookstore/bookstore" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition">
                      <ExternalLink size={14} />
                    </a>
                    <button onClick={() => removeBook(book.id)} className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState icon={BookMarked} label="books" />
          )
        ) : (
          <EmptyState icon={tabs.find((t) => t.label === active)!.icon} label={active.toLowerCase()} />
        )}
      </motion.div>
    </div>
  );
};

function EmptyState({ icon: Icon, label }: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-14 gap-3">
      <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
        <Icon size={26} className="text-primary/40" />
      </div>
      <p className="text-sm font-medium text-gray-500">No {label} yet</p>
      <p className="text-xs text-gray-400">Content added here will appear on the site.</p>
    </div>
  );
}

export default Content;
