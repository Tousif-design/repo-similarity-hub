
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { 
  Package, 
  Download, 
  Upload, 
  Shield, 
  Globe, 
  Lock,
  ArrowRight,
  Star,
  TrendingUp,
  Users
} from "lucide-react";

const Packages = () => {
  const navigate = useNavigate();

  const packages = [
    {
      name: "@repohub/ui-components",
      version: "2.1.0",
      downloads: "1.2M",
      visibility: "public",
      language: "TypeScript",
      description: "Beautiful React UI components for modern applications"
    },
    {
      name: "@company/internal-utils",
      version: "1.0.5",
      downloads: "45K",
      visibility: "private",
      language: "JavaScript",
      description: "Internal utility functions for company projects"
    },
    {
      name: "@repohub/api-client",
      version: "3.2.1",
      downloads: "890K",
      visibility: "public",
      language: "TypeScript",
      description: "Official API client for RepoHub services"
    }
  ];

  const registries = [
    { name: "npm", icon: "📦", color: "text-red-500" },
    { name: "Docker", icon: "🐳", color: "text-blue-500" },
    { name: "Maven", icon: "☕", color: "text-orange-500" },
    { name: "NuGet", icon: "📦", color: "text-purple-500" },
    { name: "RubyGems", icon: "💎", color: "text-red-600" },
    { name: "PyPI", icon: "🐍", color: "text-yellow-500" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mb-6">
            <Package className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Package Registry
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Host and manage packages for your projects. Share code across teams and organizations securely.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-6 transition-transform">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">Publish Package</CardTitle>
              <CardDescription>Upload your packages to the registry</CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-6 transition-transform">
                <Download className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">Browse Packages</CardTitle>
              <CardDescription>Discover packages from the community</CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-6 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">Security Scanning</CardTitle>
              <CardDescription>Automated vulnerability detection</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Supported Registries */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Supported Package Registries</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {registries.map((registry, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-all duration-300 transform hover:scale-105 border-0 shadow-sm">
                <div className="text-2xl mb-2">{registry.icon}</div>
                <div className={`font-semibold ${registry.color}`}>{registry.name}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Your Packages */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Packages</h2>
            <Button 
              onClick={() => navigate('/new')}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Publish Package
            </Button>
          </div>

          <div className="space-y-4">
            {packages.map((pkg, index) => (
              <Card key={index} className="border transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">{pkg.name}</h3>
                          <span className="text-sm text-gray-500">v{pkg.version}</span>
                          {pkg.visibility === "private" ? (
                            <Lock className="w-3 h-3 text-gray-500" />
                          ) : (
                            <Globe className="w-3 h-3 text-green-500" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{pkg.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mt-2">
                          <span className="flex items-center">
                            <Download className="w-3 h-3 mr-1" />
                            {pkg.downloads}
                          </span>
                          <span>{pkg.language}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                      <Button variant="ghost" size="sm">
                        Settings
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg">
            <div className="text-center">
              <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-900">Analytics</h3>
              <p className="text-gray-600 text-sm">
                Track downloads, usage metrics, and package performance.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg">
            <div className="text-center">
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-900">Team Collaboration</h3>
              <p className="text-gray-600 text-sm">
                Share packages securely within your organization.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 border-0 shadow-lg">
            <div className="text-center">
              <Star className="w-10 h-10 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-900">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">
                Automated testing and security scanning for all packages.
              </p>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Start sharing your packages</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Publish your first package and join thousands of developers sharing code.
            </p>
            <Button 
              onClick={() => navigate('/new')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 h-auto text-lg"
            >
              Publish Your First Package
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Packages;
