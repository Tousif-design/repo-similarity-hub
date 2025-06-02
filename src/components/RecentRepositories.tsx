
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { Card } from "@/components/ui/card";
import { GitBranch, GitFork, Star, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecentRepositories = () => {
  const { recentRepositories } = useUser();
  const navigate = useNavigate();

  if (recentRepositories.length === 0) {
    return null;
  }

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recent Repositories</h2>
        <Button 
          variant="outline" 
          size="sm" 
          className="text-sm border-gray-300"
          onClick={() => navigate("/repositories")}
        >
          View all <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {recentRepositories.map((repo) => (
          <Card 
            key={repo.id} 
            className="p-5 hover:shadow-md transition-all cursor-pointer border-gray-200 hover:border-blue-200"
            onClick={() => navigate(`/repository/${repo.owner}/${repo.name}`)}
          >
            <div className="flex items-center gap-2 mb-3">
              <GitBranch className="w-4 h-4 text-blue-500" />
              <span className="text-blue-600 font-medium hover:underline">
                {repo.owner}/{repo.name}
              </span>
              <span className="ml-auto px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                {repo.isPublic ? "Public" : "Private"}
              </span>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 min-h-[40px] line-clamp-2">
              {repo.description || "No description provided"}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5" />
                {repo.stars.toLocaleString()}
              </span>
              
              <span className="flex items-center gap-1">
                <GitFork className="w-3.5 h-3.5" />
                {repo.forks.toLocaleString()}
              </span>
              
              {repo.watchers && (
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  {repo.watchers.toLocaleString()}
                </span>
              )}
              
              <span className="ml-auto text-xs text-gray-400">
                Updated {new Date(repo.createdAt).toLocaleDateString()}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RecentRepositories;
