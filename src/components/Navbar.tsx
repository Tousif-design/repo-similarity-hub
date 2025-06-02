import { useState, useEffect } from "react";
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
import { 
  Bell, 
  Plus, 
  GitBranch, 
  Star, 
  Book, 
  Code, 
  GitPullRequest, 
  Search, 
  Home, 
  Command,
  Zap,
  Crown,
  Sparkles,
  Shield,
  Target,
  Workflow,
  Clock,
  MessageSquare,
  Globe,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showSearchPalette, setShowSearchPalette] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Premium feature: Real-time clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Premium feature: Command palette
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowSearchPalette(!showSearchPalette);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [showSearchPalette]);
  
  return (
    <>
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="font-bold text-xl text-gray-900 flex items-center gap-2 hover:text-orange-600 transition-all duration-300 group">
                <div className="relative">
                  <GitBranch className="h-7 w-7 text-orange-500 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse">
                    <Crown className="w-2 h-2 text-white ml-0.5 mt-0.5" />
                  </div>
                </div>
                <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">RepoHub</span>
                <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-0.5 rounded-full font-medium animate-pulse">PRO</span>
              </Link>
              
              {/* Premium AI-powered search */}
              <div className="hidden md:flex relative group">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-orange-500 transition-colors">
                  <Sparkles className="w-4 h-4" />
                </div>
                <input 
                  type="text" 
                  placeholder="AI-powered search..." 
                  className="pl-10 pr-16 py-2 text-sm border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-300"
                  onClick={() => setShowSearchPalette(true)}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  <kbd className="border border-gray-300 text-gray-400 rounded px-1.5 py-0.5 text-xs font-mono">⌘K</kbd>
                </div>
              </div>
              
              <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link 
                      to="/" 
                      className={cn(
                        navigationMenuTriggerStyle(), 
                        "text-gray-700 hover:text-orange-600 flex items-center gap-2 transition-all duration-300",
                        location.pathname === "/" && "text-orange-600 bg-orange-50"
                      )}
                    >
                      <Home className="w-4 h-4" />
                      Home
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-orange-600 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Product
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[500px] gap-3 p-6">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 p-6 no-underline outline-none focus:shadow-md hover:shadow-lg transition-all duration-300 group"
                              to="/"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
                                  <Crown className="h-4 w-4 text-white" />
                                </div>
                                <div className="text-lg font-bold text-orange-900">RepoHub Pro</div>
                              </div>
                              <p className="text-sm leading-tight text-orange-800">
                                Enterprise-grade development platform with AI-powered features and premium support.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link 
                              to="/actions" 
                              className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 group"
                            >
                              <div className="text-sm font-medium leading-none flex items-center gap-2">
                                <Workflow className="w-4 h-4 text-blue-500" />
                                Actions
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Automate your workflow with advanced CI/CD pipelines.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link 
                              to="/packages" 
                              className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 group"
                            >
                              <div className="text-sm font-medium leading-none flex items-center gap-2">
                                <Shield className="w-4 h-4 text-green-500" />
                                Packages
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Host and manage packages with enterprise security.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link 
                              to="/security" 
                              className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 group"
                            >
                              <div className="text-sm font-medium leading-none flex items-center gap-2">
                                <Target className="w-4 h-4 text-red-500" />
                                Security
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                Advanced security scanning and compliance tools.
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
                        "text-gray-700 hover:text-orange-600 flex items-center gap-2",
                        location.pathname === "/explore" && "text-orange-600 bg-orange-50"
                      )}
                    >
                      <Globe className="w-4 h-4" />
                      Explore
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link 
                      to="/trending" 
                      className={cn(
                        navigationMenuTriggerStyle(), 
                        "text-gray-700 hover:text-orange-600 flex items-center gap-2",
                        location.pathname === "/trending" && "text-orange-600 bg-orange-50"
                      )}
                    >
                      <Sparkles className="w-4 h-4" />
                      Trending
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                {/* Premium feature: Live status indicator */}
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">Live</span>
                  <span className="text-xs">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>

                {/* Premium notifications with badge */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 group"
                  onClick={() => navigate("/notifications")}
                >
                  <Bell className="h-5 w-5 group-hover:animate-pulse" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                      {notifications}
                    </span>
                  )}
                </Button>
                
                {/* Premium quick actions */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 group"
                    >
                      <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-64 bg-white border-0 shadow-2xl rounded-xl p-2">
                    <DropdownMenuLabel className="text-gray-700 font-semibold flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-orange-500" />
                      Quick Create
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate("/new")} className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 cursor-pointer transition-colors">
                      <GitBranch className="w-4 h-4 text-orange-500" />
                      <div>
                        <div className="font-medium">New repository</div>
                        <div className="text-xs text-gray-500">Create a new project</div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/import")} className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                      <Code className="w-4 h-4 text-blue-500" />
                      <div>
                        <div className="font-medium">Import repository</div>
                        <div className="text-xs text-gray-500">From existing code</div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate("/organizations/new")} className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors">
                      <Shield className="w-4 h-4 text-purple-500" />
                      <div>
                        <div className="font-medium">New organization</div>
                        <div className="text-xs text-gray-500">Team workspace</div>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                {/* Premium user menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="p-0 h-10 w-10 rounded-full ring-2 ring-orange-200 hover:ring-orange-400 transition-all duration-300">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold">PR</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-72 bg-white border-0 shadow-2xl rounded-xl p-3">
                    <DropdownMenuLabel className="p-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold">PR</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold flex items-center gap-2">
                            Pro User
                            <Crown className="w-4 h-4 text-yellow-500" />
                          </div>
                          <div className="text-sm text-gray-500">premium@repohub.dev</div>
                          <div className="text-xs text-green-600 font-medium">Pro Plan Active</div>
                        </div>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {/* ... keep existing dropdown menu items ... */}
                    <DropdownMenuItem onClick={() => navigate("/profile")} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      Your profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/repositories")} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      Your repositories
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/settings")} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <Settings className="w-4 h-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 cursor-pointer transition-colors text-red-600">
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              // ... keep existing sign in/up buttons ...
              <div className="flex items-center gap-3">
                <Button 
                  variant="ghost" 
                  className="text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
                  onClick={() => navigate("/signin")}
                >
                  Sign in
                </Button>
                <Button 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Premium Command Palette Overlay */}
      {showSearchPalette && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20" onClick={() => setShowSearchPalette(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 border-0 overflow-hidden animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 p-4 border-b border-gray-100">
              <Command className="w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search repositories, users, or use AI commands..." 
                className="flex-1 outline-none text-lg"
                autoFocus
              />
              <kbd className="border border-gray-200 text-gray-400 rounded px-2 py-1 text-sm">ESC</kbd>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Quick Actions</div>
              <div className="space-y-1">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <Plus className="w-4 h-4 text-orange-500" />
                  <span>Create new repository</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span>AI Code Assistant</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <Settings className="w-4 h-4 text-gray-500" />
                  <span>Open settings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
