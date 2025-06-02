
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  ArrowRight,
  Scan,
  Key,
  FileText,
  Users
} from "lucide-react";

const Security = () => {
  const navigate = useNavigate();

  const securityIssues = [
    {
      type: "Critical",
      title: "SQL Injection vulnerability in user input",
      severity: "high",
      status: "open",
      repository: "web-app"
    },
    {
      type: "Medium",
      title: "Outdated dependency with known vulnerabilities",
      severity: "medium",
      status: "fixed",
      repository: "api-service"
    },
    {
      type: "Low",
      title: "Weak password policy implementation",
      severity: "low",
      status: "open",
      repository: "auth-service"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-50 border-red-200 text-red-700";
      case "medium":
        return "bg-yellow-50 border-yellow-200 text-yellow-700";
      case "low":
        return "bg-blue-50 border-blue-200 text-blue-700";
      default:
        return "bg-gray-50 border-gray-200 text-gray-700";
    }
  };

  const getStatusIcon = (status: string) => {
    return status === "fixed" ? (
      <CheckCircle className="w-4 h-4 text-green-500" />
    ) : (
      <XCircle className="w-4 h-4 text-red-500" />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Security & Compliance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keep your code secure and compliant with automated security scanning, vulnerability detection, and policy enforcement.
          </p>
        </div>

        {/* Security Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Secure Repositories</p>
                <p className="text-2xl font-bold text-green-700">24</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-600">Pending Issues</p>
                <p className="text-2xl font-bold text-yellow-700">7</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-red-50 to-rose-50 border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-red-600">Critical Alerts</p>
                <p className="text-2xl font-bold text-red-700">2</p>
              </div>
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Last Scan</p>
                <p className="text-2xl font-bold text-blue-700">2h</p>
              </div>
              <Scan className="w-8 h-8 text-blue-500" />
            </div>
          </Card>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-6 transition-transform">
                <Scan className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">Vulnerability Scanning</CardTitle>
              <CardDescription>Automated detection of security vulnerabilities in your code and dependencies</CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-6 transition-transform">
                <Key className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">Secret Management</CardTitle>
              <CardDescription>Secure storage and management of API keys, tokens, and sensitive data</CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-6 transition-transform">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">Compliance Reports</CardTitle>
              <CardDescription>Generate compliance reports for SOC 2, ISO 27001, and other standards</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Security Issues */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Security Issues</h2>
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Run Security Scan
            </Button>
          </div>

          <div className="space-y-4">
            {securityIssues.map((issue, index) => (
              <Card key={index} className={`border transition-all duration-300 hover:shadow-md ${getSeverityColor(issue.severity)}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(issue.status)}
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                            {issue.type}
                          </span>
                          <span className="text-xs text-gray-500">{issue.repository}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mt-1">{issue.title}</h3>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                      {issue.status === "open" && (
                        <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
                          Fix Issue
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Security Best Practices */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg">
            <div className="text-center">
              <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Access Control</h3>
              <p className="text-gray-600">
                Fine-grained permissions and role-based access control to protect your repositories.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-purple-50 to-violet-50 border-0 shadow-lg">
            <div className="text-center">
              <Eye className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Audit Logging</h3>
              <p className="text-gray-600">
                Complete audit trail of all security-related activities and access attempts.
              </p>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Secure your code today</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Enable advanced security features and protect your repositories from vulnerabilities.
            </p>
            <Button 
              onClick={() => navigate('/settings')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 h-auto text-lg"
            >
              Configure Security Settings
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Security;
