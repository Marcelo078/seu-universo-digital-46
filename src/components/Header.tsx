import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Sparkles } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">
            Seu Universo Digital
          </span>
        </Link>
        
        <nav className="flex items-center space-x-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Home className="h-4 w-4 mr-2" />
              Início
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};