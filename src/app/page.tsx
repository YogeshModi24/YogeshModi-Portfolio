import { HeroScroll } from '@/components/home/hero-scroll'
import { BentoGrid } from '@/components/home/bento-grid'
import { Extras } from '@/components/home/extras'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <HeroScroll />
      <BentoGrid />
      <Extras />
    </main>
  );
}
