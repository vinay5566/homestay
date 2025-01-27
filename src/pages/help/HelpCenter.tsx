import React from 'react';
import { Search, HelpCircle, Book, MessageCircle, Shield, Phone } from 'lucide-react';

export default function HelpCenter() {
  const categories = [
    {
      icon: Book,
      title: 'Booking Help',
      description: 'Get help with your reservations',
      articles: [
        'How to book a stay',
        'Cancellation policies',
        'Payment methods',
        'Booking modifications'
      ]
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Learn about our safety measures',
      articles: [
        'Guest verification',
        'Property safety standards',
        'Emergency contacts',
        'Insurance coverage'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Communication',
      description: 'Tips for guest-host communication',
      articles: [
        'Messaging guidelines',
        'Response time expectations',
        'Translation services',
        'Dispute resolution'
      ]
    }
  ];

  const popularArticles = [
    'How do I cancel my booking?',
    'What are the cleaning standards?',
    'How do I contact my host?',
    'Payment methods accepted',
    'Guest refund policy'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">How can we help you?</h1>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              className="pl-12 w-full px-6 py-3 border rounded-full shadow-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="h-6 w-6 text-rose-500" />
                <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.articles.map((article) => (
                  <li key={article}>
                    <button className="text-left text-gray-600 hover:text-rose-500">
                      {article}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Popular Articles */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="h-6 w-6 text-rose-500" />
            <h2 className="text-xl font-semibold text-gray-900">Popular Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article) => (
              <button
                key={article}
                className="p-4 text-left border rounded-lg hover:bg-gray-50"
              >
                <h3 className="font-medium text-gray-900">{article}</h3>
                <p className="text-sm text-gray-600 mt-1">Last updated 2 days ago</p>
              </button>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Still need help?</h2>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600">
            <Phone className="h-5 w-5" />
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}