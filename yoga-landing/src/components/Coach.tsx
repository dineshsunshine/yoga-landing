import { Instagram, Linkedin } from 'lucide-react';

export function Coach() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Your Coach</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-64 h-64 rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80"
                alt="Supriya Sharma"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Supriya Sharma</h3>
              <p className="text-purple-600 mb-4">Founder at Sohum Institute of Yoga Sciences</p>
              <p className="text-gray-600 mb-6">
                A dedicated yoga practitioner and teacher, Supriya Sharma brings her extensive knowledge 
                and passion for yoga to every session. As the founder of Sohum Institute of Yoga Sciences, 
                she has made it her mission to spread the transformative power of yoga to practitioners 
                worldwide. Her unique approach combines traditional yogic wisdom with modern teaching 
                methodologies, making yoga accessible and meaningful for everyone.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/sohum-institute-of-yoga-sciences/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-purple-600 hover:text-purple-700">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://instagram.com" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-purple-600 hover:text-purple-700">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}