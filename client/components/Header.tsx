import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, colors, utils } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 shadow-sm z-50 transition-colors duration-300"
      style={{
        backgroundColor: colors.background,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <nav className={`${utils.containerClass} py-3 flex items-center justify-between`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
            }}
          >
            AK
          </div>
          <span
            className="font-bold text-sm hidden sm:inline"
            style={{ color: colors.text }}
          >
            Aswin Kumar
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="relative font-medium transition-colors duration-300 group text-sm"
              style={{ color: colors.text }}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: colors.primary }}
              />
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors duration-300"
            style={{ backgroundColor: colors.surface }}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <Moon size={18} style={{ color: colors.primary }} />
            ) : (
              <Sun size={18} style={{ color: colors.primary }} />
            )}
          </button> */}
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

          
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 transition-colors"
          style={{ color: colors.text }}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="md:hidden border-t transition-colors duration-300"
          style={{ backgroundColor: colors.surface, borderColor: colors.border }}
        >
          <div className={`${utils.containerClass} py-3 space-y-2`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block py-2 font-medium transition-colors text-sm"
                style={{ color: colors.text }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* <button
              onClick={toggleTheme}
              className="w-full py-2 px-3 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors duration-300 mt-2"
              style={{ backgroundColor: colors.primary, color: colors.primaryLight }}
            >
              {theme === "light" ? (
                <>
                  <Moon size={16} /> Dark Mode
                </>
              ) : (
                <>
                  <Sun size={16} /> Light Mode
                </>
              )}
            </button> */}
            <a
              href="https://github.com/aswinkumar1126"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-3 text-white rounded-lg font-medium text-center transition-opacity duration-300 hover:opacity-90 text-sm"
              style={{ backgroundColor: colors.primary }}
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
