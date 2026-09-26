import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { Article } from '../../data/articles';

interface ArticleCardProps {
  article: Article;
  onRead?: (id: number) => void;
}

const categoryColors: Record<string, string> = {
  'Faith & Spirituality': 'bg-purple-50 text-purple-700',
  'Mental Health': 'bg-blue-50 text-blue-700',
  'Personal Growth': 'bg-emerald-50 text-emerald-700',
  'Relationships': 'bg-pink-50 text-pink-700',
  'Leadership': 'bg-amber-50 text-amber-700',
  'Wholeness': 'bg-teal-50 text-teal-700',
  'Community': 'bg-orange-50 text-orange-700',
};

export const ArticleCard = ({ article, onRead }: ArticleCardProps) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.1)] transition-shadow duration-300">
    {article.coverImage && (
      <img src={article.coverImage} alt={article.title} className="w-full h-48 object-cover" />
    )}
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category] ?? 'bg-gray-100 text-gray-600'}`}>
          {article.category}
        </span>
        {article.featured && (
          <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full font-medium">Featured</span>
        )}
      </div>
      <h3 className="font-serif text-xl text-gray-900 mb-2 leading-snug">{article.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">{article.excerpt}</p>
      <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
        <span>By {article.author}</span>
        <div className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          <span>{new Date(article.publishDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          <span>{article.readTime}</span>
        </div>
      </div>
      <button
        onClick={() => onRead?.(article.id)}
        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 transition-colors"
      >
        Read Article <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);
