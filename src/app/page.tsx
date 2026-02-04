import { HeroScroll } from '@/components/home/hero-scroll'
import { BentoGrid } from '@/components/home/bento-grid'
import { Extras } from '@/components/home/extras'
import { ConnectInfoGrid } from '@/components/home/connect-info-grid'
import { SkillsMarquee } from '@/components/home/skills-marquee'
import { MetricsBar } from '@/components/home/metrics-bar'
import { Experience } from '@/components/home/experience'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <HeroScroll />
      <MetricsBar />
      <SkillsMarquee />
      <BentoGrid />
      <Experience />
      <ConnectInfoGrid />
      <Extras />
    </main>
  );
}
