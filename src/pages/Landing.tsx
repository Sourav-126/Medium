import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="flex items-center justify-between h-[80px] px-6 bg-white shadow-md fixed w-full top-0 z-50">
        {/* Logo */}
        <div className=" justify-between  item-center text-center text-3xl font-bold">
          Ink & Insights
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-lg font-medium">
          <Link to="/blogs" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/" className="hover:text-blue-600">
            About
          </Link>
          <Link to="/" className="hover:text-blue-600">
            Contact
          </Link>
          <Link
            to="/signin"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex items-center justify-center text-center mt-[100px] px-5 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Discover, Write, and Share Your Stories with Ink & Insights
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Join a community of creative thinkers, and share your thoughts with
            the world.
          </p>
          <Link to="/signin">
            <button className="px-8 py-3 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col items-center justify-center px-5 py-20 bg-gray-50">
        <h2 className="text-4xl font-semibold mb-8">Why Ink & Insights?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center">
            <img
              src="/feature1.png"
              alt="Feature 1"
              className="mx-auto mb-4"
              width={50}
              height={50}
            />
            <h3 className="text-2xl font-medium mb-2">Write Your Passion</h3>
            <p className="text-lg text-gray-600">
              Create blog posts that resonate with your audience and share your
              ideas with the world.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/feature2.png"
              alt="Feature 2"
              className="mx-auto mb-4"
              width={50}
              height={50}
            />
            <h3 className="text-2xl font-medium mb-2">
              Join a Creative Community
            </h3>
            <p className="text-lg text-gray-600">
              Connect with other creatives, get feedback, and grow your presence
              on the web.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/feature3.png"
              alt="Feature 3"
              className="mx-auto mb-4"
              width={50}
              height={50}
            />
            <h3 className="text-2xl font-medium mb-2">Easy to Use</h3>
            <p className="text-lg text-gray-600">
              Our intuitive platform makes it simple to write, publish, and
              manage your content.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-600">
            &copy; 2025 Ink & Insights. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
