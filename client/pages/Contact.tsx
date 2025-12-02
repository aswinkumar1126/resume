import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Contact() {
  const { colors, utils } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:aswinkumarbtechit@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "aswinkumarbtechit@gmail.com",
      link: "mailto:aswinkumarbtechit@gmail.com",
      description: "Reach out to me via email",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9342884232",
      link: "tel:+919342884232",
      description: "Call or message me",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kalavai, Tamilnadu, India",
      link: "#",
      description: "Available for remote and on-site work",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/aswinkumar1126",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/aswin-kumar1126ash",
      icon: Linkedin,
    },
  ];

  return (
    <div style={{ backgroundColor: colors.background, color: colors.text }}>
      {/* Hero Section */}
      <section className={`${utils.containerClass} py-3 md:py-6`}>
        <div className="text-center space-y-3 mb-2">
          <h1
            className="font-bold"
            style={{ fontSize: "20px", color: colors.text }}
          >
            Get In Touch
          </h1>
          <p style={{ fontSize: "14px", color: colors.textLight, maxWidth: "700px", margin: "0 auto" }}>
            I'm always excited to work on new projects and discuss opportunities. Feel free
            to reach out through any of these channels.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className={`${utils.containerClass} pb-3 md:pb-6`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                className="group rounded-lg border p-5 transition-all duration-300 hover:shadow-sm"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                }}
              >
                <div className="p-2 rounded w-fit mb-3" style={{ backgroundColor: colors.primaryLight }}>
                  <Icon className="w-5 h-5" style={{ color: colors.primary }} />
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: colors.text }}>
                  {method.title}
                </h3>
                <p style={{ fontSize: "13px", color: colors.textLight, marginBottom: "8px" }}>
                  {method.description}
                </p>
                <p className="font-semibold text-sm" style={{ color: colors.primary }}>
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={`py-3 md:py-6`} style={{ backgroundColor: colors.surface }}>
        <div className="max-w-2xl mx-auto px-2">
          <h2
            className="text-center font-bold mb-2"
            style={{ fontSize: "18px", color: colors.text }}
          >
            Send me a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1">
                <label
                  className="block text-xs font-semibold"
                  style={{ color: colors.text }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-sm transition-all duration-300 text-sm"
                  style={{
                    border: `1px solid ${colors.border}`,
                    backgroundColor: colors.background,
                    color: colors.text,
                  }}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label
                  className="block text-xs font-semibold"
                  style={{ color: colors.text }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 rounded-sm transition-all duration-300 text-sm"
                  style={{
                    border: `1px solid ${colors.border}`,
                    backgroundColor: colors.background,
                    color: colors.text,
                  }}
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1">
              <label
                className="block text-xs font-semibold"
                style={{ color: colors.text }}
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project proposal"
                className="w-full px-4 py-2 rounded-sm transition-all duration-300 text-sm"
                style={{
                  border: `1px solid ${colors.border}`,
                  backgroundColor: colors.background,
                  color: colors.text,
                }}
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label
                className="block text-xs font-semibold"
                style={{ color: colors.text }}
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or inquiry..."
                rows={4}
                className="w-full px-4 py-2 rounded-sm transition-all duration-300 text-sm resize-none"
                style={{
                  border: `1px solid ${colors.border}`,
                  backgroundColor: colors.background,
                  color: colors.text,
                }}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-white text-sm"
                style={{
                  backgroundColor: submitted ? colors.primary : colors.primary,
                  opacity: submitted ? 0.8 : 1,
                }}
              >
                {submitted ? "Message sent! Opening email..." : "Send Message"}
              </button>
            </div>
          </form>

          <p
            className="text-center text-xs mt-4"
            style={{ color: colors.textLight }}
          >
            Submitting this form will open your default email client. Alternatively, you can
            email me directly at{" "}
            <a
              href="mailto:aswinkumarbtechit@gmail.com"
              className="font-semibold"
              style={{ color: colors.primary }}
            >
              aswinkumarbtechit@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Social Links */}
      <section className={`${utils.containerClass} py-3 md:py-6`}>
        <div
          className="rounded-2xl border p-4 space-y-2"
          style={{
            backgroundColor: colors.surface,
            borderColor: colors.primary,
          }}
        >
          <div className="text-center space-y-2">
            <h2
              className="font-bold"
              style={{ fontSize: "18px", color: colors.text }}
            >
              Connect With Me
            </h2>
            <p style={{ fontSize: "14px", color: colors.textLight }}>
              Follow me on social media to stay updated with my latest work and insights
            </p>
          </div>

          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                    color: colors.primary,
                  }}
                  title={link.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
            <a
              href="https://github.com/aswinkumar1126"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg p-4 transition-all duration-300 hover:shadow-sm"
              style={{
                backgroundColor: colors.background,
                borderColor: colors.border,
              }}
            >
              <div>
                <h3 className="font-bold text-sm" style={{ color: colors.text }}>
                  GitHub
                </h3>
                <p style={{ fontSize: "12px", color: colors.textLight }}>
                  github.com/aswinkumar1126
                </p>
              </div>
              <ExternalLink
                size={18}
                style={{ color: colors.textLight }}
              />
            </a>

            <a
              href="https://linkedin.com/in/aswin-kumar1126ash"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg p-4 transition-all duration-300 hover:shadow-sm"
              style={{
                backgroundColor: colors.background,
              }}
            >
              <div>
                <h3 className="font-bold text-sm" style={{ color: colors.text }}>
                  LinkedIn
                </h3>
                <p style={{ fontSize: "12px", color: colors.textLight }}>
                  linkedin.com/in/aswin-kumar1126ash
                </p>
              </div>
              <ExternalLink
                size={18}
                style={{ color: colors.textLight }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className={`${utils.containerClass} py-2 md:py-4`}>
        <h2
          className="text-center font-bold mb-2"
          style={{ fontSize: "18px", color: colors.text }}
        >
          Why Work With Me?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: "⚡",
              title: "Fast & Efficient",
              description: "Quick turnaround times with attention to detail and quality code",
            },
            {
              icon: "🎯",
              title: "Focused Approach",
              description: "Clear communication and understanding of project requirements",
            },
            {
              icon: "🚀",
              title: "Production Ready",
              description: "Code that's optimized, tested, and ready for deployment",
            },
          ].map((fact, index) => (
            <div
              key={index}
              className="text-center space-y-2 p-5 rounded-lg border transition-all duration-300 hover:shadow-sm"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
            >
              <div className="text-4xl">{fact.icon}</div>
              <h3 className="font-bold text-sm" style={{ color: colors.text }}>
                {fact.title}
              </h3>
              <p style={{ fontSize: "13px", color: colors.textLight }}>
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Response Time */}
      <section
        className={`${utils.containerClass} py-2 md:py-4 text-white`}
        style={{
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
        }}
      >
        <div className="text-center text-white space-y-2">
          <h3 className="font-bold text-white" style={{ fontSize: "16px" }}>
            Typical Response Time
          </h3>
          <p style={{ fontSize: "13px" }} className="text-white">
            I usually respond to messages within 24 hours. For urgent matters, feel free to
            call or message me directly.
          </p>
          <div className="flex justify-center gap-3 flex-wrap pt-2">
            <span
              className="px-3 py-1 rounded-full text-xs text-white" 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              📧 Email: 24 hours
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs text-white"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              📞 Phone: Same day
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs text-white"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              💬 Message: A few hours
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
