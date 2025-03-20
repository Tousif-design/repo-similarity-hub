
import { Link, useParams, useLocation } from "react-router-dom";
import { GitBranch, AlertCircle, GitPullRequest, Play, Layout, BookOpen, Code } from "lucide-react";

const RepositoryNavigation = () => {
  const { owner, name } = useParams();
  const location = useLocation();
  const path = location.pathname;

  const isActive = (section: string) => {
    if (section === "code" && path === `/repository/${owner}/${name}`) return true;
    return path.includes(`/repository/${owner}/${name}/${section}`);
  };

  const links = [
    { to: `/repository/${owner}/${name}`, icon: Code, label: "Code", section: "code" },
    { to: `/repository/${owner}/${name}/issues`, icon: AlertCircle, label: "Issues", section: "issues" },
    { to: `/repository/${owner}/${name}/pull-requests`, icon: GitPullRequest, label: "Pull Requests", section: "pull-requests" },
    { to: `/repository/${owner}/${name}/actions`, icon: Play, label: "Actions", section: "actions" },
    { to: `/repository/${owner}/${name}/projects`, icon: Layout, label: "Projects", section: "projects" },
    { to: `/repository/${owner}/${name}/wiki`, icon: BookOpen, label: "Wiki", section: "wiki" },
  ];

  return (
    <div className="mb-6 border-b border-gray-200">
      <div className="flex overflow-auto hide-scrollbar">
        {links.map((link) => (
          <Link 
            key={link.section}
            to={link.to} 
            className={`px-4 py-3 border-b-2 transition-colors duration-200 flex items-center gap-2 ${
              isActive(link.section) 
                ? "border-blue-500 text-blue-600 font-medium" 
                : "border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900"
            }`}
            aria-current={isActive(link.section) ? "page" : undefined}
          >
            <link.icon className="w-4 h-4" />
            <span>{link.label}</span>
            {link.section === "issues" && (
              <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-gray-100">24</span>
            )}
            {link.section === "pull-requests" && (
              <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-gray-100">7</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RepositoryNavigation;
