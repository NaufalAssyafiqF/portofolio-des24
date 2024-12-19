import HeroSection from "@/components/HeroSection/HeroSection";
import RecentProject from "@/components/RecentProject/RecentProject";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <RecentProject />
    </div>
  );
}
