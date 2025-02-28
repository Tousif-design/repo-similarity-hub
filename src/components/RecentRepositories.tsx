
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { Card } from "@/components/ui/card";
import { GitBranch, GitFork, Star } from "lucide-react";

const RecentRepositories = () => {
  const { recentRepositories } = useUser();
  const navigate = useNavigate();

  if (recentRepositories.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Recent Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentRepositories.map((repo) => (
          <Card 
            key={repo.id} 
            className="p-4 hover:shadow-md transition-shadow cursor-pointer border-gray-200"
            onClick={() => navigate(`/repository/${repo.owner}/${repo.name}`)}
          >
            <div className="flex items-center gap-2 mb-2">
              <GitBranch className="w-4 h-4 text-gray-600" />
              <span className="text-blue-600 font-medium">{repo.owner}/{repo.name}</span>
              <span className="ml-auto px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                {repo.isPublic ? "Public" : "Private"}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{repo.description}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                {repo.stars}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="w-3 h-3" />
                {repo.forks}
              </span>
              <span className="ml-auto text-xs">
                Created on {new Date(repo.createdAt).toLocaleDateString()}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentRepositories;
