import { Globe } from "lucide-react"
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
    </div>
  )
}
export default QuickActions