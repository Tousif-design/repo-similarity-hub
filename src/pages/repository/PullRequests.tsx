
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";

const PullRequests = () => {
  const { owner, name } = useParams();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-2xl font-bold mb-4">Pull Requests</h1>
        <p className="text-gray-600">Pull requests for {owner}/{name}</p>
      </main>
    </div>
  );
};

export default PullRequests;
