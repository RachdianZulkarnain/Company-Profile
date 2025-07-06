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
    <main className="w-full px-4 py-10">
      <div className="max-w-screen-lg mx-auto space-y-10">
        <Suspense fallback={<Loading />}>
          <BlogHeader objectId={objectId} />
          <BlogBody objectId={objectId} />
        </Suspense>
      </div>
    </main>
  );
};

export default BlogDetail;
