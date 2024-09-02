import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 py-8">
      <h1 className="text-5xl md:text-9xl font-bold">404</h1>
      <h2 className="text-xl md:text-3xl font-semibold mt-4 text-center">
        Ups!
        <br />
        Page not found
      </h2>
      <Link href="/home">
        <div className="mt-6 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-orange-500 transition duration-300 cursor-pointer">
          Go back to home
        </div>
      </Link>
    </div>
  );
}

export default NotFound;
