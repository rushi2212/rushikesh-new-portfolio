import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Mail, Phone, Linkedin, ExternalLink, Award, Calendar, MapPin, Code, Users, Zap, Eye } from 'lucide-react';

const App = () => {
  const [currentCertificate, setCurrentCertificate] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const certificates = [
    {
      id: 1,
      title: "Agentic AI Workshop",
      organization: "Progression School",
      date: "July 2025",
      certificateId: "GCO-2303-251",
      image: "/Ai-workshop.jpg"
    },
    {
      id: 2,
      title: "AI Tools and ChatGPT Workshop",
      organization: "Be10x",
      date: "June 2025",
      image: "https://via.placeholder.com/400x300/0f766e/ffffff?text=AI+Tools+Workshop"
    },
    {
      id: 3,
      title: "MERN Stack Course",
      organization: "Tutedude",
      date: "May 2025",
      image: "https://via.placeholder.com/400x300/b91c1c/ffffff?text=MERN+Stack+Course"
    },
    {
      id: 4,
      title: "React.js Course",
      organization: "Tutedude",
      date: "May 2025",
      image: "https://via.placeholder.com/400x300/7c2d12/ffffff?text=React.js+Course"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "PostCraft Pro",
      subtitle: "AI-Powered Social Media Post Generator",
      date: "July 2025",
      description: "Developed an AI-driven web tool using Flask, HTML, CSS, Google Gemini, and Tavily Web Search API to generate platform-specific social media posts with instant summary generation and responsive UI.",
      features: ["Instant summary generation", "One-click copy", "Responsive UI", "Multi-platform support"],
      tech: ["Flask", "HTML", "CSS", "Google Gemini", "Tavily API"],
      link: "https://post-agent.onrender.com",
      image: "/postcraft.png" 
    },
    {
      id: 2,
      title: "GreenPulse",
      subtitle: "Sustainable E-commerce Platform",
      date: "June 2025",
      description: "Built an eco-friendly e-commerce platform with carbon footprint tracking, green leaderboard, and Razorpay payment integration using the MERN stack for sustainable shopping experience.",
      features: ["Carbon footprint tracking", "Green leaderboard", "Razorpay integration", "Eco-friendly products"],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Razorpay"],
      link: "https://greenpulse-45fd.onrender.com",
      image: "/greenpulse.png"
    },
    {
      id: 3,
      title: "CureHub",
      subtitle: "Hospital Management System",
      date: "May 2025",
      description: "Developed a comprehensive hospital management system to streamline patient and hospital data using the MERN stack. Awarded special prize of ₹5000 in FinTech theme at hackathon.",
      features: ["Patient data management", "User authentication", "Real-time updates", "Medical records"],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      link: "https://curehub-bfrb.onrender.com",
      image: "/curehub.png"
    }
  ];

  const skills = [
    { 
      category: "Frontend Development", 
      items: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
      icon: <Code size={24} />
    },
    { 
      category: "Backend Development", 
      items: ["Node.js", "Express.js", "Python", "Flask", "RESTful APIs"],
      icon: <Users size={24} />
    },
    { 
      category: "Database & Cloud", 
      items: ["MongoDB", "MySQL", "Firebase", "AWS", "Git"],
      icon: <Zap size={24} />
    },
    { 
      category: "AI & ML Technologies", 
      items: ["Google Gemini", "Tavily Web Search API", "ChatGPT", "OpenAI API"],
      icon: <Award size={24} />
    }
  ];

  const achievements = [
    { 
      title: "Special Prize Winner", 
      event: "Hack Your Path 6.0 Hackathon", 
      theme: "FinTech Theme", 
      date: "May 2025",
      amount: "₹5000",
      description: "Developed CureHub - Hospital Management System"
    },
    { 
      title: "Finalist", 
      event: "HACKSAGON 2025, ABV-IIITM Gwalior", 
      note: "Selected among 600+ participating teams", 
      date: "June 2025",
      description: "Showcased innovative AI-powered solutions"
    },
    { 
      title: "Participant", 
      event: "WEB DASH 2025, IEEE Jamia Millia Islamia", 
      date: "June 2025",
      description: "Competed in web development challenges"
    }
  ];

  const nextCertificate = () => {
    setCurrentCertificate((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertificate((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-100 border-t-blue-600 mx-auto"></div>
            <div className="absolute inset-0 rounded-full border-4 border-blue-200 opacity-20"></div>
          </div>
          <p className="text-slate-700 mt-6 text-lg font-medium">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-slate-800">
              RR
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Projects</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Skills</a>
              <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <div className="space-y-6">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                👋 Hello, I'm
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Rushikesh
                <span className="block text-blue-600">Raut</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Computer Engineering Student & Full-Stack Developer passionate about creating innovative solutions with AI and modern web technologies.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                Currently pursuing Computer Engineering at GCOEARA, Pune, with expertise in MERN stack, AI integration, and modern web development.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="mailto:rushikesh220703@gmail.com" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg">
                  <Mail size={20} />
                  Get In Touch
                </a>
                <a href="#projects" className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full transition-all transform hover:scale-105">
                  <Eye size={20} />
                  View Work
                </a>
              </div>
              <div className="flex flex-wrap gap-6 pt-4 text-slate-500">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+91-8459829900</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Pune, India</span>
                </div>
                <a href="https://linkedin.com/in/rushikeshraut2212" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 p-1 shadow-2xl transform rotate-3">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <img 
                    src="/rushikesh.png"
                    alt="Rushikesh Raut"
                    className="w-72 h-72 rounded-xl object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Code size={24} className="text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                <Zap size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Expertise</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Proficient in modern technologies and frameworks for full-stack development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1 border border-slate-100">
                <div className="text-blue-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">{skill.category}</h3>
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <div key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
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
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Showcase of my latest work in web development and AI integration
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-slate-100">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-slate-800">{project.title}</h3>
                  <p className="text-blue-600 font-medium mb-3">{project.subtitle}</p>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-slate-700">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-all transform hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Achievements & Recognition</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Awards and recognitions received for innovative projects and technical excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1 border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Award size={24} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-slate-800">{achievement.title}</h3>
                    {achievement.amount && (
                      <div className="text-green-600 font-semibold mb-2">{achievement.amount}</div>
                    )}
                    <p className="text-slate-600 mb-2 font-medium">{achievement.event}</p>
                    {achievement.note && (
                      <p className="text-slate-500 text-sm mb-2">{achievement.note}</p>
                    )}
                    <p className="text-slate-500 text-sm mb-3">{achievement.description}</p>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Certifications</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional certifications and training programs completed
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
              <div className="flex items-center justify-between p-6">
                <button 
                  onClick={prevCertificate}
                  className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-all transform hover:scale-110"
                >
                  <ChevronLeft size={24} className="text-slate-600" />
                </button>
                
                <div className="flex-1 mx-8">
                  <div className="text-center">
                    <img 
                      src={certificates[currentCertificate].image}
                      alt={certificates[currentCertificate].title}
                      className="w-full max-w-md mx-auto rounded-lg mb-6 shadow-lg"
                    />
                    <h3 className="text-2xl font-bold mb-2 text-slate-800">
                      {certificates[currentCertificate].title}
                    </h3>
                    <p className="text-xl text-blue-600 font-medium mb-2">
                      {certificates[currentCertificate].organization}
                    </p>
                    <p className="text-slate-600 mb-2">
                      {certificates[currentCertificate].date}
                    </p>
                    {certificates[currentCertificate].certificateId && (
                      <p className="text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full inline-block">
                        ID: {certificates[currentCertificate].certificateId}
                      </p>
                    )}
                  </div>
                </div>
                
                <button 
                  onClick={nextCertificate}
                  className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-all transform hover:scale-110"
                >
                  <ChevronRight size={24} className="text-slate-600" />
                </button>
              </div>
              
              <div className="flex justify-center pb-6">
                <div className="flex gap-2">
                  {certificates.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCertificate(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentCertificate ? 'bg-blue-600' : 'bg-slate-300'
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
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Hands-on experience in web development and software engineering
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Users size={32} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-slate-800">Frontend Web Development Intern</h3>
                  <p className="text-xl text-blue-600 font-medium mb-2">CODTECH IT SOLUTIONS</p>
                  <p className="text-slate-600 mb-4">January 2025 - February 2025</p>
                  <div className="space-y-3 text-slate-600">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p>Developed and deployed multiple web applications including interactive quiz app, real-time chat application, professional portfolio webpage, and comprehensive e-learning platform UI</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p>Enhanced technical skills in React.js, JavaScript, and responsive design principles while collaborating effectively in an Agile development environment</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p>Focused on optimizing user experience and application performance through modern web development best practices</p>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Academic background and relevant coursework
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Bachelor of Engineering in Computer Engineering</h3>
                <p className="text-xl text-blue-600 font-medium mb-2">Government College of Engineering and Research, Avasari (GCOEARA)</p>
                <p className="text-slate-600 mb-6">Pune, India • Expected Graduation: 2026</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Data Structures & Algorithms", "Web Development", "Database Systems", "Artificial Intelligence", "Software Engineering", "Computer Networks"].map((course, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
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
      <section id="contact" className="bg-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-slate-700 rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="mailto:rushikesh220703@gmail.com" className="flex items-center gap-3 p-4 bg-slate-600 rounded-lg hover:bg-slate-500 transition-colors">
                  <Mail size={20} />
                  <div className="text-left">
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-slate-300">rushikesh220703@gmail.com</div>
                  </div>
                </a>
                <a href="https://linkedin.com/in/rushikeshraut2212" className="flex items-center gap-3 p-4 bg-slate-600 rounded-lg hover:bg-slate-500 transition-colors">
                  <Linkedin size={20} />
                  <div className="text-left">
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-slate-300">Connect with me</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <a href="mailto:rushikesh220703@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-slate-400 mb-4">
              © 2025 Rushikesh Raut. Crafted with passion and modern web technologies.
            </p>
            <div className="flex justify-center gap-6">
              <a href="mailto:rushikesh220703@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com/in/rushikeshraut2212" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;