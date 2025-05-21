import React, { useEffect, useRef } from 'react';
import { Terminal, Shield, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  to: string;
  icon: React.ReactNode;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, to, icon }) => (
  <Link to={to} className="block group h-full">
    <div className="h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] cursor-pointer flex flex-col">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-mono font-semibold mb-3 text-slate-900 dark:text-white group-hover:underline">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-mono rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

const HomeSection: React.FC = () => {
  const nameRef = useRef<HTMLSpanElement>(null);
  const projectRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const nameText = "NxT1me";
    const projectText = "Here are some of my projects";

    let nameIndex = 0;
    const typeName = () => {
      const el = nameRef.current;
      if (!el) return;

      if (nameIndex <= nameText.length) {
        el.textContent = nameText.substring(0, nameIndex) + "|";
        nameIndex++;
        setTimeout(typeName, 100);
      } else {
        el.textContent = nameText;
        setTimeout(typeProject, 500);
      }
    };

    let projectIndex = 0;
    const typeProject = () => {
      const el = projectRef.current;
      if (!el) return;

      if (projectIndex <= projectText.length) {
        el.textContent = projectText.substring(0, projectIndex) + "|";
        projectIndex++;
        setTimeout(typeProject, 50);
      } else {
        el.textContent = projectText;
      }
    };

    typeName();
  }, []);

  return (
    <section id="home" className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col max-w-3xl mx-auto mb-24">
          <div className="mb-8 inline-flex items-center">
            <Terminal className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
            <span className="text-sm font-mono text-green-600 dark:text-green-400">
              ~/home
            </span>
          </div>

          <div className="space-y-6 text-center">
            <h1 className="text-4xl md:text-5xl font-mono font-bold text-slate-900 dark:text-white">
              <span className="block mb-4">Hi, I'm</span>
              <span
                ref={nameRef}
                className="text-green-600 dark:text-green-400 inline-block min-w-[1ch]"
              ></span>
            </h1>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-mono font-semibold text-slate-900 dark:text-white min-h-[2.5rem]">
            <span ref={projectRef}></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          <ProjectCard
            title="Next.js CVE-2025-29927"
            description="Proof of concept for CVE-2025-29927 vulnerability in Next.js."
            tech={['Next.js', 'JavaScript', 'TypeScript', 'Middleware bypass']}
            to="projects/CVE-2025-29927"
            icon={<Shield className="h-6 w-6" />}
          />
          <ProjectCard
            title="Anonymous Reporting Portal"
            description="Secure web platform developed to facilitate anonymous complaint submissions related to legal, ethical, and consumer issues."
            tech={['Next.js', 'TypeScript', 'Supabase', 'Express.js ','Docker']}
            to="projects/Anonymous-Reporting-Portal"
            icon={<Code className="h-6 w-6" />}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
