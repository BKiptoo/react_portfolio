import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  // Mock coordinates for San Francisco, CA
  const latitude = 37.7749;
  const longitude = -122.4194;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Icon name="MapPin" size={20} className="text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Location</h2>
            <p className="text-gray-600">San Francisco Bay Area</p>
          </div>
        </div>
      </div>
      
      <div className="relative h-80">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Bettson Kiptoo Location"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${latitude},${longitude}&z=12&output=embed`}
          className="border-0"
        />
        
        {/* Overlay with contact info */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">Available for Local Meetings</h3>
              <p className="text-sm text-gray-600">Coffee shops, co-working spaces, or your office</p>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-gray-500" />
              <span className="text-sm text-gray-600">By appointment</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <Icon name="Car" size={18} className="text-gray-500" />
            <span className="text-sm text-gray-600">Parking available nearby</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Train" size={18} className="text-gray-500" />
            <span className="text-sm text-gray-600">Public transit accessible</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;