import React, { useState } from 'react';
import { Search, User, Menu, Globe, Heart, MessageCircle, Building2, ChevronDown, Settings, HelpCircle, LogOut } from 'lucide-react';

export default function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isVendorMenuOpen, setIsVendorMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="text-rose-500 text-3xl font-bold tracking-tight">homestay</h1>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations..."
                className={`w-full px-6 py-3 border rounded-full shadow-sm transition-all ${
                  isSearchFocused 
                    ? 'ring-2 ring-rose-500 border-transparent' 
                    : 'hover:shadow-md focus:ring-2 focus:ring-rose-500 focus:border-transparent'
                }`}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <button className="absolute right-3 top-2.5 bg-rose-500 text-white p-1.5 rounded-full hover:bg-rose-600 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
            {isSearchFocused && (
              <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-lg border p-4 z-50">
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-900">Popular destinations</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2">
                      <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=40&h=40&fit=crop" alt="New York" className="w-10 h-10 rounded object-cover" />
                      <div>
                        <p className="font-medium">New York City</p>
                        <p className="text-sm text-gray-500">New York, USA</p>
                      </div>
                    </button>
                    <button className="text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2">
                      <img src="https://images.unsplash.com/photo-1534050359320-02900022671e?w=40&h=40&fit=crop" alt="Los Angeles" className="w-10 h-10 rounded object-cover" />
                      <div>
                        <p className="font-medium">Los Angeles</p>
                        <p className="text-sm text-gray-500">California, USA</p>
                      </div>
                    </button>
                    <button className="text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2">
                      <img src="https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=40&h=40&fit=crop" alt="Miami" className="w-10 h-10 rounded object-cover" />
                      <div>
                        <p className="font-medium">Miami Beach</p>
                        <p className="text-sm text-gray-500">Florida, USA</p>
                      </div>
                    </button>
                    <button className="text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2">
                      <img src="https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=40&h=40&fit=crop" alt="Las Vegas" className="w-10 h-10 rounded object-cover" />
                      <div>
                        <p className="font-medium">Las Vegas</p>
                        <p className="text-sm text-gray-500">Nevada, USA</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <button
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-full transition-colors"
                onClick={() => setIsVendorMenuOpen(!isVendorMenuOpen)}
              >
                <Building2 className="h-5 w-5" />
                For Vendors
                <ChevronDown className="h-4 w-4" />
              </button>
              {isVendorMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border p-2 z-50">
                  <div className="space-y-1">
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded font-semibold">
                      Register as Vendor
                    </button>
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">
                      Vendor Login
                    </button>
                    <hr className="my-2" />
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">
                      List Your Property
                    </button>
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">
                      Vendor Guidelines
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Globe className="h-5 w-5" />
            </button>
            <div className="relative">
              <button 
                className={`flex items-center gap-3 p-3 border rounded-full transition-all ${
                  isUserMenuOpen ? 'border-gray-800 bg-gray-50' : 'hover:shadow-md'
                }`}
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <Menu className="h-5 w-5" />
                <User className="h-5 w-5" />
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border p-2 z-50">
                  <div className="space-y-1">
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded font-semibold">
                      Sign up
                    </button>
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">
                      Log in
                    </button>
                    <hr className="my-2" />
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Wishlists
                    </button>
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Messages
                    </button>
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Account Settings
                    </button>
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2">
                      <HelpCircle className="h-4 w-4" />
                      Help Center
                    </button>
                    <hr className="my-2" />
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2 text-red-600">
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}