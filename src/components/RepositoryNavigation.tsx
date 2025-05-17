
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
    { to: `/repository/${owner}/${name}/pull-requests`, icon: GitPullRequest, label: "Pull Requests", section: "pull-requests", count: 7 },
    { to: `/repository/${owner}/${name}/actions`, icon: Play, label: "Actions", section: "actions" },
    { to: `/repository/${owner}/${name}/projects`, icon: Layout, label: "Projects", section: "projects" },
    { to: `/repository/${owner}/${name}/wiki`, icon: BookOpen, label: "Wiki", section: "wiki" },
    { to: `/repository/${owner}/${name}/security`, icon: Shield, label: "Security", section: "security" },
  ];

  return (
    <div className="border-b border-gray-200 bg-gray-50 sticky top-0 z-10">
      <nav className="flex overflow-auto hide-scrollbar max-w-6xl mx-auto">
        {links.map((link) => (
          <Link 
            key={link.section}
            to={link.to} 
            className={`px-4 py-3 border-b-2 transition-colors duration-150 flex items-center gap-2 whitespace-nowrap ${
              isActive(link.section) 
                ? "border-orange-500 text-gray-900 font-medium" 
                : "border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900"
            }`}
            aria-current={isActive(link.section) ? "page" : undefined}
          >
            <link.icon className={`w-4 h-4 ${isActive(link.section) ? "text-orange-500" : ""}`} />
            {link.count ? (
              <div className="flex items-center">
                <span>{link.label}</span>
                <span className={`ml-1.5 px-1.5 py-0.5 text-xs rounded-full ${
                  isActive(link.section) 
                    ? "bg-orange-100 text-orange-700" 
                    : "bg-gray-100 text-gray-700"
                }`}>
                  {link.count}
                </span>
              </div>
            ) : (
              <span>{link.label}</span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default RepositoryNavigation;
