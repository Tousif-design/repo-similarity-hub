
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { GitBranch, Star, GitFork, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

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

const trendingRepositories = [
  {
    id: "trend1",
    name: "next.js",
    owner: "vercel",
    description: "The React Framework for Production",
    stars: 82000,
    forks: 17500,
    language: "JavaScript",
    trendingSince: "this week"
  },
  {
    id: "trend2",
    name: "deno",
    owner: "denoland",
    description: "A secure runtime for JavaScript and TypeScript",
    stars: 76000,
    forks: 4900,
    language: "TypeScript",
    trendingSince: "this month"
  },
  {
    id: "trend3",
    name: "rust",
    owner: "rust-lang",
    description: "Empowering everyone to build reliable and efficient software.",
    stars: 65000,
    forks: 9800,
    language: "Rust",
    trendingSince: "this week"
  }
];

const Explore = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      toast(`Searching for: ${searchQuery}`);
      // In a real app, this would trigger an API call to search for repositories
    } else {
      toast.error("Please enter a search term");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">Explore Repositories</h1>

        <div className="flex gap-3 mb-8">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input 
              placeholder="Search repositories..." 
              className="pl-10 pr-4 py-2 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <Button onClick={handleSearch}>Search</Button>
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

        <h2 className="text-xl font-semibold mb-4">Trending Repositories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingRepositories.map((repo) => (
            <Card 
              key={repo.id} 
              className="p-4 hover:shadow-md transition-shadow cursor-pointer border-gray-200"
              onClick={() => navigate(`/repository/${repo.owner}/${repo.name}`)}
            >
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="w-4 h-4 text-gray-600" />
                <span className="text-blue-600 font-medium">{repo.owner}/{repo.name}</span>
                <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-800">
                  {repo.language}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{repo.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {repo.stars.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    {repo.forks.toLocaleString()}
                  </span>
                </div>
                <span className="text-xs text-green-600">Trending {repo.trendingSince}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      <footer className="border-t border-gray-200 py-6 px-4 mt-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <GitBranch className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600">RepoHub © {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">Terms</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">Security</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">Status</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Explore;
