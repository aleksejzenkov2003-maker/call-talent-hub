import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="CallMedia Logo" className="h-12 w-12 object-contain" />
            <span className="text-xl font-bold text-foreground hidden sm:inline">CallMedia</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('responsibilities')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Обязанности
            </button>
            <button onClick={() => scrollToSection('requirements')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Требования
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Преимущества
            </button>
            <button onClick={() => scrollToSection('work-process')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Процесс работы
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </button>
            <Button onClick={() => scrollToSection('application-form')}>
              Оставить заявку
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
            <button onClick={() => scrollToSection('responsibilities')} className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Обязанности
            </button>
            <button onClick={() => scrollToSection('requirements')} className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Требования
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Преимущества
            </button>
            <button onClick={() => scrollToSection('work-process')} className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Процесс работы
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </button>
            <Button onClick={() => scrollToSection('application-form')} className="w-full">
              Оставить заявку
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
