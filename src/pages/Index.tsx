
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { GitFork, Star, Code, BookOpen, GitBranch } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Demo repositories data
  const repositories = [
    {
      id: 1,
      name: "react-hooks",
      owner: "facebook",
      description: "Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class.",
      stars: 42352,
      forks: 8204,
      language: "JavaScript",
      updatedAt: "Updated 2 days ago"
    },
    {
      id: 2,
      name: "typescript-starter",
      owner: "microsoft",
      description: "A minimalist TypeScript starter template with all the best practices configured.",
      stars: 18734,
      forks: 2456,
      language: "TypeScript",
      updatedAt: "Updated 5 days ago"
    },
    {
      id: 3,
      name: "next-dashboard",
      owner: "vercel",
      description: "A dashboard starter template built with Next.js, Tailwind CSS, and TypeScript.",
      stars: 32165,
      forks: 4892,
      language: "TypeScript",
      updatedAt: "Updated yesterday"
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // In a real app, this would trigger a search API call
  };

  const goToRepository = (owner: string, name: string) => {
    navigate(`/repository/${owner}/${name}`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Your code, collaboration, and innovation</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Build and ship projects faster with seamless collaboration, version control, and powerful code management tools.
          </p>
          
          <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Search repositories..."
              className="w-full pl-4 pr-12 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              className="absolute right-1 top-1 bottom-1 px-3 rounded-md bg-transparent hover:bg-gray-100 text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
          </form>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recent Repositories</h2>
            <Button 
              onClick={() => navigate("/new")}
              className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
            >
              New Repository
            </Button>
          </div>
          
          <div className="grid gap-4">
            {repositories.map((repo) => (
              <Card 
                key={repo.id} 
                className="p-5 hover:shadow-md transition-shadow duration-200 cursor-pointer border border-gray-200"
                onClick={() => goToRepository(repo.owner, repo.name)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-600">{repo.owner} /</span>
                      <h3 className="font-semibold text-blue-600">{repo.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{repo.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      {repo.language && (
                        <div className="flex items-center gap-1">
                          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                          <span>{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{repo.stars.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{repo.forks.toLocaleString()}</span>
                      </div>
                      <span>{repo.updatedAt}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-lg border border-gray-200 bg-gray-50">
            <h3 className="text-xl font-semibold mb-3">For developers</h3>
            <p className="text-gray-600 mb-4">Collaborate on code, track changes, and manage your projects with our powerful version control system.</p>
            <Button 
              variant="outline" 
              className="border-gray-300 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => navigate("/explore")}
            >
              Explore repositories
            </Button>
          </div>
          
          <div className="p-6 rounded-lg border border-gray-200 bg-gray-50">
            <h3 className="text-xl font-semibold mb-3">For teams</h3>
            <p className="text-gray-600 mb-4">Work together seamlessly with built-in code review, issue tracking, and continuous integration.</p>
            <Button 
              variant="outline" 
              className="border-gray-300 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => navigate("/teams")}
            >
              Learn about teams
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-gray-200 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">© 2023 RepoHub. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200">Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
