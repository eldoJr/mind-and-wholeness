import { useState, useRef, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Upload, BookOpen, User, Tag, Hash, Trash2, DollarSign } from "lucide-react";
import { useBookStore } from "../../context/BookStore";

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

export default function AddBook() {
  const { books, addBook } = useBookStore();
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    price: "",
    altPrice: "",
    category: "",
  });
  const [image, setImage] = useState("");
  const [available, setAvailable] = useState(true);
  const [featured, setFeatured] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  const set = (key: string, val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => { const n = { ...e }; delete n[key]; return n; });
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
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
    if (!form.author) e.author = "Author is required";
    if (!form.description) e.description = "Description is required";
    if (!form.price || isNaN(Number(form.price))) e.price = "Valid price is required";
    if (!image) e.image = "Cover image is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    const nextId = books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1;
    addBook({
      id: nextId,
      title: form.title,
      author: form.author,
      description: form.description,
      price: Number(form.price),
      altPrice: form.altPrice || undefined,
      category: form.category || "General",
      tags,
      image,
      available,
      featured,
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
        <p className="text-xs uppercase tracking-widest text-primary font-medium mb-1">Bookstore</p>
        <h2 className="font-serif text-3xl font-semibold text-gray-800">Add Book</h2>
        <p className="text-sm text-gray-400 mt-1">Fill in the details to publish a new book.</p>
      </motion.div>

      {/* Cover Image */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6"
      >
        <SectionTitle icon={Upload} title="Cover Image" />
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImage} />
        {image ? (
          <div className="relative rounded-2xl overflow-hidden mt-1 max-w-xs">
            <img src={image} alt="preview" className="w-full object-contain bg-gray-50" />
            <button onClick={() => setImage("")} className="absolute top-3 right-3 bg-white/80 backdrop-blur p-1.5 rounded-lg text-gray-500 hover:text-red-500 transition">
              <Trash2 size={14} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => fileRef.current?.click()}
            className={`mt-1 w-full border-2 border-dashed rounded-2xl py-10 flex flex-col items-center gap-2 text-gray-400 hover:border-primary/40 hover:text-primary transition ${errors.image ? "border-red-300" : "border-gray-200"}`}
          >
            <Upload size={22} />
            <span className="text-sm">Click to upload cover</span>
            <span className="text-xs">PNG, JPG up to 5MB</span>
          </button>
        )}
        {errors.image && <p className="text-xs text-red-400 mt-1.5">{errors.image}</p>}
      </motion.div>

      {/* Book Info */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6 space-y-4"
      >
        <SectionTitle icon={BookOpen} title="Book Info" />

        <div>
          <label className={label}>Title *</label>
          <input className={`${field} ${errors.title ? "border-red-300" : ""}`} placeholder="e.g. Understanding Faith" value={form.title} onChange={(e) => set("title", e.target.value)} />
          {errors.title && <p className="text-xs text-red-400 mt-1">{errors.title}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={label}><User size={11} className="inline mr-1" />Author *</label>
            <input className={`${field} ${errors.author ? "border-red-300" : ""}`} placeholder="e.g. Lilian Mussa Titus" value={form.author} onChange={(e) => set("author", e.target.value)} />
            {errors.author && <p className="text-xs text-red-400 mt-1">{errors.author}</p>}
          </div>
          <div>
            <label className={label}><Hash size={11} className="inline mr-1" />Category</label>
            <input className={field} placeholder="e.g. Faith & Scripture" value={form.category} onChange={(e) => set("category", e.target.value)} />
          </div>
        </div>

        <div>
          <label className={label}>Description *</label>
          <textarea rows={4} className={`${field} resize-none ${errors.description ? "border-red-300" : ""}`} placeholder="What is this book about?" value={form.description} onChange={(e) => set("description", e.target.value)} />
          {errors.description && <p className="text-xs text-red-400 mt-1">{errors.description}</p>}
        </div>
      </motion.div>

      {/* Pricing */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6 space-y-4"
      >
        <SectionTitle icon={DollarSign} title="Pricing" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={label}>Price (USD) *</label>
            <input type="number" min="0" step="0.01" className={`${field} ${errors.price ? "border-red-300" : ""}`} placeholder="e.g. 10" value={form.price} onChange={(e) => set("price", e.target.value)} />
            {errors.price && <p className="text-xs text-red-400 mt-1">{errors.price}</p>}
          </div>
          <div>
            <label className={label}>Alt Price</label>
            <input className={field} placeholder="e.g. ₹600" value={form.altPrice} onChange={(e) => set("altPrice", e.target.value)} />
          </div>
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
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
          <button onClick={addTag} className="px-4 py-2 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition text-sm font-medium">Add</button>
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

      {/* Availability */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6 space-y-3"
      >
        <SectionTitle icon={BookOpen} title="Visibility" />
        <label className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 cursor-pointer">
          <div>
            <p className="text-sm font-medium text-gray-700">Available for purchase</p>
            <p className="text-xs text-gray-400">Show as available in the bookstore</p>
          </div>
          <button
            onClick={() => setAvailable((v) => !v)}
            className={`relative w-10 h-5 rounded-full transition-colors ${available ? "bg-primary" : "bg-gray-200"}`}
          >
            <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${available ? "translate-x-5" : ""}`} />
          </button>
        </label>
        <label className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 cursor-pointer">
          <div>
            <p className="text-sm font-medium text-gray-700">Featured book</p>
            <p className="text-xs text-gray-400">Display in the featured section</p>
          </div>
          <button
            onClick={() => setFeatured((v) => !v)}
            className={`relative w-10 h-5 rounded-full transition-colors ${featured ? "bg-primary" : "bg-gray-200"}`}
          >
            <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${featured ? "translate-x-5" : ""}`} />
          </button>
        </label>
      </motion.div>

      {/* Save */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}
        className="flex items-center gap-3 pb-10"
      >
        <button
          onClick={handleSave}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl text-sm font-medium tracking-wide transition shadow-sm hover:shadow-md"
        >
          {saved ? "✓ Book Saved!" : "Publish Book"}
        </button>
        <button onClick={() => navigate("/admin/content")} className="text-sm text-gray-400 hover:text-gray-700 transition px-4 py-3">
          Cancel
        </button>
      </motion.div>
    </div>
  );
}
