import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12  ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg  text-orange-500 font-bold mb-4">
              Developed in collaboration with
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>• Addis Bus Head Office</li>
              <li>• Ministry of Transport And Logistics Ethiopia</li>
              <li>• Addis Ababa City Bus Service Enterprise</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-orange-500 mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@anbessa.gov.et</li>
              <li>Phone: +251 11 123 4567</li>
              <li>Address: Addis Ababa, Ethiopia</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-orange-500  mb-4">
              Social Media
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Anbessa Bus Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
