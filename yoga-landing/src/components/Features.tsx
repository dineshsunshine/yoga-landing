import { Globe2, PlayCircle, Calendar } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Globe2,
      title: 'Live Online Classes',
      description: 'Join interactive sessions with expert instructors from anywhere in the world'
    },
    {
      icon: PlayCircle,
      title: 'Recorded Sessions',
      description: 'Access all sessions recordings for lifetime reference and practice'
    },
    {
      icon: Calendar,
      title: 'Flexible Schedule',
      description: 'Choose from multiple time slots that fit your schedule'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <feature.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}