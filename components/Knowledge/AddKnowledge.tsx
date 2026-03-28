import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle, FileText, Globe } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

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

            <TabsContent
              value="website"
              className="mt-0 space-y-4 animate-in fade-in duration-300"
            >
              <div className="p-4 border border-white/10 rounded-lg bg-indigo-500/10 text-indigo-200 text-sm flex gap-3">
                <Globe className="h-5 w-5 shrink-0" />
                <div>
                  <p className="font-medium">Crawl Website</p>
                  <p className="text-xs text-indigo-300/80 mt-1 leading-relaxed">
                    Enter the URL of a website to crawl its content and train
                    your assistant with the information found on that site.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <Label>Website URL</Label>
                <Input
                  placeholder="https://example.com"
                  value={websiteUrl}
                  className="bg-white/5 border-white/10"
                  onChange={(e) => {
                    setWebsiteUrl(e.target.value);
                    if (error) setError(null);
                  }}
                />
              </div>
            </TabsContent>

            <TabsContent
              value="text"
              className="mt-0 space-y-4 animate-in fade-in duration-300"
            >
              <div className="p-4 border border-white/10 rounded-lg bg-indigo-500/10 text-indigo-200 text-sm flex gap-3">
                <FileText className="h-5 w-5 shrink-0" />
                <div>
                  <p className="font-medium">Crawl Website</p>
                  <p className="text-xs text-indigo-300/80 mt-1 leading-relaxed">
                    Enter the URL of a website to crawl its content and train
                    your assistant with the information found on that site.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <Label>Title</Label>
                <Input
                  placeholder="e.g. Refund Policy"
                  className="bg-white/5 border-white/10"
                  value={docsTitle}
                  onChange={(e) => {
                    setDocsTitle(e.target.value);
                  }}
                />
              </div>
               <div className="space-y-3">
                <Label>Content</Label>
                <Textarea
                  placeholder="Paste text here..."
                  className="bg-white/5 border-white/10 h-32 resize-none"
                  value={docsContent}
                  onChange={(e) => {
                    setDocsContent(e.target.value);
                  }}
                />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
export default AddKnowledge;
