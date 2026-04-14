import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Send, 
  MessageCircle, 
  Download, 
  ExternalLink, 
  Github,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Linkedin
} from 'lucide-react';
import { homeProfile, aboutProfile,senbetBete,classScheduleReminder,dormMaintenanceReporter, } from './images/index.ts';
import type { Page, Project } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showMore, setShowMore] = useState({
    about: false,
    skills: false,
    education: false
  });
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["web developer!", "web designer!", "AI enthusiast!"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleShowMore = (section: keyof typeof showMore) => {
    setShowMore(prev => ({ ...prev, [section]: !prev[section] }));
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const projects: Project[] = [
    {
      id: 1,
      title: "Dorm Maintenace Reporter",
      description: "A web platform for students to report their dorm maintenance problems and helps them to get answer as soon as possible.",
      image: dormMaintenanceReporter,
      demoLink: "https://dorm-maintenance-reporter.vercel.app",
      githubLink: "https://github.com/Betelhem-M/Dorm-Maintenance-Reporter.git",
      techOne: "HTML",
      techTwo: "CSS",
      techThree: "JavaScript"
    },
    {
      id: 2,
      title: "Class Schedule Reminder",
      description: "A platform for efficient teaching learning process which helps students not to miss their class.",
      image: classScheduleReminder,
      demoLink: "https://class-schedule-reminder.vercel.app",
      githubLink: "https://github.com/Betelhem-M/Class-Schedule-Reminder.git",
      techOne: "HTML",
      techTwo: "CSS",
      techThree: "JavaScript"
    },
    {
      id: 3,
      title: "Senbet Bete",
      description: "It's a sabbath school file system, to manage students and to share PDFs to them.",
      image: senbetBete,
      demoLink: "https://senbet-bete.vercel.app",
      githubLink: "https://github.com/Betelhem-M/Senbet-Bete.git",
      techOne: "HTML",
      techTwo: "TailWindCSS",
      techThree: "TypeScript"
    },
    {
      id: 4,
      title: "Campus Gate Security System",
      description: "this is a campus gate teacker using QR code help for smooth entrance.",
      image: "",
      demoLink: "#",
      githubLink: "https://github.com/Betelhem-M/Campus-gate-security-system.git",
      techOne: "React",
      techTwo: "Tailwind CSS",
      techThree: "Node.js"
    },
    {
      id: 5,
      title: "A Simple Calculator",
      description: "Simple Calculator Using JavaScript.",
      image: "",
      demoLink: "#",
      githubLink: "https://github.com/Betelhem-M/Simple-Calculator.git",
      techOne: "HTML",
      techTwo: "CSS",
      techThree: "JavaScript"

    }
 
  ];

  const navLinks = [
    { name: 'Home', id: 'home' as Page },
    { name: 'About', id: 'about' as Page },
    { name: 'Projects', id: 'projects' as Page },
    { name: 'Contact', id: 'contact' as Page },
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between min-h-[80vh] px-6 gap-12"
          >
            <div className="flex-1 text-left mt-12 md:mt-24">
              <h1 className="text-2xl md:text-3xl font-black mb-4 flex flex-col gap-2 leading-tight">
                <span className="opacity-90">Hello, I'm</span>
                <span className="text-blue-600">Betelhem Molaw</span>
              </h1>
              <div className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 h-10">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="text-blue-600"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <p className="text-lg md:text-xl opacity-80 max-w-xl mb-8 leading-relaxed">
                Hello! I'm Betelhem Molaw, a dedicated Front-End Developer and Creative Web Designer with a profound passion for Artificial Intelligence. I specialize in transforming complex design visions into seamless, high-performance, and immersive digital experiences using modern web technologies.
              </p>
              <div className="flex gap-4">
                <a href="https://t.me/Archtopia" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border-2 border-navy-900 rounded-full hover:bg-navy-900 hover:text-white transition-all text-navy-900">
                  <Send size={16} />
                </a>
                <a href="https://wa.me/251902653646" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border-2 border-navy-900 rounded-full hover:bg-navy-900 hover:text-white transition-all text-navy-900">
                  <MessageCircle size={16} />
                </a>
                <a href="https://linkedin.com/in/Betelhem-Molaw" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border-2 border-navy-900 rounded-full hover:bg-navy-900 hover:text-white transition-all text-navy-900">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-600 p-2 overflow-hidden">
                  <img 
                    src= {homeProfile}
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-full object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-3 rounded-full shadow-lg"
                >
                  <span className="text-xl">👋</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        );
      case 'about':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-5xl mx-auto py-12 px-4 space-y-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 border-b-2 border-blue-600 inline-block">About Me</h2>
            
            <div className="grid gap-8">
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className="bg-navy-800/50 dark:bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-full md:w-1/3">
                  <div className="aspect-square rounded-2xl overflow-hidden border-2 border-blue-600/30">
                    <img 
                      src= {aboutProfile} 
                      alt="About Me" 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">My Story</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    I am a Computer Science student with a strong interest in secure web development and 
                    building practical, real-world solutions. I am passionate about transforming ideas into 
                    functional systems that solve meaningful problems. My academic journey and hands-on 
                    experiences have helped me develop both technical expertise and strong professional 
                    discipline.
                    </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => toggleShowMore('about')}
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      {showMore.about ? 'Read Less' : 'Read More'}
                      <ChevronRight className={`transition-transform ${showMore.about ? 'rotate-90' : ''}`} size={20} />
                    </button>
                    <a 
                      href="public/Betelhem_Molaw_Internship_Resume.pdf" 
                      download
                      className="flex items-center gap-2 bg-navy-900 dark:bg-navy-800 text-white px-6 py-3 rounded-lg hover:bg-black transition-colors font-semibold border border-white/10"
                    >
                      <Download size={20} />
                      Download CV
                    </a>
                  </div>
                  <AnimatePresence>
                    {showMore.about && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-6"
                      >
                        <p className="text-lg opacity-80 border-t border-white/10 pt-6">
                            I have worked on projects , where I focused on
                            designing structured logic, improving system reliability, and ensuring secure data
                            handling. Through internships and competitive environments like hackathons, I have 
                            strengthened my ability to work under pressure, collaborate effectively within teams, and 
                            deliver results within limited timeframes.<br></br><br></br>

                            I am continuously investing in expanding my technical skills, particularly in modern web 
                            technologies, system design, and security-focused development. My goal is to contribute 
                            to innovative teams where I can create efficient, scalable, and impactful digital solutions.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Section 2: Skills */}
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className="bg-navy-800/50 dark:bg-white/5 p-8 rounded-3xl border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Technical Skills</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {['HTML', 'CSS', 'JavaScript', 'React'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => toggleShowMore('skills')}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  {showMore.skills ? 'Read Less' : 'Read More'}
                  <ChevronRight className={`transition-transform ${showMore.skills ? 'rotate-90' : ''}`} size={20} />
                </button>
                <AnimatePresence>
                  {showMore.skills && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-6"
                    >
                      <h3 className="text-2xl font-bold mb-4 text-blue-600">Soft Skills</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                      {[
                        'Problem Solving',
                        'Clear Technical Communication',
                        'Team Collaboration',
                        'Time Management',
                        'Adaptability',
                        'Analytical Thinking',
                        'Leadership Support',
                        'Continuous Learning'
                      ].map(skill => (
                        <div
                          key={skill}
                          className="p-3 bg-navy-900/50 dark:bg-white/5 rounded-xl text-center text-sm"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Section 3: Education */}
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className="bg-navy-800/50 dark:bg-white/5 p-8 rounded-3xl border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Education & Certificates</h3>
                <div className="mb-6">
                  <p className="text-xl font-bold">B.Sc. in Computer Science</p>
                  <p className="opacity-70">Ambo University, Undergraduate</p>
                </div>
                <button 
                  onClick={() => toggleShowMore('education')}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  {showMore.education ? 'Read Less' : 'Read More'}
                  <ChevronRight className={`transition-transform ${showMore.education ? 'rotate-90' : ''}`} size={20} />
                </button>
                <AnimatePresence>
                  {showMore.education && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-6"
                    >
                      <div className="pt-6 border-t border-white/10 space-y-4">
                        <div>
                          <p className="font-bold">Cursor Hackathon Certification</p>
                        </div>
                         <div>
                          <p className="font-bold">E-Learning Certification</p>
                        </div>
                        <div>
                          <p className="font-bold">Udacity AI Certification</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        );
      case 'projects':
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-6xl mx-auto py-12 px-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">My <span className="text-blue-600">Projects</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div 
                  key={project.id}
                  whileHover={{ y: -10 }}
                  className="bg-navy-800/50 dark:bg-white/5 rounded-2xl overflow-hidden border border-white/10 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a href={project.demoLink} className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700">
                        <ExternalLink size={20} />
                      </a>
                      <a href={project.githubLink} className="p-2 bg-white rounded-full text-navy-900 hover:bg-gray-200">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="opacity-70 mb-4">{project.description}</p>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded">{project.techOne}</span>
                      <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded">{project.techTwo}</span>
                      <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded">{project.techThree}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-5xl mx-auto py-12 px-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Get In <span className="text-blue-600">Touch</span></h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <p className="opacity-70 text-lg">
                  Feel free to reach out for collaborations or just a friendly hello!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600/10 text-blue-600 rounded-lg">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="opacity-70">betelhemmolaw@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600/10 text-blue-600 rounded-lg">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="opacity-70">+251 902 653 646</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600/10 text-blue-600 rounded-lg">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="opacity-70">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter cursor-pointer"
            onClick={() => setActivePage('home')}
          >
            BETELHEM <span className="text-blue-600">MOLAW</span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
                  activePage === link.id ? 'text-blue-600' : 'opacity-70'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-navy-900 text-white dark:bg-white dark:text-navy-900 hover:scale-110 active:scale-95 transition-all shadow-lg flex items-center justify-center overflow-hidden w-10 h-10"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDarkMode ? 'dark' : 'light'}
                  initial={{ y: 20, opacity: 0, rotate: 45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -20, opacity: 0, rotate: -45 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-navy-900 text-white dark:bg-white dark:text-navy-900 shadow-lg flex items-center justify-center overflow-hidden w-9 h-9"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDarkMode ? 'dark' : 'light'}
                  initial={{ y: 20, opacity: 0, rotate: 45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -20, opacity: 0, rotate: -45 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-blue-600"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-4 right-4 w-64 bg-navy-900 z-[70] p-6 shadow-2xl rounded-2xl border border-white/10"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="text-xs font-black text-white/50 tracking-widest uppercase">Navigation</div>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white hover:text-blue-400 transition-colors">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      setActivePage(link.id);
                      setIsMenuOpen(false);
                    }}
                    className={`text-lg font-bold text-left px-4 py-2 transition-all ${
                      activePage === link.id 
                        ? 'text-blue-400' 
                        : 'text-white hover:text-blue-400'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="opacity-50 text-sm">
            © 2024 Betelhem Molaw. All rights reserved.
          </p>
          <div className="flex gap-6 opacity-50">
            {/* Social links removed from footer as per request */}
          </div>
        </div>
      </footer>
    </div>
  );
}
