import { useState, useRef, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Upload, FileText, User, Tag, Trash2, Clock, ToggleLeft, ToggleRight } from "lucide-react";
import { useArticleStore } from "../../context/ArticleStore";
import type { ArticleCategory } from "../../../data/articles";

const CATEGORIES: ArticleCategory[] = [
  "Faith & Spirituality",
  "Mental Health",
  "Personal Growth",
  "Relationships",
  "Leadership",
  "Wholeness",
  "Community",
];

const field = "w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition";
const label = "text-xs font-medium text-gray-500 mb-1.5 block";

function SectionTitle({ icon: Icon, title }: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon size={13} className="text-primary" />
      </div>
      <p className="font-serif text-base font-semibold text-gray-800">{title}</p>
    </div>
  );
}

export default function AddArticle() {
  const { articles, addArticle } = useArticleStore();
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "Lilian Mussa Titus",
    category: "Personal Growth" as ArticleCategory,
    publishDate: "",
    readTime: "",
  });
  const [coverImage, setCoverImage] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [featured, setFeatured] = useState(false);
  const [published, setPublished] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  const set = (key: string, val: string) => {
    setForm((f) => {
      const next = { ...f, [key]: val };
      // auto-generate slug from title
      if (key === "title") {
        next.slug = val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      }
      return next;
    });
    if (errors[key]) setErrors((e) => { const n = { ...e }; delete n[key]; return n; });
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setCoverImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const addTag = () => {
    const t = tagInput.trim();
    if (t && !tags.includes(t)) setTags((p) => [...p, t]);
    setTagInput("");
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.title) e.title = "Title is required";
    if (!form.excerpt) e.excerpt = "Excerpt is required";
    if (!form.author) e.author = "Author is required";
    if (!form.publishDate) e.publishDate = "Publish date is required";
    if (!form.readTime) e.readTime = "Read time is required";
    if (!coverImage) e.coverImage = "Cover image is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    const nextId = articles.length > 0 ? Math.max(...articles.map((a) => a.id)) + 1 : 1;
    addArticle({
      id: nextId,
      title: form.title,
      slug: form.slug || form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      excerpt: form.excerpt,
      content: form.content,
      author: form.author,
      category: form.category,
      tags,
      coverImage,
      publishDate: form.publishDate,
      readTime: form.readTime,
      featured,
      published,
    });
    setSaved(true);
    setTimeout(() => navigate("/admin/content"), 1200);
  };

  return (
    <div className="max-w-3xl space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <button onClick={() => navigate("/admin/content")} className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition mb-4">
          <ChevronLeft size={15} /> Back to Content
        </button>
        <p className="text-xs uppercase tracking-widest text-primary font-medium mb-1">Articles</p>
        <h2 className="font-serif text-3xl font-semibold text-gray-800">Add Article</h2>
        <p className="text-sm text-gray-400 mt-1">Fill in the details to publish a new article.</p>
      </motion.div>

      {/* Cover Image */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6"
      >
        <SectionTitle icon={Upload} title="Cover Image" />
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImage} />
        {coverImage ? (
          <div className="relative rounded-2xl overflow-hidden mt-1">
            <img src={coverImage} alt="preview" className="w-full max-h-56 object-cover" />
            <button onClick={() => setCoverImage("")} className="absolute top-3 right-3 bg-white/80 backdrop-blur p-1.5 rounded-lg text-gray-500 hover:text-red-500 transition">
              <Trash2 size={14} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => fileRef.current?.click()}
            className={`mt-1 w-full border-2 border-dashed rounded-2xl py-10 flex flex-col items-center gap-2 text-gray-400 hover:border-primary/40 hover:text-primary transition ${errors.coverImage ? "border-red-300" : "border-gray-200"}`}
          >
            <Upload size={22} />
            <span className="text-sm">Click to upload cover image</span>
            <span className="text-xs">PNG, JPG up to 5MB</span>
          </button>
        )}
        {errors.coverImage && <p className="text-xs text-red-400 mt-1.5">{errors.coverImage}</p>}
      </motion.div>

      {/* Article Info */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6 space-y-4"
      >
        <SectionTitle icon={FileText} title="Article Info" />

        <div>
          <label className={label}>Title *</label>
          <input className={`${field} ${errors.title ? "border-red-300" : ""}`} placeholder="e.g. The Power of a Renewed Mind" value={form.title} onChange={(e) => set("title", e.target.value)} />
          {errors.title && <p className="text-xs text-red-400 mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className={label}>Slug</label>
          <input className={field} placeholder="auto-generated from title" value={form.slug} onChange={(e) => set("slug", e.target.value)} />
          <p className="text-xs text-gray-400 mt-1">URL-friendly identifier. Auto-filled from title.</p>
        </div>

        <div>
          <label className={label}>Excerpt *</label>
          <textarea rows={2} className={`${field} resize-none ${errors.excerpt ? "border-red-300" : ""}`} placeholder="A short summary shown in article listings..." value={form.excerpt} onChange={(e) => set("excerpt", e.target.value)} />
          {errors.excerpt && <p className="text-xs text-red-400 mt-1">{errors.excerpt}</p>}
        </div>

        <div>
          <label className={label}>Content</label>
          <textarea rows={8} className={`${field} resize-y`} placeholder="Write the full article content here..." value={form.content} onChange={(e) => set("content", e.target.value)} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={label}><User size={11} className="inline mr-1" />Author *</label>
            <input className={`${field} ${errors.author ? "border-red-300" : ""}`} placeholder="e.g. Lilian Mussa Titus" value={form.author} onChange={(e) => set("author", e.target.value)} />
            {errors.author && <p className="text-xs text-red-400 mt-1">{errors.author}</p>}
          </div>
          <div>
            <label className={label}>Category</label>
            <select className={field} value={form.category} onChange={(e) => set("category", e.target.value)}>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={label}>Publish Date *</label>
            <input type="date" className={`${field} ${errors.publishDate ? "border-red-300" : ""}`} value={form.publishDate} onChange={(e) => set("publishDate", e.target.value)} />
            {errors.publishDate && <p className="text-xs text-red-400 mt-1">{errors.publishDate}</p>}
          </div>
          <div>
            <label className={label}><Clock size={11} className="inline mr-1" />Read Time *</label>
            <input className={`${field} ${errors.readTime ? "border-red-300" : ""}`} placeholder="e.g. 5 min read" value={form.readTime} onChange={(e) => set("readTime", e.target.value)} />
            {errors.readTime && <p className="text-xs text-red-400 mt-1">{errors.readTime}</p>}
          </div>
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6"
      >
        <SectionTitle icon={Tag} title="Tags" />
        <div className="flex gap-2">
          <input
            className={`${field} flex-1`}
            placeholder="e.g. faith"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
          />
          <button onClick={addTag} className="px-4 py-2 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition text-sm font-medium">
            Add
          </button>
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                <Tag size={10} /> {t}
                <button onClick={() => setTags((p) => p.filter((x) => x !== t))} className="ml-0.5 hover:text-red-400 transition"><Trash2 size={10} /></button>
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Toggles */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6 space-y-4"
      >
        <SectionTitle icon={ToggleRight} title="Visibility" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-700">Published</p>
            <p className="text-xs text-gray-400">Make this article visible on the site</p>
          </div>
          <button onClick={() => setPublished((p) => !p)} className="text-primary">
            {published ? <ToggleRight size={28} /> : <ToggleLeft size={28} className="text-gray-300" />}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-700">Featured</p>
            <p className="text-xs text-gray-400">Highlight this article at the top</p>
          </div>
          <button onClick={() => setFeatured((p) => !p)} className="text-primary">
            {featured ? <ToggleRight size={28} /> : <ToggleLeft size={28} className="text-gray-300" />}
          </button>
        </div>
      </motion.div>

      {/* Save */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }}
        className="flex items-center gap-3 pb-10"
      >
        <button
          onClick={handleSave}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl text-sm font-medium tracking-wide transition shadow-sm hover:shadow-md"
        >
          {saved ? "✓ Article Saved!" : "Publish Article"}
        </button>
        <button onClick={() => navigate("/admin/content")} className="text-sm text-gray-400 hover:text-gray-700 transition px-4 py-3">
          Cancel
        </button>
      </motion.div>
    </div>
  );
}
