import img1 from "@/assets/hero-image.png";

const HeroBanner = () => {
  return (
    <div className="flex-1 w-full flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg lg:max-w-xl">
        {/* --- Rotating Glowing Background --- */}
        <div className="absolute inset-0 flex items-center justify-center">

          <div className="w-full h-full blur-3xl">
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Top Left Glow */}
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-purple-600/20 rounded-full" />
              {/* Bottom Right Glow */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-green-500/20 rounded-full" />
              {/* Top Right Glow */}
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/20 rounded-full" />
              {/* Bottom Left Glow */}
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-pink-500/20 rounded-full" />
            </div>
          </div>
        </div>

        {/* --- Main Image Content --- */}
        <div className="relative z-10 group">
          <div className="overflow-hidden w-full max-w-[650px]">
            <img
              src={img1}
              alt="Meeko AI Exam Interface"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
