import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowRight, Code2, Zap, Layers } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Index() {
  const { colors, utils } = useTheme();

  const featuredProjects = [
    {
      title: "Jewellery E-Commerce Website",
      description:
        "Full customer platform with cart, wishlist, order system & complete Admin Panel. Live production application.",
      tags: ["React", "JavaScript", "CSS", "Java", "MySQL"],
      icon: "🛍️",
      link: "#",
    },
    {
      title: "Smith Management System",
      description:
        "Complete CRUD system for daily income/outgoing tracking, smith job assignments, and workflow status management.",
      tags: ["React", "JavaScript", "CSS", "Java", "MySQL"],
      icon: "⚙️",
      link: "#",
    },
    {
      title: "Sales Dashboard",
      description:
        "Real-time stock monitoring, cancelled bills tracking, and performance metrics visualization.",
      tags: ["React", "Dashboard", "Analytics"],
      icon: "📊",
      link: "#",
    },
  ];

  const skills = [
    { icon: Code2, title: "Frontend Development", desc: "React.js, React Native, JavaScript" },
    { icon: Zap, title: "Performance", desc: "Optimized web & app development" },
    { icon: Layers, title: "Full Stack", desc: "Basic backend knowledge & integration" },
  ];

  return (
    <div style={{ backgroundColor: colors.background, color: colors.text }}>
      {/* Hero Section */}
      <section className={`${utils.containerClass} py-4 md:py-8`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-2 animate-fade-in">
            <div className="space-y-3">
              <h1
                className="font-bold leading-tight"
                style={{ fontSize: "28px", color: colors.text }}
              >
                Hi, I'm Aswin Kumar
              </h1>
              <p style={{ fontSize: "14px", color: colors.textLight }}>
                Frontend Developer with 1+ year of corporate experience building production-level applications
              </p>
            </div>

            <p style={{ fontSize: "14px", color: colors.textLight, lineHeight: "1.6" }}>
              I specialize in React.js, React Native, and JavaScript. I've built fully functional e-commerce platforms, management systems, and analytics dashboards. Passionate about writing clean code and delivering exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["React.js", "React Native", "JavaScript", "Java", "MySQL", "Tailwind CSS"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: colors.primaryLight,
                      color: colors.primaryDark,
                    }}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                to="/portfolio"
                className="px-6 py-2 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 flex items-center gap-2 group text-sm"
                style={{ backgroundColor: colors.primary }}
              >
                View My Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:aswinkumarbtechit@gmail.com"
                className="px-6 py-2 rounded-lg font-medium transition-colors duration-300 text-sm border-2"
                style={{
                  borderColor: colors.primary,
                  color: colors.primary,
                  backgroundColor: "transparent",
                }}
              >
                Get In Touch
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 pt-4 text-xs" style={{ color: colors.textLight }}>
              <a
                href="tel:+919342884232"
                className="hover:opacity-70 transition-opacity flex items-center gap-1"
                style={{ color: colors.primary }}
              >
                <Mail size={14} />
                +91 9342884232
              </a>
              <a
                href="mailto:aswinkumarbtechit@gmail.com"
                className="hover:opacity-70 transition-opacity flex items-center gap-1"
                style={{ color: colors.primary }}
              >
                <Mail size={14} />
                aswinkumarbtechit@gmail.com
              </a>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative hidden md:block">
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-20 animate-pulse"
              style={{ backgroundColor: colors.primary }}
            />
            <div
              className="relative rounded-3xl p-1"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
              }}
            >
              <div className="rounded-3xl p-6 space-y-6" style={{ backgroundColor: colors.surface }}>
                <div className="space-y-3">
                  <div
                    className="h-3 rounded w-3/4"
                    style={{ backgroundColor: colors.border }}
                  />
                  <div
                    className="h-3 rounded w-full"
                    style={{ backgroundColor: colors.border }}
                  />
                  <div
                    className="h-3 rounded w-5/6"
                    style={{ backgroundColor: colors.border }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="space-y-2 rounded-lg p-3"
                      style={{ backgroundColor: colors.background }}
                    >
                      <div
                        className="h-6 rounded w-6"
                        style={{ backgroundColor: colors.primaryLight }}
                      />
                      <div
                        className="h-2 rounded w-5/6"
                        style={{ backgroundColor: colors.border }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-4 md:py-8`} style={{ backgroundColor: colors.surface }}>
        <div className={utils.containerClass}>
          <h2
            className="text-center mb-6 font-bold"
            style={{ fontSize: "20px", color: colors.text }}
          >
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="p-2 flex gap-2 rounded-xl border items-center transition-all duration-300 hover:shadow-md animate-fade-in-up"
                  style={{
                    backgroundColor: colors.surface,
                    borderColor: colors.primaryLight,
                    "--animation-delay": `${index * 100}ms`,
                  } as React.CSSProperties}
                >
                  <Icon
                    className="w-10 h-10 "
                    style={{ color: colors.primary }}
                  />
                  <div className="">

                  <h3
                    className="font-bold text-sm mb-1"
                    style={{ color: colors.text }}
                  >
                    {skill.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: colors.textLight }}>
                    {skill.desc}
                  </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={`${utils.containerClass} py-4 md:py-8`}>
        <div className="space-y-4">
          <div className="text-center space-y-2">
            <h2
              className="font-bold"
              style={{ fontSize: "20px", color: colors.text }}
            >
              Featured Projects
            </h2>
            <p
              style={{ fontSize: "14px", color: colors.textLight }}
            >
              Production-level applications I've built and deployed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl border overflow-hidden hover:border-opacity-70 hover:shadow-md transition-all duration-300 animate-fade-in-up"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                  "--animation-delay": `${index * 100}ms`,
                } as React.CSSProperties}
              >
                <div
                  className="h-40 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
                  }}
                >
                  {project.icon}
                </div>
                <div className="p-5 space-y-3">
                  <h3
                    className="font-bold text-sm"
                    style={{ color: colors.text }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{ fontSize: "13px", color: colors.textLight }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded"
                        style={{
                          backgroundColor: colors.primaryLight,
                          color: colors.primaryDark,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-2 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 group text-sm"
              style={{ backgroundColor: colors.primary }}
            >
              View All Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-5 md:py-8"
        style={{
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
        }}
      >
        <div className={`${utils.containerClass} text-center space-y-4`}>
          <h2
            className="font-bold text-white"
            style={{ fontSize: "20px" }}
          >
            Let's work together
          </h2>
          <p
            className="text-white opacity-90"
            style={{ fontSize: "14px" }}
          >
            I'm always open to new opportunities and interesting projects
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="mailto:aswinkumarbtechit@gmail.com"
              className="px-5 py-2 text-white rounded-lg font-medium hover:opacity-90 transition-colors duration-300 text-sm"
              style={{ backgroundColor: colors.surface, color: colors.primary }}
            >
              Send me an email
            </a>
            <a
              href="https://linkedin.com/in/aswin-kumar1126ash"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors duration-300 text-sm"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-2"
        style={{background:'#eee'}}
      >
        <div className={`${utils.containerClass}`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div>
              <h3 className="font-bold text-black text-sm mb-2">Aswin Kumar</h3>
              <p className="text-xs">Frontend Developer</p>
            </div>
            <div>
              <h4 className="font-semibold text-black text-xs mb-2">Quick Links</h4>
              <ul className="space-y-1 text-xs">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black text-xs mb-2">Connect</h4>
              <ul className="space-y-1 text-xs">
                <li>
                  <a
                    href="https://github.com/aswinkumar1126"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <Github size={12} /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/aswin-kumar1126ash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <Linkedin size={12} /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black text-xs mb-2">Contact</h4>
              <ul className="space-y-1 text-xs">
                <li className="flex items-center gap-1">
                  <Mail size={12} />
                  <a
                    href="mailto:aswinkumarbtechit@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    aswinkumarbtechit@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-1">
                  <Mail size={12} />
                  <a href="tel:+919342884232" className="hover:text-white transition-colors">
                    +91 9342884232
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div
            className="text-center pt-6 border-t"
            style={{ borderColor: "#333333", fontSize: "12px" }}
          >
            <p>&copy; 2024 Aswin Kumar. All rights reserved.</p>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
