import React, { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../../lib/supabase';
import { Home, Calendar, Heart, MessageCircle, Settings, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';

export default function UserDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success('Successfully signed out!');
      window.location.href = '/login';
    } catch (error) {
      toast.error('Error signing out');
      console.error('Error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center">
                  <span className="text-rose-600 font-semibold text-lg">
                    {user?.user_metadata.full_name?.[0] || user?.email?.[0].toUpperCase()}
                  </span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{user?.user_metadata.full_name || 'User'}</h2>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                <button className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg bg-gray-50 w-full">
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </button>
                <button className="flex items-center space-x-3 text-gray-600 p-2 rounded-lg hover:bg-gray-50 w-full">
                  <Calendar className="h-5 w-5" />
                  <span>My Bookings</span>
                </button>
                <button className="flex items-center space-x-3 text-gray-600 p-2 rounded-lg hover:bg-gray-50 w-full">
                  <Heart className="h-5 w-5" />
                  <span>Favorites</span>
                </button>
                <button className="flex items-center space-x-3 text-gray-600 p-2 rounded-lg hover:bg-gray-50 w-full">
                  <MessageCircle className="h-5 w-5" />
                  <span>Messages</span>
                </button>
                <button className="flex items-center space-x-3 text-gray-600 p-2 rounded-lg hover:bg-gray-50 w-full">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-3 text-red-600 p-2 rounded-lg hover:bg-red-50 w-full"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-2xl font-bold mb-6">Welcome back, {user?.user_metadata.full_name || 'User'}!</h1>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Active Bookings</h3>
                  <p className="text-3xl font-bold text-rose-500">0</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Saved Properties</h3>
                  <p className="text-3xl font-bold text-rose-500">0</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Unread Messages</h3>
                  <p className="text-3xl font-bold text-rose-500">0</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <div className="text-gray-500 text-center py-8">
                  No recent activity to show.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}