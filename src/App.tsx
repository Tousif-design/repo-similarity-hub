
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "@/contexts/UserContext";
import Index from "./pages/Index";
import Repository from "./pages/Repository";
import NewRepository from "./pages/NewRepository";
import NotFound from "./pages/NotFound";
import Issues from "./pages/repository/Issues";
import PullRequests from "./pages/repository/PullRequests";
import Actions from "./pages/repository/Actions";
import Projects from "./pages/repository/Projects";
import Wiki from "./pages/repository/Wiki";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/repository/:owner/:name" element={<Repository />} />
            <Route path="/repository/:owner/:name/issues" element={<Issues />} />
            <Route path="/repository/:owner/:name/pull-requests" element={<PullRequests />} />
            <Route path="/repository/:owner/:name/actions" element={<Actions />} />
            <Route path="/repository/:owner/:name/projects" element={<Projects />} />
            <Route path="/repository/:owner/:name/wiki" element={<Wiki />} />
            <Route path="/new" element={<NewRepository />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
