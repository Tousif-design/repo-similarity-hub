
import { useState } from "react";
import { ChevronRight, ChevronDown, Folder, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileNode {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
  content?: string;
}

interface FileTreeProps {
  files: FileNode[];
  onFileSelect: (path: string, content: string) => void;
}

const FileTreeItem = ({ 
  item, 
  path = "", 
  depth = 0, 
  onFileSelect 
}: { 
  item: FileNode; 
  path?: string; 
  depth?: number; 
  onFileSelect: (path: string, content: string) => void;
}) => {
  const [expanded, setExpanded] = useState(depth < 1);
  const currentPath = path ? `${path}/${item.name}` : item.name;
  
  const handleClick = () => {
    if (item.type === 'folder') {
      setExpanded(!expanded);
    } else if (item.type === 'file' && item.content) {
      onFileSelect(currentPath, item.content);
    }
  };
  
  return (
    <div>
      <div 
        className={cn(
          "flex items-center py-1 px-2 rounded-md cursor-pointer hover:bg-gray-100 transition-colors duration-150",
          depth > 0 && "ml-4"
        )}
        onClick={handleClick}
      >
        {item.type === 'folder' ? (
          <>
            <span className="mr-1 text-gray-600">
              {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </span>
            <Folder className="w-4 h-4 mr-2 text-blue-500" />
          </>
        ) : (
          <FileText className="w-4 h-4 mr-2 ml-5 text-gray-500" />
        )}
        <span className="text-sm truncate">{item.name}</span>
      </div>
      
      {item.type === 'folder' && expanded && item.children && (
        <div className="ml-2 border-l border-gray-200 pl-2">
          {item.children.map((child, index) => (
            <FileTreeItem 
              key={`${currentPath}-${child.name}-${index}`} 
              item={child} 
              path={currentPath}
              depth={depth + 1}
              onFileSelect={onFileSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FileTree = ({ files, onFileSelect }: FileTreeProps) => {
  return (
    <div className="file-tree">
      {files.map((item, index) => (
        <FileTreeItem 
          key={`${item.name}-${index}`} 
          item={item} 
          onFileSelect={onFileSelect}
        />
      ))}
    </div>
  );
};

export default FileTree;
