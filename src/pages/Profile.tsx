
import { useEffect, useState } from "react";
import { useUser } from "@/contexts/UserContext";
import Navbar from "@/components/Navbar";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, Star, GitFork, GitBranch, Settings, Plus, Users, Book } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const { username, userAvatar, recentRepositories } = useUser();
  const [activeTab, setActiveTab] = useState("repositories");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [repositories, setRepositories] = useState<any[]>([]);
  
  useEffect(() => {
    // Simulate loading data
    const loadingTimeout = setTimeout(() => {
      setRepositories([
        ...recentRepositories,
        {
          id: "10",
          name: "design-system",
          owner: username,
          description: "A comprehensive design system built with React and Tailwind CSS",
          createdAt: new Date(Date.now() - 20 * 86400000).toISOString(), // 20 days ago
          stars: 56,
          forks: 18,
          watchers: 10,
          isPublic: true
        },
        {
          id: "11",
          name: "state-management",
          owner: username,
          description: "A simple yet powerful state management library for React",
          createdAt: new Date(Date.now() - 45 * 86400000).toISOString(), // 45 days ago
          stars: 37,
          forks: 9,
          watchers: 7,
          isPublic: true
        }
      ]);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(loadingTimeout);
  }, [recentRepositories, username]);

  const handleNewRepo = () => {
    toast.success("Redirecting to new repository page");
  };

  const handleEditProfile = () => {
    toast.success("Profile editing would be implemented in a production app");
  };

  const filteredRepositories = repositories.filter(repo => 
    repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-1/3">
            <div className="flex flex-col items-center md:items-start">
              <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-4">
                <img src={userAvatar} alt={username} />
              </Avatar>
              <h1 className="text-2xl font-bold mb-1">{username}</h1>
              <p className="text-gray-600 mb-4">Developer & Open Source Contributor</p>
              <Button onClick={handleEditProfile} variant="outline" className="mb-6">
                <Settings className="mr-2 h-4 w-4" />
                Edit profile
              </Button>
              
              <div className="w-full">
                <h3 className="font-medium mb-2">About</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Full-stack developer passionate about creating clean, efficient, and user-friendly web applications.
                </p>
                
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">165 followers · 42 following</span>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <Book className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">github.com/{username}</span>
                </div>
                
                <h3 className="font-medium mb-2">Organizations</h3>
                <div className="flex flex-wrap gap-2">
                  <Avatar className="h-10 w-10">
                    <img src="https://github.com/github.png" alt="GitHub" />
                  </Avatar>
                  <Avatar className="h-10 w-10">
                    <img src="https://github.com/reactjs.png" alt="React" />
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <Tabs defaultValue="repositories" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="repositories">Repositories</TabsTrigger>
                <TabsTrigger value="stars">Stars</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
              </TabsList>
              
              <TabsContent value="repositories" className="mt-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <Input
                      placeholder="Find a repository..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="ml-4">
                    <Link to="/new">
                      <Button onClick={handleNewRepo}>
                        <Plus className="mr-2 h-4 w-4" />
                        New
                      </Button>
                    </Link>
                  </div>
                </div>
                
                {isLoading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="animate-pulse">
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      </div>
                    ))}
                  </div>
                ) : filteredRepositories.length > 0 ? (
                  <div className="space-y-6">
                    {filteredRepositories.map((repo) => (
                      <div key={repo.id} className="border-b border-gray-200 pb-6 last:border-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg text-blue-600">
                              <Link to={`/repository/${repo.owner}/${repo.name}`} className="hover:underline">
                                {repo.name}
                              </Link>
                            </h3>
                            {repo.description && (
                              <p className="text-gray-600 mt-1">{repo.description}</p>
                            )}
                            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500">
                              {repo.isPublic ? (
                                <Badge variant="outline">Public</Badge>
                              ) : (
                                <Badge variant="outline">Private</Badge>
                              )}
                              
                              <div className="flex items-center">
                                <Star className="h-4 w-4 mr-1" />
                                <span>{repo.stars}</span>
                              </div>
                              
                              <div className="flex items-center">
                                <GitFork className="h-4 w-4 mr-1" />
                                <span>{repo.forks}</span>
                              </div>
                              
                              <span>Updated on {formatDate(repo.createdAt)}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Star className="h-3.5 w-3.5 mr-1" />
                            Star
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <GitBranch className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No repositories found</h3>
                    <p className="text-gray-500 mb-4">
                      {searchQuery ? "Try different search terms" : "You don't have any repositories yet"}
                    </p>
                    <Link to="/new">
                      <Button onClick={handleNewRepo}>
                        <Plus className="mr-2 h-4 w-4" />
                        Create new repository
                      </Button>
                    </Link>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="stars" className="mt-6">
                <div className="text-center py-12">
                  <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No starred repositories</h3>
                  <p className="text-gray-500">
                    You haven't starred any repositories yet
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="projects" className="mt-6">
                <div className="text-center py-12">
                  <GitBranch className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No projects found</h3>
                  <p className="text-gray-500 mb-4">
                    Create a new project to organize your work
                  </p>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New project
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
