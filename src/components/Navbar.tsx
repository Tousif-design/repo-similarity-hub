
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Bell, Plus, GitBranch, Star, Book, Code, GitPullRequest } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // For demo purposes
  
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-3 max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="font-semibold text-xl text-gray-900 flex items-center gap-2">
              <GitBranch className="h-6 w-6" />
              <span>RepoHub</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/explore" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Explore
              </Link>
              <Link to="/trending" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Trending
              </Link>
              <Link to="/docs" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Documentation
              </Link>
            </nav>
          </div>
          
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => navigate("/notifications")}
              >
                <Bell className="h-5 w-5" />
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem onClick={() => navigate("/new")}>
                    New repository
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/import")}>
                    Import repository
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/gist/new")}>
                    New gist
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/organizations/new")}>
                    New organization
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/project/new")}>
                    New project
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-0 h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    Your profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/repositories")}>
                    Your repositories
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/projects")}>
                    Your projects
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/stars")}>
                    Your stars
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/settings")}>
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsLoggedIn(true)}
              >
                Sign in
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
                onClick={() => setIsLoggedIn(true)}
              >
                Sign up
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
