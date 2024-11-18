import Link from "next/link";

const CustomizedTours = () => {
  return (
    <div>
      <div className="text-center mt-8">
        <Link href="/" aria-label="Navigate back to Home page">
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 shadow transition-colors">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CustomizedTours;
