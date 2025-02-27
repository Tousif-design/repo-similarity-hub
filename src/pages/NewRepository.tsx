
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { GitBranch, GitFork, GitMerge } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";

const NewRepository = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [initReadme, setInitReadme] = useState(true);
  const [addGitignore, setAddGitignore] = useState(true);
  const [addLicense, setAddLicense] = useState(false);
  const [licenseType, setLicenseType] = useState("mit");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast({
        title: "Repository name is required",
        description: "Please enter a name for your repository.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Repository created",
        description: `${name} has been successfully created.`,
      });
      
      navigate(`/repository/username/${name}`);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Create a new repository</h1>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <Label htmlFor="name" className="text-base font-medium block mb-2">
                Repository name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. my-awesome-project"
                className="w-full"
              />
            </div>
            
            <div className="mb-6">
              <Label htmlFor="description" className="text-base font-medium block mb-2">
                Description <span className="text-gray-500">(optional)</span>
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="A short description of your repository"
                className="w-full resize-none"
                rows={3}
              />
            </div>
            
            <div className="mb-6">
              <h3 className="text-base font-medium mb-3">Visibility</h3>
              <RadioGroup value={visibility} onValueChange={setVisibility} className="space-y-3">
                <div className="flex items-start space-x-3">
                  <RadioGroupItem id="public" value="public" />
                  <div>
                    <Label htmlFor="public" className="font-medium flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      Public
                    </Label>
                    <p className="text-sm text-gray-600 mt-1">
                      Anyone on the internet can see this repository. You choose who can commit.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <RadioGroupItem id="private" value="private" />
                  <div>
                    <Label htmlFor="private" className="font-medium flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0110 0v4"></path>
                      </svg>
                      Private
                    </Label>
                    <p className="text-sm text-gray-600 mt-1">
                      You choose who can see and commit to this repository.
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>
            
            <div className="mb-6">
              <h3 className="text-base font-medium mb-3">Initialize this repository with:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="readme" 
                    checked={initReadme}
                    onCheckedChange={(checked) => setInitReadme(checked as boolean)}
                  />
                  <div>
                    <Label htmlFor="readme" className="font-medium">Add a README file</Label>
                    <p className="text-sm text-gray-600 mt-1">
                      This is where you can write a long description for your project.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="gitignore" 
                    checked={addGitignore}
                    onCheckedChange={(checked) => setAddGitignore(checked as boolean)}
                  />
                  <div>
                    <Label htmlFor="gitignore" className="font-medium">Add .gitignore</Label>
                    <p className="text-sm text-gray-600 mt-1">
                      Choose which files not to track from a list of templates.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="license" 
                    checked={addLicense}
                    onCheckedChange={(checked) => setAddLicense(checked as boolean)}
                  />
                  <div>
                    <Label htmlFor="license" className="font-medium">Choose a license</Label>
                    <p className="text-sm text-gray-600 mt-1">
                      A license tells others what they can and can't do with your code.
                    </p>
                    
                    {addLicense && (
                      <div className="mt-3">
                        <select 
                          value={licenseType}
                          onChange={(e) => setLicenseType(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                        >
                          <option value="mit">MIT License</option>
                          <option value="apache">Apache License 2.0</option>
                          <option value="gpl">GNU General Public License v3.0</option>
                          <option value="bsd">BSD 3-Clause License</option>
                          <option value="unlicense">The Unlicense</option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <Button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Creating repository...</span>
                  </div>
                ) : "Create repository"}
              </Button>
            </div>
          </form>
        </div>
      </main>
      
      <footer className="border-t border-gray-200 py-6 px-4 mt-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <GitBranch className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600">RepoHub © 2023</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">Terms</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">Security</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">Status</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewRepository;
