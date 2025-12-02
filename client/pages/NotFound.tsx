import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const NotFound = () => {
  const { colors, utils } = useTheme();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: colors.background }}
    >
      <div className="text-center space-y-6 px-6 max-w-2xl">
        <div className="space-y-3">
          <h1
            className="font-bold"
            style={{
              fontSize: "80px",
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </h1>
          <h2 className="font-bold" style={{ fontSize: "20px", color: colors.text }}>
            Page Not Found
          </h2>
          <p style={{ fontSize: "14px", color: colors.textLight }}>
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2 text-white rounded-lg font-medium transition-all duration-300 hover:opacity-90 text-sm"
            style={{ backgroundColor: colors.primary }}
          >
            <ArrowLeft size={16} />
            Go Back Home
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-colors duration-300 text-sm border-2"
            style={{
              borderColor: colors.primary,
              color: colors.primary,
              backgroundColor: "transparent",
            }}
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
