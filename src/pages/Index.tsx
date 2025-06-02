import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import RecentRepositories from "@/components/RecentRepositories";
import { 
  GitBranch, 
  Star, 
  Code, 
  Rocket, 
  Sparkles, 
  Globe, 
  ArrowRight, 
  Users, 
  Lock, 
  Zap, 
  Crown, 
  Shield, 
  Target, 
  Workflow,
  TrendingUp,
  Brain,
  Layers,
  Database,
  Cloud,
  Activity
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        {/* Premium Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div className="flex flex-col space-y-10 animate-fade-in">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 border border-orange-200 rounded-full px-4 py-2 w-fit animate-pulse">
              <Crown className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-semibold text-orange-900">Premium Enterprise Platform</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                Build the
                <span className="relative inline-block ml-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 animate-shimmer">
                    future
                  </span>
                  <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full animate-pulse"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce">
                    <Sparkles className="w-3 h-3 text-white ml-1.5 mt-1.5" />
                  </div>
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                The most advanced development platform with AI-powered tools, enterprise security, 
                and unlimited scalability. Join millions of developers building tomorrow's software today.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => navigate('/new')}
                className="group bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold px-10 py-4 h-auto text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Start building</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/explore')}
                className="group border-2 border-gray-300 hover:border-orange-500 font-bold px-10 py-4 h-auto text-lg rounded-xl transition-all duration-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:shadow-xl transform hover:scale-105"
              >
                <Globe className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Explore ecosystem
              </Button>
            </div>

            {/* Premium Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center group cursor-default transform hover:scale-110 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent group-hover:animate-pulse">100M+</div>
                <div className="text-sm text-gray-600 font-medium">Repositories</div>
                <div className="w-8 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-auto mt-2 group-hover:w-12 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-default transform hover:scale-110 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent group-hover:animate-pulse">84M+</div>
                <div className="text-sm text-gray-600 font-medium">Developers</div>
                <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mt-2 group-hover:w-12 transition-all duration-300"></div>
              </div>
              <div className="text-center group cursor-default transform hover:scale-110 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent group-hover:animate-pulse">99.9%</div>
                <div className="text-sm text-gray-600 font-medium">Uptime</div>
                <div className="w-8 h-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mx-auto mt-2 group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          </div>
          
          {/* Premium Repository Showcase */}
          <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="relative w-full max-w-lg">
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-70 animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-pink-200 to-red-200 rounded-full opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
              
              {/* Main Premium Card */}
              <Card className="relative z-10 border-0 shadow-3xl hover:shadow-4xl transition-all duration-700 transform hover:scale-105 hover:rotate-1 bg-white/90 backdrop-blur-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <Crown className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold flex items-center gap-2">
                          premium/ai-platform
                          <div className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs rounded-full font-bold">PRO</div>
                        </CardTitle>
                        <div className="text-sm text-gray-500 flex items-center mt-1">
                          <Shield className="w-4 h-4 mr-1 text-green-500" />
                          Enterprise Private
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-600 font-medium">Live</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="text-sm text-gray-600 pb-6 border-b border-gray-100">
                  <p className="leading-relaxed mb-4">
                    Next-generation AI-powered development platform with advanced ML capabilities, 
                    real-time collaboration, and enterprise-grade security infrastructure.
                  </p>
                  
                  {/* Premium Code Preview */}
                  <div className="bg-gray-900 rounded-xl p-4 text-xs font-mono text-gray-300 overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Brain className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400">src/ai/Engine.tsx</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div><span className="text-purple-400">import</span> <span className="text-blue-400">AI</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@repohub/ai'</span></div>
                      <div><span className="text-purple-400">const</span> <span className="text-yellow-400">engine</span> = <span className="text-blue-400">new</span> <span className="text-yellow-400">AI.Engine</span>()</div>
                      <div><span className="text-green-400">// Premium AI-powered code generation</span></div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-4 flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 w-4 h-4 rounded-full mr-2 shadow-sm"></div>
                    AI/TypeScript
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1 hover:text-orange-500 transition-colors cursor-default">
                      <Star className="w-4 h-4" /> 12.8k
                    </span>
                    <span className="flex items-center gap-1 hover:text-orange-500 transition-colors cursor-default">
                      <GitBranch className="w-4 h-4" /> 2.1k
                    </span>
                    <span className="flex items-center gap-1 hover:text-orange-500 transition-colors cursor-default">
                      <Users className="w-4 h-4" /> 48
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        <RecentRepositories />
        
        {/* Premium Features Grid */}
        <section className="mt-24 mb-20">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-900">Premium Features</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Why enterprises choose 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 ml-2">
                RepoHub Pro
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The most advanced development platform with enterprise-grade features, 
              AI-powered tools, and unlimited scalability for teams of any size.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Powered Development */}
            <Card className="group border-0 shadow-xl hover:shadow-3xl transition-all duration-700 cursor-pointer bg-gradient-to-br from-white to-purple-50 transform hover:scale-105 hover:-translate-y-4 animate-fade-in">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors duration-300">AI-Powered Development</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Advanced AI code generation, intelligent suggestions, and automated testing 
                  that accelerates development by 10x while maintaining code quality.
                </CardDescription>
              </CardHeader>
            </Card>
            
            {/* Enterprise Security */}
            <Card className="group border-0 shadow-xl hover:shadow-3xl transition-all duration-700 cursor-pointer bg-gradient-to-br from-white to-green-50 transform hover:scale-105 hover:-translate-y-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl group-hover:text-green-600 transition-colors duration-300">Enterprise Security</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Bank-grade encryption, compliance tools, and advanced threat detection 
                  designed to meet the security requirements of Fortune 500 companies.
                </CardDescription>
              </CardHeader>
            </Card>
            
            {/* Lightning Performance */}
            <Card className="group border-0 shadow-xl hover:shadow-3xl transition-all duration-700 cursor-pointer bg-gradient-to-br from-white to-blue-50 transform hover:scale-105 hover:-translate-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors duration-300">Lightning Performance</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Global CDN, edge computing, and intelligent caching deliver sub-second 
                  load times across 150+ data centers worldwide.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Advanced Analytics */}
            <Card className="group border-0 shadow-xl hover:shadow-3xl transition-all duration-700 cursor-pointer bg-gradient-to-br from-white to-orange-50 transform hover:scale-105 hover:-translate-y-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl group-hover:text-orange-600 transition-colors duration-300">Advanced Analytics</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Real-time insights, performance metrics, and team productivity analytics 
                  with AI-powered recommendations for optimization.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Scalable Infrastructure */}
            <Card className="group border-0 shadow-xl hover:shadow-3xl transition-all duration-700 cursor-pointer bg-gradient-to-br from-white to-gray-50 transform hover:scale-105 hover:-translate-y-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-800 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <Cloud className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl group-hover:text-gray-600 transition-colors duration-300">Scalable Infrastructure</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Auto-scaling cloud infrastructure that grows with your team, 
                  from startups to enterprises with millions of users.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* 24/7 Premium Support */}
            <Card className="group border-0 shadow-xl hover:shadow-3xl transition-all duration-700 cursor-pointer bg-gradient-to-br from-white to-yellow-50 transform hover:scale-105 hover:-translate-y-4 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <Crown className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl group-hover:text-yellow-600 transition-colors duration-300">24/7 Premium Support</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Dedicated support team, priority assistance, and direct access 
                  to engineering experts for mission-critical issues.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Premium CTA Section */}
        <section className="mt-24 mb-16">
          <Card className="bg-gradient-to-r from-gray-900 via-gray-800 to-black border-0 shadow-3xl overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/10 to-pink-500/20"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            
            <CardContent className="p-16 text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-6 py-3 mb-8">
                  <Crown className="w-6 h-6 text-yellow-400" />
                  <span className="text-yellow-300 font-bold text-lg">Limited Time Offer</span>
                </div>
                
                <h3 className="text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to build the 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400"> future</span>?
                </h3>
                
                <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join millions of developers and enterprises who trust RepoHub Pro 
                  for their most ambitious projects. Start your free trial today.
                </p>
                
                <div className="flex flex-wrap gap-6 justify-center">
                  <Button 
                    onClick={() => navigate('/new')}
                    className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold px-12 py-4 h-auto text-xl rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Crown className="w-6 h-6 mr-3 relative z-10" />
                    <span className="relative z-10">Start Free Pro Trial</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/explore')}
                    className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 font-bold px-12 py-4 h-auto text-xl rounded-xl transition-all duration-500 transform hover:scale-110"
                  >
                    <Globe className="w-6 h-6 mr-3" />
                    <span>Explore Premium Features</span>
                  </Button>
                </div>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">30-Day</div>
                    <div className="text-gray-300">Free Trial</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-gray-300">Premium Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">No</div>
                    <div className="text-gray-300">Setup Fees</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      
      {/* Enhanced Premium Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 text-gray-300 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                  <GitBranch className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-2xl font-bold">RepoHub</h3>
                  <div className="text-xs text-orange-400 font-semibold">ENTERPRISE</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                The world's leading development platform trusted by millions of developers 
                and Fortune 500 companies worldwide.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Activity className="w-4 h-4 text-green-400" />
                <span className="text-green-400">All systems operational</span>
              </div>
            </div>
            
            {/* ... keep existing footer columns with enhanced styling ... */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-orange-500" />
                Product
              </h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Enterprise</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-6 flex items-center">
                <Cloud className="w-5 h-5 mr-2 text-blue-500" />
                Platform
              </h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Desktop</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Mobile</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-6 flex items-center">
                <Crown className="w-5 h-5 mr-2 text-yellow-500" />
                Support
              </h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Premium Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-center md:text-left text-gray-400">
                © 2024 RepoHub Enterprise, Inc. All rights reserved.
              </p>
              <div className="flex items-center space-x-8 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
                <div className="flex items-center gap-2 text-sm">
                  <Crown className="w-4 h-4 text-yellow-500" />
                  <span className="text-yellow-400 font-semibold">Enterprise Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
