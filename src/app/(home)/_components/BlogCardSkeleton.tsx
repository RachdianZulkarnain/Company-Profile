import { Skeleton } from "@/components/ui/skeleton";
import { FC } from "react";

interface BlogCardSkeletonProps {
  count: number;
}

const BlogCardSkeleton: FC<BlogCardSkeletonProps> = ({ count }) => {
  return (
    <>
      {Array.from({ length : count }).map((_, idx) => (
        <div key={idx} className="border rounded-lg overflow-hidden shadow-sm">
          <Skeleton className="w-full h-[200px]" />
          <div className="p-4 space-y-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCardSkeleton;
