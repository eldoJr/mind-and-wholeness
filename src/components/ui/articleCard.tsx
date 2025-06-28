import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { Article } from '../../data/articles';
import { Tag } from './Tag';
import { Button } from './Button';

interface ArticleCardProps {
  article: Article;
  onRead?: (id: number) => void;
}

export const ArticleCard = ({ article, onRead }: ArticleCardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    {article.image && (
      <img 
        src={article.image} 
        alt={article.title}
        className="w-full h-48 object-cover"
      />
    )}
    
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          article.category === 'spirituality' ? 'bg-purple-100 text-purple-700' :
          article.category === 'healing' ? 'bg-green-100 text-green-700' :
          article.category === 'mindfulness' ? 'bg-blue-100 text-blue-700' :
          article.category === 'relationships' ? 'bg-pink-100 text-pink-700' :
          'bg-orange-100 text-orange-700'
        }`}>
          {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
        </span>
        {article.featured && (
          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
            Featured
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h3>
      <p className="text-gray-600 mb-4">{article.excerpt}</p>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span>By {article.author}</span>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{new Date(article.publishDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{article.readTime}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {article.tags.slice(0, 3).map((tag, index) => (
          <Tag key={index} variant="emerald">{tag}</Tag>
        ))}
      </div>

      <Button 
        variant="outline"
        onClick={() => onRead?.(article.id)}
        className="flex items-center gap-2"
      >
        Read Article
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  </div>
);