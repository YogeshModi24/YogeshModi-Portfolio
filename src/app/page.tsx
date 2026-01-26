import { HeroScroll } from '@/components/home/hero-scroll'
import { BentoGrid } from '@/components/home/bento-grid'
import { Extras } from '@/components/home/extras'
import { ConnectInfoGrid } from '@/components/home/connect-info-grid'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <HeroScroll />
      <ConnectInfoGrid />
      <BentoGrid />
      <Extras />
    </main>
  );
}
