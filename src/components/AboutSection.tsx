import React from 'react';
import { Terminal } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col max-w-3xl mx-auto mb-24">
          <div className="mb-8 inline-flex items-center">
            <Terminal className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
            <span className="text-sm font-mono text-green-600 dark:text-green-400">
              ~/about
            </span>
          </div>

          <div className="space-y-6 text-center">
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-slate-900 dark:text-white">
              About Me
            </h2>
          <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
          Hi, I’m Gonçalo Sousa, but online you might know me as NxT1me. I have a degree in Computer Engineering from the School of Technology and Management (ESTG), Polytechnic Institute of Viana do Castelo.     </p>
          </div>
        </div>

        <div className="mt-16 bg-slate-100 dark:bg-slate-800/50 p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-mono font-semibold text-slate-900 dark:text-white mb-4">
          Professional Background
          </h3>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
           <p>
            My journey in cybersecurity began with a strong curiosity about how systems function and how to protect them effectively. As detailed on my LinkedIn, I previously worked in a Network & Security Operations Center (NSOC), where I gained valuable hands-on experience monitoring and responding to security incidents.  During this experience, I decided to further my education and enrolled in a degree program in Computer Engineering.
          </p>
          <p>
            I have also conducted research and analysis of HTTP security headers at several European universities. During this work, I developed scripts and supported the testing of tools for a proof-of-concept security scanner, gaining valuable practical experience in cybersecurity research. 
            I am currently conducting research with a scholarship funded by the FCT (Foundation for Science and Technology), focused on identifying known vulnerabilities in the FIWARE platform and developing effective mitigation strategies.
            The project aims to enhance the security of the FIWARE platform, its microservices, and connected IoT devices by ensuring confidentiality, integrity, and availability of data. It involves implementing strong authentication and authorization, data encryption, traffic monitoring, and measures to protect against cyberattacks, including network isolation and secure communication protocols.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
