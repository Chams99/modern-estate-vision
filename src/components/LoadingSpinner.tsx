import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export const LoadingSpinner = ({
  size = "md",
  text,
  className = "",
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center space-y-4 ${className}`}
    >
      <div className="relative">
        <Loader2 className={`${sizeClasses[size]} animate-spin text-primary`} />
        <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-lg animate-pulse" />
      </div>
      {text && (
        <p className="text-muted-foreground text-sm font-medium animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow animate-pulse">
            <span className="text-primary-foreground font-bold text-xl">
              MC
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 blur-xl animate-pulse" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Meridian Capital
        </h2>
        <p className="text-muted-foreground">
          Loading your investment journey...
        </p>
        <div className="mt-8">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    </div>
  );
};

export const SkeletonCard = () => {
  return (
    <div className="card-modern p-6 animate-pulse">
      <div className="w-16 h-16 bg-muted rounded-2xl mb-4" />
      <div className="h-6 bg-muted rounded mb-3" />
      <div className="h-4 bg-muted rounded mb-2" />
      <div className="h-4 bg-muted rounded w-3/4" />
    </div>
  );
};

export const SkeletonGrid = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};
