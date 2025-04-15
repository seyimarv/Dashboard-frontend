
import { LoadingSpinner } from "./LoadingSpinner";

export function DashboardLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner size="lg" className="text-primary" />
        <div className="space-y-2 text-center">
          <h3 className="text-lg font-medium">Loading your dashboard</h3>
          <p className="text-sm text-muted-foreground">
            Preparing your insights, just a moment...
          </p>
        </div>
      </div>
    </div>
  );
}
