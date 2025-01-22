import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link
        to={"/blogs"}
        className=" text-2xl flex flex-col justify-center cursor-pointer font-bold"
      >
        Medium
      </Link>
      <div>
        <Link to={`/publish`}>
          <button
            type="button"
            className="mr-4 text-black focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text- px-5 py-2.5 text-center me-2 mb-2 "
          >
            <u>Write</u>
          </button>
        </Link>

        <Avatar size={"big"} name="Sourav" />
      </div>
    </div>
  );
};
