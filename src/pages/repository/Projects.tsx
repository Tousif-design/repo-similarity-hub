
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus, Layout, ListTodo, CheckCircle, Calendar, Users } from "lucide-react";

const Projects = () => {
  const { owner, name } = useParams();
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProjects([
        {
          id: 1,
          name: "Version 2.0 Release",
          description: "Major update with new features and improvements",
          status: "In Progress",
          progress: 65,
          dueDate: "2023-07-15T00:00:00Z",
          items: {
            total: 24,
            completed: 16,
            open: 8
          },
          type: "kanban",
          lastUpdated: "2023-05-12T14:20:00Z"
        },
        {
          id: 2,
          name: "UI/UX Redesign",
          description: "Complete overhaul of the user interface",
          status: "Planning",
          progress: 20,
          dueDate: "2023-08-30T00:00:00Z",
          items: {
            total: 18,
            completed: 4,
            open: 14
          },
          type: "kanban",
          lastUpdated: "2023-05-11T09:45:00Z"
        },
        {
          id: 3,
          name: "Bug Fixing Sprint",
          description: "Focus on clearing high priority bugs",
          status: "Completed",
          progress: 100,
          dueDate: "2023-05-05T00:00:00Z",
          items: {
            total: 15,
            completed: 15,
            open: 0
          },
          type: "table",
          lastUpdated: "2023-05-05T16:30:00Z"
        },
        {
          id: 4,
          name: "Documentation Improvement",
          description: "Update and expand documentation for v2.0",
          status: "Not Started",
          progress: 0,
          dueDate: "2023-09-10T00:00:00Z",
          items: {
            total: 12,
            completed: 0,
            open: 12
          },
          type: "roadmap",
          lastUpdated: "2023-05-08T11:15:00Z"
        }
      ]);
      setLoading(false);
    }, 800);
  }, [owner, name]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case "In Progress":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case "Planning":
        return <Badge className="bg-purple-100 text-purple-800">Planning</Badge>;
      case "Not Started":
        return <Badge className="bg-gray-100 text-gray-800">Not Started</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getProjectIcon = (type: string) => {
    switch (type) {
      case "kanban":
        return <Layout className="h-5 w-5 text-blue-500" />;
      case "table":
        return <ListTodo className="h-5 w-5 text-green-500" />;
      case "roadmap":
        return <Calendar className="h-5 w-5 text-purple-500" />;
      default:
        return <ListTodo className="h-5 w-5 text-gray-500" />;
    }
  };

  const isOverdue = (dateString: string) => {
    const dueDate = new Date(dateString);
    const now = new Date();
    return dueDate < now && dateString;
  };

  const getTimeAgo = (dateString: string) => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Projects</h1>
            <p className="text-gray-600">Repository: {owner}/{name}</p>
          </div>
          <div>
            <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>New project</span>
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <Card key={n} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-full mt-4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className={`overflow-hidden hover:shadow-md transition-shadow ${project.status === 'Completed' ? 'bg-gray-50/50' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {getProjectIcon(project.type)}
                      <h3 className="text-lg font-medium">{project.name}</h3>
                    </div>
                    {getStatusBadge(project.status)}
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1 text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-gray-900 font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <ListTodo className="h-4 w-4 mr-2" />
                        <span>Items</span>
                      </div>
                      <span className="font-medium">
                        {project.items.completed}/{project.items.total} complete
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Due date</span>
                      </div>
                      <span className={`font-medium ${isOverdue(project.dueDate) && project.status !== 'Completed' ? 'text-red-600' : ''}`}>
                        {formatDate(project.dueDate)}
                        {isOverdue(project.dueDate) && project.status !== 'Completed' && " (overdue)"}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span>Contributors</span>
                      </div>
                      <span className="font-medium">
                        5 members
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
                    <span>Updated {getTimeAgo(project.lastUpdated)}</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 -mr-2">
                      View project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Projects;
