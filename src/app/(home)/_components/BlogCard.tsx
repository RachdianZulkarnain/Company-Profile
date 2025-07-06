import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.objectId}`} className="block group">
      <Card className="transition-all duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] rounded-xl overflow-hidden">
        <CardHeader className="p-0 overflow-hidden">
          <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px]">
            <Image
              src={blog.thumbnail}
              alt="thumbnail"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-2">
          <h2 className="font-semibold text-lg sm:text-xl text-gray-900">
            {blog.title}
          </h2>
          <p className="line-clamp-3 text-sm md:text-base text-gray-600">
            {blog.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
