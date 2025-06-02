import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Bell, Plus, GitBranch, Star, Book, Code, GitPullRequest, Search, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // For demo purposes
  
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-3 max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="font-semibold text-xl text-gray-900 flex items-center gap-2 hover:text-orange-600 transition-colors">
              <GitBranch className="h-6 w-6 text-orange-500" />
              <span>RepoHub</span>
            </Link>
            
            <div className="hidden md:flex relative">
              <input 
                type="text" 
                placeholder="Search or jump to..." 
                className="pl-3 pr-8 py-1.5 text-sm border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 border border-gray-400 text-gray-400 rounded px-1 text-xs">/</div>
            </div>
            
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={cn(
                      navigationMenuTriggerStyle(), 
                      "text-gray-700 hover:text-orange-600 flex items-center gap-2",
                      location.pathname === "/" && "text-orange-600 bg-orange-50"
                    )}
                  >
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-orange-600">Product</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-100 to-amber-100 p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <GitBranch className="h-6 w-6 text-orange-500" />
                            <div className="mb-2 mt-4 text-lg font-medium text-orange-900">
                              RepoHub
                            </div>
                            <p className="text-sm leading-tight text-orange-800">
                              A comprehensive platform for all your development needs.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/actions" 
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                          >
                            <div className="text-sm font-medium leading-none">Actions</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                              Automate your workflow with CI/CD.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/packages" 
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                          >
                            <div className="text-sm font-medium leading-none">Packages</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                              Host and manage packages for your projects.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/security" 
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                          >
                            <div className="text-sm font-medium leading-none">Security</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                              Keep your code secure and compliant.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/explore" 
                    className={cn(
                      navigationMenuTriggerStyle(), 
                      "text-gray-700 hover:text-orange-600",
                      location.pathname === "/explore" && "text-orange-600 bg-orange-50"
                    )}
                  >
                    Explore
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/trending" 
                    className={cn(
                      navigationMenuTriggerStyle(), 
                      "text-gray-700 hover:text-orange-600",
                      location.pathname === "/trending" && "text-orange-600 bg-orange-50"
                    )}
                  >
                    Trending
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                onClick={() => navigate("/notifications")}
              >
                <Bell className="h-5 w-5" />
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white">
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
                <DropdownMenuContent align="end" className="w-56 bg-white">
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
                className="text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                onClick={() => navigate("/signin")}
              >
                Sign in
              </Button>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-200"
                onClick={() => navigate("/signup")}
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
