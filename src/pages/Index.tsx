
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import RecentRepositories from "@/components/RecentRepositories";
import { GitBranch, Star, Code, Rocket, Sparkles, Globe } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-2">
              Your complete development platform
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Build, scale, and deliver secure software using the platform developers love.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => navigate('/new')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2 h-auto"
              >
                Start a new project
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/explore')}
                className="border-gray-300 hover:border-gray-400 font-medium px-5 py-2 h-auto"
              >
                Explore repositories
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-blue-100 opacity-30 rounded-lg transform rotate-3"></div>
              <Card className="relative z-10 border-gray-200 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center">
                    <GitBranch className="w-5 h-5 mr-2 text-orange-500" />
                    <CardTitle className="text-base font-medium">premium-app/devhub</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 pb-3 border-b">
                  <p>A comprehensive development platform with premium features and GitHub-like functionality</p>
                </CardContent>
                <CardFooter className="pt-3 flex justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="bg-orange-500 w-2 h-2 rounded-full mr-1"></div>
                    TypeScript
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Star className="w-3 h-3" /> 2.5k</span>
                    <span className="flex items-center gap-1"><GitBranch className="w-3 h-3" /> 134</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        <RecentRepositories />
        
        <section className="mt-16 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Why developers choose RepoHub</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-gray-200">
              <CardHeader>
                <Code className="h-8 w-8 text-orange-500 mb-2" />
                <CardTitle>Powerful code collaboration</CardTitle>
                <CardDescription>
                  Built for professional teams with advanced code review tools
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-gray-200">
              <CardHeader>
                <Rocket className="h-8 w-8 text-orange-500 mb-2" />
                <CardTitle>Integrated CI/CD</CardTitle>
                <CardDescription>
                  Test, build, and deploy your code seamlessly
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-gray-200">
              <CardHeader>
                <Sparkles className="h-8 w-8 text-orange-500 mb-2" />
                <CardTitle>Enterprise-ready</CardTitle>
                <CardDescription>
                  Security, compliance, and admin tools for organizations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 py-12 text-gray-300">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Electron</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Desktop</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>
              © 2023 RepoHub, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
