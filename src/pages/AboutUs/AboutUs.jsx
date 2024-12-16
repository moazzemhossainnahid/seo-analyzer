import { Link } from "react-router-dom";

const AboutUs = () => {


  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      <div className="max-w-5xl mx-auto text-center">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-5">About Us</h1>
        <p className="text-lg text-gray-600 mb-10">
          Welcome to <span className="text-blue-600 font-semibold">SEO Analyzer</span>! We help you unlock the full potential of your website with advanced SEO analysis and actionable insights.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Comprehensive Analysis</h3>
          <p className="text-gray-600">
            Dive deep into your website&apos;s performance with detailed SEO audits and analysis.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Actionable Recommendations</h3>
          <p className="text-gray-600">
            Receive step-by-step guidance to improve your website&apos;s search engine rankings.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-Time Monitoring</h3>
          <p className="text-gray-600">
            Track your progress and stay updated with real-time SEO metrics.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600">
          At <span className="text-blue-600 font-semibold">SEO Analyzer</span>, our mission is to empower businesses of all sizes to succeed online. By providing easy-to-use tools and expert insights, we aim to make SEO accessible to everyone.
        </p>
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto text-center mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Optimize Your Website?</h3>
        <p className="text-gray-600 mb-6">
          Start your journey towards better search engine rankings today with <span className="text-blue-600 font-semibold">SEO Analyzer</span>.
        </p>
        <Link to={`/`} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Get Started Now
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
