import { Briefcase, GraduationCap, Award, User } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function About() {
  const { colors, utils } = useTheme();

  const experience = [
    {
      title: "Frontend Developer",
      company: "BrighTechSoftware Solutions",
      period: "2024–2025 (1 Year)",
      description: [
        "Developed a full Jewellery E-Commerce Website, including user interface, cart, wishlist, order system & complete Admin Panel",
        "Built and enhanced a Smith Management System with complete CRUD: Daily income/outgoing tracking, Smith job assignments, Workflow Status",
        "Created Sales Dashboard to monitor stock, cancelled bills, and performance metrics",
        "Worked with backend developers and handled basic backend logic when required",
        "Gained strong understanding of corporate workflow, teamwork, Git standards, and production deployment",
      ],
      icon: Briefcase,
    },
  ];

  const skills = {
    frontend: ["React.js", "React Native", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    backend: ["Java", "Basic Backend Knowledge", "API Integrations"],
    tools: ["Git", "MySQL", "State Management", "AI Tools (ChatGPT, GitHub Copilot)"],
    specialties: ["Web Development", "App Development", "E-Commerce", "Dashboard Design", "CRUD Systems"],
  };

  const education = [
    {
      degree: "B.Tech – Information Technology",
      school: "APCE, Kalavai",
      period: "2021–2025",
      details: "CGPA: 8.63",
      icon: GraduationCap,
    },
    {
      degree: "HSC",
      school: "GHSS – Randham",
      period: "Completed",
      details: "Percentage: 88.3%",
      icon: Award,
    },
    {
      degree: "SSLC",
      school: "GHSS – Randham",
      period: "Completed",
      details: "Percentage: 85.6%",
      icon: Award,
    },
  ];

  const certifications = [
    { name: "Frontend Development", provider: "Udemy", status: "Completed" },
    { name: "Full Stack Development", provider: "In Progress", status: "In Progress" },
    { name: "Cisco Computer Networking", provider: "Studying", status: "In Progress" },
    { name: "Web & App Development Internship", provider: "3 months", status: "Completed" },
  ];

  return (
    <div style={{ backgroundColor: colors.background, color: colors.text }}>
      {/* Hero Section */}
      <section className={`${utils.containerClass} py-4 md:py-8`}>
        <div className="text-center space-y-3 mb-4">
          <h1
            className="font-bold"
            style={{ fontSize: "20px", color: colors.text }}
          >
            About Me
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: colors.textLight,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Frontend Developer with 1 year of real-time corporate experience, building
            production-level applications and driving innovation through code.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {[
            { label: "Years Experience", value: "1+" },
            { label: "Projects Completed", value: "5+" },
            { label: "Lines of Code", value: "10K+" },
            { label: "Technologies", value: "15+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-lg border p-2 text-center transition-all duration-300 hover:shadow-sm"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
            >
              <div
                className="font-bold"
                style={{ fontSize: "18px", color: colors.primary }}
              >
                {stat.value}
              </div>
              <p style={{ fontSize: "12px", color: colors.textLight, marginTop: "4px" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Profile Overview */}
      <section className={`py-4 md:py-8`} style={{ backgroundColor: colors.surface }}>
        <div className={utils.containerClass}>
          <div className="flex items-start gap-6">
            <div
              className="hidden md:flex w-24 h-24 rounded-full flex-shrink-0 items-center justify-center text-white text-5xl"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
              }}
            >
              <User size={48} />
            </div>
            <div className="flex-1 space-y-3">
              <h2
                className="font-bold"
                style={{ fontSize: "18px", color: colors.text }}
              >
                Professional Profile
              </h2>
              <div style={{ fontSize: "14px", color: colors.textLight, lineHeight: "1.6" }}>
                <p className="mb-2">
                  I'm a Frontend Developer with 1 year of real-time corporate experience working
                  across web and mobile application development. I have strong hands-on experience
                  in building production-level applications.
                </p>
                <p className="mb-2">
                  My portfolio includes a fully functional Jewellery E-Commerce Website (currently
                  live), Smith Management CRUD System, and Sales Dashboard for stock & billing
                  insights. I'm experienced in React.js, React Native, JavaScript, API
                  integrations, and basic backend development.
                </p>
                <p>
                  I actively use AI tools to speed up debugging, documentation, and development
                  workflows. I'm passionate about continuous learning and staying up-to-date with
                  the latest technologies in the web development space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className={`${utils.containerClass} py-4 md:py-6`}>
        <h2
          className="font-bold mb-2"
          style={{ fontSize: "18px", color: colors.text }}
        >
          Experience
        </h2>
        <div className="space-y-4">
          {experience.map((job, index) => {
            const Icon = job.icon;
            return (
              <div
                key={index}
                className="rounded-xl border p-3 transition-all duration-300 hover:shadow-sm"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded" style={{ backgroundColor: colors.primaryLight }}>
                    <Icon
                      className="w-5 h-5"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-bold text-sm"
                      style={{ color: colors.text }}
                    >
                      {job.title}
                    </h3>
                    <p style={{ fontSize: "13px", color: colors.textLight }}>
                      {job.company}
                    </p>
                    <p style={{ fontSize: "12px", color: colors.textLight }}>
                      {job.period}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-2">
                  {job.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2"
                      style={{ fontSize: "13px", color: colors.textLight }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: colors.primary }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Skills */}
      <section className={`py-4 md:py-8`} style={{ backgroundColor: colors.surface }}>
        <div className={utils.containerClass}>
          <h2
            className="font-bold mb-2"
            style={{ fontSize: "18px", color: colors.text }}
          >
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-2">
                <h3
                  className="font-bold text-sm capitalize"
                  style={{ color: colors.text }}
                >
                  {category.replace(/([A-Z])/g, " $1")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-300"
                      style={{
                        backgroundColor: colors.primaryLight,
                        color: colors.primaryDark,
                        borderColor: colors.primary,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className={`${utils.containerClass} py-4 md:py-6`}>
        <h2
          className="font-bold mb-2"
          style={{ fontSize: "18px", color: colors.text }}
        >
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className="rounded-xl border p-5 transition-all duration-300 hover:shadow-sm"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-5 h-5" style={{ color: colors.primary }} />
                  <p style={{ fontSize: "12px", color: colors.textLight }}>
                    {edu.period}
                  </p>
                </div>
                <h3
                  className="font-bold text-sm mb-1"
                  style={{ color: colors.text }}
                >
                  {edu.degree}
                </h3>
                <p style={{ fontSize: "13px", color: colors.textLight, marginBottom: "8px" }}>
                  {edu.school}
                </p>
                <p style={{ fontSize: "12px", color: colors.primary, fontWeight: "500" }}>
                  {edu.details}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Certifications */}
      <section className={`py-4 md:py-6`} style={{ backgroundColor: colors.surface }}>
        <div className={utils.containerClass}>
          <h2
            className="font-bold mb-2"
            style={{ fontSize: "18px", color: colors.text }}
          >
            Certifications & Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="rounded-lg border p-4 flex items-center justify-between transition-all duration-300"
                style={{
                  backgroundColor: colors.background,
                  borderColor: colors.primary,
                }}
              >
                <div>
                  <h3
                    className="font-bold text-sm"
                    style={{ color: colors.text }}
                  >
                    {cert.name}
                  </h3>
                  <p style={{ fontSize: "12px", color: colors.textLight }}>
                    {cert.provider}
                  </p>
                </div>
                <span
                  className="px-2 py-1 rounded text-xs font-semibold"
                  style={{
                    backgroundColor:
                      cert.status === "Completed" ? colors.primaryLight : "#fef3c7",
                    color:
                      cert.status === "Completed" ? colors.primaryDark : "#92400e",
                  }}
                >
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className={`${utils.containerClass} py-4 md:py-6`}>
        <h2
          className="font-bold mb-2"
          style={{ fontSize: "18px", color: colors.text }}
        >
          Languages
        </h2>
        <div className="flex  gap-4">
          {["English", "Tamil"].map((lang) => (
            <div
              key={lang}
              className="rounded-lg border p-2 flex items-center justify-between transition-all duration-300 hover:shadow-sm"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "500", color: colors.text }}>
                {lang}
              </span>
              {/* <div className="w-24 h-2 rounded-full overflow-hidden" style={{ backgroundColor: colors.border }}>
                <div
                  className="h-full w-5/6"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryDark})`,
                  }}
                />
              </div> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
