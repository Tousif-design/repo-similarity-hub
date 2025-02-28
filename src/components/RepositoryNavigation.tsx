
import { Link, useParams } from "react-router-dom";
import { GitBranch, AlertCircle, GitPullRequest, Play, Layout, BookOpen } from "lucide-react";

const RepositoryNavigation = () => {
  const { owner, name } = useParams();

  return (
    <div className="mb-6 border-b border-gray-200">
      <div className="flex overflow-auto hide-scrollbar">
        <Link 
          to={`/repository/${owner}/${name}`} 
          className="px-4 py-3 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
        >
          <GitBranch className="w-4 h-4" />
          <span>Code</span>
        </Link>
        <Link 
          to={`/repository/${owner}/${name}/issues`} 
          className="px-4 py-3 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
        >
          <AlertCircle className="w-4 h-4" />
          <span>Issues</span>
        </Link>
        <Link 
          to={`/repository/${owner}/${name}/pull-requests`} 
          className="px-4 py-3 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
        >
          <GitPullRequest className="w-4 h-4" />
          <span>Pull Requests</span>
        </Link>
        <Link 
          to={`/repository/${owner}/${name}/actions`} 
          className="px-4 py-3 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
        >
          <Play className="w-4 h-4" />
          <span>Actions</span>
        </Link>
        <Link 
          to={`/repository/${owner}/${name}/projects`} 
          className="px-4 py-3 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
        >
          <Layout className="w-4 h-4" />
          <span>Projects</span>
        </Link>
        <Link 
          to={`/repository/${owner}/${name}/wiki`} 
          className="px-4 py-3 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
        >
          <BookOpen className="w-4 h-4" />
          <span>Wiki</span>
        </Link>
      </div>
    </div>
  );
};

export default RepositoryNavigation;
