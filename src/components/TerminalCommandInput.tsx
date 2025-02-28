
import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

type CommandResult = {
  command: string;
  output: string;
  isError: boolean;
  timestamp: string;
};

interface TerminalCommandInputProps {
  currentRepository: {
    owner: string;
    name: string;
  };
  currentBranch: string;
  onBranchChange: (branch: string) => void;
  onAddBranch: (branch: string) => void;
}

const TerminalCommandInput: React.FC<TerminalCommandInputProps> = ({
  currentRepository,
  currentBranch,
  onBranchChange,
  onAddBranch
}) => {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<CommandResult[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const args = cmd.trim().split(/\s+/);
    const command = args[0].toLowerCase();
    
    if (cmd.trim() === "") return;
    
    let result: CommandResult = {
      command: cmd,
      output: "",
      isError: false,
      timestamp
    };

    switch (command) {
      case "help":
        result.output = `Available commands:
- git branch: List all branches
- git branch <name>: Create a new branch
- git checkout <branch>: Switch to branch
- git pull: Simulate pulling changes
- git push: Simulate pushing changes
- git commit -m "<message>": Simulate committing changes
- git merge <branch>: Simulate merging a branch
- git status: Show repository status
- clear: Clear terminal history`;
        break;
      
      case "clear":
        setHistory([]);
        return;
      
      case "git":
        if (args.length === 1) {
          result.output = "git <command> [<args>]";
          result.isError = true;
          break;
        }
        
        const gitCommand = args[1].toLowerCase();
        
        switch (gitCommand) {
          case "branch":
            if (args.length === 2) {
              // List branches
              result.output = "Available branches:\n* " + currentBranch + 
                "\n  develop\n  feature/user-auth\n  bugfix/header";
            } else {
              // Create new branch
              const branchName = args[2];
              onAddBranch(branchName);
              result.output = `Created branch '${branchName}'`;
              toast({
                title: "Branch created",
                description: `Created new branch '${branchName}'`
              });
            }
            break;
          
          case "checkout":
            if (args.length < 3) {
              result.output = "git checkout <branch>";
              result.isError = true;
            } else {
              const branchName = args[2];
              onBranchChange(branchName);
              result.output = `Switched to branch '${branchName}'`;
              toast({
                title: "Branch changed",
                description: `Switched to branch '${branchName}'`
              });
            }
            break;
          
          case "pull":
            result.output = "From github.com:" + currentRepository.owner + "/" + currentRepository.name + 
              "\n * branch            " + currentBranch + "     -> FETCH_HEAD" +
              "\nUpdating your local repository...";
            setTimeout(() => {
              toast({
                title: "Pull successful",
                description: "Your repository is now up to date"
              });
            }, 1500);
            break;
          
          case "push":
            result.output = "Enumerating objects: 5, done.\n" +
              "Counting objects: 100% (5/5), done.\n" +
              "Compressing objects: 100% (3/3), done.\n" +
              `Writing objects: 100% (3/3), 320 bytes | 320.00 KiB/s, done.\n` +
              "Total 3 (delta 2), reused 0 (delta 0)\n" +
              `To github.com:${currentRepository.owner}/${currentRepository.name}.git\n` +
              `   8f123a5..6d4b2f1  ${currentBranch} -> ${currentBranch}`;
            setTimeout(() => {
              toast({
                title: "Push successful",
                description: "Changes pushed to remote repository"
              });
            }, 1500);
            break;
          
          case "commit":
            const mIndex = args.indexOf("-m");
            if (mIndex === -1 || mIndex === args.length - 1) {
              result.output = "git commit -m <message>";
              result.isError = true;
            } else {
              const message = args.slice(mIndex + 1).join(" ").replace(/['"]/g, "");
              result.output = `[${currentBranch} 6d4b2f1] ${message}\n` +
                " 2 files changed, 14 insertions(+), 5 deletions(-)";
              setTimeout(() => {
                toast({
                  title: "Changes committed",
                  description: `Commit message: ${message}`
                });
              }, 500);
            }
            break;
          
          case "merge":
            if (args.length < 3) {
              result.output = "git merge <branch>";
              result.isError = true;
            } else {
              const branchName = args[2];
              result.output = `Updating 8f123a5..6d4b2f1\n` +
                "Fast-forward\n" +
                " src/components/Button.tsx | 19 ++++++++++++++-----\n" +
                " 1 file changed, 14 insertions(+), 5 deletions(-)";
              setTimeout(() => {
                toast({
                  title: "Merge successful",
                  description: `Merged branch '${branchName}' into '${currentBranch}'`
                });
              }, 1000);
            }
            break;
          
          case "status":
            result.output = `On branch ${currentBranch}\n` +
              "Your branch is up to date with 'origin/" + currentBranch + "'.\n\n" +
              "Changes not staged for commit:\n" +
              "  (use \"git add <file>...\" to update what will be committed)\n" +
              "  (use \"git restore <file>...\" to discard changes in working directory)\n" +
              "\tmodified:   src/components/Button.tsx\n\n" +
              "no changes added to commit (use \"git add\" and/or \"git commit -a\")";
            break;
          
          default:
            result.output = `git: '${gitCommand}' is not a git command. See 'git --help'.`;
            result.isError = true;
        }
        break;
      
      default:
        result.output = `Command not found: ${command}`;
        result.isError = true;
    }
    
    setHistory((prev) => [...prev, result]);
    setCommand("");
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(command);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setCommand(history[history.length - 1 - newIndex].command);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCommand(history[history.length - 1 - newIndex].command);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCommand("");
      }
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div 
      className="bg-black text-green-400 font-mono text-sm rounded-md p-3 h-64 overflow-auto flex flex-col" 
      onClick={focusInput}
      ref={terminalRef}
    >
      <div className="flex-1 overflow-auto mb-2">
        {history.length === 0 && (
          <div className="text-gray-500 italic mb-4">
            Type 'help' to see available commands
          </div>
        )}
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            <div className="flex items-center">
              <span className="text-blue-400">{currentRepository.owner}/{currentRepository.name}</span>
              <span className="text-purple-400 mx-1">[{currentBranch}]</span>
              <span className="text-gray-400 text-xs ml-1">({item.timestamp})</span>
              <span className="text-white ml-2">$</span>
              <span className="ml-2">{item.command}</span>
            </div>
            <div className={`mt-1 whitespace-pre-wrap ${item.isError ? 'text-red-400' : 'text-green-200'}`}>
              {item.output}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <span className="text-blue-400 mr-1">{currentRepository.owner}/{currentRepository.name}</span>
        <span className="text-purple-400 mr-1">[{currentBranch}]</span>
        <span className="text-white mr-2">$</span>
        <Input
          ref={inputRef}
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none text-green-400 focus-visible:ring-0 focus-visible:ring-offset-0 h-6 p-0"
          placeholder="Type a command..."
          autoFocus
        />
      </div>
    </div>
  );
};

export default TerminalCommandInput;
