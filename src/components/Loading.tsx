import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <section className="flex justify-center items-center h-[50vh] animate-fade-in">
      <Loader className="size-20 animate-spin text-gray-700" />
    </section>
  );
};

export default Loading;
