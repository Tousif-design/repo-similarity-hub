
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "@/contexts/UserContext";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Home, Star, GitFork, Clock, Settings, Shield, Key } from "lucide-react";

const Profile = () => {
  const { username, userAvatar, recentRepositories } = useUser();

  useEffect(() => {
    document.title = `${username} - Profile`;
  }, [username]);

  const handleSettingsSave = () => {
    toast.success("Settings saved successfully");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <Card className="p-6">
            <div className="flex flex-col items-center mb-6">
              <Avatar className="h-32 w-32 mb-4">
                <AvatarImage src={userAvatar} alt={username} />
                <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold">{username}</h2>
              <p className="text-muted-foreground">Developer</p>
              
              <div className="mt-4 w-full">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/new">Create Repository</Link>
                </Button>
              </div>
            </div>
            
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/explore">
                  <Star className="mr-2 h-4 w-4" />
                  Explore
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/trending">
                  <GitFork className="mr-2 h-4 w-4" />
                  Trending
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/documentation">
                  <Clock className="mr-2 h-4 w-4" />
                  Documentation
                </Link>
              </Button>
            </div>
          </Card>
        </div>
        
        {/* Main content */}
        <div className="w-full md:w-3/4">
          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="repositories">Repositories</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Activity Overview</h3>
                <p className="text-muted-foreground mb-6">
                  Welcome to your profile! This is where you can see your activity and recent repositories.
                </p>
                
                <h4 className="font-medium mb-2">Recent Activity</h4>
                {recentRepositories.length > 0 ? (
                  <ul className="space-y-2">
                    {recentRepositories.map((repo) => (
                      <li key={repo.id} className="border-b pb-2">
                        <Link 
                          to={`/repository/${repo.owner}/${repo.name}`}
                          className="hover:underline text-blue-600"
                        >
                          {repo.owner}/{repo.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          Last viewed on {new Date(repo.createdAt).toLocaleDateString()}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">
                    You haven't interacted with any repositories yet.
                  </p>
                )}
              </Card>
            </TabsContent>
            
            <TabsContent value="repositories">
              <Card className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Your Repositories</h3>
                  <Button asChild>
                    <Link to="/new">New Repository</Link>
                  </Button>
                </div>
                
                {recentRepositories.length > 0 ? (
                  <ul className="space-y-4">
                    {recentRepositories.map((repo) => (
                      <li key={repo.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <Link 
                              to={`/repository/${repo.owner}/${repo.name}`}
                              className="text-lg font-medium hover:underline text-blue-600"
                            >
                              {repo.name}
                            </Link>
                            <p className="text-sm text-muted-foreground">
                              {repo.description || "No description provided"}
                            </p>
                          </div>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 mr-1" />
                              <span>{repo.stars}</span>
                            </div>
                            <div className="flex items-center">
                              <GitFork className="h-4 w-4 mr-1" />
                              <span>{repo.forks}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-2 text-sm">
                          <span className={`px-2 py-1 rounded-full ${repo.isPublic ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                            {repo.isPublic ? "Public" : "Private"}
                          </span>
                          <span className="text-muted-foreground ml-2">
                            Updated {new Date(repo.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">You don't have any repositories yet</p>
                    <Button asChild>
                      <Link to="/new">Create a repository</Link>
                    </Button>
                  </div>
                )}
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Account Settings</h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center">
                      <Settings className="h-4 w-4 mr-2" />
                      Profile Settings
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Manage your profile information and visibility settings
                    </p>
                    <Button variant="outline" size="sm">Edit Profile</Button>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      Security
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Manage your account security and authentication methods
                    </p>
                    <Button variant="outline" size="sm">Security Settings</Button>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center">
                      <Key className="h-4 w-4 mr-2" />
                      API Keys
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Manage API tokens for programmatic access
                    </p>
                    <Button variant="outline" size="sm">Manage API Keys</Button>
                  </div>
                  
                  <div className="border-t pt-6 mt-6">
                    <Button onClick={handleSettingsSave}>Save Changes</Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
