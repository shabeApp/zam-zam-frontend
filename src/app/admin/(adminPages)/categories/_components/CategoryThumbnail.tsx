"use client";

import { useState } from "react";
import { LayoutGrid, LucideIcon } from "lucide-react";

interface CategoryThumbnailProps {
  src?: string | null;
  alt: string;
  className?: string;
  iconClassName?: string;
  fallbackIcon?: LucideIcon;
}

export const CategoryThumbnail = ({
  src,
  alt,
  className = "h-16 w-16 rounded-2xl",
  iconClassName = "h-7 w-7 text-primary/40",
  fallbackIcon: FallbackIcon = LayoutGrid,
}: CategoryThumbnailProps) => {
  const [hasError, setHasError] = useState(false);

  const cleanSrc = src?.trim();
  const isUrl = Boolean(
    cleanSrc &&
      (cleanSrc.startsWith("http://") ||
        cleanSrc.startsWith("https://") ||
        cleanSrc.startsWith("/") ||
        cleanSrc.startsWith("data:image/")),
  );

  const isEmojiOrShort = Boolean(
    cleanSrc && !isUrl && cleanSrc.length <= 4,
  );

  if (!cleanSrc) {
    return (
      <div
        className={`bg-muted/50 border border-primary/10 flex items-center justify-center text-muted-foreground/40 shrink-0 overflow-hidden ${className}`}
      >
        <FallbackIcon className={iconClassName} />
      </div>
    );
  }

  if (isEmojiOrShort) {
    return (
      <div
        className={`bg-background border border-primary/10 flex items-center justify-center text-2xl shrink-0 overflow-hidden select-none ${className}`}
      >
        <span>{cleanSrc}</span>
      </div>
    );
  }

  if (isUrl && !hasError) {
    return (
      <div
        className={`bg-muted/30 border border-primary/10 relative shrink-0 overflow-hidden flex items-center justify-center ${className}`}
      >
        <img
          src={cleanSrc}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`bg-muted/50 border border-primary/10 flex items-center justify-center text-muted-foreground/40 shrink-0 overflow-hidden ${className}`}
    >
      <FallbackIcon className={iconClassName} />
    </div>
  );
};
