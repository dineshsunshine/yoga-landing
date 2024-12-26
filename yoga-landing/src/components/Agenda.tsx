import { Calendar, Clock } from 'lucide-react';

export function Agenda() {
  const agenda = [
    {
      day: 'Day 1 - March 20, 2024',
      time: '9:00 AM - 12:00 PM EST',
      topics: [
        'Introduction to Yoga Philosophy',
        'Foundation Poses and Alignment',
        'Breathing Techniques (Pranayama)',
        'Basic Sun Salutations',
        'Meditation Basics'
      ]
    },
    {
      day: 'Day 2 - March 21, 2024',
      time: '9:00 AM - 12:00 PM EST',
      topics: [
        'Advanced Asana Practice',
        'Flow Sequences',
        'Balance and Flexibility',
        'Core Strengthening',
        'Mind-Body Connection'
      ]
    },
    {
      day: 'Day 3 - March 22, 2024',
      time: '9:00 AM - 12:00 PM EST',
      topics: [
        'Power Yoga Sequences',
        'Inversions and Arm Balances',
        'Restorative Yoga',
        'Meditation Techniques',
        'Integration and Practice'
      ]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">3-Day Workshop Agenda</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {agenda.map((day, index) => (
            <div key={index} className="bg-purple-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">{day.day}</h3>
              <div className="flex items-center gap-2 mb-4 text-purple-600">
                <Clock className="w-5 h-5" />
                <span>{day.time}</span>
              </div>
              <div className="flex items-center gap-2 mb-4 text-purple-600">
                <Calendar className="w-5 h-5" />
                <span>Via Zoom</span>
              </div>
              <ul className="space-y-2">
                {day.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}