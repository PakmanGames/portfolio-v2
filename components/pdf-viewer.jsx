'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Loader2, Download } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

function PDFViewer({ pdfUrl, title }) {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setShowFallback(isMobile);
  }, [isMobile]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-2 sm:mb-0">{title}</h2>
        <Button
          onClick={() => window.open(pdfUrl, '_blank')}
          className="flex items-center space-x-2">
          <Download size={20} />
          <span>Download PDF</span>
        </Button>
      </div>
      {showFallback ? (
        <div className="w-full text-center">
          <p className="mb-4">PDF preview is not available on this device.</p>
          <Button 
            onClick={() => window.open(pdfUrl, '_blank')}
            className="flex items-center space-x-2 mx-auto">
            <Download size={20} />
            <span>Open PDF</span>
          </Button>
        </div>
      ) : (
        <div className="relative w-full" style={{ paddingTop: '141.4%' }}>
        {isLoading && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
          </div>
        )}
        <iframe
          src={`${pdfUrl}#view=FitH`}
          title={title}
          className={`absolute top-0 left-0 w-full h-full border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg ${
            isLoading ? 'hidden' : 'block'
          }`}
          onLoad={() => setIsLoading(false)} />
      </div>
      )}
    </div>
  );
}

export default PDFViewer;