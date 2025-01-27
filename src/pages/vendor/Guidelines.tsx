import React from 'react';
import { Shield, Clock, Star, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

export default function Guidelines() {
  const guidelines = [
    {
      title: 'Property Standards',
      icon: Star,
      items: [
        'Clean and well-maintained spaces',
        'Accurate property descriptions and photos',
        'Essential amenities provided',
        'Safety equipment installed and maintained'
      ]
    },
    {
      title: 'Response Time',
      icon: Clock,
      items: [
        'Respond to inquiries within 24 hours',
        'Keep calendar up to date',
        'Prompt check-in instructions',
        'Timely resolution of issues'
      ]
    },
    {
      title: 'Safety & Security',
      icon: Shield,
      items: [
        'Verify guest identities',
        'Maintain guest privacy',
        'Follow local regulations',
        'Regular safety inspections'
      ]
    }
  ];

  const dosDonts = {
    dos: [
      'Be responsive and professional',
      'Keep your calendar updated',
      'Provide accurate descriptions',
      'Maintain cleanliness standards',
      'Follow local regulations'
    ],
    donts: [
      'Discriminate against guests',
      'Misrepresent your property',
      'Cancel confirmed bookings',
      'Share guest information',
      'Ignore safety requirements'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Vendor Guidelines</h1>

          {/* Alert Banner */}
          <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 mb-8">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-rose-600 mt-0.5" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-rose-800">Important Notice</h3>
                <p className="mt-1 text-sm text-rose-700">
                  Failure to follow these guidelines may result in account suspension or termination.
                </p>
              </div>
            </div>
          </div>

          {/* Guidelines Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {guidelines.map((section) => (
              <div key={section.title} className="space-y-4">
                <div className="flex items-center gap-2">
                  <section.icon className="h-6 w-6 text-rose-500" />
                  <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 bg-rose-500 rounded-full" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Dos and Don'ts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
                <h2 className="text-lg font-semibold text-gray-900">Do's</h2>
              </div>
              <ul className="space-y-2">
                {dosDonts.dos.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <XCircle className="h-6 w-6 text-red-500" />
                <h2 className="text-lg font-semibold text-gray-900">Don'ts</h2>
              </div>
              <ul className="space-y-2">
                {dosDonts.donts.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}