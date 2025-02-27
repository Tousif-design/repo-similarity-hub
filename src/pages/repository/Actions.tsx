
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Play, CheckCircle, XCircle, Clock, AlertTriangle, Settings, Plus } from "lucide-react";

const Actions = () => {
  const { owner, name } = useParams();
  const [workflows, setWorkflows] = useState<any[]>([]);
  const [runs, setRuns] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("runs");

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setWorkflows([
        {
          id: 1,
          name: "CI Pipeline",
          filename: "ci.yml",
          state: "active",
          triggers: ["push", "pull_request"],
          lastRun: "2023-05-12T14:20:00Z"
        },
        {
          id: 2,
          name: "Deploy to Production",
          filename: "deploy-prod.yml",
          state: "active",
          triggers: ["release"],
          lastRun: "2023-05-10T09:45:00Z"
        },
        {
          id: 3,
          name: "CodeQL Analysis",
          filename: "codeql.yml",
          state: "active",
          triggers: ["schedule", "workflow_dispatch"],
          lastRun: "2023-05-11T02:30:00Z"
        }
      ]);

      setRuns([
        {
          id: 1001,
          workflow: "CI Pipeline",
          branch: "main",
          commit: "8f7d3b2",
          commitMessage: "Add new authentication system",
          status: "success",
          duration: "2m 34s",
          createdAt: "2023-05-12T14:20:00Z",
          actor: {
            name: "janesmith",
            avatar: "https://github.com/identicons/janesmith.png"
          }
        },
        {
          id: 1002,
          workflow: "Deploy to Production",
          branch: "main",
          commit: "6e9c2a1",
          commitMessage: "Release v1.2.0",
          status: "in_progress",
          duration: "3m 12s",
          createdAt: "2023-05-10T09:45:00Z",
          actor: {
            name: "devops-bot",
            avatar: "https://github.com/identicons/devops-bot.png"
          }
        },
        {
          id: 1003,
          workflow: "CI Pipeline",
          branch: "feature/dark-mode",
          commit: "2d5f9e7",
          commitMessage: "Implement dark mode toggle",
          status: "failure",
          duration: "1m 52s",
          createdAt: "2023-05-09T16:30:00Z",
          actor: {
            name: "sarahcoder",
            avatar: "https://github.com/identicons/sarahcoder.png"
          }
        },
        {
          id: 1004,
          workflow: "CodeQL Analysis",
          branch: "main",
          commit: "4a8c3d6",
          commitMessage: "Weekly code analysis",
          status: "success",
          duration: "6m 45s",
          createdAt: "2023-05-11T02:30:00Z",
          actor: {
            name: "github-actions",
            avatar: "https://github.com/identicons/github-actions.png"
          }
        },
        {
          id: 1005,
          workflow: "CI Pipeline",
          branch: "bugfix/responsive-layout",
          commit: "9b3e1d4",
          commitMessage: "Fix responsive issues on mobile",
          status: "cancelled",
          duration: "0m 45s",
          createdAt: "2023-05-08T11:15:00Z",
          actor: {
            name: "alexdev",
            avatar: "https://github.com/identicons/alexdev.png"
          }
        }
      ]);
      setLoading(false);
    }, 800);
  }, [owner, name]);

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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="h-3 w-3 mr-1" /> Success
          </Badge>
        );
      case "failure":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            <XCircle className="h-3 w-3 mr-1" /> Failed
          </Badge>
        );
      case "in_progress":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Clock className="h-3 w-3 mr-1" /> In Progress
          </Badge>
        );
      case "cancelled":
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
            <AlertTriangle className="h-3 w-3 mr-1" /> Cancelled
          </Badge>
        );
      default:
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
            Unknown
          </Badge>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Actions</h1>
            <p className="text-gray-600">Repository: {owner}/{name}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span>Manage workflows</span>
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>New workflow</span>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <Tabs defaultValue="runs" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="runs">
                  Workflow Runs
                </TabsTrigger>
                <TabsTrigger value="workflows">
                  Workflows
                </TabsTrigger>
              </TabsList>
            </Tabs>
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
            ) : (
              <TabsContent value="runs" className="mt-0">
                <div className="space-y-4">
                  {runs.map((run) => (
                    <div key={run.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center mb-1">
                            <h3 className="font-medium">{run.workflow}</h3>
                            <span className="mx-2 text-gray-400">•</span>
                            <span className="text-sm text-gray-600">Run #{run.id}</span>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">
                            {run.commitMessage} <span className="text-gray-500">{run.commit}</span>
                          </p>
                          <div className="flex items-center text-sm text-gray-600">
                            <span>Branch: {run.branch}</span>
                            <span className="mx-2 text-gray-400">•</span>
                            <span>Triggered {formatDate(run.createdAt)}</span>
                            <span className="mx-2 text-gray-400">•</span>
                            <span>Duration: {run.duration}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          {getStatusBadge(run.status)}
                          <Button variant="ghost" size="sm" className="mt-2">
                            View details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            )}

            <TabsContent value="workflows" className="mt-0">
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="animate-pulse">
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {workflows.map((workflow) => (
                    <div key={workflow.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium mb-1">{workflow.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {workflow.filename}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {workflow.triggers.map((trigger: string) => (
                              <Badge key={trigger} variant="outline">
                                {trigger}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <Badge className={`${workflow.state === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {workflow.state}
                          </Badge>
                          <div className="text-sm text-gray-600 mt-2">
                            Last run {formatDate(workflow.lastRun)}
                          </div>
                          <Button variant="outline" size="sm" className="mt-2">
                            <Play className="h-4 w-4 mr-1" /> Run workflow
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Actions;
