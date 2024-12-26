import { ArrowRight } from 'lucide-react';

export function StickyEnrollButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
      <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition flex items-center justify-center gap-2">
        Enroll Now <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}