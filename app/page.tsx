import Hero from "@/components/Home/Hero"
import Navbar from "@/components/Home/Navbar"

const HomePage = () => {
  return (
    <main className="w-full flex flex-col relative z-10">
      <Navbar />
      <Hero />
    </main>
  )
}
export default HomePage