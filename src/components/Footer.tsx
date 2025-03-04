
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-mono font-semibold text-lg tracking-tight">
              GlobeTrotta<span className="text-primary">Tech</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {currentYear} GlobeTrotta Tech. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter/X"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="border-t pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <div className="flex space-x-4 mb-4 md:mb-0">
                <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
              </div>
              <p>
                Made with precision for better financial decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
