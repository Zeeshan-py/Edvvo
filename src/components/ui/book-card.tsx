import { BookOpen, ExternalLink } from "lucide-react";
import { Card } from "./card";
import { Button } from "./button";

interface BookCardProps {
  title: string; description: string; image?: string; category: string;
  downloadUrl?: string;
  isPlaceholder?: boolean; className?: string; onClick?: () => void;
}
export const BookCard = ({ title, description, image, category, downloadUrl, isPlaceholder = false, className = "", onClick }: BookCardProps) => {
  const available = !isPlaceholder && Boolean(downloadUrl || onClick);
  const handleClick = () => {
    if (!available) return;
    if (onClick) onClick();
    else if (downloadUrl) window.open(downloadUrl, "_blank", "noopener,noreferrer");
  };
  return <Card className={`w-full max-w-[360px] overflow-hidden ${className}`}>
    <div className="ed-tint relative h-48 flex items-center justify-center">
      {image && !isPlaceholder ? <img src={image} alt={title} loading="lazy" className="w-full h-full object-contain" /> : <BookOpen data-testid="lucide-book-open" size={48} />}
      <span className="absolute top-3 left-3 ed-surface rounded-full px-3 py-1 text-xs">{category}</span>
    </div>
    <div className="p-5">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="ed-muted text-sm mb-5">{description}</p>
      <Button onClick={handleClick} disabled={!available} className="w-full">{available ? <><ExternalLink size={16} /> Open source</> : "Source unavailable"}</Button>
    </div>
  </Card>;
};
