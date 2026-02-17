import Features from "@/components/Home/Features"
import Hero from "@/components/Home/Hero"
import Integration from "@/components/Home/Integration"
import Navbar from "@/components/Home/Navbar"
import Pricing from "@/components/Home/Pricing"
import SocialProof from "@/components/Home/Social"
import { isAuthorized } from "@/lib/isAuthorized"

const HomePage = async () => {
  const user = await isAuthorized();

  return (
    <main className="w-full flex flex-col relative z-10">
      <Navbar user={user} />
      <Hero />
      <SocialProof />
      <Features />
      <Integration />
      <Pricing />
    </main>
  )
}
export default HomePage