import HeroSection from "../Hero/HeroSection/HeroSection";
import Separator from "../Separator/Separator";
import HowItWorksSection from "../HowItWorks/HowItWorksSection/HowItWorksSection"; 
import Reviews from "../Reviews/reviews";

export default function Main () {
  return (
    <main>
      <HeroSection />
      <Reviews />
      <Separator />
      <HowItWorksSection />
    </main>
  );
};


