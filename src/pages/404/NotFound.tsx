import React from 'react';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <div className="max-w-xl text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 text-red-600 p-4 rounded-full">
            <AlertTriangle className="w-10 h-10" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 – Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you’re looking for might have been moved, removed, or doesn’t exist.
        </p>

        <a
          href="/pages/home"
          className="inline-flex items-center gap-2 text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Home
        </a>

        <p className="text-xs text-gray-400 mt-6">
          Mind and Wholeness © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
