
import { useState, useEffect } from 'react';
import { Bell, Search, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { label: 'Dashboard', href: '#' },
    { label: 'Markets', href: '#' },
    { label: 'Watchlist', href: '#' },
    { label: 'Analysis', href: '#' },
    { label: 'News', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="font-mono font-semibold text-lg md:text-xl tracking-tight">
              GlobeTrotta<span className="text-primary">Tech</span>
            </div>
            
            {!isMobile && (
              <nav className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            )}
          </div>

          <div className="flex items-center space-x-3">
            {!isMobile && (
              <div className="relative w-44 lg:w-64 transition-all">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 bg-secondary/50 border-0 focus-visible:ring-1"
                />
              </div>
            )}

            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Bell className="h-5 w-5" />
            </Button>

            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                  <div className="flex flex-col h-full">
                    <div className="py-6">
                      <div className="relative mb-6">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search..."
                          className="pl-8 bg-background w-full"
                        />
                      </div>
                      <nav className="flex flex-col space-y-5">
                        {navItems.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors py-1"
                          >
                            {item.label}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
