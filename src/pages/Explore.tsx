
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { GitBranch, Star, GitFork, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const popularRepositories = [
  {
    id: "pop1",
    name: "react",
    owner: "facebook",
    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    stars: 192000,
    forks: 40100,
    language: "JavaScript",
  },
  {
    id: "pop2",
    name: "tensorflow",
    owner: "tensorflow",
    description: "An end-to-end open source platform for machine learning.",
    stars: 168000,
    forks: 87000,
    language: "Python",
  },
  {
    id: "pop3",
    name: "vscode",
    owner: "microsoft",
    description: "Visual Studio Code",
    stars: 142000,
    forks: 24400,
    language: "TypeScript",
  },
  {
    id: "pop4",
    name: "linux",
    owner: "torvalds",
    description: "Linux kernel source tree",
    stars: 138000,
    forks: 43700,
    language: "C",
  }
];

const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Repositories</h1>

      <div className="flex gap-3 mb-8">
        <Input 
          placeholder="Search repositories..." 
          className="w-full max-w-lg"
          icon={<Search className="h-4 w-4 text-gray-500" />}
        />
        <Button>Search</Button>
      </div>

      <Alert className="mb-8 bg-blue-50">
        <AlertDescription>
          Discover interesting projects and collaborate with developers from around the world.
        </AlertDescription>
      </Alert>

      <h2 className="text-xl font-semibold mb-4">Popular Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {popularRepositories.map((repo) => (
          <Card 
            key={repo.id} 
            className="p-4 hover:shadow-md transition-shadow cursor-pointer border-gray-200"
            onClick={() => navigate(`/repository/${repo.owner}/${repo.name}`)}
          >
            <div className="flex items-center gap-2 mb-2">
              <GitBranch className="w-4 h-4 text-gray-600" />
              <span className="text-blue-600 font-medium">{repo.owner}/{repo.name}</span>
              <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                {repo.language}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{repo.description}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                {repo.stars.toLocaleString()}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="w-3 h-3" />
                {repo.forks.toLocaleString()}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Explore;
