
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Explore from "./pages/Explore";
import Trending from "./pages/Trending";
import Documentation from "./pages/Documentation";
import Profile from "./pages/Profile";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/repository/:owner/:name" element={<Repository />} />
            <Route path="/repository/:owner/:name/issues" element={<Issues />} />
            <Route path="/repository/:owner/:name/issues/:id" element={<Issues />} />
            <Route path="/repository/:owner/:name/pull-requests" element={<PullRequests />} />
            <Route path="/repository/:owner/:name/pull-requests/:id" element={<PullRequests />} />
            <Route path="/repository/:owner/:name/actions" element={<Actions />} />
            <Route path="/repository/:owner/:name/projects" element={<Projects />} />
            <Route path="/repository/:owner/:name/projects/:id" element={<Projects />} />
            <Route path="/repository/:owner/:name/wiki" element={<Wiki />} />
            <Route path="/repository/:owner/:name/security" element={<NotFound />} />
            <Route path="/new" element={<NewRepository />} />
            <Route path="/notifications" element={<NotFound />} />
            <Route path="/import" element={<NotFound />} />
            <Route path="/gist/new" element={<NotFound />} />
            <Route path="/organizations/new" element={<NotFound />} />
            <Route path="/project/new" element={<NotFound />} />
            <Route path="/settings" element={<NotFound />} />
            <Route path="/repositories" element={<Navigate to="/profile" replace />} />
            
            {/* Redirect common URL patterns */}
            <Route path="/docs" element={<Navigate to="/documentation" replace />} />
            <Route path="/repo/:owner/:name/*" element={<Navigate to="/repository/:owner/:name/*" replace />} />
            <Route path="/user/:username" element={<Navigate to="/profile" replace />} />
            <Route path="/stars" element={<Navigate to="/profile" replace />} />
            <Route path="/projects" element={<Navigate to="/profile" replace />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
