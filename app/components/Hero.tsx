export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Welcome to
            <span className="block text-yellow-300">Vinxi React App</span>
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            A modern full-stack application built with Vinxi, React, and optimized for search engines. 
            Experience the power of server-side rendering with client-side interactivity.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="/about"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}