import React, { useState } from 'react';
import { Building2, Mail, Phone, MapPin, Camera, AlertCircle } from 'lucide-react';

export default function VendorRegister() {
  const [step, setStep] = useState(1);
  const [photos, setPhotos] = useState<string[]>([]);

  const handleAddPhoto = () => {
    // In a real app, this would handle file upload
    setPhotos([...photos, `https://images.unsplash.com/photo-${Date.now()}`]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Register as a Property Manager</h1>
          
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((number) => (
              <div key={number} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= number ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {number}
                </div>
                {number < 3 && (
                  <div className={`w-24 h-1 ${step > number ? 'bg-rose-500' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Your business name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Property Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Property location"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Photos</label>
                  <div className="grid grid-cols-3 gap-4">
                    {photos.map((photo, index) => (
                      <div key={index} className="aspect-square bg-gray-100 rounded-lg" />
                    ))}
                    <button
                      onClick={handleAddPhoto}
                      className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-gray-400"
                    >
                      <Camera className="h-6 w-6 text-gray-400" />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Description</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    rows={4}
                    placeholder="Describe your property..."
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Verification</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Verification Required</h3>
                    <p className="mt-1 text-sm text-yellow-700">
                      We'll need to verify your identity and business documents. Please have them ready.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business License</label>
                  <input
                    type="file"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ID Verification</label>
                  <input
                    type="file"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 border rounded-lg hover:bg-gray-50"
              >
                Back
              </button>
            )}
            <button
              onClick={() => step < 3 ? setStep(step + 1) : console.log('Submit')}
              className="ml-auto px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
            >
              {step === 3 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}