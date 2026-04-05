import heroBg from "@/assets/hero-bg.jpg";
import flowerImg from "@/assets/flower.png";
import FloatingPetals from "@/components/FloatingPetals";
import HeartAnimation from "@/components/HeartAnimation";
import MessageSection from "@/components/MessageSection";
import { Heart, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <FloatingPetals />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center py-16">
        {/* Opening */}
        <MessageSection delay="0.3s">
          <div className="text-center mb-4">
            <Sparkles className="inline-block text-primary mb-4 animate-float" size={32} />
            <h1 className="font-script text-5xl sm:text-7xl text-foreground mb-2">
              I'm Sorry
            </h1>
            <p className="text-muted-foreground text-lg italic font-serif">
              From the bottom of my heart
            </p>
          </div>
        </MessageSection>

        <HeartAnimation />

        {/* Flower */}
        <MessageSection delay="0.8s">
          <div className="flex justify-center mb-8">
            <img
              src={flowerImg}
              alt="A rose for you"
              className="w-40 h-40 object-contain animate-float"
              style={{ animationDelay: "1s" }}
              width={512}
              height={512}
            />
          </div>
        </MessageSection>

        {/* Letter */}
        <MessageSection delay="1.2s">
          <div
            className="bg-card/80 backdrop-blur-md rounded-2xl p-8 sm:p-12 text-center"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <p className="text-foreground text-lg sm:text-xl leading-relaxed mb-6 font-serif">
              Hey… I just wanted to say I'm really sorry 💔
            </p>
            <p className="text-foreground text-lg sm:text-xl leading-relaxed mb-6 font-serif">
              I didn't mean to hurt you, but I know I did—and that matters the most.
            </p>
            <p className="text-foreground text-lg sm:text-xl leading-relaxed mb-6 font-serif italic">
              You mean a lot to me, and I hate the thought of you being upset because of me.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary mt-8">
              <Heart className="fill-primary" size={18} />
              <span className="font-script text-2xl">Please forgive me</span>
              <Heart className="fill-primary" size={18} />
            </div>
          </div>
        </MessageSection>

        {/* Closing */}
        <MessageSection delay="1.8s">
          <div className="text-center mt-12">
            <p className="font-script text-3xl sm:text-4xl text-foreground mb-2">
              You're one in a million
            </p>
            <p className="text-muted-foreground font-serif italic">
              — with all my love 💕
            </p>
          </div>
        </MessageSection>

        {/* Decorative hearts */}
        <MessageSection delay="2.2s">
          <div className="flex justify-center gap-4 mt-10">
            {["0s", "0.3s", "0.6s"].map((d, i) => (
              <Heart
                key={i}
                className="text-primary fill-primary animate-float"
                size={20 + i * 4}
                style={{ animationDelay: d }}
              />
            ))}
          </div>
        </MessageSection>
      </div>
    </div>
  );
};

export default Index;
