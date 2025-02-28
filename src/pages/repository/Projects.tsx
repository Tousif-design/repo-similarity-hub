
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import RepositoryNavigation from "@/components/RepositoryNavigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout, Plus, GitBranch } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const Projects = () => {
  const { owner, name } = useParams();

  const projects = [
    {
      id: 1,
      name: "Feature Development Q2",
      description: "Track development of new features for the second quarter",
      progress: 65,
      updated: "2023-05-15T10:30:00Z"
    },
    {
      id: 2,
      name: "Bug Tracking",
      description: "Manage and prioritize bugs that need to be fixed",
      progress: 42,
      updated: "2023-05-12T14:20:00Z"
    },
    {
      id: 3,
      name: "Documentation Overhaul",
      description: "Rewrite and update all documentation for v2.0",
      progress: 18,
      updated: "2023-05-08T09:15:00Z"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const handleNewProject = () => {
    toast.success("New project creation would be implemented in a production app");
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
          <h1 className="text-2xl font-bold">Projects</h1>
          <Button onClick={handleNewProject}>
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  <Link to={`/repository/${owner}/${name}/projects/${project.id}`} className="text-blue-600 hover:underline">
                    {project.name}
                  </Link>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} />
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">
                  Updated on {formatDate(project.updated)}
                </p>
              </CardFooter>
            </Card>
          ))}
          
          <Card className="border-dashed border-2 hover:border-blue-400 transition-colors">
            <CardHeader className="items-center text-center">
              <Layout className="h-8 w-8 mb-2 text-gray-400" />
              <CardTitle>Create a new project</CardTitle>
              <CardDescription>
                Get started with a new project to organize your work
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Button variant="outline" onClick={handleNewProject}>
                <Plus className="mr-2 h-4 w-4" /> New Project
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Projects;
