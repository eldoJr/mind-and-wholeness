import { Circle } from 'lucide-react';
import EmailSignup from '../../../../layout/emailSignup';
import { getMeditationsByTopic } from '../../../../../data/meditations';
import { Breadcrumb, PageHeader, MeditationCard, Container } from '../../../../ui';

const HealingMeditations = () => {
  const meditations = getMeditationsByTopic('healing');

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Meditations', href: '/programs/meditations' },
    { label: 'Daily Meditations' }
  ];

  const handlePlayMeditation = (id: number) => {
    console.log('Playing meditation:', id);
    // TODO: Implement meditation player
  };

  return (
    <section className="min-h-screen bg-white pb-16">
      <Container className="py-8">
        <Breadcrumb items={breadcrumbItems} />
      </Container>
      
      <Container>
        <PageHeader 
          icon={<Circle className="w-8 h-8" />}
          title="Healing Meditations"
          description="Discover profound healing through transformative meditation practices that restore your mind, body, and spirit to their natural state of wholeness and vitality."
        />

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Daily Meditations</h2>
          <h4 className="text-lg font-bold text-gray-800 mb-8">Tag: Healing Meditations</h4>
          
          <div className="space-y-8">
            {meditations.map((meditation) => (
              <MeditationCard 
                key={meditation.id}
                meditation={meditation}
                onPlay={handlePlayMeditation}
              />
            ))}
          </div>
        </div>

        <EmailSignup />
      </Container>
    </section>
  );
};

export default HealingMeditations;