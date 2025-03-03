
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import RepositoryNavigation from "@/components/RepositoryNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GitBranch, Search, AlertCircle, CheckCircle2, Filter, SortAsc } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Issues = () => {
  const { owner, name } = useParams();
  const [loading, setLoading] = useState(true);
  const [issues, setIssues] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("open");
  
  useEffect(() => {
    // Simulate loading issues
    const loadData = setTimeout(() => {
      setIssues([
        {
          id: 1,
          title: "Fix navigation bug on mobile devices",
          number: 42,
          state: "open",
          createdAt: "2023-05-15T10:30:00Z",
          updatedAt: "2023-05-16T14:20:00Z",
          author: "johndoe",
          labels: ["bug", "priority: high"],
          comments: 5
        },
        {
          id: 2,
          title: "Add dark mode support",
          number: 38,
          state: "open",
          createdAt: "2023-05-10T08:45:00Z",
          updatedAt: "2023-05-14T16:30:00Z",
          author: "janedoe",
          labels: ["enhancement", "good first issue"],
          comments: 8
        },
        {
          id: 3,
          title: "Improve performance on the dashboard page",
          number: 35,
          state: "closed",
          createdAt: "2023-05-05T14:20:00Z",
          updatedAt: "2023-05-12T09:15:00Z",
          author: "alexsmith",
          labels: ["enhancement", "performance"],
          comments: 12
        },
        {
          id: 4,
          title: "Update README with better installation instructions",
          number: 30,
          state: "closed",
          createdAt: "2023-04-28T11:50:00Z",
          updatedAt: "2023-05-02T13:40:00Z",
          author: "sarahparker",
          labels: ["documentation"],
          comments: 3
        }
      ]);
      setLoading(false);
    }, 500);

    return () => clearTimeout(loadData);
  }, []);

  const handleNewIssue = () => {
    toast.success("New issue creation would be implemented in a production app");
  };

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || issue.state === activeTab;
    return matchesSearch && matchesTab;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <GitBranch className="w-5 h-5 text-gray-600" />
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
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Issues</h1>
          <Button 
            className="bg-green-600 hover:bg-green-700"
            onClick={handleNewIssue}
          >
            New Issue
          </Button>
        </div>

        <div className="mb-6">
          <Tabs 
            defaultValue="open" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList>
              <TabsTrigger value="open" className="data-[state=active]:bg-gray-100">
                <AlertCircle className="w-4 h-4 mr-2" />
                Open
              </TabsTrigger>
              <TabsTrigger value="closed" className="data-[state=active]:bg-gray-100">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Closed
              </TabsTrigger>
              <TabsTrigger value="all" className="data-[state=active]:bg-gray-100">
                All
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <Input
              type="text"
              placeholder="Search all issues"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2 text-sm">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2 text-sm">
              <SortAsc className="w-4 h-4" />
              <span>Sort</span>
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <Card>
            <div className="divide-y divide-gray-200">
              {filteredIssues.length > 0 ? (
                filteredIssues.map((issue) => (
                  <div key={issue.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-start">
                      <div className="mt-0.5 mr-3">
                        {issue.state === "open" ? (
                          <AlertCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-purple-600" />
                        )}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium">
                          <Link to={`/repository/${owner}/${name}/issues/${issue.number}`} className="text-blue-600 hover:underline">
                            {issue.title}
                          </Link>
                          <span className="ml-2 text-gray-500">#{issue.number}</span>
                        </h3>
                        <div className="mt-1 text-sm text-gray-600">
                          <span>
                            {issue.state === "open" ? "Opened" : "Closed"} on {formatDate(issue.createdAt)} by {issue.author}
                          </span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {issue.labels.map((label: string, index: number) => {
                            const colors: Record<string, string> = {
                              bug: "bg-red-100 text-red-800",
                              "priority: high": "bg-orange-100 text-orange-800",
                              enhancement: "bg-blue-100 text-blue-800",
                              "good first issue": "bg-green-100 text-green-800",
                              performance: "bg-purple-100 text-purple-800",
                              documentation: "bg-gray-100 text-gray-800"
                            };
                            
                            return (
                              <span 
                                key={index} 
                                className={`px-2 py-0.5 text-xs rounded-full ${colors[label] || "bg-gray-100 text-gray-800"}`}
                              >
                                {label}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 whitespace-nowrap ml-4">
                        {issue.comments > 0 && (
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            {issue.comments}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center">
                  <AlertCircle className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No matching issues found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                </div>
              )}
            </div>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Issues;
