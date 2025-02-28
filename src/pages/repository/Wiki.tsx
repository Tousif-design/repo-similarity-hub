
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import RepositoryNavigation from "@/components/RepositoryNavigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Edit, GitBranch, History, Plus } from "lucide-react";
import { toast } from "sonner";

const Wiki = () => {
  const { owner, name } = useParams();
  const [currentPage, setCurrentPage] = useState("home");
  
  const pages = [
    { id: "home", title: "Home", lastUpdated: "2023-05-10" },
    { id: "installation", title: "Installation Guide", lastUpdated: "2023-05-08" },
    { id: "api", title: "API Documentation", lastUpdated: "2023-05-05" },
    { id: "contributing", title: "Contributing Guidelines", lastUpdated: "2023-04-30" },
    { id: "faq", title: "Frequently Asked Questions", lastUpdated: "2023-04-25" }
  ];

  const pageContent = {
    home: {
      content: `
# Welcome to the ${name} Wiki!

This wiki contains documentation for the ${name} project. It's a great place to learn about how the project works, how to use it, and how to contribute.

## Quick Links

* [Installation Guide](/installation)
* [API Documentation](/api)
* [Contributing Guidelines](/contributing)
* [FAQ](/faq)

## About the Project

${name} is a powerful tool for developers who want to manage their code repositories efficiently. It offers a range of features for code management, issue tracking, and collaboration.

## Getting Started

To get started with ${name}, check out the [Installation Guide](/installation).
      `
    },
    installation: {
      content: `
# Installation Guide

This guide will help you install and set up ${name} on your system.

## System Requirements

* Node.js 14.x or later
* npm 7.x or later
* Git 2.28 or later

## Installation Steps

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/${owner}/${name}.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`bash
   cd ${name}
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

4. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Open your browser and navigate to \`http://localhost:3000\`.

## Configuration

You can configure ${name} by creating a \`.env\` file in the root directory of the project. See \`.env.example\` for available options.
      `
    },
    api: {
      content: `
# API Documentation

This page documents the API endpoints available in ${name}.

## Authentication

All API endpoints require authentication. You can authenticate by including an API key in the \`Authorization\` header:

\`\`\`
Authorization: Bearer YOUR_API_KEY
\`\`\`

## Endpoints

### GET /api/repositories

Returns a list of repositories for the authenticated user.

#### Parameters

* \`page\` (optional): Page number for pagination. Default: 1.
* \`perPage\` (optional): Items per page. Default: 20.

#### Response

\`\`\`json
{
  "repositories": [
    {
      "id": "repo-id",
      "name": "repo-name",
      "description": "Repository description",
      "stars": 42,
      "forks": 10
    }
  ],
  "pagination": {
    "total": 100,
    "page": 1,
    "perPage": 20
  }
}
\`\`\`

### POST /api/repositories

Creates a new repository.

#### Request Body

\`\`\`json
{
  "name": "new-repo",
  "description": "New repository description",
  "isPrivate": false
}
\`\`\`

#### Response

\`\`\`json
{
  "id": "new-repo-id",
  "name": "new-repo",
  "description": "New repository description",
  "stars": 0,
  "forks": 0
}
\`\`\`
      `
    },
    contributing: {
      content: `
# Contributing Guidelines

Thank you for your interest in contributing to ${name}! This document outlines the process for contributing to the project.

## Code of Conduct

Please read and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

1. Fork the repository on GitHub.
2. Clone your fork locally.
3. Create a new branch for your feature or bugfix.
4. Make your changes, following our coding standards.
5. Write tests for your changes.
6. Run the test suite to ensure everything passes.
7. Submit a pull request.

## Pull Request Process

1. Ensure your code follows the project's coding standards.
2. Update the documentation as necessary.
3. Include tests for new features or bugfixes.
4. Ensure your branch is up to date with the main branch.
5. Submit your pull request.

## Coding Standards

* Use consistent indentation (2 spaces).
* Follow the existing code style.
* Write clear, concise, and descriptive commit messages.
* Document your code as necessary.

## Testing

All new features and bugfixes should include tests. Run the test suite with:

\`\`\`bash
npm test
\`\`\`

## Questions

If you have any questions about contributing, please open an issue or contact one of the maintainers.
      `
    },
    faq: {
      content: `
# Frequently Asked Questions

## General Questions

### What is ${name}?

${name} is a tool for developers to manage their code repositories, track issues, and collaborate with others.

### How do I get started with ${name}?

Check out our [Installation Guide](/installation) for instructions on getting started.

### Is ${name} free to use?

Yes, ${name} is free and open source.

## Technical Questions

### How do I report a bug?

You can report bugs by opening an issue on our [GitHub repository](https://github.com/${owner}/${name}/issues).

### How do I request a new feature?

Feature requests can be submitted as issues on our [GitHub repository](https://github.com/${owner}/${name}/issues).

### How can I contribute to ${name}?

Check out our [Contributing Guidelines](/contributing) for information on how to contribute.

### What technologies does ${name} use?

${name} is built with React, TypeScript, and Node.js.

## Support

### Where can I get help with ${name}?

You can get help by:

* Opening an issue on our [GitHub repository](https://github.com/${owner}/${name}/issues)
* Joining our [Discord server](https://discord.gg/${name})
* Emailing support@${name}.com
      `
    }
  };

  const handlePageClick = (pageId: string) => {
    setCurrentPage(pageId);
  };

  const handleEditPage = () => {
    toast.success("Wiki editing would be implemented in a production app");
  };

  const handleNewPage = () => {
    toast.success("Creating new wiki pages would be implemented in a production app");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <GitBranch className="w-5 h-5 text-gray-600" />
            <Link to={`/profile`} className="text-blue-600 hover:underline">
              {owner}
            </Link>
            <span className="text-gray-600">/</span>
            <Link to={`/repository/${owner}/${name}`} className="text-blue-600 hover:underline">
              {name}
            </Link>
          </div>
        </div>
        
        <RepositoryNavigation />
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Wiki</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleEditPage}>
              <Edit className="mr-2 h-4 w-4" /> Edit
            </Button>
            <Button onClick={handleNewPage}>
              <Plus className="mr-2 h-4 w-4" /> New Page
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {pages.map((page) => (
                    <li key={page.id}>
                      <button
                        onClick={() => handlePageClick(page.id)}
                        className={`w-full text-left px-3 py-2 rounded-md ${
                          currentPage === page.id ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                        }`}
                      >
                        {page.title}
                      </button>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className="w-full mt-4 text-blue-600"
                  onClick={handleNewPage}
                >
                  <Plus className="mr-2 h-4 w-4" /> Add new page
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">
                  {pages.find(p => p.id === currentPage)?.title || "Home"}
                </CardTitle>
                <div className="flex items-center text-sm text-gray-500">
                  <History className="mr-1 h-4 w-4" />
                  <span>Last updated on {pages.find(p => p.id === currentPage)?.lastUpdated}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ 
                    __html: pageContent[currentPage as keyof typeof pageContent]?.content
                      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
                      .replace(/\*(.*)\*/gim, '<em>$1</em>')
                      .replace(/\n/gim, '<br />')
                      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-blue-600 hover:underline">$1</a>')
                      .replace(/```([^`]+)```/gim, '<pre class="bg-gray-100 p-4 rounded-md"><code>$1</code></pre>')
                      .replace(/`([^`]+)`/gim, '<code class="bg-gray-100 px-1 py-0.5 rounded">$1</code>')
                  }} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wiki;
