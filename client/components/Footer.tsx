import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowRight, Code2, Zap, Layers } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Footer(){

      const { colors, utils } = useTheme();
    return(
 <div>    
       < footer
        className = "py-2"
    style = {{ background: '#eee' }
}
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
                        <Link to="/" className=" transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="transition-colors">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className=" transition-colors">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className=" transition-colors">
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
                            className="transition-colors flex items-center gap-1"
                        >
                            <Github size={12} /> GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/aswin-kumar1126ash"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" transition-colors flex items-center gap-1"
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
                            className=" transition-colors"
                        >
                            aswinkumarbtechit@gmail.com
                        </a>
                    </li>
                    <li className="flex items-center gap-1">
                        <Mail size={12} />
                        <a href="tel:+919342884232" className=" transition-colors">
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
      </footer >
        </div>

    )
}