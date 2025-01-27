import React, { useState } from 'react';
import { Star, Calendar, Users, X, ChevronLeft, ChevronRight, Heart, Share2, MapPin, Award, Clock, Shield } from 'lucide-react';
import type { Property } from '../types';
import { formatCurrency } from '../utils/currency';
import toast from 'react-hot-toast';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [showBooking, setShowBooking] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const handleBook = () => {
    toast.success('Booking request sent! The host will contact you soon.');
    setShowBooking(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="group cursor-pointer relative">
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-200 relative">
        <img
          className="h-full w-full object-cover transition group-hover:scale-105"
          src={property.images[currentImageIndex]}
          alt={property.title}
        />
        {/* Image Navigation */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-white/80 rounded-full hover:bg-white transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-white/80 rounded-full hover:bg-white transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => setShowAllPhotos(true)}
            className="absolute bottom-4 right-4 px-4 py-2 bg-white/90 rounded-lg hover:bg-white transition-colors text-sm font-medium"
          >
            Show all photos
          </button>
        </div>
        {/* Image Navigation Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {property.images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                currentImageIndex === index 
                  ? 'bg-white w-4' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">{property.title}</h3>
            <div className="flex items-center gap-2 mt-1 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{property.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 fill-current text-rose-500" />
            <span className="font-medium">{property.rating}</span>
            <span className="text-gray-600">({property.reviews} reviews)</span>
          </div>
          {property.host.isSuperhost && (
            <div className="flex items-center gap-1 text-gray-600">
              <Award className="h-5 w-5" />
              <span>Superhost</span>
            </div>
          )}
        </div>

        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-semibold">{formatCurrency(property.price)}</p>
              <p className="text-gray-600">per night</p>
            </div>
            <button
              onClick={() => setShowBooking(true)}
              className="px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors font-medium"
            >
              Book Now
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium">{property.beds} Beds</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium">{property.baths} Baths</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium">Up to {property.guests} guests</p>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-medium mb-2">Quick facts</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-600" />
                <span>{property.host.response_time} response</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-gray-600" />
                <span>{property.cancellation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Book Your Stay</h2>
                <button
                  onClick={() => setShowBooking(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Property Preview */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {property.images.slice(1, 4).map((image, index) => (
                      <div key={index} className="aspect-square rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`${property.title} view ${index + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-2">{property.title}</h3>
                <p className="text-gray-600">{property.location}</p>
              </div>

              {/* Booking Form */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-in
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-out
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <select className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent">
                      {[...Array(property.guests)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'guest' : 'guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="border-t pt-6 space-y-4">
                  <div className="flex justify-between">
                    <span>{formatCurrency(property.price)} × 5 nights</span>
                    <span>{formatCurrency(property.price * 5)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>{formatCurrency(75)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>{formatCurrency(85)}</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-4 border-t">
                    <span>Total</span>
                    <span>{formatCurrency(property.price * 5 + 160)}</span>
                  </div>
                </div>

                <button
                  onClick={handleBook}
                  className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors font-medium"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Photos Modal */}
      {showAllPhotos && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">All Photos</h2>
              <button
                onClick={() => setShowAllPhotos(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {property.images.map((image, index) => (
                <div key={index} className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${property.title} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}