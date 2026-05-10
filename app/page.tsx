import { Navigation } from "@/components/navigation"
import { BackgroundEffects } from "@/components/background-effects"
import { Hero } from "@/components/sections/hero"
import { Trusted } from "@/components/sections/trusted"
import { Features } from "@/components/sections/features"
import { DashboardPreview } from "@/components/sections/dashboard-preview"
import { Workflow } from "@/components/sections/workflow"
import { MobileApp } from "@/components/sections/mobile-app"
import { Benefits } from "@/components/sections/benefits"
import { Pricing } from "@/components/sections/pricing"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"
import { AIChatbot } from "@/components/ai-chatbot"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundEffects />
      <Navigation />
      <Hero />
      <Trusted />
      <Features />
      <DashboardPreview />
      <Workflow />
      <MobileApp />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <AIChatbot />
    </main>
  )
}
