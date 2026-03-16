interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div className={`bg-white border border-gray-200 shadow-sm rounded-xl p-6 ${hover ? "transition-shadow hover:shadow-md" : ""} ${className}`}>
      {children}
    </div>
  );
}
