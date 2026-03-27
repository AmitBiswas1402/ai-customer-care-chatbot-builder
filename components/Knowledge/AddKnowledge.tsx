import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle } from "lucide-react";

interface AddKnowledgeModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  defaultTab: string;
  setDefaultTab: (defaultTab: string) => void;
  onImport: (data: any) => Promise<void>;
  isLoading: boolean;
  existingSources: KnowledgeSource[];
}

const AddKnowledge = ({
  isOpen,
  setIsOpen,
  defaultTab,
  setDefaultTab,
  onImport,
  isLoading,
  existingSources,
}: AddKnowledgeModalProps) => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [docsTitle, setDocsTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [docsContent, setDocsContent] = useState("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          setError(null);
        }
      }}
    >
      <DialogContent className="sm:max-w-150 bg-zinc-950 border-white/10 text-zinc-100 p-0 overflow-hidden gap-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle>Add New Source</DialogTitle>
          <DialogDescription className="text-zinc-500">
            Choose a content type to train your assistant.
          </DialogDescription>
        </DialogHeader>

        <Tabs
          defaultValue="website"
          value={defaultTab}
          onValueChange={(value) => {
            setDefaultTab(value);
            setError(null);
          }}
          className="w-full"
        >
          <div className="px-6 border-b border-white/5">
            <TabsList className="bg-white/5 h-auto p-0 gap-6">
              <TabsTrigger
                value="website"
                className="px-4 py-2 text-sm font-medium text-zinc-400 data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:text-zinc-100 border-b-2 transition-all duration-200 cursor-pointer"
              >
                WEBSITE
              </TabsTrigger>
              <TabsTrigger
                value="text"
                className="px-4 py-2 text-sm font-medium text-zinc-400 data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:text-zinc-100 border-b-2 transition-all duration-200 cursor-pointer"
              >
                Q&A / TEXT
              </TabsTrigger>
              <TabsTrigger
                value="upload"
                className="px-4 py-2 text-sm font-medium text-zinc-400 data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:text-zinc-100 border-b-2 transition-all duration-200 cursor-pointer"
              >
                FILE UPLOAD
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="p-6 min-h-50 space-y-4">
            {error && (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="ml-2 text-xs">
                  {error}
                </AlertDescription>
              </Alert>
            )}
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
export default AddKnowledge;
