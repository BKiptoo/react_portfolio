import React, { useState } from 'react';
import Button from '../../../components/ui/Button';

import Icon from '../../../components/AppIcon';

const ConsultationBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const consultationTypes = [
    {
      id: 'free',
      name: 'Free Consultation',
      duration: '30 minutes',
      price: 'Free',
      description: 'Perfect for discussing your project ideas and getting initial advice'
    },
    {
      id: 'detailed',
      name: 'Detailed Planning Session',
      duration: '60 minutes',
      price: '$150',
      description: 'In-depth project analysis with technical recommendations and timeline'
    },
    {
      id: 'technical',
      name: 'Technical Review',
      duration: '45 minutes',
      price: '$120',
      description: 'Code review, architecture analysis, or technical problem solving'
    }
  ];

  const availableDates = [
    '2024-01-15',
    '2024-01-16',
    '2024-01-17',
    '2024-01-18',
    '2024-01-19',
    '2024-01-22',
    '2024-01-23'
  ];

  const availableTimes = [
    '09:00 AM',
    '10:30 AM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM'
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !consultationType) {
      return;
    }

    setIsBooking(true);

    // Simulate booking process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsBooked(true);
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setIsBooking(false);
    }
  };

  if (isBooked) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Calendar" size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultation Booked!</h3>
        <p className="text-gray-600 mb-2">
          Your consultation is scheduled for:
        </p>
        <p className="text-lg font-semibold text-gray-900 mb-6">
          {formatDate(selectedDate)} at {selectedTime}
        </p>
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-800">
            You'll receive a calendar invitation and Zoom link via email shortly.
          </p>
        </div>
        <Button 
          variant="primary" 
          onClick={() => {
            setIsBooked(false);
            setSelectedDate('');
            setSelectedTime('');
            setConsultationType('');
          }}
        >
          Book Another Session
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule a Consultation</h2>
        <p className="text-gray-600">
          Book a one-on-one session to discuss your project in detail and get personalized advice.
        </p>
      </div>

      {/* Consultation Types */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Consultation Type</h3>
        <div className="space-y-4">
          {consultationTypes.map((type) => (
            <div
              key={type.id}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                consultationType === type.id
                  ? 'border-blue-500 bg-blue-50' :'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setConsultationType(type.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{type.name}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{type.duration}</span>
                  <span className="font-bold text-blue-600">{type.price}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Date</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {availableDates.map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                selectedDate === date
                  ? 'border-blue-500 bg-blue-50 text-blue-700' :'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              {new Date(date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
              })}
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Time (PST)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {availableTimes.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                selectedTime === time
                  ? 'border-blue-500 bg-blue-50 text-blue-700' :'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Booking Summary */}
      {selectedDate && selectedTime && consultationType && (
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Consultation Type:</span>
              <span className="font-medium">
                {consultationTypes.find(t => t.id === consultationType)?.name}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{formatDate(selectedDate)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time:</span>
              <span className="font-medium">{selectedTime} PST</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration:</span>
              <span className="font-medium">
                {consultationTypes.find(t => t.id === consultationType)?.duration}
              </span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="text-gray-600">Price:</span>
              <span className="font-bold text-blue-600">
                {consultationTypes.find(t => t.id === consultationType)?.price}
              </span>
            </div>
          </div>
        </div>
      )}

      <Button
        variant="primary"
        onClick={handleBooking}
        disabled={!selectedDate || !selectedTime || !consultationType || isBooking}
        loading={isBooking}
        className="w-full"
      >
        {isBooking ? 'Booking...' : 'Book Consultation'}
      </Button>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">What to expect:</p>
            <ul className="space-y-1 text-blue-700">
              <li>• You'll receive a calendar invitation with Zoom link</li>
              <li>• Come prepared with your project details and questions</li>
              <li>• Free consultations can be rescheduled up to 24 hours in advance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;