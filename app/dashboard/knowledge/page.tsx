const KnowledgePage = () => {
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
      </div>
    </div>
  )
}
export default KnowledgePage