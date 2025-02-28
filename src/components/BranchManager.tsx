
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { GitBranch, GitMerge, Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface BranchManagerProps {
  branches: string[];
  currentBranch: string;
  onAddBranch: (branch: string) => void;
  onChangeBranch: (branch: string) => void;
}

const BranchManager: React.FC<BranchManagerProps> = ({
  branches,
  currentBranch,
  onAddBranch,
  onChangeBranch
}) => {
  const [newBranch, setNewBranch] = useState("");
  const [open, setOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [showMergeDialog, setShowMergeDialog] = useState(false);
  const [branchToMerge, setBranchToMerge] = useState("");
  const { toast } = useToast();

  const handleAddBranch = () => {
    if (!newBranch.trim()) return;
    
    if (branches.includes(newBranch)) {
      toast({
        title: "Branch already exists",
        description: `The branch '${newBranch}' already exists.`,
        variant: "destructive"
      });
      return;
    }
    
    setIsCreating(true);
    
    // Simulate async operation
    setTimeout(() => {
      onAddBranch(newBranch);
      setNewBranch("");
      setIsCreating(false);
      setOpen(false);
      
      toast({
        title: "Branch created",
        description: `Successfully created branch '${newBranch}' from '${currentBranch}'`
      });
    }, 800);
  };

  const handleMergeBranch = () => {
    if (!branchToMerge) return;
    
    // Simulate merge operation
    setTimeout(() => {
      toast({
        title: "Branches merged",
        description: `Successfully merged '${branchToMerge}' into '${currentBranch}'`
      });
      setShowMergeDialog(false);
      setBranchToMerge("");
    }, 1000);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <GitBranch className="w-5 h-5" />
          Branches ({branches.length})
        </h3>
        <div className="flex gap-2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" className="flex items-center gap-1">
                <Plus className="w-4 h-4" />
                New Branch
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create a new branch</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-gray-600 mb-4">
                  Create a new branch from the current branch ({currentBranch})
                </p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="new-branch" className="text-sm font-medium block mb-1">
                      Branch name
                    </label>
                    <Input
                      id="new-branch"
                      value={newBranch}
                      onChange={(e) => setNewBranch(e.target.value)}
                      placeholder="feature/my-new-feature"
                      className="w-full"
                    />
                  </div>
                  <Button 
                    onClick={handleAddBranch} 
                    disabled={!newBranch.trim() || isCreating}
                    className="w-full"
                  >
                    {isCreating ? "Creating..." : "Create branch"}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={showMergeDialog} onOpenChange={setShowMergeDialog}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" className="flex items-center gap-1">
                <GitMerge className="w-4 h-4" />
                Merge
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Merge branch into {currentBranch}</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-gray-600 mb-4">
                  Select a branch to merge into the current branch ({currentBranch})
                </p>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    {branches.filter(b => b !== currentBranch).map((branch) => (
                      <div
                        key={branch}
                        className={`p-2 border rounded-md cursor-pointer flex items-center hover:bg-gray-50 ${
                          branchToMerge === branch ? "border-blue-500 bg-blue-50" : "border-gray-200"
                        }`}
                        onClick={() => setBranchToMerge(branch)}
                      >
                        <GitBranch className="w-4 h-4 mr-2 text-gray-600" />
                        {branch}
                      </div>
                    ))}
                  </div>
                  {branches.filter(b => b !== currentBranch).length === 0 && (
                    <Alert>
                      <AlertDescription>
                        No other branches available to merge.
                      </AlertDescription>
                    </Alert>
                  )}
                  <Button 
                    onClick={handleMergeBranch} 
                    disabled={!branchToMerge}
                    className="w-full"
                  >
                    Merge branch
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
        {branches.map((branch) => (
          <div 
            key={branch}
            className={`flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 ${
              branch === currentBranch ? "bg-blue-50 border border-blue-200" : ""
            }`}
            onClick={() => branch !== currentBranch && onChangeBranch(branch)}
          >
            <GitBranch className={`w-4 h-4 mr-2 ${branch === currentBranch ? "text-blue-500" : "text-gray-600"}`} />
            <span className={branch === currentBranch ? "font-semibold" : ""}>
              {branch}
            </span>
            {branch === currentBranch && (
              <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                current
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchManager;
