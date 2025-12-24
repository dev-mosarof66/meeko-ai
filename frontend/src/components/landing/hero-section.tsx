import { Button } from "../ui/button";
import HeroBanner from "./hero-banner";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-1 flex justify-center">
          <HeroBanner />
        </div>

        <div className="order-2 flex flex-col md:text-left items-center md:items-start gap-6">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl  font-bold tracking-tight leading-tight">
              Take Your{" "}
              <span className="relative inline-block px-1">
                <span className="relative z-10 text-green-700">
                  Online Exam
                </span>
                <span className="absolute inset-0 bg-purple-700/20 rounded-md -z-10 translate-y-1 -rotate-3" />
              </span>{" "}
              via Meeko AI
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Empower your learning journey with AI-driven proctoring and
              seamless assessment tools. Reliable, secure, and built for the
              future of education.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button  className="px-8 text-base w-full md:w-auto">
              Start Now
            </Button>
            <Button
              variant="outline"
              className="px-8 text-base w-full md:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
