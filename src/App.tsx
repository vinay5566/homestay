import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { supabase } from './lib/supabase';
import Header from './components/Header';
import Footer from './components/Footer';
import Filters from './components/Filters';
import PropertyCard from './components/PropertyCard';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import UserDashboard from './pages/dashboard/UserDashboard';
import { properties } from './data';

function App() {
  const [session, setSession] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const renderPage = () => {
    if (currentPage === 'login') return <Login />;
    if (currentPage === 'signup') return <Signup />;
    if (session) return <UserDashboard />;

    return (
      <>
        <Filters />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Toaster position="top-right" />
      <Header onPageChange={setCurrentPage} session={session} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;