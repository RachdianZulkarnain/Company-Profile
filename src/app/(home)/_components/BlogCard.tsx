import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.objectId}`}>
      <Card>
        <CardHeader>
          <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
            <Image
              src={blog.thumbnail}
              alt="thumbnail"
              className="object-cover"
              fill
            />
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="font-bold text-lg">{blog.title}</h2>
          <p className="line-clamp-3">{blog.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
