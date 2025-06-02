
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { Card } from "@/components/ui/card";
import { GitBranch, GitFork, Star, Eye, ArrowRight, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecentRepositories = () => {
  const { recentRepositories } = useUser();
  const navigate = useNavigate();

  if (recentRepositories.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Recent Repositories</h2>
          <p className="text-gray-600">Continue working on your latest projects</p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="group border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 hover:bg-orange-50"
          onClick={() => navigate("/repositories")}
        >
          View all 
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentRepositories.map((repo, index) => (
          <Card 
            key={repo.id} 
            className="group p-6 hover:shadow-xl transition-all duration-500 cursor-pointer border-0 shadow-lg bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50 transform hover:scale-105 hover:-translate-y-2 animate-fade-in"
            style={{ animationDelay: `${600 + index * 100}ms` }}
            onClick={() => navigate(`/repository/${repo.owner}/${repo.name}`)}
          >
            {/* Repository Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                  <GitBranch className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors truncate">
                    {repo.owner}/{repo.name}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      repo.isPublic 
                        ? "bg-green-100 text-green-700 border border-green-200" 
                        : "bg-gray-100 text-gray-700 border border-gray-200"
                    }`}>
                      {repo.isPublic ? "Public" : "Private"}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      Updated {new Date(repo.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Repository Description */}
            <p className="text-gray-600 text-sm mb-6 min-h-[40px] line-clamp-2 leading-relaxed">
              {repo.description || "No description provided"}
            </p>
            
            {/* Repository Stats */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-sm text-gray-500 hover:text-orange-500 transition-colors group-hover:scale-110 transform duration-200">
                  <Star className="w-4 h-4" />
                  {repo.stars.toLocaleString()}
                </span>
                
                <span className="flex items-center gap-1 text-sm text-gray-500 hover:text-orange-500 transition-colors group-hover:scale-110 transform duration-200">
                  <GitFork className="w-4 h-4" />
                  {repo.forks.toLocaleString()}
                </span>
                
                {repo.watchers && (
                  <span className="flex items-center gap-1 text-sm text-gray-500 hover:text-orange-500 transition-colors group-hover:scale-110 transform duration-200">
                    <Eye className="w-4 h-4" />
                    {repo.watchers.toLocaleString()}
                  </span>
                )}
              </div>
              
              {/* Activity Indicator */}
              <div className="flex items-center gap-1 text-xs text-green-600">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Active
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
          </Card>
        ))}
      </div>
      
      {/* Quick Actions */}
      <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Quick Start</h3>
              <p className="text-sm text-gray-600">Create a new repository or import existing code</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/new')}
              className="hover:bg-white hover:border-orange-500 hover:text-orange-600 transition-all duration-200"
            >
              New Repository
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/import')}
              className="hover:bg-white hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
            >
              Import Code
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentRepositories;
