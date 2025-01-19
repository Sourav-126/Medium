import { Header } from "../components/Header";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";

// atomFamilies/selectorFamilies
export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading || !blog) {
    return (
      <div>
        <Header />

        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <Loader />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};
