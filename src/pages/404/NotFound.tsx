import React from 'react';
import { ArrowLeft, Compass } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white px-6 py-20">
      <div className="max-w-md text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-emerald-50 text-emerald-600 p-5 rounded-full">
            <Compass className="w-12 h-12" strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-3xl font-serif font-medium text-gray-800 mb-3">Path Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          The journey you're seeking may have shifted direction. 
          Let's guide you back to meaningful paths of transformation.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Return Home
          </a>
          <a
            href="/resources"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-emerald-300 text-gray-700 hover:text-emerald-700 rounded-lg transition-all duration-200"
          >
            Explore Resources
          </a>
        </div>

        <p className="text-sm text-gray-400 mt-12">
          Mind and Wholeness © {new Date().getFullYear()} — Journey Toward Wholeness
        </p>
      </div>
    </div>
  );
};

export default NotFound;