import { File, Globe, Upload } from "lucide-react"
import { Button } from "../ui/button"

const QuickActions = ({onOpenModal}: {onOpenModal: (tab: string) => void}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Button
          variant="outline"
          className="h-auto py-8 px-6 flex flex-col items-center justify-center gap-4 border-white/5 bg-black hover:bg-white/2 hover:border-indigo-500/30 transition-all hover:text-white group whitespace-normal"
          onClick={() => onOpenModal("website")}
        >
            <div className="p-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
              <Globe className="w-6 h-6 text-indigo-400" />
            </div>
        </Button>
        <Button
          variant="outline"
          className="h-auto py-8 px-6 flex flex-col items-center justify-center gap-4 border-white/5 bg-black hover:bg-white/2 hover:border-indigo-500/30 transition-all hover:text-white group whitespace-normal"
          onClick={() => onOpenModal("file")}
        >
          <div className="p-3 rounded-full bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
            <Upload className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="space-y-1.5 text-center w-full">
            <span className="text-sm font-medium block whitespace-normal">
              Upload File
            </span>
            <p className="text-xs text-zinc-500 font-normal leading-relaxed whitespace-normal wrap-break-word">
              Upload a file from your computer to add to the knowledge base.
            </p>
          </div>
        </Button>
        <Button
          variant="outline"
          className="h-auto py-8 px-6 flex flex-col items-center justify-center gap-4 border-white/5 bg-black hover:bg-white/2 hover:border-indigo-500/30 transition-all hover:text-white group whitespace-normal"
          onClick={() => onOpenModal("file")}
        >
          <div className="p-3 rounded-full bg-zinc-500/10 border-zinc-500/20 group-hover:bg-zinc-500/20 transition-colors">
            <File className="w-6 h-6 text-zinc-400" />
          </div>
          <div className="space-y-1.5 text-center w-full">
            <span className="text-sm font-medium block whitespace-normal">
              Manual Text
            </span>
            <p className="text-xs text-zinc-500 font-normal leading-relaxed whitespace-normal wrap-break-word">
              Manually enter text to add to the knowledge base, such as notes or summaries.
            </p>
          </div>
        </Button>
    </div>
  )
}
export default QuickActions