import React from "react";
import { Star, Download, BookOpen } from "lucide-react";
import { Card } from "./card";
import { cn } from "@/utils/cn";

interface BookCardProps {
  title: string;
  description: string;
  image?: string;
  category: string;
  rating?: number;
  downloads?: number;
  downloadUrl?: string;
  isPlaceholder?: boolean;
  className?: string;
  onClick?: () => void;
}

export const BookCard = ({
  title,
  description,
  image,
  category,
  rating,
  downloads,
  downloadUrl,
  isPlaceholder = false,
  className = "",
  onClick,
}: BookCardProps): JSX.Element => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (downloadUrl) {
      window.open(downloadUrl, '_blank');
    }
  };

  return (
    <Card className={`min-w-[280px] max-w-[320px] overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="relative">
        {isPlaceholder ? (
          <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
            <BookOpen className="h-12 w-12 text-gray-400 dark:text-gray-500" />
          </div>
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 flex items-center justify-center">
            <BookOpen className="h-12 w-12 text-blue-500 dark:text-blue-400" />
          </div>
        )}
        
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>
        
        {isPlaceholder && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <span className="px-3 py-1 text-sm font-medium bg-white/90 text-gray-700 rounded-full">
              Coming Soon
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2 font-['Newsreader',Helvetica]">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 font-['Newsreader',Helvetica]">
          {description}
        </p>
      </div>
      
      <div className={cn("flex-shrink-0 border-none shadow-lg transition-all duration-300 cursor-pointer hover:shadow-2xl transform hover:scale-105", className)}
        onClick={handleClick}>
        
        {!isPlaceholder && rating && downloads && (
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="font-medium text-gray-700 dark:text-gray-300">{rating}</span>
            </div>
            
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <Download className="h-4 w-4" />
              <span>{downloads.toLocaleString()}</span>
            </div>
          </div>
        )}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
            <p className="text-white text-xs font-medium">Click to download</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
