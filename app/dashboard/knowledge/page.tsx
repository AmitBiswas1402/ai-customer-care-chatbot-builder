"use client"

import AddKnowledge from "@/components/Knowledge/AddKnowledge"
import QuickActions from "@/components/Knowledge/QuickActions"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"

const KnowledgePage = () => {
  const [defaultTab, setdefaultTab] = useState("website");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [knowledgeStoringLoader, setknowledgeStoringLoader] = useState(false);
  const [knowledgeSourcesLoader, setKnowledgeSourcesLoader] = useState(true);
  const [knowledgeSources, setknowledgeSources] = useState<KnowledgeSource[]>([]);

  const openModal = (tab: string) => {
    setdefaultTab(tab);
    setIsAddOpen(true);
  }

  const handleImportSource = async (data: any) => {
    
  }

  return (
    <div className="p-6 md:p-8 space-y-4 max-w-7xl mx-auto animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white tracking-tight">
            Knowledge Base
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Manage your knowledge base and documents here.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => openModal("website")}
            className="bg-white text-black hover:bg-zinc-200"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Knowledge
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <QuickActions onOpenModal={openModal} />
      <AddKnowledge isOpen={isAddOpen} setIsOpen={setIsAddOpen} defaultTab={defaultTab} setDefaultTab={setdefaultTab} onImport={handleImportSource} isLoading={knowledgeStoringLoader} existingSources={knowledgeSources} />
    </div>
  )
}
export default KnowledgePage