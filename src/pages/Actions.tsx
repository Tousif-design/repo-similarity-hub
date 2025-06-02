
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { 
  GitBranch, 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Play, 
  Pause,
  ArrowRight,
  Code,
  Rocket,
  Settings
} from "lucide-react";

const Actions = () => {
  const navigate = useNavigate();

  const workflows = [
    {
      name: "CI/CD Pipeline",
      status: "success",
      lastRun: "2 minutes ago",
      duration: "3m 42s",
      branch: "main"
    },
    {
      name: "Security Scan",
      status: "running",
      lastRun: "Running",
      duration: "1m 23s",
      branch: "develop"
    },
    {
      name: "Deploy to Production",
      status: "failed",
      lastRun: "1 hour ago",
      duration: "Failed after 2m 15s",
      branch: "main"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "running":
        return <Clock className="w-4 h-4 text-blue-500 animate-spin" />;
      case "failed":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-50 border-green-200";
      case "running":
        return "bg-blue-50 border-blue-200";
      case "failed":
        return "bg-red-50 border-red-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            GitHub Actions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automate your workflow with CI/CD pipelines, testing, and deployment directly from your repository.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-6 transition-transform">
                <Play className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">Create Workflow</CardTitle>
              <CardDescription>Set up automated workflows for your projects</CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-6 transition-transform">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">Manage Runners</CardTitle>
              <CardDescription>Configure self-hosted runners for your workflows</CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-6 transition-transform">
                <Code className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">Marketplace</CardTitle>
              <CardDescription>Discover pre-built actions from the community</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Recent Workflows */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Workflows</h2>
            <Button 
              onClick={() => navigate('/new')}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              New Workflow
            </Button>
          </div>

          <div className="space-y-4">
            {workflows.map((workflow, index) => (
              <Card key={index} className={`border transition-all duration-300 hover:shadow-md ${getStatusColor(workflow.status)}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(workflow.status)}
                      <div>
                        <h3 className="font-semibold text-gray-900">{workflow.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center">
                            <GitBranch className="w-3 h-3 mr-1" />
                            {workflow.branch}
                          </span>
                          <span>{workflow.lastRun}</span>
                          <span>{workflow.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                      {workflow.status === "running" ? (
                        <Button variant="ghost" size="sm">
                          <Pause className="w-4 h-4" />
                        </Button>
                      ) : (
                        <Button variant="ghost" size="sm">
                          <Play className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Secure by Default</h3>
              <p className="text-gray-600">
                Built-in security features including secret management, dependency scanning, and code analysis.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg">
            <div className="text-center">
              <Rocket className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Deploy Anywhere</h3>
              <p className="text-gray-600">
                Deploy to any cloud provider, on-premises, or hybrid environments with ease.
              </p>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to automate?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start building powerful workflows that save time and reduce errors.
            </p>
            <Button 
              onClick={() => navigate('/new')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 h-auto text-lg"
            >
              Get Started with Actions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Actions;
