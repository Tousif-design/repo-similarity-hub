
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { HomeIcon, Search, Book, GitBranch, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Log 404 errors (in a production app, this could send to an error tracking service)
    console.error(`404 Error: User attempted to access non-existent route: ${location.pathname}`);
  }, [location.pathname]);

  // Suggest relevant pages based on the path the user tried to access
  const getSuggestions = () => {
    const path = location.pathname.toLowerCase();
    
    if (path.includes('repo') || path.includes('repository')) {
      return [
        { label: "Explore repositories", path: "/explore", icon: <Search className="mr-2 h-4 w-4" /> },
        { label: "Create new repository", path: "/new", icon: <GitBranch className="mr-2 h-4 w-4" /> }
      ];
    }
    
    if (path.includes('doc') || path.includes('help') || path.includes('guide')) {
      return [
        { label: "View documentation", path: "/documentation", icon: <Book className="mr-2 h-4 w-4" /> }
      ];
    }
    
    if (path.includes('trend') || path.includes('popular')) {
      return [
        { label: "See trending repositories", path: "/trending", icon: <GitBranch className="mr-2 h-4 w-4" /> }
      ];
    }
    
    if (path.includes('prof') || path.includes('user') || path.includes('account')) {
      return [
        { label: "Go to your profile", path: "/profile", icon: <Search className="mr-2 h-4 w-4" /> }
      ];
    }
    
    // Default suggestions
    return [
      { label: "Explore repositories", path: "/explore", icon: <Search className="mr-2 h-4 w-4" /> },
      { label: "View documentation", path: "/documentation", icon: <Book className="mr-2 h-4 w-4" /> }
    ];
  };

  const suggestions = getSuggestions();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <div className="text-center max-w-lg">
          <AlertCircle className="h-20 w-20 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link to="/">
                <HomeIcon className="mr-2 h-4 w-4" />
                Go to Homepage
              </Link>
            </Button>
            
            {suggestions.map((suggestion, index) => (
              <Button 
                key={index} 
                variant="outline" 
                asChild
                className="w-full"
              >
                <Link to={suggestion.path}>
                  {suggestion.icon}
                  {suggestion.label}
                </Link>
              </Button>
            ))}
          </div>
          
          <p className="mt-8 text-sm text-gray-500">
            If you believe this is an error, please <Link to="/documentation" className="text-blue-600 hover:underline">contact support</Link> or <Link to="/profile" className="text-blue-600 hover:underline">visit your profile</Link>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
