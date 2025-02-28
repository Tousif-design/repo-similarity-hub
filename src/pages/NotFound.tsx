
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AlertTriangle, Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [suggestion, setSuggestion] = useState<string | null>(null);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Show toast message
    toast.error(`Page not found: ${location.pathname}`, {
      description: "The page you're looking for doesn't exist or was moved.",
      action: {
        label: "Go Home",
        onClick: () => navigate("/"),
      },
    });
    
    // Generate a suggestion based on the path
    generateSuggestion(location.pathname);
  }, [location.pathname, navigate]);
  
  const generateSuggestion = (path: string) => {
    // This would be more sophisticated in a real app
    if (path.includes('/user/')) {
      setSuggestion("/explore");
    } else if (path.includes('/repository/')) {
      setSuggestion("/explore");
    } else if (path.includes('/trending/')) {
      setSuggestion("/trending");
    } else if (path.includes('/doc')) {
      setSuggestion("/documentation");
    } else {
      setSuggestion(null);
    }
  };
  
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-100 p-5 rounded-full">
            <AlertTriangle className="h-14 w-14 text-yellow-600" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 text-gray-900">404</h1>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Page not found</h2>
        <p className="text-lg text-gray-600 mb-8">
          We couldn't find the page you're looking for. The page may have been moved or deleted.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            variant="default" 
            size="lg" 
            className="gap-2" 
            onClick={handleGoBack}
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
          
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link to="/">
              <Home className="h-4 w-4" />
              Go to Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link to="/explore">
              <Search className="h-4 w-4" />
              Explore Repositories
            </Link>
          </Button>
        </div>
        
        {suggestion && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-700 mb-2">You might be looking for:</p>
            <Button asChild variant="link" className="text-blue-600">
              <Link to={suggestion}>
                {suggestion === "/explore" ? "Explore Repositories" : 
                 suggestion === "/trending" ? "Trending Repositories" : 
                 suggestion === "/documentation" ? "Documentation" : suggestion}
              </Link>
            </Button>
          </div>
        )}
        
        <p className="mt-8 text-sm text-gray-500">
          Error: 404 | Path: {location.pathname}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
