import { Link } from "react-router-dom";
import logoShark from "@/assets/logo-shark.png";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoShark} alt="SMBH" className="h-10" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://t.me/recruit_smbh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Telegram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/60">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <span className="hidden md:inline">•</span>
            <span>© {new Date().getFullYear()} SMBH</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
