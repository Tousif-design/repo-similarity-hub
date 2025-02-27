
import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CodeViewerProps {
  path: string;
  content: string;
}

const getLanguageFromPath = (path: string): string => {
  const extension = path.split('.').pop()?.toLowerCase();
  
  switch (extension) {
    case 'js':
      return 'javascript';
    case 'jsx':
      return 'jsx';
    case 'ts':
      return 'typescript';
    case 'tsx':
      return 'tsx';
    case 'html':
      return 'html';
    case 'css':
      return 'css';
    case 'json':
      return 'json';
    case 'md':
      return 'markdown';
    default:
      return 'plaintext';
  }
};

const CodeViewer = ({ path, content }: CodeViewerProps) => {
  const [copied, setCopied] = useState(false);
  const language = getLanguageFromPath(path);
  const fileName = path.split('/').pop() || '';
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const syntaxHighlight = (code: string, lang: string): string => {
    // This is a simplified version. In a real app, use a library like Prism or highlight.js
    if (lang === 'typescript' || lang === 'tsx' || lang === 'javascript' || lang === 'jsx') {
      return code
        .replace(/(import|export|const|let|var|function|return|if|else|for|while|class|extends|interface|type)(\s)/g, '<span class="text-purple-600">$1</span>$2')
        .replace(/('.*?'|".*?")/g, '<span class="text-green-600">$1</span>')
        .replace(/(&lt;.*?&gt;)/g, '<span class="text-blue-600">$1</span>')
        .replace(/(\{|\}|\(|\)|\[|\]|=&gt;|=|;|,|\?|\:)/g, '<span class="text-gray-600">$1</span>');
    }
    
    return code;
  };
  
  const formatCode = (code: string): React.ReactNode => {
    const formattedCode = syntaxHighlight(
      code.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
      language
    );
    
    return (
      <pre className="whitespace-pre-wrap break-words">
        <code dangerouslySetInnerHTML={{ __html: formattedCode }} />
      </pre>
    );
  };
  
  return (
    <div className="code-viewer">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">{fileName}</h3>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 text-xs"
          onClick={copyToClipboard}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </Button>
      </div>
      
      <div className={cn(
        "p-4 rounded-md bg-gray-50 border border-gray-200 overflow-x-auto text-sm",
        "font-mono text-gray-800"
      )}>
        {formatCode(content)}
      </div>
    </div>
  );
};

export default CodeViewer;
