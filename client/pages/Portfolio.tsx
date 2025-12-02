import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Portfolio() {
  const { colors, utils } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Jewellery E-Commerce Website",
      category: "ecommerce",
      description:
        "A full-featured e-commerce platform for jewelry products with advanced features including shopping cart, wishlist, order management system, and a comprehensive admin panel for inventory and sales management.",
      image: "🛍️",
      technologies: ["React.js", "JavaScript", "CSS", "Java", "MySQL"],
      features: [
        "Customer product browsing and filtering",
        "Shopping cart and wishlist functionality",
        "Order management system",
        "Admin dashboard for inventory",
        "Payment integration",
        "User authentication",
      ],
      status: "Live",
      year: "2023-2024",
    },
    {
      id: 2,
      title: "Smith Management System",
      category: "crm",
      description:
        "A comprehensive CRUD-based system designed for managing smith operations including daily income/outgoing tracking, job assignments, and workflow status monitoring.",
      image: "⚙️",
      technologies: ["React.js", "JavaScript", "CSS", "Java", "MySQL"],
      features: [
        "Income/outgoing tracking",
        "Smith job assignments",
        "Workflow status management",
        "Real-time updates",
        "Data reporting",
        "User roles and permissions",
      ],
      status: "Production",
      year: "2023-2024",
    },
    {
      id: 3,
      title: "Sales Dashboard",
      category: "dashboard",
      description:
        "An analytics and performance monitoring dashboard providing real-time insights into stock levels, cancelled bills, and key performance metrics for data-driven decision making.",
      image: "📊",
      technologies: ["React.js", "JavaScript", "CSS", "Analytics"],
      features: [
        "Real-time stock monitoring",
        "Cancelled bills tracking",
        "Performance metrics visualization",
        "Custom report generation",
        "Data export functionality",
        "Interactive charts and graphs",
      ],
      status: "Production",
      year: "2024",
    },
    {
      id: 4,
      title: "Time Tracking Mini Project",
      category: "utility",
      description:
        "A lightweight CRUD application for tracking work logs and managing time entries with a simple but effective interface for personal and team productivity tracking.",
      image: "⏱️",
      technologies: ["React.js", "JavaScript", "CSS"],
      features: [
        "Create work log entries",
        "Edit and delete logs",
        "View work history",
        "Time duration tracking",
        "Simple user interface",
      ],
      status: "Completed",
      year: "2023",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "crm", label: "CRM & Management" },
    { id: "dashboard", label: "Dashboards" },
    { id: "utility", label: "Utilities" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ backgroundColor: colors.background, color: colors.text }}>
      {/* Hero Section */}
      <section className={`${utils.containerClass} py-10 md:py-12`}>
        <div className="text-center space-y-3 mb-8">
          <h1
            className="font-bold"
            style={{ fontSize: "20px", color: colors.text }}
          >
            My Portfolio
          </h1>
          <p style={{ fontSize: "14px", color: colors.textLight, maxWidth: "700px", margin: "0 auto" }}>
            Production-level applications and projects that showcase my expertise in
            frontend development and full-stack integration
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className="px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm"
              style={{
                backgroundColor: selectedCategory === cat.id ? colors.primary : colors.surface,
                color: selectedCategory === cat.id ? "white" : colors.text,
                border: `1px solid ${selectedCategory === cat.id ? colors.primary : colors.border}`,
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className={`${utils.containerClass} pb-10 md:pb-12`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-in-up"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
                "--animation-delay": `${index * 100}ms`,
              } as React.CSSProperties}
            >
              {/* Project Image */}
              <div
                className="h-36 flex items-center justify-center text-7xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
                }}
              >
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-4 space-y-3">
                {/* Header */}
                <div className="space-y-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-sm" style={{ color: colors.text }}>
                      {project.title}
                    </h3>
                    <span
                      className="px-2 py-1 rounded text-xs font-semibold whitespace-nowrap"
                      style={{
                        backgroundColor: colors.primaryLight,
                        color: colors.primaryDark,
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p style={{ fontSize: "12px", color: colors.textLight }}>
                    {project.year}
                  </p>
                </div>

                {/* Description */}
                <p style={{ fontSize: "13px", color: colors.textLight, lineHeight: "1.5" }}>
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-1">
                  <h4 className="font-semibold text-xs" style={{ color: colors.text }}>
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-1"
                        style={{ fontSize: "12px", color: colors.textLight }}
                      >
                        <span
                          className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: colors.primary }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-2 pt-2 border-t" style={{ borderColor: colors.border }}>
                  <h4 className="font-semibold text-xs" style={{ color: colors.text }}>
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded border"
                        style={{
                          backgroundColor: colors.primaryLight,
                          color: colors.primaryDark,
                          borderColor: colors.primary,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p style={{ fontSize: "14px", color: colors.textLight }}>
              No projects in this category. Check back soon!
            </p>
          </div>
        )}
      </section>

      {/* Tech Stack Section */}
      <section className={`py-10 md:py-12`} style={{ backgroundColor: colors.surface }}>
        <div className={utils.containerClass}>
          <h2
            className="text-center font-bold mb-8"
            style={{ fontSize: "18px", color: colors.text }}
          >
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 style={{ fontSize: "14px", fontWeight: "600", color: colors.primary }}>
                Frontend
              </h3>
              <ul className="space-y-1">
                {["React.js", "React Native", "JavaScript", "HTML & CSS", "Tailwind CSS", "Bootstrap"].map(
                  (tech) => (
                    <li key={tech} className="flex items-center gap-2 text-sm" style={{ color: colors.textLight }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: colors.primary }}
                      />
                      {tech}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 style={{ fontSize: "14px", fontWeight: "600", color: colors.primary }}>
                Backend
              </h3>
              <ul className="space-y-1">
                {["Java", "API Integration", "MySQL", "Basic Backend", "Server Management"].map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-sm" style={{ color: colors.textLight }}>
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: colors.primary }}
                    />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 style={{ fontSize: "14px", fontWeight: "600", color: colors.primary }}>
                Tools & Services
              </h3>
              <ul className="space-y-1">
                {["Git & GitHub", "MySQL Database", "State Management", "API Integration", "Development Tools"].map(
                  (tech) => (
                    <li key={tech} className="flex items-center gap-2 text-sm" style={{ color: colors.textLight }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: colors.primary }}
                      />
                      {tech}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`${utils.containerClass} py-10 md:py-12 text-center space-y-4`}>
        <h2
          className="font-bold"
          style={{ fontSize: "18px", color: colors.text }}
        >
          Interested in my work?
        </h2>
        <p style={{ fontSize: "14px", color: colors.textLight }}>
          I'm always open to discussing new projects and opportunities. Let's connect and
          build something amazing together.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href="https://github.com/aswinkumar1126"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 text-white rounded-lg font-medium transition-opacity duration-300 hover:opacity-90 text-sm"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <Github size={16} />
            View on GitHub
          </a>
          <a
            href="mailto:aswinkumarbtechit@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2 text-white rounded-lg font-medium transition-opacity duration-300 hover:opacity-90 text-sm"
            style={{ backgroundColor: colors.primary }}
          >
            <ExternalLink size={16} />
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}
