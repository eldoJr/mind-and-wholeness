import ceoImg from '/src/assets/images/ceo.png';
import cooImg from '/src/assets/images/viviana.jpeg';
import ctoImg from '/src/assets/images/michael.jpeg';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";


const TeamSection = () => {
  const teamMembers = [
    {
      name: "Lilian Titus",
      role: "Founder & Visionary Leader",
      subtitle: "Founder & Visionary Leader",
      image: ceoImg,
      description: "Lilian founded Mind and Wholeness out of a deep calling to restore balance and purpose in the lives of young people. With a background in counseling and spiritual mentorship, she leads the organization with passion and clarity. As an accomplished author, motivational speaker, and advocate for social transformation, her vision is to see communities transformed through renewed minds and restored hearts."
    },
    {
      name: "Viviana Claudia",
      role: "Chief Operating Officer (COO)",
      subtitle: "Chief Operating Officer",
      image: cooImg,
      description: "Being mentored by Lilian Titus herself, she is a brilliant and goal-oriented individual who organizes and coordinates events with excellence and precision. She is passionate about complete healing and empowering ladies to live purposeful lives."
    },
    {
      name: "Michael Mugwenhi",
      role: "Chief Technology Officer (CTO)",
      subtitle: "Chief Technology Officer",
      image: ctoImg,
      description: "Being mentored by Lilian Titus herself, Michael is a brilliant and goal-oriented individual who creates and manages technological innovation with excellence and precision. He is passionate about complete healing and empowering youth through purpose-driven solutions."
    }
  ];

  return (
    <section className="bg-white px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8 ">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 underline">Our Team</span>
        </nav>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-6">
            Our Leadership Team
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-4xl">
            Building on a vision of transformation, our team inspires individuals to embrace wholeness and live purposefully.
          </p>
          
          <p className="text-base text-gray-700 max-w-5xl leading-relaxed">
            At Mind and Wholeness, our leadership team embodies a journey of transformation that addresses the essence of human life by exploring the profound connection between the soul, spirit, and body. They guide us in fostering a global paradigm shift by inspiring individuals to embrace their true identity, live purposefully, and cultivate flourishing communities through renewed minds and restored hearts.
          </p>
        </div>

        {/* Subtitle */}
        <div className="mb-12">
          <h3 className="text-3xl font-serif text-gray-900">
            Meet Our Team
          </h3>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              {/* Profile Image */} 
              <div className="mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-square object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
{/* Member Info */}
              <div className="flex flex-col text-left">
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-600 italic mb-3 font-medium">
                  {member.subtitle}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {member.description}
                </p>
                {/* Social Links */}
                <div className="mt-4 flex justify-start space-x-4">
                  <a 
                    href="https://www.facebook.com/mindandwholeness" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600 transition-colors duration-300"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://www.instagram.com/mindandwholeness" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600 transition-colors duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/mindandwholeness" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600 transition-colors duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default TeamSection;