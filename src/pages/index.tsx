import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Section } from '@/components/section'
import { Statistics } from '@/components/statistics'

export default function Home() {
  return (
    <div className="font-text font-medium antialiased text-base text-gray-800 min-h-screen">
      <header className="w-full bg-magenta-500 h-20"></header>
      <main>
        <Hero />
        <Section
          description="Provide humanitarian assistance to the people who need it most."
          imgSrc="/msf.png"
          name="MSF"
          siteUrl=""
        />
        <Section
          description="Help on the fight to protect the planet."
          imgSrc="/greenpeace.png"
          name="Greenpeace"
          siteUrl=""
        />
        <Section
          description="Remove plastic from the ocean."
          imgSrc="/team-seas.png"
          name="Team seas"
          siteUrl=""
        />
        <Section
          description="Save endangered species."
          imgSrc="/wwf.png"
          name="WWF"
          siteUrl=""
        />
        <Statistics />
      </main>
      <Footer />
    </div>
  )
}
