import pdfFile from '../assets/M&W Newsletter (Artice 01).pdf';

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <iframe
          src={pdfFile}
          className="w-full h-[calc(100vh-200px)] border-0 rounded-lg shadow-lg"
          title="M&W Newsletter"
          type="application/pdf"
        />
      </div>
    </div>
  );
}
