interface BadgeProps {
  color?: "navy" | "gold" | "green" | "gray" | "red";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ color = "gray", children, className = "" }: BadgeProps) {
  const colors = {
    navy: "bg-[#dbe4ff] text-[#1e3a5f]",
    gold: "bg-[#fff3b0] text-[#7a5c00]",
    green: "bg-green-100 text-green-800",
    gray: "bg-gray-100 text-gray-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[color]} ${className}`}>
      {children}
    </span>
  );
}
