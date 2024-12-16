import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray text-black py-10 px-5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* About Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Why SEO Analyzer?</h2>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iure assumenda, nobis repudiandae aperiam est ipsum deleniti illo nemo. Incidunt reprehenderit numquam voluptatibus, quibusdam amet nulla. Fugit debitis itaque sapiente!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul className="text-sm space-y-2">
                        <li className="cursor-pointer hover:text-yellow-500">Home</li>
                        <li className="cursor-pointer hover:text-yellow-500">Services</li>
                        <li className="cursor-pointer hover:text-yellow-500">About</li>
                        <li className="cursor-pointer hover:text-yellow-500">Contacts</li>
                    </ul>
                </div>

                {/* Latest Update */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Latest Update</h2>
                    <p className="text-sm mb-4">Sign up with your name and email to get fresh updates.</p>
                    <div className="flex items-center max-w-md mx-auto bg-white border border-gray-300 rounded-md shadow-md">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 text-sm text-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-yellow-500 text-sm border-l font-medium text-black rounded-r-md hover:bg-yellow-600 transition"
                        >
                            Subscribe
                        </button>
                    </div>

                </div>

                {/* Contact Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
                    <ul className="text-sm space-y-4">
                        <li className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-yellow-500" />
                            <span>Manhattan 1258, New York, USA</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-yellow-500" />
                            <span>(+1) 234 567 8901</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-yellow-500" />
                            <span>hello@website.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
                <p>&copy; 2023. All Rights Reserved | SEO Analyzer</p>
            </div>
        </footer>
    );
};

export default Footer;
