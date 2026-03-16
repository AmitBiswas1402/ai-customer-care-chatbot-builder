const Header = ({ metadata }: { metadata: any }) => {
  return (
    <div className="h-16 border-b border-white/5 bg-black/50 backdrop-blur-sm flex items-center px-6">
      <h1 className="text-lg font-semibold text-white">Dashboard</h1>
    </div>
  )
}
export default Header