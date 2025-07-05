import { Loader } from "lucide-react";

const Loading = () => {
  return <section className="flex justify-center items-center h-[50vh]">
    <Loader className="size-20 animate-spin"/>
  </section>;
};

export default Loading;
