import React, { useState } from 'react';
import { Bed, Bath, Users, DollarSign } from 'lucide-react';

export default function Filters() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const FilterMenu = ({ type }: { type: string }) => {
    if (!activeFilter || activeFilter !== type) return null;

    return (
      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border p-4 z-50">
        {type === 'beds' && (
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">1+ beds</button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">2+ beds</button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">3+ beds</button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">4+ beds</button>
          </div>
        )}
        {type === 'baths' && (
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">1+ baths</button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">2+ baths</button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">3+ baths</button>
          </div>
        )}
        {type === 'guests' && (
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">1-2 guests</button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">3-4 guests</button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">5-6 guests</button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">7+ guests</button>
          </div>
        )}
        {type === 'price' && (
          <div className="space-y-4">
            <div className="flex gap-4">
              <div>
                <label className="text-sm text-gray-600">Min Price</label>
                <input type="number" className="w-full mt-1 px-3 py-2 border rounded" placeholder="$0" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Max Price</label>
                <input type="number" className="w-full mt-1 px-3 py-2 border rounded" placeholder="$1000+" />
              </div>
            </div>
            <button className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600">
              Apply
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative border-b">
      <div className="flex gap-4 p-4 overflow-x-auto">
        <button 
          className={`flex items-center gap-2 px-4 py-2 rounded-full border ${activeFilter === 'beds' ? 'border-gray-800' : 'hover:border-gray-800'}`}
          onClick={() => setActiveFilter(activeFilter === 'beds' ? null : 'beds')}
        >
          <Bed className="h-4 w-4" />
          <span>Beds</span>
        </button>
        <button 
          className={`flex items-center gap-2 px-4 py-2 rounded-full border ${activeFilter === 'baths' ? 'border-gray-800' : 'hover:border-gray-800'}`}
          onClick={() => setActiveFilter(activeFilter === 'baths' ? null : 'baths')}
        >
          <Bath className="h-4 w-4" />
          <span>Baths</span>
        </button>
        <button 
          className={`flex items-center gap-2 px-4 py-2 rounded-full border ${activeFilter === 'guests' ? 'border-gray-800' : 'hover:border-gray-800'}`}
          onClick={() => setActiveFilter(activeFilter === 'guests' ? null : 'guests')}
        >
          <Users className="h-4 w-4" />
          <span>Guests</span>
        </button>
        <button 
          className={`flex items-center gap-2 px-4 py-2 rounded-full border ${activeFilter === 'price' ? 'border-gray-800' : 'hover:border-gray-800'}`}
          onClick={() => setActiveFilter(activeFilter === 'price' ? null : 'price')}
        >
          <DollarSign className="h-4 w-4" />
          <span>Price</span>
        </button>
      </div>
      <FilterMenu type={activeFilter || ''} />
    </div>
  );
}