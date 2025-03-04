
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center space-y-6 animate-fade-in">
        <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-2">
          <span className="text-3xl font-mono">404</span>
        </div>
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
        <Button asChild className="mt-6">
          <a href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
