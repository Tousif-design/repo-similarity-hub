
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import RecentRepositories from "@/components/RecentRepositories";
import { GitBranch, Star, Code, Rocket, Sparkles, Globe, ArrowRight, Users, Lock, Zap } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section with Enhanced Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="flex flex-col space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                Build the
                <span className="relative inline-block ml-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    future
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Collaborate, innovate, and deploy with the most advanced development platform. 
                Join millions of developers building the next generation of software.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => navigate('/new')}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 h-auto text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Start building
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/explore')}
                className="group border-2 border-gray-300 hover:border-orange-500 font-semibold px-8 py-3 h-auto text-lg rounded-lg transition-all duration-300 hover:bg-orange-50"
              >
                <Globe className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Explore projects
              </Button>
            </div>

            {/* Stats with Animation */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center group cursor-default">
                <div className="text-3xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">100M+</div>
                <div className="text-sm text-gray-600">Repositories</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-3xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">84M+</div>
                <div className="text-sm text-gray-600">Developers</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-3xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Animated Repository Card */}
          <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative w-full max-w-md">
              {/* Floating Background Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-100 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-100 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Main Card with Hover Effects */}
              <Card className="relative z-10 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                        <GitBranch className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold">premium-app/devhub</CardTitle>
                        <div className="text-xs text-gray-500 flex items-center mt-1">
                          <Lock className="w-3 h-3 mr-1" />
                          Private repository
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600">Active</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 pb-4 border-b border-gray-100">
                  <p className="leading-relaxed">A comprehensive development platform with premium features, real-time collaboration, and enterprise-grade security.</p>
                  
                  {/* Code Preview with Syntax Highlighting */}
                  <div className="mt-4 p-3 bg-gray-900 rounded-lg text-xs font-mono text-gray-300 overflow-hidden">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-orange-400">src/App.tsx</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div><span className="text-purple-400">import</span> <span className="text-blue-400">React</span> <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span></div>
                      <div><span className="text-purple-400">export</span> <span className="text-blue-400">default</span> <span className="text-yellow-400">App</span></div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-4 flex justify-between items-center">
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="bg-orange-500 w-3 h-3 rounded-full mr-2"></div>
                    TypeScript
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1 hover:text-orange-500 transition-colors cursor-default">
                      <Star className="w-3 h-3" /> 2.5k
                    </span>
                    <span className="flex items-center gap-1 hover:text-orange-500 transition-colors cursor-default">
                      <GitBranch className="w-3 h-3" /> 134
                    </span>
                    <span className="flex items-center gap-1 hover:text-orange-500 transition-colors cursor-default">
                      <Users className="w-3 h-3" /> 12
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        <RecentRepositories />
        
        {/* Enhanced Features Section */}
        <section className="mt-20 mb-16">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why developers choose 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 ml-2">
                RepoHub
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join the platform that's transforming how teams build software together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">Powerful Collaboration</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Advanced code review tools, real-time editing, and seamless team workflows that scale with your organization.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">Lightning Fast CI/CD</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Deploy with confidence using our integrated pipeline that tests, builds, and ships your code automatically.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">Enterprise Ready</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Bank-grade security, compliance tools, and admin controls designed for the world's largest organizations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mt-20 mb-12">
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to get started?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join millions of developers who trust RepoHub for their most important projects.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    onClick={() => navigate('/new')}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 h-auto text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Create your first repository
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/explore')}
                    className="border-2 border-white/20 text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 h-auto text-lg rounded-lg transition-all duration-300"
                  >
                    Explore open source
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      
      {/* Enhanced Footer */}
      <footer className="bg-gray-900 py-16 text-gray-300">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                  <GitBranch className="w-4 h-4 text-white" />
                </div>
                Product
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Enterprise</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Platform</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Desktop</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Mobile</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Help</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Press</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-center md:text-left">
                © 2024 RepoHub, Inc. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
