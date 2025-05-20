import React from 'react';
import { Code, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const SocialLink: React.FC<NavLinkProps & { ariaLabel: string }> = ({ href, children, ariaLabel }) => {
  const isMailto = href.startsWith('mailto:');

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(!isMailto && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className="text-slate-700 dark:text-slate-200 p-2 rounded-full hover:text-green-600 dark:hover:text-green-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
    >
      {children}
    </a>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-10 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
        <Link to="/" className="flex items-center">
            <Code className="h-6 w-6 text-green-600 dark:text-green-400 mr-2" />
            <span className="text-lg font-mono font-semibold text-slate-900 dark:text-white">
              <span className="text-green-600 dark:text-green-400">{'>'}</span> Home
            </span>
        </Link>

        </div>
        
        <div className="hidden md:flex items-center space-x-2">
          <Link 
            to="/about" 
            className="text-slate-700 dark:text-slate-200 px-3 py-2 text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
          >
            About
          </Link>
          <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-2"></div>
          <SocialLink href="https://github.com/goncalocsousa1" ariaLabel="GitHub profile">
            <Github className="h-5 w-5" />
          </SocialLink>
          <SocialLink href="https://x.com/NxT1me1337" ariaLabel="Twitter profile">
            <Twitter className="h-5 w-5" />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/gon%C3%A7alo-sousa-95a466174/" ariaLabel="LinkedIn profile">
            <Linkedin className="h-5 w-5" />
          </SocialLink>
          <SocialLink href="mailto:goncalocsousa618@gmail.com" ariaLabel="Email contact">
            <Mail className="h-5 w-5" />
          </SocialLink>
          <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-2"></div>
          <ThemeToggle />
        </div>
        
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button className="text-slate-700 dark:text-slate-200 p-2">
            <span className="sr-only">Open menu</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;