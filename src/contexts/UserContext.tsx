
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
  username: string;
  userAvatar: string;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [recentRepositories, setRecentRepositories] = useState<Repository[]>(() => {
    try {
      const saved = localStorage.getItem("recentRepositories");
      return saved ? JSON.parse(saved) : [];
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

  return (
    <UserContext.Provider value={{ recentRepositories, addRepository, username, userAvatar }}>
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
