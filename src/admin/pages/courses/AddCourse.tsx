import { useState, useRef, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft, Plus, Trash2, Tag, Upload, BookOpen, Clock,
  User, Calendar, Monitor, Phone, Users, Hash,
} from "lucide-react";
import { useCourseStore } from "../../context/CourseStore";
import type { CourseLesson } from "../../../pages/institute/course/types";

const field = "w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition";
const label = "text-xs font-medium text-gray-500 mb-1.5 block";

function slugify(str: string) {
  return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const emptyLesson = (): CourseLesson => ({ title: "", duration: "" });

export default function AddCourse() {
  const { addCourse } = useCourseStore();
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    description: "",
    instructor: "",
    instructorRole: "",
    date: "",
    format: "Online Classes",
    contact: "",
    students: "",
    seatsLeft: "",
  });
  const [slug, setSlug] = useState("");
  const [slugManual, setSlugManual] = useState(false);
  const [thumbnail, setThumbnail] = useState<string>("");
  const [lessons, setLessons] = useState<CourseLesson[]>([emptyLesson()]);
  const [topicInput, setTopicInput] = useState("");
  const [topics, setTopics] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  const set = (key: string, val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    if (key === "title" && !slugManual) setSlug(slugify(val));
    if (errors[key]) setErrors((e) => { const n = { ...e }; delete n[key]; return n; });
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setThumbnail(reader.result as string);
    reader.readAsDataURL(file);
  };

  const addLesson = () => setLessons((l) => [...l, emptyLesson()]);
  const removeLesson = (i: number) => setLessons((l) => l.filter((_, idx) => idx !== i));
  const setLesson = (i: number, key: keyof CourseLesson, val: string) =>
    setLessons((l) => l.map((lesson, idx) => idx === i ? { ...lesson, [key]: val } : lesson));

  const addTopic = () => {
    const t = topicInput.trim();
    if (t && !topics.includes(t)) setTopics((p) => [...p, t]);
    setTopicInput("");
  };
  const removeTopic = (t: string) => setTopics((p) => p.filter((x) => x !== t));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.title) e.title = "Title is required";
    if (!slug) e.slug = "Slug is required";
    if (!form.description) e.description = "Description is required";
    if (!form.instructor) e.instructor = "Instructor is required";
    if (!thumbnail) e.thumbnail = "Thumbnail is required";
    if (lessons.some((l) => !l.title)) e.lessons = "All lesson titles are required";
    if (topics.length === 0) e.topics = "Add at least one topic";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    addCourse({
      slug,
      title: form.title,
      subtitle: form.subtitle,
      description: form.description,
      instructor: form.instructor,
      instructorRole: form.instructorRole,
      thumbnail,
      students: Number(form.students) || 0,
      date: form.date || undefined,
      format: form.format || undefined,
      contact: form.contact || undefined,
      seatsLeft: Number(form.seatsLeft) || undefined,
      lessons: lessons.filter((l) => l.title),
      topics,
    });
    setSaved(true);
    setTimeout(() => navigate("/admin/content"), 1200);
  };

  return (
    <div className="max-w-3xl space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <button
          onClick={() => navigate("/admin/content")}
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition mb-4"
        >
          <ChevronLeft size={15} /> Back to Content
        </button>
        <p className="text-xs uppercase tracking-widest text-primary font-medium mb-1">Institute</p>
        <h2 className="font-serif text-3xl font-semibold text-gray-800">Add Course</h2>
        <p className="text-sm text-gray-400 mt-1">Fill in the details below to publish a new course.</p>
      </motion.div>

      {/* Thumbnail */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6"
      >
        <SectionTitle icon={Upload} title="Thumbnail" />
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImage} />
        {thumbnail ? (
          <div className="relative rounded-2xl overflow-hidden mt-3">
            <img src={thumbnail} alt="preview" className="w-full max-h-64 object-contain bg-gray-50" />
            <button
              onClick={() => setThumbnail("")}
              className="absolute top-3 right-3 bg-white/80 backdrop-blur p-1.5 rounded-lg text-gray-500 hover:text-red-500 transition"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => fileRef.current?.click()}
            className={`mt-3 w-full border-2 border-dashed rounded-2xl py-10 flex flex-col items-center gap-2 text-gray-400 hover:border-primary/40 hover:text-primary transition ${errors.thumbnail ? "border-red-300" : "border-gray-200"}`}
          >
            <Upload size={22} />
            <span className="text-sm">Click to upload thumbnail</span>
            <span className="text-xs">PNG, JPG up to 5MB</span>
          </button>
        )}
        {errors.thumbnail && <p className="text-xs text-red-400 mt-1.5">{errors.thumbnail}</p>}
      </motion.div>

      {/* Basic Info */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6 space-y-4"
      >
        <SectionTitle icon={BookOpen} title="Course Info" />

        <div>
          <label className={label}>Title *</label>
          <input className={`${field} ${errors.title ? "border-red-300" : ""}`} placeholder="e.g. Understanding Faith" value={form.title} onChange={(e) => set("title", e.target.value)} />
          {errors.title && <p className="text-xs text-red-400 mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className={label}>Slug *</label>
          <div className="relative">
            <Hash size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              className={`${field} pl-8 ${errors.slug ? "border-red-300" : ""}`}
              placeholder="understanding-faith"
              value={slug}
              onChange={(e) => { setSlug(slugify(e.target.value)); setSlugManual(true); }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">URL: /programs/institute/{slug || "..."}</p>
          {errors.slug && <p className="text-xs text-red-400 mt-1">{errors.slug}</p>}
        </div>

        <div>
          <label className={label}>Subtitle</label>
          <input className={field} placeholder="A short compelling tagline" value={form.subtitle} onChange={(e) => set("subtitle", e.target.value)} />
        </div>

        <div>
          <label className={label}>Description *</label>
          <textarea
            rows={4}
            className={`${field} resize-none ${errors.description ? "border-red-300" : ""}`}
            placeholder="What will students learn? Who is this for?"
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
          />
          {errors.description && <p className="text-xs text-red-400 mt-1">{errors.description}</p>}
        </div>
      </motion.div>

      {/* Instructor */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6 space-y-4"
      >
        <SectionTitle icon={User} title="Instructor" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={label}>Name *</label>
            <input className={`${field} ${errors.instructor ? "border-red-300" : ""}`} placeholder="e.g. Lilian" value={form.instructor} onChange={(e) => set("instructor", e.target.value)} />
            {errors.instructor && <p className="text-xs text-red-400 mt-1">{errors.instructor}</p>}
          </div>
          <div>
            <label className={label}>Role</label>
            <input className={field} placeholder="e.g. Lead Teacher · M&W Institute" value={form.instructorRole} onChange={(e) => set("instructorRole", e.target.value)} />
          </div>
        </div>
      </motion.div>

      {/* Schedule & Details */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6 space-y-4"
      >
        <SectionTitle icon={Calendar} title="Schedule & Details" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={label}><Calendar size={11} className="inline mr-1" />Start Date</label>
            <input className={field} placeholder="e.g. Tuesday, 3rd March 2026" value={form.date} onChange={(e) => set("date", e.target.value)} />
          </div>
          <div>
            <label className={label}><Monitor size={11} className="inline mr-1" />Format</label>
            <select className={field} value={form.format} onChange={(e) => set("format", e.target.value)}>
              <option>Online Classes</option>
              <option>In-Person</option>
              <option>Hybrid</option>
              <option>Self-Paced</option>
            </select>
          </div>
          <div>
            <label className={label}><Users size={11} className="inline mr-1" />Seats Left</label>
            <input type="number" min="0" className={field} placeholder="e.g. 5" value={form.seatsLeft} onChange={(e) => set("seatsLeft", e.target.value)} />
          </div>
          <div>
            <label className={label}><Phone size={11} className="inline mr-1" />Contact</label>
            <input className={field} placeholder="e.g. +91 96242 89864" value={form.contact} onChange={(e) => set("contact", e.target.value)} />
          </div>
        </div>
      </motion.div>

      {/* Topics */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6"
      >
        <SectionTitle icon={Tag} title="Topics" />
        <div className="flex gap-2 mt-3">
          <input
            className={`${field} flex-1 ${errors.topics ? "border-red-300" : ""}`}
            placeholder="e.g. Faith"
            value={topicInput}
            onChange={(e) => setTopicInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTopic())}
          />
          <button onClick={addTopic} className="px-4 py-2 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition text-sm font-medium">
            Add
          </button>
        </div>
        {errors.topics && <p className="text-xs text-red-400 mt-1.5">{errors.topics}</p>}
        {topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {topics.map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                <Tag size={10} /> {t}
                <button onClick={() => removeTopic(t)} className="ml-0.5 hover:text-red-400 transition"><Trash2 size={10} /></button>
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Lessons */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <SectionTitle icon={Clock} title="Lessons" />
          <button onClick={addLesson} className="inline-flex items-center gap-1 text-xs text-primary hover:bg-primary/10 px-3 py-1.5 rounded-xl transition">
            <Plus size={13} /> Add Lesson
          </button>
        </div>
        {errors.lessons && <p className="text-xs text-red-400 mb-2">{errors.lessons}</p>}
        <div className="space-y-2">
          {lessons.map((lesson, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-xs text-gray-400 w-5 shrink-0 text-center">{i + 1}</span>
              <input
                className={`${field} flex-1 ${errors.lessons && !lesson.title ? "border-red-300" : ""}`}
                placeholder="Lesson title"
                value={lesson.title}
                onChange={(e) => setLesson(i, "title", e.target.value)}
              />
              <input
                className={`${field} w-28`}
                placeholder="20 min"
                value={lesson.duration}
                onChange={(e) => setLesson(i, "duration", e.target.value)}
              />
              {lessons.length > 1 && (
                <button onClick={() => removeLesson(i)} className="text-gray-300 hover:text-red-400 transition shrink-0">
                  <Trash2 size={15} />
                </button>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Save */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}
        className="flex items-center gap-3 pb-10"
      >
        <button
          onClick={handleSave}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl text-sm font-medium tracking-wide transition shadow-sm hover:shadow-md"
        >
          {saved ? "✓ Course Saved!" : "Publish Course"}
        </button>
        <button onClick={() => navigate("/admin/content")} className="text-sm text-gray-400 hover:text-gray-700 transition px-4 py-3">
          Cancel
        </button>
      </motion.div>
    </div>
  );
}

function SectionTitle({ icon: Icon, title }: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon size={13} className="text-primary" />
      </div>
      <p className="font-serif text-base font-semibold text-gray-800">{title}</p>
    </div>
  );
}
