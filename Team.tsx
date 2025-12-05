import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { FadeIn } from './UI';

interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const leadershipData: Leader[] = [
  {
    name: "Vipul Rastogi", // Replace with your name
    role: "Managing Director & Promoter",
    bio: "Ex-Investment Banker with over 15 years of experience in structured credit, special situations, and distressed asset resolution across Indian markets.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop", // Placeholder
    linkedin: "#",
    email: "vipul@ascentpinnacle.com"
  },
  {
    name: "Partner Name",
    role: "Executive Director",
    bio: "Specializes in debt syndication and institutional relationships with a focus on the mid-market industrial sector.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    linkedin: "#"
  },
  {
    name: "Partner Name",
    role: "Head of Credit",
    bio: "Expert in financial modeling, risk assessment, and credit enhancement structures for complex transactions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    linkedin: "#"
  }
];

const Team: React.FC = () => {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Leadership
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Decades of combined experience in navigating complex financial landscapes.
          </p>
        </div>

        {/* Team Grid */}
        <ul role="list" className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {leadershipData.map((person, index) => (
            <FadeIn key={person.name} delay={index * 100}>
              <li className="group">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-sm aspect-[4/5] w-full mb-6">
                  <img 
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105" 
                    src={person.image} 
                    alt={person.name} 
                  />
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-4">
                      {person.linkedin && (
                        <a href={person.linkedin} className="text-white hover:text-brand-accent transition-colors">
                          <Linkedin size={20} />
                        </a>
                      )}
                      {person.email && (
                        <a href={`mailto:${person.email}`} className="text-white hover:text-brand-accent transition-colors">
                          <Mail size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Text Info */}
                <h3 className="text-lg font-serif font-semibold leading-8 tracking-tight text-slate-900 group-hover:text-brand-accent transition-colors">
                  {person.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
                  {person.role}
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  {person.bio}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
