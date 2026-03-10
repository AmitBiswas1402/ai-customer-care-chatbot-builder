"use client";

import InitialPage from "@/components/Dashboard/InitialPage";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [isMetadataAvailable, setisMetadataAvailable] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchMetadata = async () => {
      const response = await fetch("/api/metadata/fetch");
      const data = await response.json();

      setisMetadataAvailable(data.exists);
      setisLoading(false);
    };
    fetchMetadata();
  }, []);

  if (isLoading) {
    return (
      <div className="flex-1 flex w-full items-center justify-center p-4" />
    );
  }

  return (
    <div className="flex-1 flex w-full">
      {!isMetadataAvailable ? (
        <div className="w-full flex items-center justify-center p-4 min-h-[calc(100vh-64px)]">
        <InitialPage />
      </div>
      ) : (
        <>
          {/* Render your main dashboard content here */}
          
        </>
      )}
    </div>
  );
};
export default DashboardPage;
