
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AlertTriangle, Home, Search, ArrowLeft, User, Book, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [suggestedLabel, setSuggestedLabel] = useState<string | null>(null);

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
    const lowercasePath = path.toLowerCase();
    
    if (lowercasePath.includes('/user') || lowercasePath.includes('/profile')) {
      setSuggestion("/profile");
      setSuggestedLabel("Your Profile");
    } else if (lowercasePath.includes('/repo') || lowercasePath.includes('/repository')) {
      setSuggestion("/explore");
      setSuggestedLabel("Explore Repositories");
    } else if (lowercasePath.includes('/trend')) {
      setSuggestion("/trending");
      setSuggestedLabel("Trending Repositories");
    } else if (lowercasePath.includes('/doc') || lowercasePath.includes('/docs') || lowercasePath.includes('/help')) {
      setSuggestion("/documentation");
      setSuggestedLabel("Documentation");
    } else if (lowercasePath.includes('/new') || lowercasePath.includes('/create')) {
      setSuggestion("/new");
      setSuggestedLabel("Create New Repository");
    } else {
      setSuggestion(null);
      setSuggestedLabel(null);
    }
  };
  
  const handleGoBack = () => {
    navigate(-1);
  };

  const getIconForSuggestion = () => {
    if (suggestion === "/profile") return <User className="h-4 w-4 mr-2" />;
    if (suggestion === "/explore") return <Search className="h-4 w-4 mr-2" />;
    if (suggestion === "/trending") return <TrendingUp className="h-4 w-4 mr-2" />;
    if (suggestion === "/documentation") return <Book className="h-4 w-4 mr-2" />;
    return null;
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
            <Button asChild variant="link" className="text-blue-600 gap-1">
              <Link to={suggestion}>
                {getIconForSuggestion()}
                {suggestedLabel || suggestion}
              </Link>
            </Button>
          </div>
        )}
        
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link to="/profile" className="text-gray-600 hover:text-blue-600 text-sm flex flex-col items-center">
            <User className="h-5 w-5 mb-1" />
            Profile
          </Link>
          <Link to="/documentation" className="text-gray-600 hover:text-blue-600 text-sm flex flex-col items-center">
            <Book className="h-5 w-5 mb-1" />
            Documentation
          </Link>
          <Link to="/trending" className="text-gray-600 hover:text-blue-600 text-sm flex flex-col items-center">
            <TrendingUp className="h-5 w-5 mb-1" />
            Trending
          </Link>
          <Link to="/explore" className="text-gray-600 hover:text-blue-600 text-sm flex flex-col items-center">
            <Search className="h-5 w-5 mb-1" />
            Explore
          </Link>
        </div>
        
        <p className="mt-8 text-sm text-gray-500">
          Error: 404 | Path: {location.pathname}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
