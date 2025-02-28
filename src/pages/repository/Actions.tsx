
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayCircle, GitCommit, Clock, Check, X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Actions = () => {
  const { owner, name } = useParams();
  const [workflows, setWorkflows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading workflows
    setTimeout(() => {
      setWorkflows([
        {
          id: 1,
          name: "CI Pipeline",
          status: "success",
          lastRun: "2023-05-15T10:30:00Z",
          commit: "a1b2c3d",
          branch: "main",
          duration: "2m 15s"
        },
        {
          id: 2,
          name: "Build and Test",
          status: "failed",
          lastRun: "2023-05-14T08:45:00Z",
          commit: "e4f5g6h",
          branch: "feature/auth",
          duration: "3m 22s"
        },
        {
          id: 3,
          name: "Deploy to Staging",
          status: "running",
          lastRun: "2023-05-16T14:20:00Z",
          commit: "i7j8k9l",
          branch: "develop",
          duration: "1m 50s"
        }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <Check className="h-5 w-5 text-green-500" />;
      case "failed":
        return <X className="h-5 w-5 text-red-500" />;
      case "running":
        return <PlayCircle className="h-5 w-5 text-blue-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Actions</h1>
          <p className="text-gray-600">Repository: {owner}/{name}</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Workflows</CardTitle>
              <Button>
                New workflow
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="all">All workflows</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-4">
                {loading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {workflows.map(workflow => (
                      <div 
                        key={workflow.id} 
                        className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3">
                            {getStatusIcon(workflow.status)}
                            <div>
                              <h3 className="font-medium text-lg">{workflow.name}</h3>
                              <div className="text-sm text-gray-500 mt-1">
                                <div className="flex items-center space-x-2">
                                  <GitCommit className="h-4 w-4" />
                                  <span>{workflow.commit}</span>
                                  <span>·</span>
                                  <span>{workflow.branch}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{workflow.duration}</span>
                          </div>
                        </div>
                        <div className="mt-3 text-sm text-gray-500">
                          Last run: {formatDate(workflow.lastRun)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="active" className="mt-4">
                {loading ? (
                  <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {workflows.filter(w => w.status === "running").map(workflow => (
                      <div 
                        key={workflow.id} 
                        className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3">
                            {getStatusIcon(workflow.status)}
                            <div>
                              <h3 className="font-medium text-lg">{workflow.name}</h3>
                              <div className="text-sm text-gray-500 mt-1">
                                <div className="flex items-center space-x-2">
                                  <GitCommit className="h-4 w-4" />
                                  <span>{workflow.commit}</span>
                                  <span>·</span>
                                  <span>{workflow.branch}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{workflow.duration}</span>
                          </div>
                        </div>
                        <div className="mt-3 text-sm text-gray-500">
                          Last run: {formatDate(workflow.lastRun)}
                        </div>
                      </div>
                    ))}
                    {workflows.filter(w => w.status === "running").length === 0 && (
                      <div className="text-center py-6">
                        <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                        <h3 className="text-lg font-medium text-gray-900">No active workflows</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          There are currently no workflows running
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="completed" className="mt-4">
                {loading ? (
                  <div className="space-y-4">
                    {[1, 2].map(i => (
                      <div key={i} className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {workflows.filter(w => w.status === "success" || w.status === "failed").map(workflow => (
                      <div 
                        key={workflow.id} 
                        className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3">
                            {getStatusIcon(workflow.status)}
                            <div>
                              <h3 className="font-medium text-lg">{workflow.name}</h3>
                              <div className="text-sm text-gray-500 mt-1">
                                <div className="flex items-center space-x-2">
                                  <GitCommit className="h-4 w-4" />
                                  <span>{workflow.commit}</span>
                                  <span>·</span>
                                  <span>{workflow.branch}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{workflow.duration}</span>
                          </div>
                        </div>
                        <div className="mt-3 text-sm text-gray-500">
                          Completed: {formatDate(workflow.lastRun)}
                        </div>
                      </div>
                    ))}
                    {workflows.filter(w => w.status === "success" || w.status === "failed").length === 0 && (
                      <div className="text-center py-6">
                        <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                        <h3 className="text-lg font-medium text-gray-900">No completed workflows</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          There are no completed workflows yet
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Actions;
