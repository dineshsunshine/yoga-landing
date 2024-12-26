import { Building2 } from 'lucide-react';

export function Institute() {
  return (
    <div className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Building2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-6">Presented by Sohum Institute of Yoga Sciences</h2>
          <p className="text-lg text-gray-700 mb-8">
            Sohum Institute of Yoga Sciences is dedicated to preserving and sharing the authentic wisdom of yoga. 
            We combine traditional yogic practices with modern scientific understanding to provide comprehensive 
            yoga education that transforms lives.
          </p>
          <a 
            href="https://www.linkedin.com/company/sohum-institute-of-yoga-sciences/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-700 underline"
          >
            Learn more about our institute
          </a>
        </div>
      </div>
    </div>
  );
}