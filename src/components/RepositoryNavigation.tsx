
import { Link, useParams, useLocation } from "react-router-dom";
import { GitBranch, AlertCircle, GitPullRequest, Play, Layout, BookOpen, Code, Shield } from "lucide-react";

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
    { to: `/repository/${owner}/${name}/issues`, icon: AlertCircle, label: "Issues", section: "issues", count: 24 },
    { to: `/repository/${owner}/${name}/pull-requests`, icon: GitPullRequest, label: "Pull requests", section: "pull-requests", count: 7 },
    { to: `/repository/${owner}/${name}/actions`, icon: Play, label: "Actions", section: "actions" },
    { to: `/repository/${owner}/${name}/projects`, icon: Layout, label: "Projects", section: "projects" },
    { to: `/repository/${owner}/${name}/wiki`, icon: BookOpen, label: "Wiki", section: "wiki" },
    { to: `/repository/${owner}/${name}/security`, icon: Shield, label: "Security", section: "security" },
  ];

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <nav className="flex overflow-x-auto">
          {links.map((link) => (
            <Link 
              key={link.section}
              to={link.to} 
              className={`px-4 py-4 border-b-2 transition-colors duration-150 flex items-center gap-2 whitespace-nowrap text-sm font-medium ${
                isActive(link.section) 
                  ? "border-orange-500 text-orange-600" 
                  : "border-transparent hover:border-gray-300 text-gray-700 hover:text-gray-900"
              }`}
              aria-current={isActive(link.section) ? "page" : undefined}
            >
              <link.icon className="w-4 h-4" />
              <span>{link.label}</span>
              {link.count && (
                <span className={`ml-1 px-1.5 py-0.5 text-xs rounded-full font-medium ${
                  isActive(link.section) 
                    ? "bg-orange-100 text-orange-800" 
                    : "bg-gray-100 text-gray-700"
                }`}>
                  {link.count}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default RepositoryNavigation;
