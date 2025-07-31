import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Award,
  Calendar,
  MapPin,
  Code,
  Users,
  Zap,
  Eye,
  Send,
  User,
  MessageCircle,
  Instagram,
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Download,
  ArrowUp,
  Sparkles,
  Terminal,
  Rocket,
  Star,
  Heart
} from 'lucide-react';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('about');
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Full-Stack Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Theme classes
  const themeClasses = {
    bg: isDark ? 'bg-gray-900' : 'bg-gray-50',
    bgSecondary: isDark ? 'bg-gray-800' : 'bg-white',
    bgTertiary: isDark ? 'bg-gray-700' : 'bg-gray-100',
    text: isDark ? 'text-white' : 'text-gray-900',
    textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDark ? 'text-gray-400' : 'text-gray-500',
    border: isDark ? 'border-gray-700' : 'border-gray-200',
    accent: 'text-blue-400',
    accentBg: isDark ? 'bg-blue-600' : 'bg-blue-500',
    card: isDark ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700/50' : 'bg-white/80 backdrop-blur-sm border-gray-200/50',
    nav: isDark ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'
  };

  // Typing animation effect
  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let index = 0;
    const timer = setInterval(() => {
      if (index <= currentRoleText.length) {
        setTypedText(currentRoleText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentRole]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollY(scrolled);
      setShowScrollTop(scrolled > 500);

      // Update active section
      const sections = ['about', 'skills', 'projects', 'achievements', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://formspree.io/f/mvgqojob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const certificates = [
    {
      id: 1,
      title: 'Agentic AI Workshop',
      organization: 'Progression School',
      date: 'July 2025',
      certificateId: 'GCO-2303-251',
      image: '/Ai-workshop.jpg'
    },
    {
      id: 2,
      title: 'Hack Your Path 6.0',
      organization: 'Hyderabad Institute Of Technology & Management',
      date: 'May 2025',
      image: '/hack-your-path.jpg'
    },
    {
      id: 3,
      title: 'MERN Stack Course',
      organization: 'Tutedude',
      date: 'May 2025',
      image: '/tutedude-mern.png',
      certificateId: 'TD-RUSH-ME-2152'
    },
    {
      id: 4,
      title: 'React.js Course',
      organization: 'Tutedude',
      date: 'May 2025',
      image: '/certificateReact.jpg',
      certificateId: 'TD-RUSH-RJ-1252'
    },
    {
      id: 5,
      title: 'Hacksagon',
      organization: 'ABV.IIITM IEEE Student Branch',
      date: 'June 2025',
      image: '/hacksagon.png'
    },
    {
      id: 6,
      title: 'CodTech IT Solutions Internship',
      organization: 'CODTECH IT SOLUTIONS PVT LTD',
      date: 'Feb 2025',
      image: '/codtech.jpg',
      certificateId: 'CT08KRO'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'PostCraft Pro',
      subtitle: 'AI-Powered Social Media Post Generator',
      date: 'July 2025',
      description: 'AI-driven web tool using Flask and Google Gemini for generating platform-specific social media posts with instant summaries.',
      features: [
        'Instant summary generation',
        'One-click copy',
        'Responsive UI',
        'Multi-platform support'
      ],
      tech: ['Flask', 'HTML', 'CSS', 'Google Gemini', 'Tavily API'],
      link: 'https://post-agent.onrender.com',
      image: '/postcraft.png',
      github: '#'
    },
    {
      id: 2,
      title: 'GreenPulse',
      subtitle: 'Sustainable E-commerce Platform',
      date: 'June 2025',
      description: 'Eco-friendly e-commerce platform with carbon footprint tracking and green leaderboard using MERN stack.',
      features: [
        'Carbon footprint tracking',
        'Green leaderboard',
        'Razorpay integration',
        'Eco-friendly products'
      ],
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Razorpay'],
      link: 'https://greenpulse-45fd.onrender.com',
      image: '/greenpulse.png',
      github: '#'
    },
    {
      id: 3,
      title: 'CureHub',
      subtitle: 'Hospital Management System',
      date: 'May 2025',
      description: 'Comprehensive hospital management system for streamlined patient data management. Won ₹5000 prize in hackathon.',
      features: [
        'Patient data management',
        'User authentication',
        'Real-time updates',
        'Medical records'
      ],
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      link: 'https://curehub-bfrb.onrender.com',
      image: '/curehub.png',
      github: '#'
    }
  ];

  const skills = [
    {
      category: 'Frontend Development',
      items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      icon: <Code size={24} />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend Development',
      items: ['Node.js', 'Express.js', 'Python', 'Flask', 'RESTful APIs'],
      icon: <Terminal size={24} />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Database & Cloud',
      items: ['MongoDB', 'MySQL', 'Firebase', 'AWS', 'Git'],
      icon: <Zap size={24} />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'AI & ML Technologies',
      items: ['Google Gemini', 'Tavily API', 'ChatGPT', 'OpenAI API'],
      icon: <Sparkles size={24} />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const achievements = [
    {
      title: 'Special Prize Winner',
      event: 'Hack Your Path 6.0 Hackathon',
      theme: 'FinTech Theme',
      date: 'May 2025',
      amount: '₹5000',
      description: 'Developed CureHub - Hospital Management System',
      icon: <Award size={24} />
    },
    {
      title: 'Finalist',
      event: 'HACKSAGON 2025, ABV-IIITM Gwalior',
      note: 'Selected among 600+ participating teams',
      date: 'June 2025',
      description: 'Showcased innovative AI-powered solutions',
      icon: <Star size={24} />
    },
    {
      title: 'Participant',
      event: 'WEB DASH 2025, IEEE Jamia Millia Islamia',
      date: 'June 2025',
      description: 'Competed in web development challenges',
      icon: <Rocket size={24} />
    }
  ];

  const nextCertificate = () => {
    setCurrentCertificate((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertificate((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen ${themeClasses.bg} flex items-center justify-center relative overflow-hidden`}>
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        {/* Loading content */}
        <div className="text-center relative z-10">
          <div className="relative mb-8">
            <div className="w-20 h-20 mx-auto relative">
              <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-purple-400 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`${themeClasses.text} text-2xl font-bold animate-pulse`}>
              Rushikesh Raut
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Terminal className="text-blue-400 animate-bounce" size={20} />
              <span className={`${themeClasses.textSecondary} text-sm`}>Initializing portfolio...</span>
            </div>

            <div className="w-64 mx-auto">
              <div className={`h-2 ${themeClasses.bgTertiary} rounded-full overflow-hidden`}>
                <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/4 right-1/4 animate-float">
            <Code className="text-blue-400 opacity-60" size={24} />
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-float-delayed">
            <Sparkles className="text-purple-400 opacity-60" size={20} />
          </div>
          <div className="absolute top-1/3 left-1/4 animate-float-slow">
            <Rocket className="text-pink-400 opacity-60" size={18} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${themeClasses.bg} transition-all duration-500 relative`}>
      {/* Cursor follower */}
      <div 
        className="fixed w-4 h-4 bg-blue-400/30 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${scrollY > 100 ? 1.5 : 1})`
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrollY > 50 ? `${themeClasses.nav} shadow-2xl` : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className={`text-2xl font-bold ${themeClasses.text} flex items-center space-x-2`}>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RR</span>
              </div>
              <span className="hidden sm:block">Rushikesh</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Skills', 'Projects', 'Achievements', 'Certifications', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${themeClasses.textSecondary} hover:${themeClasses.accent} transition-all duration-300 font-medium relative group ${
                    activeSection === item.toLowerCase() ? themeClasses.accent : ''
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full ${
                    activeSection === item.toLowerCase() ? 'w-full' : ''
                  }`}></span>
                </a>
              ))}
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${themeClasses.bgTertiary} ${themeClasses.text} hover:scale-110 transition-all duration-300`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${themeClasses.bgTertiary} ${themeClasses.text}`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full ${themeClasses.bgTertiary} ${themeClasses.text}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden mt-4 p-4 rounded-lg ${themeClasses.bgSecondary} ${themeClasses.border} border animate-slideDown`}>
              {['About', 'Skills', 'Projects', 'Achievements', 'Certifications', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 ${themeClasses.textSecondary} hover:${themeClasses.accent} transition-colors`}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="container mx-auto px-6 pt-32 pb-20 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className={`${themeClasses.textSecondary} text-sm font-medium`}>Available for work</span>
              </div>

              <div className="space-y-4">
                <h1 className={`text-5xl lg:text-7xl font-bold ${themeClasses.text} leading-tight`}>
                  <span className="block">Hello, I'm</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                    Rushikesh
                  </span>
                </h1>
                
                <div className="h-16 flex items-center">
                  <span className={`text-2xl lg:text-3xl ${themeClasses.textSecondary} font-light`}>
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
              </div>

              <p className={`text-xl ${themeClasses.textSecondary} leading-relaxed max-w-2xl`}>
                Passionate about creating innovative web solutions with modern technologies. 
                I specialize in full-stack development, AI integration, and building user-centric applications.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <Mail size={20} />
                  <span>Let's Connect</span>
                  <ArrowUp className="group-hover:rotate-45 transition-transform duration-300" size={16} />
                </a>
                
                <a
                  href="#projects"
                  className={`inline-flex items-center gap-2 border-2 border-blue-500 ${themeClasses.text} hover:bg-blue-500 hover:text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105`}
                >
                  <Eye size={20} />
                  <span>View Work</span>
                </a>

                <a
                  href="/resume.pdf"
                  className={`inline-flex items-center gap-2 ${themeClasses.bgTertiary} ${themeClasses.text} hover:${themeClasses.bgSecondary} px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105`}
                >
                  <Download size={20} />
                  <span>Resume</span>
                </a>
              </div>

              <div className={`flex flex-wrap gap-6 pt-6 ${themeClasses.textMuted}`}>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+91-8459829900</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Pune, India</span>
                </div>
                <a
                  href="https://linkedin.com/in/rushikeshraut2212"
                  className={`flex items-center gap-2 hover:${themeClasses.accent} transition-colors`}
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden">
                <img
                  src="/rishikesh.png"
                  alt="Rushikesh Raut"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Code size={24} className="text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Zap size={16} className="text-white" />
              </div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-ping">
                <Heart size={12} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`${themeClasses.bgSecondary} py-20 relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Sparkles className="text-blue-400" size={24} />
              <span className={`${themeClasses.textMuted} text-sm uppercase tracking-wider font-semibold`}>
                Technical Expertise
              </span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold ${themeClasses.text} mb-6`}>
              Skills & Technologies
            </h2>
            <p className={`text-xl ${themeClasses.textSecondary} max-w-2xl mx-auto`}>
              Proficient in modern technologies and frameworks for full-stack development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group ${themeClasses.card} rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border backdrop-blur-sm`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {skill.icon}
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${themeClasses.text} group-hover:text-blue-400 transition-colors`}>
                  {skill.category}
                </h3>
                
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <div
                      key={i}
                      className={`${themeClasses.bgTertiary} ${themeClasses.textSecondary} px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 cursor-default`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Rocket className="text-purple-400" size={24} />
              <span className={`${themeClasses.textMuted} text-sm uppercase tracking-wider font-semibold`}>
                Portfolio
              </span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold ${themeClasses.text} mb-6`}>
              Featured Projects
            </h2>
            <p className={`text-xl ${themeClasses.textSecondary} max-w-2xl mx-auto`}>
              Showcase of my latest work in web development and AI integration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group ${themeClasses.card} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border backdrop-blur-sm`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.date}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-center hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={16} className="inline mr-2" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${themeClasses.text} group-hover:text-blue-400 transition-colors`}>
                    {project.title}
                  </h3>
                  <p className="text-blue-400 font-medium mb-3 text-sm">
                    {project.subtitle}
                  </p>
                  <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed text-sm line-clamp-3`}>
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className={`font-semibold mb-2 ${themeClasses.text} text-sm`}>
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 gap-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-2 text-xs ${themeClasses.textSecondary}`}
                        >
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className={`${themeClasses.bgTertiary} ${themeClasses.textSecondary} px-2 py-1 rounded-full text-xs font-medium hover:bg-blue-500/20 hover:text-blue-400 transition-colors`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`${themeClasses.bgSecondary} py-20`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Award className="text-yellow-400" size={24} />
              <span className={`${themeClasses.textMuted} text-sm uppercase tracking-wider font-semibold`}>
                Recognition
              </span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold ${themeClasses.text} mb-6`}>
              Achievements & Awards
            </h2>
            <p className={`text-xl ${themeClasses.textSecondary} max-w-2xl mx-auto`}>
              Awards and recognitions received for innovative projects and technical excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group ${themeClasses.card} rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border backdrop-blur-sm`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${themeClasses.text} group-hover:text-yellow-400 transition-colors`}>
                      {achievement.title}
                    </h3>
                    {achievement.amount && (
                      <div className="text-green-400 font-bold text-lg mb-2">
                        {achievement.amount}
                      </div>
                    )}
                    <p className={`${themeClasses.textSecondary} mb-2 font-medium`}>
                      {achievement.event}
                    </p>
                    {achievement.note && (
                      <p className={`${themeClasses.textMuted} text-sm mb-2`}>
                        {achievement.note}
                      </p>
                    )}
                    <p className={`${themeClasses.textMuted} text-sm mb-3`}>
                      {achievement.description}
                    </p>
                    <div className={`flex items-center gap-2 ${themeClasses.textMuted} text-sm`}>
                      <Calendar size={14} />
                      {achievement.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Award className="text-green-400" size={24} />
              <span className={`${themeClasses.textMuted} text-sm uppercase tracking-wider font-semibold`}>
                Learning
              </span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold ${themeClasses.text} mb-6`}>
              Certifications
            </h2>
            <p className={`text-xl ${themeClasses.textSecondary} max-w-2xl mx-auto`}>
              Professional certifications and training programs completed
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className={`${themeClasses.card} rounded-2xl shadow-2xl overflow-hidden border backdrop-blur-sm`}>
              <div className="flex items-center justify-between p-8 min-h-[500px]">
                <button
                  onClick={prevCertificate}
                  className={`p-4 rounded-full ${themeClasses.bgTertiary} ${themeClasses.text} hover:scale-110 transition-all duration-300 flex-shrink-0`}
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="flex-1 mx-8">
                  <div className="text-center">
                    <div className="h-64 flex items-center justify-center mb-6">
                      <img
                        src={certificates[currentCertificate].image}
                        alt={certificates[currentCertificate].title}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="min-h-[140px] flex flex-col justify-center">
                      <h3 className={`text-2xl font-bold mb-2 ${themeClasses.text}`}>
                        {certificates[currentCertificate].title}
                      </h3>
                      <p className="text-blue-400 font-medium mb-2 text-xl">
                        {certificates[currentCertificate].organization}
                      </p>
                      <p className={`${themeClasses.textSecondary} mb-2`}>
                        {certificates[currentCertificate].date}
                      </p>
                      <div className="h-6 flex items-center justify-center">
                        {certificates[currentCertificate].certificateId && (
                          <p className={`text-sm ${themeClasses.textMuted} ${themeClasses.bgTertiary} px-3 py-1 rounded-full`}>
                            ID: {certificates[currentCertificate].certificateId}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={nextCertificate}
                  className={`p-4 rounded-full ${themeClasses.bgTertiary} ${themeClasses.text} hover:scale-110 transition-all duration-300 flex-shrink-0`}
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="flex justify-center pb-6">
                <div className="flex gap-2">
                  {certificates.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCertificate(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentCertificate
                          ? 'bg-blue-400 scale-125'
                          : `${themeClasses.bgTertiary} hover:bg-blue-400/50`
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`${themeClasses.bgSecondary} py-20`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Users className="text-blue-400" size={24} />
              <span className={`${themeClasses.textMuted} text-sm uppercase tracking-wider font-semibold`}>
                Career
              </span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold ${themeClasses.text} mb-6`}>
              Professional Experience
            </h2>
            <p className={`text-xl ${themeClasses.textSecondary} max-w-2xl mx-auto`}>
              Hands-on experience in web development and software engineering
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className={`${themeClasses.card} rounded-2xl p-8 border backdrop-blur-sm hover:shadow-2xl transition-all duration-500`}>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <Users size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${themeClasses.text}`}>
                    Frontend Web Development Intern
                  </h3>
                  <p className="text-blue-400 font-medium mb-2 text-xl">
                    CODTECH IT SOLUTIONS
                  </p>
                  <p className={`${themeClasses.textSecondary} mb-4`}>
                    January 2025 - February 2025
                  </p>
                  <div className={`space-y-3 ${themeClasses.textSecondary}`}>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <p>
                        Developed and deployed multiple web applications including interactive quiz app, 
                        real-time chat application, professional portfolio webpage, and comprehensive e-learning platform UI
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <p>
                        Enhanced technical skills in React.js, JavaScript, and responsive design principles 
                        while collaborating effectively in an Agile development environment
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <p>
                        Focused on optimizing user experience and application performance through 
                        modern web development best practices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Award className="text-purple-400" size={24} />
              <span className={`${themeClasses.textMuted} text-sm uppercase tracking-wider font-semibold`}>
                Academic Background
              </span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold ${themeClasses.text} mb-6`}>
              Education
            </h2>
            <p className={`text-xl ${themeClasses.textSecondary} max-w-2xl mx-auto`}>
              Academic background and relevant coursework
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className={`${themeClasses.card} rounded-2xl p-8 shadow-2xl border backdrop-blur-sm hover:shadow-3xl transition-all duration-500`}>
              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-4 ${themeClasses.text}`}>
                  Bachelor of Engineering in Computer Engineering
                </h3>
                <p className="text-blue-400 font-medium mb-2 text-xl">
                  Government College of Engineering and Research, Avasari (GCOEARA)
                </p>
                <p className={`${themeClasses.textSecondary} mb-6`}>
                  Pune, India • Expected Graduation: 2026
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'Data Structures & Algorithms',
                    'Web Development',
                    'Database Systems',
                    'Artificial Intelligence',
                    'Software Engineering',
                    'Computer Networks'
                  ].map((course, i) => (
                    <span
                      key={i}
                      className={`${themeClasses.bgTertiary} text-blue-400 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-500/20 transition-colors cursor-default`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${themeClasses.bgSecondary} py-20`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Send className="text-green-400" size={24} />
              <span className={`${themeClasses.textMuted} text-sm uppercase tracking-wider font-semibold`}>
                Get In Touch
              </span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold ${themeClasses.text} mb-6`}>
              Let's Work Together
            </h2>
            <p className={`text-xl ${themeClasses.textSecondary} max-w-2xl mx-auto`}>
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <h3 className={`text-2xl font-bold ${themeClasses.text} mb-6`}>Get In Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:rushikesh220703@gmail.com"
                    className={`group flex items-center gap-4 p-4 ${themeClasses.card} rounded-lg hover:shadow-xl transition-all duration-300 border backdrop-blur-sm`}
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <div className={`font-medium ${themeClasses.text}`}>Email</div>
                      <div className={`text-sm ${themeClasses.textSecondary}`}>
                        rushikesh220703@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/rushikeshraut2212"
                    className={`group flex items-center gap-4 p-4 ${themeClasses.card} rounded-lg hover:shadow-xl transition-all duration-300 border backdrop-blur-sm`}
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Linkedin size={20} className="text-white" />
                    </div>
                    <div>
                      <div className={`font-medium ${themeClasses.text}`}>LinkedIn</div>
                      <div className={`text-sm ${themeClasses.textSecondary}`}>
                        Connect with me
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/8459829900"
                    className={`group flex items-center gap-4 p-4 ${themeClasses.card} rounded-lg hover:shadow-xl transition-all duration-300 border backdrop-blur-sm`}
                  >
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle size={20} className="text-white" />
                    </div>
                    <div>
                      <div className={`font-medium ${themeClasses.text}`}>WhatsApp</div>
                      <div className={`text-sm ${themeClasses.textSecondary}`}>
                        Message me directly
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/rushikesh_22_12?igsh=a24zbmpuenltMTN"
                    className={`group flex items-center gap-4 p-4 ${themeClasses.card} rounded-lg hover:shadow-xl transition-all duration-300 border backdrop-blur-sm`}
                  >
                    <div className="bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Instagram size={20} className="text-white" />
                    </div>
                    <div>
                      <div className={`font-medium ${themeClasses.text}`}>Instagram</div>
                      <div className={`text-sm ${themeClasses.textSecondary}`}>
                        Follow me
                      </div>
                    </div>
                  </a>
                </div>

                <div className="pt-6">
                  <a
                    href="mailto:rushikesh220703@gmail.com"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <Mail size={16} />
                    Quick Email
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className={`text-2xl font-bold ${themeClasses.text} mb-6`}>Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium ${themeClasses.textSecondary} mb-2`}
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <User
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${themeClasses.textMuted}`}
                        size={18}
                      />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full pl-10 pr-4 py-3 ${themeClasses.bgTertiary} ${themeClasses.border} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${themeClasses.text} transition-all duration-300`}
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium ${themeClasses.textSecondary} mb-2`}
                    >
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${themeClasses.textMuted}`}
                        size={18}
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full pl-10 pr-4 py-3 ${themeClasses.bgTertiary} ${themeClasses.border} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${themeClasses.text} transition-all duration-300`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium ${themeClasses.textSecondary} mb-2`}
                    >
                      Your Message
                    </label>
                    <div className="relative">
                      <MessageCircle
                        className={`absolute left-3 top-3 ${themeClasses.textMuted}`}
                        size={18}
                      />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className={`w-full pl-10 pr-4 py-3 ${themeClasses.bgTertiary} ${themeClasses.border} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${themeClasses.text} resize-none transition-all duration-300`}
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-medium"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg text-center backdrop-blur-sm">
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm text-green-300">
                        I'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-500/20 border border-red-500/30 text-red-400 p-4 rounded-lg text-center backdrop-blur-sm">
                      <p className="font-medium">Something went wrong!</p>
                      <p className="text-sm text-red-300">
                        Please try again or email me directly.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${themeClasses.bg} py-12 border-t ${themeClasses.border}`}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RR</span>
              </div>
              <span className={`text-xl font-bold ${themeClasses.text}`}>Rushikesh Raut</span>
            </div>
            
            <p className={`${themeClasses.textMuted} mb-6 max-w-md mx-auto`}>
              Crafted with and modern web technologies. 
              Let's build something amazing together.
            </p>
            
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="mailto:rushikesh220703@gmail.com"
                className={`${themeClasses.textMuted} hover:text-blue-400 transition-colors transform hover:scale-110`}
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/rushikeshraut2212"
                className={`${themeClasses.textMuted} hover:text-blue-400 transition-colors transform hover:scale-110`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/rushikeshraut"
                className={`${themeClasses.textMuted} hover:text-blue-400 transition-colors transform hover:scale-110`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.instagram.com/rushikesh_22_12"
                className={`${themeClasses.textMuted} hover:text-pink-400 transition-colors transform hover:scale-110`}
              >
                <Instagram size={20} />
              </a>
            </div>
            
            <div className={`text-sm ${themeClasses.textMuted} flex flex-col sm:flex-row items-center justify-center gap-2`}>
              <span>© 2025 Rushikesh Raut.</span>
              <span className="hidden sm:block">•</span>
              <span>All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default App;