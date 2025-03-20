import CategorySection from "./components/home/catergory-section/CategorySection";
import HeroSection from "./components/home/hero-section/HeroSection";
import TrendingSection from "./components/home/trending-section/TrendingSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <CategorySection />
      <TrendingSection />
    </main>
  );
}
