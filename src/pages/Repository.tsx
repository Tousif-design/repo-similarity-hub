
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GitBranch, GitFork, Star, Eye, Code, BookOpen, GitPullRequest, GitCommit, FileText, Download, Upload } from "lucide-react";
import Navbar from "@/components/Navbar";
import FileTree from "@/components/FileTree";
import CodeViewer from "@/components/CodeViewer";

const Repository = () => {
  const { owner, name } = useParams();
  const navigate = useNavigate();
  const [repository, setRepository] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedBranch, setSelectedBranch] = useState("main");
  const [selectedPath, setSelectedPath] = useState("");
  const [fileContent, setFileContent] = useState<string | null>(null);
  
  // Mock repository data
  useEffect(() => {
    // In a real application, this would be an API call
    setTimeout(() => {
      setRepository({
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
        readme: "# Project Overview\nThis is a sample README file that would typically contain project documentation.\n\n## Getting Started\n\n```\nnpm install\nnpm start\n```\n\n## Features\n\n- Feature 1\n- Feature 2\n- Feature 3\n",
        fileStructure: [
          { name: "src", type: "folder", children: [
            { name: "components", type: "folder", children: [
              { name: "Button.tsx", type: "file", content: "import React from 'react';\n\nconst Button = ({ children }) => {\n  return <button className='btn'>{children}</button>;\n};\n\nexport default Button;" },
              { name: "Card.tsx", type: "file", content: "import React from 'react';\n\nconst Card = ({ title, children }) => {\n  return (\n    <div className='card'>\n      <h3>{title}</h3>\n      <div>{children}</div>\n    </div>\n  );\n};\n\nexport default Card;" }
            ]},
            { name: "pages", type: "folder", children: [
              { name: "Home.tsx", type: "file", content: "import React from 'react';\nimport Button from '../components/Button';\nimport Card from '../components/Card';\n\nconst Home = () => {\n  return (\n    <div className='home'>\n      <h1>Welcome to our app</h1>\n      <Card title='Getting Started'>\n        <p>Here are some resources to help you get started...</p>\n        <Button>Learn More</Button>\n      </Card>\n    </div>\n  );\n};\n\nexport default Home;" },
              { name: "About.tsx", type: "file", content: "import React from 'react';\n\nconst About = () => {\n  return (\n    <div className='about'>\n      <h1>About Our Project</h1>\n      <p>This project aims to revolutionize software development...</p>\n    </div>\n  );\n};\n\nexport default About;" }
            ]},
            { name: "App.tsx", type: "file", content: "import React from 'react';\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\nimport Home from './pages/Home';\nimport About from './pages/About';\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path='/' element={<Home />} />\n        <Route path='/about' element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n};\n\nexport default App;" },
            { name: "index.tsx", type: "file", content: "import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport './styles.css';\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);" }
          ]},
          { name: "public", type: "folder", children: [
            { name: "index.html", type: "file", content: "<!DOCTYPE html>\n<html lang='en'>\n<head>\n  <meta charset='UTF-8'>\n  <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n  <title>My App</title>\n</head>\n<body>\n  <div id='root'></div>\n</body>\n</html>" },
            { name: "favicon.ico", type: "file", content: "[Binary content]" }
          ]},
          { name: "package.json", type: "file", content: "{\n  \"name\": \"my-app\",\n  \"version\": \"0.1.0\",\n  \"private\": true,\n  \"dependencies\": {\n    \"react\": \"^18.2.0\",\n    \"react-dom\": \"^18.2.0\",\n    \"react-router-dom\": \"^6.4.0\"\n  },\n  \"scripts\": {\n    \"start\": \"react-scripts start\",\n    \"build\": \"react-scripts build\",\n    \"test\": \"react-scripts test\",\n    \"eject\": \"react-scripts eject\"\n  }\n}" },
          { name: "README.md", type: "file", content: "# Project Overview\nThis is a sample README file that would typically contain project documentation.\n\n## Getting Started\n\n```\nnpm install\nnpm start\n```\n\n## Features\n\n- Feature 1\n- Feature 2\n- Feature 3\n" },
          { name: ".gitignore", type: "file", content: "# dependencies\n/node_modules\n\n# production\n/build\n\n# misc\n.DS_Store\n.env.local\n.env\n\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*" }
        ]
      });
      setLoading(false);
    }, 500);
  }, [owner, name]);

  const handleFileSelect = (path: string, content: string) => {
    setSelectedPath(path);
    setFileContent(content);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
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
      <div className="min-h-screen flex flex-col">
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <GitBranch className="w-5 h-5 text-gray-600" />
            <Link to={`/user/${repository.owner}`} className="text-blue-600 hover:underline">
              {repository.owner}
            </Link>
            <span className="text-gray-600">/</span>
            <h1 className="text-xl font-bold">{repository.name}</h1>
            <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-800">Public</span>
          </div>
          
          <p className="text-gray-600 mb-4">{repository.description}</p>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="flex items-center gap-2 text-sm">
              <Star className="w-4 h-4" />
              <span>Star</span>
              <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-gray-100">{repository.stars}</span>
            </Button>
            
            <Button variant="outline" className="flex items-center gap-2 text-sm">
              <GitFork className="w-4 h-4" />
              <span>Fork</span>
              <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-gray-100">{repository.forks}</span>
            </Button>
            
            <Button variant="outline" className="flex items-center gap-2 text-sm">
              <Eye className="w-4 h-4" />
              <span>Watch</span>
              <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-gray-100">{repository.watchers}</span>
            </Button>
          </div>
        </div>
        
        <div className="mb-6 border-b border-gray-200">
          <div className="flex overflow-auto hide-scrollbar">
            <Link to={`/repository/${owner}/${name}`} className="px-4 py-3 border-b-2 border-blue-600 text-blue-600 font-medium flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Code</span>
            </Link>
            <Link to={`/repository/${owner}/${name}/issues`} className="px-4 py-3 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>Issues</span>
              <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-gray-100">{repository.issues}</span>
            </Link>
            <Link to={`/repository/${owner}/${name}/pull-requests`} className="px-4 py-3 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2">
              <GitPullRequest className="w-4 h-4" />
              <span>Pull Requests</span>
              <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-gray-100">{repository.pullRequests}</span>
            </Link>
            <Link to={`/repository/${owner}/${name}/actions`} className="px-4 py-3 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"></path>
                <path d="M18.4 9.6L8.5 11.4 6 16"></path>
                <path d="M18.4 9.6L8.5 7.8l-2.5 4.4"></path>
              </svg>
              <span>Actions</span>
            </Link>
            <Link to={`/repository/${owner}/${name}/projects`} className="px-4 py-3 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              <span>Projects</span>
            </Link>
            <Link to={`/repository/${owner}/${name}/wiki`} className="px-4 py-3 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Wiki</span>
            </Link>
          </div>
        </div>
        
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
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
            
            <Button 
              variant="outline" 
              size="sm" 
              className="h-9 text-sm"
              onClick={() => navigate(`/repository/${owner}/${name}/branches`)}
            >
              <span className="mr-1">{repository.branches.length}</span>
              <span>branches</span>
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9 text-sm flex items-center gap-1">
              <GitCommit className="w-4 h-4" />
              <span>Commits</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="h-9 text-sm flex items-center gap-1"
              onClick={() => navigate(`/repository/${owner}/${name}/download`)}
            >
              <Download className="w-4 h-4" />
              <span>Clone</span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9 text-sm">
                  <Upload className="w-4 h-4 mr-1" />
                  <span>Upload files</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={() => navigate(`/repository/${owner}/${name}/upload`)}>
                  Upload files
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate(`/repository/${owner}/${name}/create`)}>
                  Create new file
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <Card className="border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="p-4 border-r border-gray-200 md:col-span-1 overflow-auto max-h-[70vh]">
              <FileTree 
                files={repository.fileStructure} 
                onFileSelect={handleFileSelect}
              />
            </div>
            
            <div className="p-4 md:col-span-3 overflow-auto max-h-[70vh]">
              {selectedPath ? (
                <CodeViewer path={selectedPath} content={fileContent || ""} />
              ) : (
                <div className="prose max-w-none">
                  <h2 className="flex items-center gap-2 text-xl font-bold mb-4">
                    <FileText className="w-5 h-5" />
                    README.md
                  </h2>
                  <div className="p-4 rounded-md border border-gray-200 bg-gray-50">
                    {repository.readme.split('\n').map((line: string, i: number) => (
                      <div key={i} className="mb-1">
                        {line.startsWith('#') ? (
                          <h1 className="text-xl font-bold">{line.replace('# ', '')}</h1>
                        ) : line.startsWith('##') ? (
                          <h2 className="text-lg font-bold mt-4">{line.replace('## ', '')}</h2>
                        ) : line.startsWith('```') ? (
                          <pre className="bg-gray-100 p-3 rounded-md mt-2 mb-2 overflow-x-auto">
                            <code>{i+1 < repository.readme.split('\n').length && 
                              !repository.readme.split('\n')[i+1].startsWith('```') ? 
                              repository.readme.split('\n').slice(i+1, 
                                repository.readme.split('\n').findIndex((l: string, idx: number) => idx > i && l.startsWith('```'))
                              ).join('\n') : ''}
                            </code>
                          </pre>
                        ) : line.startsWith('-') ? (
                          <li className="ml-4">{line.replace('- ', '')}</li>
                        ) : line.trim() === '' ? (
                          <br />
                        ) : !line.startsWith('```') ? (
                          <p>{line}</p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </main>
      
      <footer className="border-t border-gray-200 py-6 px-4 mt-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <GitBranch className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600">RepoHub © 2023</span>
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

export default Repository;
