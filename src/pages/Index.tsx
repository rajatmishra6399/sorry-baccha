import { useState } from "react";
import cuteBg from "@/assets/cute-bg.jpg";
import sadPuppy from "@/assets/sad-puppy.png";
import FloatingEmojis from "@/components/FloatingEmojis";

const Index = () => {
  const [hugSent, setHugSent] = useState(false);
  const [forgiven, setForgiven] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img src={cuteBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <FloatingEmojis />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center py-12 px-4">

        {/* Title */}
        <div className="animate-pop-in text-center mb-2" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <span className="text-5xl sm:text-6xl">🥺</span>
        </div>

        <div className="animate-fade-in-up text-center mb-6" style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}>
          <h1 className="font-cute text-4xl sm:text-5xl text-foreground leading-tight">
            Oops… I messed up!
          </h1>
          <p className="text-muted-foreground text-lg mt-2">
            (and I feel really really bad about it)
          </p>
        </div>

        {/* Sad puppy */}
        <div className="animate-pop-in mb-8" style={{ animationDelay: "0.8s", opacity: 0 }}>
          <img
            src={sadPuppy}
            alt="Sad puppy saying sorry"
            className="w-48 h-48 sm:w-56 sm:h-56 object-contain animate-bounce-slow"
            width={512}
            height={512}
          />
          <p className="text-center font-cute text-xl text-muted-foreground mt-2 animate-wiggle">
            ^ this is me rn 😢
          </p>
        </div>

        {/* Message card */}
        <div
          className="animate-fade-in-up max-w-lg w-full bg-card/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 text-center"
          style={{ animationDelay: "1.2s", opacity: 0, animationFillMode: "forwards", boxShadow: "var(--shadow-cute)" }}
        >
          <p className="text-foreground text-lg sm:text-xl leading-relaxed mb-4">
            Hey… I just wanted to say I'm really sorry 💔
          </p>
          <p className="text-foreground text-lg sm:text-xl leading-relaxed mb-4">
            I didn't mean to hurt you, but I know I did—and that matters the most.
          </p>
          <p className="text-foreground text-lg sm:text-xl leading-relaxed italic">
            You mean a lot to me, and I hate the thought of you being upset because of me.
          </p>

          <div className="mt-6 flex items-center justify-center gap-1 text-2xl animate-sparkle">
            💗✨💗
          </div>
        </div>

        {/* Fun reason list */}
        <div
          className="animate-fade-in-up max-w-lg w-full mt-8 bg-card/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8"
          style={{ animationDelay: "1.6s", opacity: 0, animationFillMode: "forwards", boxShadow: "var(--shadow-bounce)" }}
        >
          <h2 className="font-cute text-2xl text-foreground text-center mb-4">
            Reasons you should forgive me: 👀
          </h2>
          <ul className="space-y-3 text-foreground text-base sm:text-lg">
            {[
              { emoji: "🐶", text: "I have puppy eyes (see above)" },
              { emoji: "🍫", text: "I'll get you your favorite snack" },
              { emoji: "🤗", text: "I give the best hugs (certified)" },
              { emoji: "🌟", text: "You're too amazing to stay mad" },
              { emoji: "💕", text: "Because I really really care about you" },
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 bg-muted/50 rounded-2xl px-4 py-3 animate-fade-in-up"
                style={{ animationDelay: `${1.8 + i * 0.15}s`, opacity: 0, animationFillMode: "forwards" }}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive buttons */}
        <div
          className="animate-fade-in-up mt-10 flex flex-col sm:flex-row gap-4"
          style={{ animationDelay: "2.6s", opacity: 0, animationFillMode: "forwards" }}
        >
          {!forgiven ? (
            <>
              <button
                onClick={() => setForgiven(true)}
                className="bg-primary text-primary-foreground font-cute text-xl px-8 py-4 rounded-full transition-all hover:scale-110 active:scale-95"
                style={{ boxShadow: "var(--shadow-cute)" }}
              >
                Okay fine, you're forgiven 🥰
              </button>
              <button
                onClick={() => setForgiven(true)}
                className="bg-secondary text-secondary-foreground font-cute text-xl px-8 py-4 rounded-full transition-all hover:scale-110 active:scale-95"
                style={{ boxShadow: "var(--shadow-bounce)" }}
              >
                Hmm... still thinking 🤔
              </button>
            </>
          ) : (
            <div className="text-center animate-pop-in" style={{ opacity: 0 }}>
              <span className="text-6xl block mb-4">🎉💕🥳</span>
              <p className="font-cute text-3xl text-foreground">YAAAY! Thank you!! 🥹💗</p>
              <p className="text-muted-foreground text-lg mt-2">I promise to be better! pinky promise! 🤙</p>
            </div>
          )}
        </div>

        {/* Virtual hug button */}
        {!hugSent && (
          <div
            className="animate-fade-in-up mt-8"
            style={{ animationDelay: "2.9s", opacity: 0, animationFillMode: "forwards" }}
          >
            <button
              onClick={() => setHugSent(true)}
              className="bg-accent text-accent-foreground font-cute text-lg px-6 py-3 rounded-full transition-all hover:scale-105 active:scale-95 animate-bounce-slow"
            >
              Send a virtual hug 🤗
            </button>
          </div>
        )}

        {hugSent && (
          <div className="mt-8 text-center animate-pop-in" style={{ opacity: 0 }}>
            <span className="text-5xl block mb-2">🤗💕🤗</span>
            <p className="font-cute text-xl text-foreground">
              *huuuuug* 🫂 consider yourself hugged!
            </p>
          </div>
        )}

        {/* Footer */}
        <div
          className="animate-fade-in-up mt-12 text-center"
          style={{ animationDelay: "3.2s", opacity: 0, animationFillMode: "forwards" }}
        >
          <p className="font-cute text-2xl text-foreground">
            you're stuck with me forever btw 😤💗
          </p>
          <div className="flex justify-center gap-2 mt-4 text-2xl">
            {["🌸", "🦋", "🌷", "✨", "💕"].map((e, i) => (
              <span
                key={i}
                className="animate-float-emoji"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
