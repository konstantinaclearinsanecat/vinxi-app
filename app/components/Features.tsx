export function Features() {
  const features = [
    {
      title: "⚡ Lightning Fast",
      description: "Built on Vinxi for optimal performance with server-side rendering and smart client-side hydration."
    },
    {
      title: "🔍 SEO Optimized",
      description: "Comprehensive SEO features including meta tags, Open Graph, structured data, and server-side rendering."
    },
    {
      title: "📱 Mobile First",
      description: "Responsive design that works perfectly on all devices, from smartphones to desktop computers."
    },
    {
      title: "🎨 Modern UI",
      description: "Beautiful, accessible interface built with modern CSS and thoughtful user experience design."
    },
    {
      title: "🔧 Developer Friendly",
      description: "TypeScript support, hot reload, and excellent developer experience with modern tooling."
    },
    {
      title: "🚀 Production Ready",
      description: "Optimized builds, automatic code splitting, and deployment-ready configuration out of the box."
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Our Platform?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Built with modern technologies and best practices to deliver exceptional performance and user experience.
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}