import { Gift, Video, Users, BookOpen } from 'lucide-react';

export function Bonuses() {
  const bonuses = [
    {
      icon: Users,
      title: '2 Hours of Q&A Group Call',
      description: 'Get your questions answered in an exclusive group session with our expert instructor'
    },
    {
      icon: BookOpen,
      title: 'Access to Offline Material',
      description: 'Comprehensive yoga guides, pose references, and practice schedules'
    },
    {
      icon: Video,
      title: '3 Days Session Recordings',
      description: 'Lifetime access to all workshop recordings for future reference'
    }
  ];

  return (
    <div className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Gift className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Exclusive Bonuses</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md">
              <bonus.icon className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{bonus.title}</h3>
              <p className="text-gray-600">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}