
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import RecentRepositories from "@/components/RecentRepositories";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <section className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to RepoHub</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A platform for developers to collaborate, share and build amazing software together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
              <h2 className="text-xl font-bold mb-3">Create a new repository</h2>
              <p className="text-gray-600 mb-4">
                Start a new project, share your code, and collaborate with others.
              </p>
              <Button 
                onClick={() => navigate('/new')}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                New Repository
              </Button>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
              <h2 className="text-xl font-bold mb-3">Explore repositories</h2>
              <p className="text-gray-600 mb-4">
                Discover interesting projects and connect with developers.
              </p>
              <Button 
                onClick={() => navigate('/explore')}
                variant="outline"
                className="w-full border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                Explore
              </Button>
            </Card>
          </div>
        </section>
        
        <RecentRepositories />
        
        <section className="mt-12 text-center py-12 px-4 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Supercharge your workflow</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            RepoHub helps teams collaborate more effectively with powerful tools for code review,
            project management, and continuous integration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline"
              onClick={() => navigate('/features')}
            >
              Learn more about features
            </Button>
            <Button onClick={() => navigate('/new')}>
              Get started for free
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-100 py-12 mt-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Security</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Team</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Enterprise</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">API</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Partners</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Electron</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">RepoHub Desktop</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Mobile</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Help</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Community Forum</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Training</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Status</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Press</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Social Impact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              © 2023 RepoHub, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
