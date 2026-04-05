import { Heart } from "lucide-react";

const HeartAnimation = () => {
  return (
    <div className="flex justify-center my-8">
      <Heart
        className="animate-heartbeat text-primary fill-primary"
        size={48}
        strokeWidth={1.5}
      />
    </div>
  );
};

export default HeartAnimation;
