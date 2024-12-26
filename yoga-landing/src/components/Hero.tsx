import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80"
          alt="Yoga Background"
          className="w-full h-[600px] object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-purple-900 mb-6">
            Transform Your Life with Online Yoga Mastery
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Join our comprehensive 3-day intensive workshop and master the art of yoga from the comfort of your home
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition flex items-center gap-2">
              Enroll Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}