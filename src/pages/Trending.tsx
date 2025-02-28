
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { GitBranch, Star, GitFork, Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";

const languages = ["All", "JavaScript", "TypeScript", "Python", "Java", "C++", "Go", "Rust"];

const timeOptions = [
  { value: "daily", label: "Today" },
  { value: "weekly", label: "This week" },
  { value: "monthly", label: "This month" }
];

const trendingRepos = [
  {
    id: "trend1",
    name: "next.js",
    owner: "vercel",
    description: "The React Framework for Production",
    stars: 82000,
    forks: 17500,
    language: "JavaScript",
    starsToday: 120
  },
  {
    id: "trend2",
    name: "deno",
    owner: "denoland",
    description: "A secure runtime for JavaScript and TypeScript",
    stars: 76000,
    forks: 4900,
    language: "TypeScript",
    starsToday: 95
  },
  {
    id: "trend3",
    name: "rust",
    owner: "rust-lang",
    description: "Empowering everyone to build reliable and efficient software.",
    stars: 65000,
    forks: 9800,
    language: "Rust",
    starsToday: 85
  },
  {
    id: "trend4",
    name: "svelte",
    owner: "sveltejs",
    description: "Cybernetically enhanced web apps",
    stars: 59000,
    forks: 2800,
    language: "JavaScript",
    starsToday: 75
  },
  {
    id: "trend5",
    name: "pytorch",
    owner: "pytorch",
    description: "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
    stars: 53000,
    forks: 14300,
    language: "Python",
    starsToday: 65
  },
  {
    id: "trend6",
    name: "flutter",
    owner: "flutter",
    description: "Flutter makes it easy and fast to build beautiful apps for mobile and beyond",
    stars: 139000,
    forks: 22800,
    language: "Dart",
    starsToday: 130
  }
];

const trendingDevelopers = [
  {
    id: "dev1",
    username: "gaearon",
    name: "Dan Abramov",
    avatar: "https://github.com/gaearon.png",
    popularRepo: {
      name: "redux",
      description: "Predictable state container for JavaScript apps"
    }
  },
  {
    id: "dev2",
    username: "yyx990803",
    name: "Evan You",
    avatar: "https://github.com/yyx990803.png",
    popularRepo: {
      name: "vue",
      description: "Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web."
    }
  },
  {
    id: "dev3",
    username: "rich-harris",
    name: "Rich Harris",
    avatar: "https://github.com/rich-harris.png",
    popularRepo: {
      name: "svelte",
      description: "Cybernetically enhanced web apps"
    }
  }
];

const Trending = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [timeRange, setTimeRange] = useState("weekly");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">Trending</h1>
        <p className="text-gray-600 mb-6">
          See what the GitHub community is most excited about today.
        </p>
        
        <div className="bg-white rounded-lg border border-gray-200 mb-8">
          <div className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <Tabs defaultValue="repositories" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="repositories">Repositories</TabsTrigger>
                <TabsTrigger value="developers">Developers</TabsTrigger>
              </TabsList>
              
              <div className="flex flex-col md:flex-row gap-3 md:items-center mb-4">
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <div className="flex flex-wrap gap-2 mt-3 md:mt-0">
                  {languages.map(lang => (
                    <button
                      key={lang}
                      className={`px-3 py-1 text-sm rounded-full ${
                        selectedLanguage === lang 
                          ? 'bg-blue-100 text-blue-800 border border-blue-300' 
                          : 'bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200'
                      }`}
                      onClick={() => setSelectedLanguage(lang)}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
              
              <TabsContent value="repositories" className="mt-0">
                <div className="divide-y divide-gray-200">
                  {trendingRepos
                    .filter(repo => selectedLanguage === "All" || repo.language === selectedLanguage)
                    .map((repo) => (
                    <div 
                      key={repo.id}
                      className="py-6 px-4 hover:bg-gray-50 cursor-pointer"
                      onClick={() => navigate(`/repository/${repo.owner}/${repo.name}`)}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <GitBranch className="w-4 h-4 text-gray-600" />
                        <span className="text-blue-600 font-medium text-lg">{repo.owner}/{repo.name}</span>
                      </div>
                      <p className="text-gray-600 mb-3">{repo.description}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                          {repo.language}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {repo.stars.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          {repo.forks.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-500">
                          <Star className="w-3 h-3 inline mr-1" /> 
                          {repo.starsToday} stars today
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="developers" className="mt-0">
                <div className="divide-y divide-gray-200">
                  {trendingDevelopers.map((dev) => (
                    <div 
                      key={dev.id}
                      className="py-6 px-4 hover:bg-gray-50 cursor-pointer"
                      onClick={() => navigate(`/user/${dev.username}`)}
                    >
                      <div className="flex items-start md:items-center gap-4 mb-3">
                        <img 
                          src={dev.avatar} 
                          alt={dev.name} 
                          className="w-16 h-16 rounded-full"
                        />
                        <div>
                          <h3 className="font-medium text-lg">{dev.name}</h3>
                          <p className="text-gray-600">@{dev.username}</p>
                        </div>
                      </div>
                      <div className="ml-20">
                        <p className="text-sm text-gray-700 mb-1">Popular repository</p>
                        <div className="flex items-center gap-2">
                          <GitBranch className="w-4 h-4 text-gray-600" />
                          <span className="text-blue-600 font-medium">{dev.popularRepo.name}</span>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{dev.popularRepo.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
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

export default Trending;
