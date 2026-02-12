import Features from "@/components/Home/Features"
import Hero from "@/components/Home/Hero"
import Navbar from "@/components/Home/Navbar"
import SocialProof from "@/components/Home/Social"

const HomePage = () => {
  return (
    <main className="w-full flex flex-col relative z-10">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
    </main>
  )
}
export default HomePage