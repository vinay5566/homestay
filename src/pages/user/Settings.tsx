import React from 'react';
import { User, Lock, Bell, CreditCard, Globe, Shield } from 'lucide-react';

export default function Settings() {
  const sections = [
    {
      id: 'profile',
      title: 'Profile Settings',
      icon: User,
      fields: [
        { label: 'Full Name', type: 'text', value: 'John Doe' },
        { label: 'Email', type: 'email', value: 'john@example.com' },
        { label: 'Phone', type: 'tel', value: '+1 (555) 000-0000' }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      icon: Lock,
      fields: [
        { label: 'Current Password', type: 'password', value: '' },
        { label: 'New Password', type: 'password', value: '' },
        { label: 'Confirm Password', type: 'password', value: '' }
      ]
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      toggles: [
        { label: 'Email Notifications', description: 'Receive booking updates via email', enabled: true },
        { label: 'SMS Notifications', description: 'Get text messages for important updates', enabled: false },
        { label: 'Marketing Communications', description: 'Receive offers and promotions', enabled: true }
      ]
    },
    {
      id: 'payment',
      title: 'Payment Methods',
      icon: CreditCard,
      cards: [
        { last4: '4242', brand: 'Visa', expiry: '12/24' },
        { last4: '8888', brand: 'Mastercard', expiry: '06/25' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg">
          {/* Settings Header */}
          <div className="border-b px-8 py-6">
            <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
            <p className="text-gray-600 mt-1">Manage your account preferences and settings</p>
          </div>

          {/* Settings Sections */}
          <div className="p-8 space-y-12">
            {sections.map((section) => (
              <section key={section.id} className="space-y-6">
                <div className="flex items-center gap-2">
                  <section.icon className="h-6 w-6 text-rose-500" />
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>

                {section.fields && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.fields.map((field) => (
                      <div key={field.label}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          defaultValue={field.value}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {section.toggles && (
                  <div className="space-y-4">
                    {section.toggles.map((toggle) => (
                      <div key={toggle.label} className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{toggle.label}</h3>
                          <p className="text-sm text-gray-600">{toggle.description}</p>
                        </div>
                        <button
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 ${
                            toggle.enabled ? 'bg-rose-500' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              toggle.enabled ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {section.cards && (
                  <div className="space-y-4">
                    {section.cards.map((card) => (
                      <div
                        key={card.last4}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                            {card.brand}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              •••• •••• •••• {card.last4}
                            </p>
                            <p className="text-sm text-gray-600">Expires {card.expiry}</p>
                          </div>
                        </div>
                        <button className="text-rose-500 hover:text-rose-600">
                          Remove
                        </button>
                      </div>
                    ))}
                    <button className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 text-gray-600 hover:text-gray-700">
                      Add New Payment Method
                    </button>
                  </div>
                )}

                {section.id === 'profile' && (
                  <div className="flex justify-end">
                    <button className="px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600">
                      Save Changes
                    </button>
                  </div>
                )}
              </section>
            ))}

            {/* Language and Region */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-rose-500" />
                <h2 className="text-xl font-semibold text-gray-900">Language and Region</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Language
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent">
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Currency
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent">
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Privacy */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-rose-500" />
                <h2 className="text-xl font-semibold text-gray-900">Privacy</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-rose-500 focus:ring-rose-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    Make my profile visible to other users
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-rose-500 focus:ring-rose-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    Allow others to see my booking history
                  </label>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}