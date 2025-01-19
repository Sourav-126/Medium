import { Header } from "../components/Header";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";
import { Shimmer } from "../components/Shimmer";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  console.log(blogs);
  if (loading) {
    return (
      <div>
        <Header />
        <div className="flex justify-center">
          <div>
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"19 Jan 2025"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
