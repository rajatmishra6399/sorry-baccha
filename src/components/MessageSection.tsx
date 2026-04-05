interface MessageSectionProps {
  delay: string;
  children: React.ReactNode;
}

const MessageSection = ({ delay, children }: MessageSectionProps) => {
  return (
    <div
      className="animate-fade-in-up opacity-0 max-w-2xl mx-auto px-6"
      style={{ animationDelay: delay, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
};

export default MessageSection;
