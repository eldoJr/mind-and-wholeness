import { useState, useRef, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Upload, Mic2, User, Clock, Tag, Hash, Trash2, Link as LinkIcon } from "lucide-react";
import { usePodcastStore } from "../../context/PodcastStore";

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

export default function AddPodcast() {
  const { podcasts, addPodcast } = usePodcastStore();
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    host: "",
    duration: "",
    publishDate: "",
    season: "1",
    episode: "",
    audioUrl: "",
    spotifyEmbed: "",
  });
  const [image, setImage] = useState("");
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
    if (!form.host) e.host = "Host is required";
    if (!form.duration) e.duration = "Duration is required";
    if (!form.publishDate) e.publishDate = "Publish date is required";
    if (!form.episode) e.episode = "Episode number is required";
    if (!image) e.image = "Cover image is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    const nextId = podcasts.length > 0 ? Math.max(...podcasts.map((p) => p.id)) + 1 : 1;
    addPodcast({
      id: nextId,
      title: form.title,
      description: form.description,
      host: form.host,
      duration: form.duration,
      publishDate: form.publishDate,
      season: Number(form.season) || 1,
      episode: Number(form.episode) || 1,
      tags,
      audioUrl: form.audioUrl || undefined,
      image,
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
        <p className="text-xs uppercase tracking-widest text-primary font-medium mb-1">Podcasts</p>
        <h2 className="font-serif text-3xl font-semibold text-gray-800">Add Episode</h2>
        <p className="text-sm text-gray-400 mt-1">Fill in the details to publish a new podcast episode.</p>
      </motion.div>

      {/* Cover Image */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6"
      >
        <SectionTitle icon={Upload} title="Cover Image" />
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImage} />
        {image ? (
          <div className="relative rounded-2xl overflow-hidden mt-1">
            <img src={image} alt="preview" className="w-full max-h-56 object-cover" />
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
            <span className="text-sm">Click to upload cover image</span>
            <span className="text-xs">PNG, JPG up to 5MB</span>
          </button>
        )}
        {errors.image && <p className="text-xs text-red-400 mt-1.5">{errors.image}</p>}
      </motion.div>

      {/* Episode Info */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6 space-y-4"
      >
        <SectionTitle icon={Mic2} title="Episode Info" />

        <div>
          <label className={label}>Title *</label>
          <input className={`${field} ${errors.title ? "border-red-300" : ""}`} placeholder="e.g. Faith That Moves Mountains" value={form.title} onChange={(e) => set("title", e.target.value)} />
          {errors.title && <p className="text-xs text-red-400 mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className={label}>Description</label>
          <textarea rows={3} className={`${field} resize-none`} placeholder="What is this episode about?" value={form.description} onChange={(e) => set("description", e.target.value)} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className={label}><Hash size={11} className="inline mr-1" />Season</label>
            <input type="number" min="1" className={field} value={form.season} onChange={(e) => set("season", e.target.value)} />
          </div>
          <div>
            <label className={label}><Hash size={11} className="inline mr-1" />Episode *</label>
            <input type="number" min="1" className={`${field} ${errors.episode ? "border-red-300" : ""}`} placeholder="e.g. 1" value={form.episode} onChange={(e) => set("episode", e.target.value)} />
            {errors.episode && <p className="text-xs text-red-400 mt-1">{errors.episode}</p>}
          </div>
          <div>
            <label className={label}><Clock size={11} className="inline mr-1" />Duration *</label>
            <input className={`${field} ${errors.duration ? "border-red-300" : ""}`} placeholder="e.g. 42 min" value={form.duration} onChange={(e) => set("duration", e.target.value)} />
            {errors.duration && <p className="text-xs text-red-400 mt-1">{errors.duration}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={label}><User size={11} className="inline mr-1" />Host *</label>
            <input className={`${field} ${errors.host ? "border-red-300" : ""}`} placeholder="e.g. Lilian Titus" value={form.host} onChange={(e) => set("host", e.target.value)} />
            {errors.host && <p className="text-xs text-red-400 mt-1">{errors.host}</p>}
          </div>
          <div>
            <label className={label}>Publish Date *</label>
            <input type="date" className={`${field} ${errors.publishDate ? "border-red-300" : ""}`} value={form.publishDate} onChange={(e) => set("publishDate", e.target.value)} />
            {errors.publishDate && <p className="text-xs text-red-400 mt-1">{errors.publishDate}</p>}
          </div>
        </div>
      </motion.div>

      {/* Links */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-sm p-6 space-y-4"
      >
        <SectionTitle icon={LinkIcon} title="Links" />
        <div>
          <label className={label}>Audio URL</label>
          <input className={field} placeholder="https://..." value={form.audioUrl} onChange={(e) => set("audioUrl", e.target.value)} />
        </div>
        <div>
          <label className={label}>Spotify Embed URL</label>
          <input className={field} placeholder="https://open.spotify.com/embed/episode/..." value={form.spotifyEmbed} onChange={(e) => set("spotifyEmbed", e.target.value)} />
          <p className="text-xs text-gray-400 mt-1">Paste the Spotify embed src URL for the episode player.</p>
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

      {/* Save */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }}
        className="flex items-center gap-3 pb-10"
      >
        <button
          onClick={handleSave}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl text-sm font-medium tracking-wide transition shadow-sm hover:shadow-md"
        >
          {saved ? "✓ Episode Saved!" : "Publish Episode"}
        </button>
        <button onClick={() => navigate("/admin/content")} className="text-sm text-gray-400 hover:text-gray-700 transition px-4 py-3">
          Cancel
        </button>
      </motion.div>
    </div>
  );
}
