import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Globe } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Support',
      links: ['Help Center', 'AirCover', 'Safety information', 'Supporting people with disabilities', 'Cancellation options'],
    },
    {
      title: 'Community',
      links: ['Homestay.org: disaster relief', 'Support refugees', 'Combating discrimination'],
    },
    {
      title: 'Hosting',
      links: ['Host your home', 'Host an experience', 'How to host responsibly', 'Visit our community forum'],
    },
    {
      title: 'Homestay',
      links: ['Newsroom', 'Learn about features', 'Careers', 'Investors', 'Gift cards'],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <button className="text-gray-600 hover:text-gray-900 hover:underline text-sm">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <Facebook className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Twitter className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Instagram className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Youtube className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center space-x-8 text-sm">
            <button className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
              <Globe className="h-4 w-4" />
              English (US)
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              $ USD
            </button>
          </div>

          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Homestay, Inc.
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500 flex flex-wrap gap-4 justify-center md:justify-start">
          <button className="hover:underline">Privacy</button>
          <span>·</span>
          <button className="hover:underline">Terms</button>
          <span>·</span>
          <button className="hover:underline">Sitemap</button>
          <span>·</span>
          <button className="hover:underline">Company details</button>
          <span>·</span>
          <button className="hover:underline">Destinations</button>
        </div>
      </div>
    </footer>
  );
}