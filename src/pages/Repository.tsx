
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  GitBranch, GitFork, Star, Eye, GitCommit, FileText, Download, 
  Upload, Terminal, Code2, BookOpen, AlertCircle, GitPullRequest, Play
} from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import RepositoryNavigation from "@/components/RepositoryNavigation";
import FileTree from "@/components/FileTree";
import CodeViewer from "@/components/CodeViewer";
import TerminalCommandInput from "@/components/TerminalCommandInput";
import { useUser } from "@/contexts/UserContext";

const Repository = () => {
  const { owner, name } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addRepository } = useUser();
  const [repository, setRepository] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedBranch, setSelectedBranch] = useState("main");
  const [selectedPath, setSelectedPath] = useState("");
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [showTerminal, setShowTerminal] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      const repo = {
        id: `${owner}-${name}`,
        name: name || "unnamed-repo",
        owner: owner || "unknown",
        description: "A modern repository for building amazing software with collaboration.",
        stars: 1354,
        forks: 213,
        watchers: 86,
        branches: ["main", "develop", "feature/user-auth", "bugfix/header"],
        license: "MIT",
        lastUpdated: "2 days ago",
        issues: 24,
        pullRequests: 7,
        isStarred: false,
        isForked: false,
        isWatched: false,
        createdAt: new Date().toISOString(),
        isPublic: true,
        readme: "# Project Overview\nThis is a sample README file that would typically contain project documentation.\n\n## Getting Started\n\n```bash\nnpm install\nnpm start\n```\n\n## Features\n\n- Feature 1\n- Feature 2\n- Feature 3\n",
        fileStructure: [
          { name: "src", type: "folder", children: [
            { name: "components", type: "folder", children: [
              { name: "Button.tsx", type: "file", content: "import React from 'react';\n\nconst Button = ({ children }) => {\n  return <button className='btn'>{children}</button>;\n};\n\nexport default Button;" },
              { name: "Card.tsx", type: "file", content: "import React from 'react';\n\nconst Card = ({ title, children }) => {\n  return (\n    <div className='card'>\n      <h3>{title}</h3>\n      <div>{children}</div>\n    </div>\n  );\n};\n\nexport default Card;" }
            ]},
            { name: "pages", type: "folder", children: [
              { name: "Home.tsx", type: "file", content: "import React from 'react';\nimport Button from '../components/Button';\nimport Card from '../components/Card';\n\nconst Home = () => {\n  return (\n    <div className='home'>\n      <h1>Welcome to our app</h1>\n      <Card title='Getting Started'>\n        <p>Here are some resources to help you get started...</p>\n        <Button>Learn More</Button>\n      </Card>\n    </div>\n  );\n};\n\nexport default Home;" }
            ]},
            { name: "App.tsx", type: "file", content: "import React from 'react';\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\nimport Home from './pages/Home';\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path='/' element={<Home />} />\n      </Routes>\n    </BrowserRouter>\n  );\n};\n\nexport default App;" }
          ]},
          { name: "package.json", type: "file", content: "{\n  \"name\": \"my-app\",\n  \"version\": \"0.1.0\",\n  \"private\": true,\n  \"dependencies\": {\n    \"react\": \"^18.2.0\",\n    \"react-dom\": \"^18.2.0\"\n  }\n}" },
          { name: "README.md", type: "file", content: "# Project Overview\nThis is a sample README file that would typically contain project documentation.\n\n## Getting Started\n\n```bash\nnpm install\nnpm start\n```\n\n## Features\n\n- Feature 1\n- Feature 2\n- Feature 3\n" }
        ]
      };
      
      setRepository(repo);
      addRepository({
        id: repo.id,
        name: repo.name,
        owner: repo.owner,
        description: repo.description,
        createdAt: repo.createdAt,
        stars: repo.stars,
        forks: repo.forks,
        watchers: repo.watchers,
        isPublic: repo.isPublic
      });
      
      setLoading(false);
    }, 500);
  }, [owner, name, addRepository]);

  const handleFileSelect = (path: string, content: string) => {
    setSelectedPath(path);
    setFileContent(content);
  };

  const handleStar = () => {
    setRepository((prev: any) => ({
      ...prev,
      stars: prev.isStarred ? prev.stars - 1 : prev.stars + 1,
      isStarred: !prev.isStarred
    }));
    
    toast({
      title: repository?.isStarred ? "Repository unstarred" : "Repository starred",
      description: repository?.isStarred 
        ? `You have removed your star from ${owner}/${name}` 
        : `You have starred ${owner}/${name}`
    });
  };

  const handleFork = () => {
    setRepository((prev: any) => ({
      ...prev,
      forks: prev.isForked ? prev.forks : prev.forks + 1,
      isForked: true
    }));
    
    toast({
      title: "Repository forked",
      description: `${owner}/${name} has been forked to your account`
    });
  };

  const handleWatch = () => {
    setRepository((prev: any) => ({
      ...prev,
      watchers: prev.isWatched ? prev.watchers - 1 : prev.watchers + 1,
      isWatched: !prev.isWatched
    }));
    
    toast({
      title: repository?.isWatched ? "Unwatched repository" : "Watching repository",
      description: repository?.isWatched 
        ? `You are no longer watching ${owner}/${name}` 
        : `You are now watching ${owner}/${name}`
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-96 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!repository) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Repository not found</h2>
            <p className="text-gray-600 mb-4">
              The repository {owner}/{name} doesn't exist or you may not have access.
            </p>
            <Button onClick={() => navigate('/')}>
              Return Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Repository Header */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="w-5 h-5 text-gray-600" />
                <Link to={`/user/${repository.owner}`} className="text-blue-600 hover:underline text-xl">
                  {repository.owner}
                </Link>
                <span className="text-gray-600 text-xl">/</span>
                <h1 className="text-xl font-bold">{repository.name}</h1>
                <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full border border-gray-300 bg-white text-gray-700">
                  {repository.isPublic ? "Public" : "Private"}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{repository.description}</p>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`flex items-center gap-2 text-sm ${repository.isStarred ? 'bg-yellow-50 border-yellow-200' : ''}`} 
                  onClick={handleStar}
                >
                  <Star className={`w-4 h-4 ${repository.isStarred ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                  <span>{repository.isStarred ? "Starred" : "Star"}</span>
                  <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-gray-100">{repository.stars}</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`flex items-center gap-2 text-sm ${repository.isForked ? 'bg-blue-50 border-blue-200' : ''}`} 
                  onClick={handleFork}
                  disabled={repository.isForked}
                >
                  <GitFork className="w-4 h-4" />
                  <span>{repository.isForked ? "Forked" : "Fork"}</span>
                  <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-gray-100">{repository.forks}</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`flex items-center gap-2 text-sm ${repository.isWatched ? 'bg-blue-50 border-blue-200' : ''}`} 
                  onClick={handleWatch}
                >
                  <Eye className="w-4 h-4" />
                  <span>{repository.isWatched ? "Watching" : "Watch"}</span>
                  <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-gray-100">{repository.watchers}</span>
                </Button>
              </div>
            </div>
            
            <div className="flex items-center gap-2 ml-4">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 text-sm"
                onClick={() => setShowTerminal(!showTerminal)}
              >
                <Terminal className="w-4 h-4" />
                <span>Terminal</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Repository Navigation */}
      <RepositoryNavigation />
      
      <main className="flex-1 container mx-auto px-4 py-6 max-w-6xl">
        {showTerminal && (
          <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              Terminal
            </h3>
            <TerminalCommandInput 
              currentRepository={{ owner: repository.owner, name: repository.name }}
              currentBranch={selectedBranch}
              onBranchChange={setSelectedBranch}
              onAddBranch={(branch) => {
                setRepository((prev: any) => ({
                  ...prev,
                  branches: [...prev.branches, branch]
                }));
              }}
            />
          </div>
        )}
        
        {/* Branch and Actions Bar */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Select value={selectedBranch} onValueChange={setSelectedBranch}>
              <SelectTrigger className="w-[180px] h-9 text-sm">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4" />
                  <SelectValue placeholder="Branch" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {repository.branches.map((branch: string) => (
                  <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <span className="text-sm text-gray-600">
              <span className="font-medium">{repository.branches.length}</span> branches
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9 text-sm flex items-center gap-1">
              <GitCommit className="w-4 h-4" />
              <span>Commits</span>
            </Button>
            
            <Button variant="outline" size="sm" className="h-9 text-sm flex items-center gap-1">
              <Download className="w-4 h-4" />
              <span>Code</span>
            </Button>
          </div>
        </div>
        
        {/* File Explorer and Code Viewer */}
        <Card className="border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            <div className="lg:col-span-1 border-r border-gray-200 bg-gray-50">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-sm">Files</h3>
              </div>
              <div className="p-3 overflow-auto max-h-[600px]">
                <FileTree 
                  files={repository.fileStructure} 
                  onFileSelect={handleFileSelect}
                />
              </div>
            </div>
            
            <div className="lg:col-span-3">
              {selectedPath ? (
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
                    <FileText className="w-4 h-4 text-gray-600" />
                    <span className="font-medium">{selectedPath}</span>
                  </div>
                  <CodeViewer path={selectedPath} content={fileContent || ""} />
                </div>
              ) : (
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-gray-600" />
                    <h2 className="text-xl font-bold">README.md</h2>
                  </div>
                  <div className="prose max-w-none">
                    <div className="p-6 rounded-lg border border-gray-200 bg-white">
                      {repository.readme.split('\n').map((line: string, i: number) => (
                        <div key={i} className="mb-2">
                          {line.startsWith('# ') ? (
                            <h1 className="text-2xl font-bold mb-4">{line.replace('# ', '')}</h1>
                          ) : line.startsWith('## ') ? (
                            <h2 className="text-xl font-bold mt-6 mb-3">{line.replace('## ', '')}</h2>
                          ) : line.startsWith('```') ? (
                            <pre className="bg-gray-100 p-4 rounded-md mt-3 mb-3 overflow-x-auto border">
                              <code className="text-sm">
                                {repository.readme.split('\n').slice(i+1, 
                                  repository.readme.split('\n').findIndex((l: string, idx: number) => idx > i && l.startsWith('```'))
                                ).join('\n')}
                              </code>
                            </pre>
                          ) : line.startsWith('- ') ? (
                            <li className="ml-4 mb-1">{line.replace('- ', '')}</li>
                          ) : line.trim() === '' ? (
                            <br />
                          ) : !line.startsWith('```') ? (
                            <p className="mb-2">{line}</p>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Repository;
