import HeroSection from "@/components/home/HeroSection";
import CaseTypesSection from "@/components/home/CaseTypesSection";
import NewsSection from "@/components/home/NewsSection";
import FindLawyerTeaser from "@/components/home/FindLawyerTeaser";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PostTestimony from "@/components/home/PostTestimony";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CaseTypesSection />
      <FindLawyerTeaser />
      <TestimonialsSection />
      <NewsSection />
      <PostTestimony />
    </>
  );
}
