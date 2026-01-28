import React from 'react';
import { Download, Mic, Heart } from 'lucide-react';

const PodcastFacts: React.FC = () => {
  const facts = [
    { icon: Download, number: '1+ Million', label: 'DOWNLOADS' },
    { icon: Mic, number: '80+', label: 'EPISODES' },
    { icon: Heart, number: 'Number 1', label: 'FEMALE PODCAST IN SOUTH AFRICA' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center pt-20">
      <div className="bg-[#651d31] p-12 flex items-center justify-center min-h-[250px]">
        <h2 className="text-4xl font-serif text-white/80 text-center leading-tight">
          PODCAST<br />FACTS
        </h2>
      </div>
      {facts.map((fact, index) => (
        <div key={index} className="text-center p-8">
          <fact.icon className="w-16 h-16 mx-auto mb-6 text-[#651d31]" strokeWidth={1.5} />
          <h3 className="text-3xl font-serif text-gray-900 mb-2">{fact.number}</h3>
          <p className="text-sm tracking-wider text-gray-700">{fact.label}</p>
        </div>
      ))}
    </div>
  );
};

export default PodcastFacts;
