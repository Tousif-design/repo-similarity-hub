
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import RepositoryNavigation from "@/components/RepositoryNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { GitPullRequest, MessageSquare, Check, X, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const PullRequests = () => {
  const { owner, name } = useParams();
  const [pullRequests, setPullRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("open");

  useEffect(() => {
    // Simulate API call
    const loadData = setTimeout(() => {
      setPullRequests([
        {
          id: 1,
          title: "Add new authentication system",
          number: 42,
          author: {
            name: "janesmith",
            avatar: "https://github.com/identicons/janesmith.png"
          },
          status: "open",
          createdAt: "2023-05-10T14:32:00Z",
          updatedAt: "2023-05-12T09:45:00Z",
          comments: 8,
          commits: 3,
          branch: "feature/auth-system",
          targetBranch: "main",
          labels: ["enhancement", "frontend"]
        },
        {
          id: 2,
          title: "Fix responsive layout issues",
          number: 41,
          author: {
            name: "alexdev",
            avatar: "https://github.com/identicons/alexdev.png"
          },
          status: "open",
          createdAt: "2023-05-08T10:15:00Z",
          updatedAt: "2023-05-09T16:30:00Z",
          comments: 5,
          commits: 2,
          branch: "bugfix/responsive-layout",
          targetBranch: "main",
          labels: ["bug", "css"]
        },
        {
          id: 3,
          title: "Implement dark mode",
          number: 40,
          author: {
            name: "sarahcoder",
            avatar: "https://github.com/identicons/sarahcoder.png"
          },
          status: "closed",
          createdAt: "2023-05-01T09:20:00Z",
          updatedAt: "2023-05-07T14:25:00Z",
          comments: 12,
          commits: 5,
          branch: "feature/dark-mode",
          targetBranch: "main",
          labels: ["enhancement", "ui"]
        },
        {
          id: 4,
          title: "Update documentation for API endpoints",
          number: 39,
          author: {
            name: "michaeldocs",
            avatar: "https://github.com/identicons/michaeldocs.png"
          },
          status: "closed",
          createdAt: "2023-04-25T11:45:00Z",
          updatedAt: "2023-05-03T10:10:00Z",
          comments: 3,
          commits: 1,
          branch: "docs/api-updates",
          targetBranch: "main",
          labels: ["documentation"]
        },
        {
          id: 5,
          title: "Implement test suite for user authentication",
          number: 38,
          author: {
            name: "testmaster",
            avatar: "https://github.com/identicons/testmaster.png"
          },
          status: "merged",
          createdAt: "2023-04-20T15:30:00Z",
          updatedAt: "2023-04-30T09:55:00Z",
          comments: 9,
          commits: 4,
          branch: "tests/user-auth",
          targetBranch: "main",
          labels: ["testing"]
        }
      ]);
      setLoading(false);
    }, 800);

    return () => clearTimeout(loadData);
  }, [owner, name]);

  const handleNewPullRequest = () => {
    toast.success("New pull request creation would be implemented in a production app");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return "today";
    } else if (diffDays === 1) {
      return "yesterday";
    } else if (diffDays < 30) {
      return `${diffDays} days ago`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open":
        return <GitPullRequest className="h-4 w-4 text-green-500" />;
      case "closed":
        return <X className="h-4 w-4 text-red-500" />;
      case "merged":
        return <Check className="h-4 w-4 text-purple-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getLabelColor = (label: string) => {
    switch (label) {
      case "enhancement":
        return "bg-blue-100 text-blue-800";
      case "bug":
        return "bg-red-100 text-red-800";
      case "documentation":
        return "bg-yellow-100 text-yellow-800";
      case "frontend":
        return "bg-green-100 text-green-800";
      case "css":
        return "bg-pink-100 text-pink-800";
      case "ui":
        return "bg-purple-100 text-purple-800";
      case "testing":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredPullRequests = pullRequests.filter(pr => {
    if (activeTab === "open") return pr.status === "open";
    if (activeTab === "closed") return pr.status === "closed";
    if (activeTab === "merged") return pr.status === "merged";
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <GitPullRequest className="w-5 h-5 text-gray-600" />
            <Link to={`/profile`} className="text-blue-600 hover:underline">
              {owner}
            </Link>
            <span className="text-gray-600">/</span>
            <Link to={`/repository/${owner}/${name}`} className="text-blue-600 hover:underline">
              {name}
            </Link>
          </div>
        </div>
        
        <RepositoryNavigation />
        
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Pull Requests</h1>
          </div>
          <Button className="bg-green-600 hover:bg-green-700" onClick={handleNewPullRequest}>
            New Pull Request
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Tabs 
                defaultValue="open" 
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full max-w-md grid-cols-4">
                  <TabsTrigger value="open">
                    Open ({pullRequests.filter(pr => pr.status === "open").length})
                  </TabsTrigger>
                  <TabsTrigger value="closed">
                    Closed ({pullRequests.filter(pr => pr.status === "closed").length})
                  </TabsTrigger>
                  <TabsTrigger value="merged">
                    Merged ({pullRequests.filter(pr => pr.status === "merged").length})
                  </TabsTrigger>
                  <TabsTrigger value="all">
                    All ({pullRequests.length})
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="animate-pulse">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : filteredPullRequests.length > 0 ? (
              <div className="space-y-2">
                {filteredPullRequests.map((pr) => (
                  <div key={pr.id} className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">{getStatusIcon(pr.status)}</div>
                      <div className="flex-1">
                        <div className="flex items-baseline">
                          <h3 className="text-lg font-medium text-blue-600 hover:underline mr-2">
                            <Link to={`/repository/${owner}/${name}/pull-requests/${pr.number}`}>
                              {pr.title}
                            </Link>
                          </h3>
                          <span className="text-sm text-gray-500">#{pr.number}</span>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          <span>
                            {pr.status === "merged" ? "Merged" : pr.status === "closed" ? "Closed" : "Opened"} {formatDate(pr.createdAt)} by {pr.author.name}
                          </span>
                        </div>
                        <div className="flex items-center mt-2 flex-wrap gap-2">
                          {pr.labels.map((label: string) => (
                            <Badge key={label} className={`${getLabelColor(label)} font-normal`}>
                              {label}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          <span>{pr.comments}</span>
                        </div>
                        <Avatar className="h-6 w-6">
                          <img src={pr.author.avatar} alt={pr.author.name} />
                        </Avatar>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <GitPullRequest className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-gray-900">No pull requests found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {activeTab === "open" ? "There are no open pull requests" :
                   activeTab === "closed" ? "There are no closed pull requests" :
                   activeTab === "merged" ? "There are no merged pull requests" :
                   "There are no pull requests yet"}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PullRequests;
