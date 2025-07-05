import { Suspense } from "react";
import BlogBody from "./_components/BlogBody";
import BlogHeader from "./_components/BlogHeader";
import Loading from "@/components/Loading";

const BlogDetail = async ({
  params,
}: {
  params: Promise<{ objectId: string }>;
}) => {
  const objectId = (await params).objectId;
  return (
    <main className="container mx-auto px-4 pb-20">
      <Suspense fallback={<Loading/>}>
        <BlogHeader objectId={objectId} />
        <BlogBody objectId={objectId} />
      </Suspense>
    </main>
  );
};

export default BlogDetail;
