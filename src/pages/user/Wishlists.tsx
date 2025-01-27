import React from 'react';
import { Heart, Share2, Trash2 } from 'lucide-react';
import { properties } from '../../data';

export default function Wishlists() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Your Wishlists</h1>
              <p className="text-gray-600 mt-1">Save your favorite properties for later.</p>
            </div>
            <button className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600">
              Create New List
            </button>
          </div>

          {/* Lists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Wishlist */}
            <div className="group relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-200">
                <div className="grid grid-cols-2 h-full">
                  <img
                    className="h-full w-full object-cover"
                    src={properties[0].imageUrl}
                    alt="Wishlist cover"
                  />
                  <div className="grid grid-rows-2">
                    <img
                      className="h-full w-full object-cover"
                      src={properties[1].imageUrl}
                      alt="Wishlist item"
                    />
                    <img
                      className="h-full w-full object-cover"
                      src={properties[2].imageUrl}
                      alt="Wishlist item"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Dream Vacation Homes</h3>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded-full">
                      <Share2 className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded-full">
                      <Trash2 className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mt-1">15 properties saved</p>
              </div>
            </div>

            {/* Create New List Card */}
            <button className="aspect-[4/3] rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center hover:border-gray-400 transition-colors">
              <Heart className="h-8 w-8 text-gray-400" />
              <p className="text-gray-600 mt-2">Create New List</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}