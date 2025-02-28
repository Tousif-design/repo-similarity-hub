
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-100 p-3 rounded-full">
            <AlertTriangle className="h-12 w-12 text-yellow-600" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Page not found</h1>
        <p className="text-lg text-gray-600 mb-8">
          We couldn't find the page you're looking for. The page may have been moved or deleted.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" size="lg">
            <Link to="/">Go to Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/explore">Explore Repositories</Link>
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-gray-500">
          Error: 404 | Path: {location.pathname}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
