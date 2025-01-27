import React from 'react';
import { Search, MoreVertical } from 'lucide-react';

export default function Messages() {
  const conversations = [
    {
      id: 1,
      host: 'John Smith',
      property: 'Luxury Beach Villa',
      lastMessage: 'Thank you for your booking! Let me know if you need anything.',
      time: '2h ago',
      unread: true,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop'
    },
    {
      id: 2,
      host: 'Sarah Johnson',
      property: 'Mountain Retreat',
      lastMessage: 'The check-in instructions have been sent to your email.',
      time: '1d ago',
      unread: false,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 min-h-screen bg-white">
          {/* Sidebar */}
          <div className="col-span-4 border-r">
            <div className="p-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Messages</h1>
              
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>

              {/* Conversations List */}
              <div className="space-y-2">
                {conversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    className={`w-full p-4 flex items-start gap-3 rounded-lg hover:bg-gray-50 ${
                      conversation.unread ? 'bg-rose-50' : ''
                    }`}
                  >
                    <img
                      src={conversation.avatar}
                      alt={conversation.host}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1 text-left">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900">{conversation.host}</h3>
                          <p className="text-sm text-gray-600">{conversation.property}</p>
                        </div>
                        <span className="text-xs text-gray-500">{conversation.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {conversation.lastMessage}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="col-span-8 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src={conversations[0].avatar}
                  alt={conversations[0].host}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="font-medium text-gray-900">{conversations[0].host}</h2>
                  <p className="text-sm text-gray-600">{conversations[0].property}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreVertical className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {/* Host Message */}
              <div className="flex items-start gap-3">
                <img
                  src={conversations[0].avatar}
                  alt={conversations[0].host}
                  className="w-8 h-8 rounded-full"
                />
                <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
                  <p className="text-gray-900">{conversations[0].lastMessage}</p>
                  <span className="text-xs text-gray-500 mt-1">{conversations[0].time}</span>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
                <button className="px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}