
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

type Repository = {
  id: string;
  name: string;
  owner: string;
  description: string;
  createdAt: string;
  stars: number;
  forks: number;
  watchers: number;
  isPublic: boolean;
};

type UserContextType = {
  recentRepositories: Repository[];
  addRepository: (repository: Repository) => void;
  removeRepository: (id: string) => void;
  updateRepository: (repository: Repository) => void;
  username: string;
  userAvatar: string;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [recentRepositories, setRecentRepositories] = useState<Repository[]>(() => {
    try {
      const saved = localStorage.getItem("recentRepositories");
      return saved ? JSON.parse(saved) : [
        // Default sample repositories for better UX
        {
          id: "1",
          name: "react-components",
          owner: "username",
          description: "A collection of reusable React components with Tailwind CSS",
          createdAt: new Date().toISOString(),
          stars: 42,
          forks: 12,
          watchers: 5,
          isPublic: true
        },
        {
          id: "2",
          name: "typescript-utils",
          owner: "username",
          description: "Utility functions and types for TypeScript projects",
          createdAt: new Date(Date.now() - 86400000).toISOString(), // Yesterday
          stars: 18,
          forks: 3,
          watchers: 2,
          isPublic: true
        }
      ];
    } catch (error) {
      console.error("Error loading repositories from localStorage:", error);
      return [];
    }
  });
  
  const [username] = useState("username");
  const [userAvatar] = useState("https://github.com/github.png");

  useEffect(() => {
    try {
      localStorage.setItem("recentRepositories", JSON.stringify(recentRepositories));
    } catch (error) {
      console.error("Error saving repositories to localStorage:", error);
      toast.error("Failed to save your recent repositories");
    }
  }, [recentRepositories]);

  const addRepository = (repository: Repository) => {
    setRecentRepositories((prev) => {
      // Remove if already exists then add to start
      const filtered = prev.filter((repo) => repo.id !== repository.id);
      const updated = [repository, ...filtered].slice(0, 10); // Keep only 10 most recent
      
      try {
        localStorage.setItem("recentRepositories", JSON.stringify(updated));
      } catch (error) {
        console.error("Error saving repositories to localStorage:", error);
      }
      
      return updated;
    });
    
    toast.success(`Repository ${repository.name} added to recent repositories`);
  };

  const removeRepository = (id: string) => {
    setRecentRepositories((prev) => {
      const filtered = prev.filter((repo) => repo.id !== id);
      return filtered;
    });
    
    toast.success("Repository removed from your list");
  };

  const updateRepository = (repository: Repository) => {
    setRecentRepositories((prev) => {
      const updatedRepos = prev.map((repo) => 
        repo.id === repository.id ? repository : repo
      );
      return updatedRepos;
    });
    
    toast.success(`Repository ${repository.name} updated`);
  };

  return (
    <UserContext.Provider value={{ 
      recentRepositories, 
      addRepository, 
      removeRepository, 
      updateRepository, 
      username, 
      userAvatar 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
