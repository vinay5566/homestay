import React, { useState } from 'react';
import { Building2, MapPin, Camera, DollarSign, Bed, Bath, Users } from 'lucide-react';

export default function ListProperty() {
  const [photos, setPhotos] = useState<string[]>([]);

  const handleAddPhoto = () => {
    // In a real app, this would handle file upload
    setPhotos([...photos, `https://images.unsplash.com/photo-${Date.now()}`]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">List Your Property</h1>

          <div className="space-y-8">
            {/* Basic Information */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="e.g., Luxury Beach Villa"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Address"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Property Details */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Property Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                  <div className="relative">
                    <Bed className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Number of beds"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                  <div className="relative">
                    <Bath className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Number of baths"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Max Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Maximum guests"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Pricing</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nightly Rate</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Price per night"
                  />
                </div>
              </div>
            </section>

            {/* Photos */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Property Photos</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            </section>

            {/* Description */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Description</h2>
              <div>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  rows={6}
                  placeholder="Describe your property..."
                />
              </div>
            </section>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            >
              List Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}