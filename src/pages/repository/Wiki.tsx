
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GitBranch, BookOpen, PencilLine } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Wiki = () => {
  const { owner, name } = useParams();
  const [loading, setLoading] = useState(true);
  const [wikiContent, setWikiContent] = useState<string>("");

  useEffect(() => {
    // Simulate loading wiki content
    setTimeout(() => {
      setWikiContent(`# ${name} Wiki

Welcome to the ${name} wiki! This is the main page for the project documentation.

## Overview

This wiki contains important information about the project, including setup instructions, 
architecture overview, and contribution guidelines.

## Getting Started

To set up the project locally, follow these steps:

1. Clone the repository
\`\`\`
git clone https://github.com/${owner}/${name}.git
cd ${name}
\`\`\`

2. Install dependencies
\`\`\`
npm install
\`\`\`

3. Start the development server
\`\`\`
npm start
\`\`\`

## Contributing

Contributions are welcome! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.`);
      setLoading(false);
    }, 500);
  }, [name, owner]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <GitBranch className="w-5 h-5 text-gray-600" />
            <Link to={`/user/${owner}`} className="text-blue-600 hover:underline">
              {owner}
            </Link>
            <span className="text-gray-600">/</span>
            <Link to={`/repository/${owner}/${name}`} className="text-blue-600 hover:underline">
              {name}
            </Link>
          </div>
        </div>
        
        <div className="mb-6 border-b border-gray-200">
          <div className="flex overflow-auto hide-scrollbar">
            <Link 
              to={`/repository/${owner}/${name}`} 
              className="px-4 py-3 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span>Code</span>
            </Link>
            <Link 
              to={`/repository/${owner}/${name}/issues`} 
              className="px-4 py-3 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>Issues</span>
            </Link>
            <Link 
              to={`/repository/${owner}/${name}/pull-requests`} 
              className="px-4 py-3 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="18" r="3"></circle>
                <circle cx="6" cy="6" r="3"></circle>
                <path d="M6 21V9a9 9 0 0 0 9 9"></path>
              </svg>
              <span>Pull Requests</span>
            </Link>
            <Link 
              to={`/repository/${owner}/${name}/actions`} 
              className="px-4 py-3 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"></path>
                <path d="M18.4 9.6L8.5 11.4 6 16"></path>
                <path d="M18.4 9.6L8.5 7.8l-2.5 4.4"></path>
              </svg>
              <span>Actions</span>
            </Link>
            <Link 
              to={`/repository/${owner}/${name}/projects`} 
              className="px-4 py-3 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              <span>Projects</span>
            </Link>
            <Link 
              to={`/repository/${owner}/${name}/wiki`} 
              className="px-4 py-3 border-b-2 border-blue-600 text-blue-600 transition-colors duration-200 flex items-center gap-2 font-medium"
            >
              <BookOpen className="w-4 h-4" />
              <span>Wiki</span>
            </Link>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Wiki
          </h1>
          <Button className="bg-green-600 hover:bg-green-700">
            <PencilLine className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </div>

        {loading ? (
          <div className="animate-pulse">
            <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-full bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-full bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded mb-4"></div>
          </div>
        ) : (
          <Card className="p-6">
            <div className="prose max-w-none">
              {wikiContent.split('\n').map((line, i) => (
                <div key={i} className="mb-1">
                  {line.startsWith('# ') ? (
                    <h1 className="text-2xl font-bold mb-4">{line.replace('# ', '')}</h1>
                  ) : line.startsWith('## ') ? (
                    <h2 className="text-xl font-bold mt-6 mb-3">{line.replace('## ', '')}</h2>
                  ) : line.startsWith('```') ? (
                    <pre className="bg-gray-100 p-3 rounded-md my-4 overflow-x-auto">
                      <code>{i+1 < wikiContent.split('\n').length && 
                        !wikiContent.split('\n')[i+1].startsWith('```') ? 
                        wikiContent.split('\n').slice(i+1, 
                          wikiContent.split('\n').findIndex((l, idx) => idx > i && l.startsWith('```'))
                        ).join('\n') : ''}
                      </code>
                    </pre>
                  ) : line.match(/^\d+\.\s/) ? (
                    <div className="ml-6 list-decimal">
                      <li className="mb-1">{line.replace(/^\d+\.\s/, '')}</li>
                    </div>
                  ) : line.trim() === '' ? (
                    <br />
                  ) : line.includes('[') && line.includes('](') ? (
                    <p>
                      {line.split(/(\[.*?\]\(.*?\))/).map((part, j) => {
                        if (part.match(/\[.*?\]\(.*?\)/)) {
                          const linkText = part.match(/\[(.*?)\]/)?.[1] || '';
                          const linkUrl = part.match(/\((.*?)\)/)?.[1] || '';
                          return <a key={j} href={linkUrl} className="text-blue-600 hover:underline">{linkText}</a>;
                        }
                        return part;
                      })}
                    </p>
                  ) : !line.startsWith('```') ? (
                    <p>{line}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </Card>
        )}

        <div className="mt-8">
          <Tabs defaultValue="pages" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="pages">Pages</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            <Card className="p-4">
              <ul className="divide-y divide-gray-200">
                <li className="py-3">
                  <Link to={`/repository/${owner}/${name}/wiki`} className="text-blue-600 hover:underline">
                    Home
                  </Link>
                </li>
                <li className="py-3">
                  <Link to={`/repository/${owner}/${name}/wiki/getting-started`} className="text-blue-600 hover:underline">
                    Getting Started
                  </Link>
                </li>
                <li className="py-3">
                  <Link to={`/repository/${owner}/${name}/wiki/api-reference`} className="text-blue-600 hover:underline">
                    API Reference
                  </Link>
                </li>
                <li className="py-3">
                  <Link to={`/repository/${owner}/${name}/wiki/contributing`} className="text-blue-600 hover:underline">
                    Contributing Guidelines
                  </Link>
                </li>
              </ul>
            </Card>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Wiki;
