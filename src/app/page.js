import HeroSection from "@/components/HeroSection/HeroSection";
import HiredSection from "@/components/HiredSection/HiredSection";
import RecentProject from "@/components/RecentProject/RecentProject";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <RecentProject />
      <HiredSection />
    </div>
  );
}
