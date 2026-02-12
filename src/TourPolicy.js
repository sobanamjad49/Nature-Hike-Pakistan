import React, { useEffect } from 'react';

function TourPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Tour Policy</h1>

      <div className="max-w-4xl mx-auto space-y-4 text-gray-700 text-justify">
        <p>
          Our tours are designed to provide you with a safe, enjoyable, and memorable experience. Please read our policies carefully to ensure a smooth journey.
        </p>
        <p>
          <strong>Booking:</strong> All tour bookings should be confirmed in advance. Payment details, confirmation emails, and itinerary information will be provided once your booking is complete.
        </p>
        <p>
          <strong>Cancellations:</strong> Tours may be cancelled by customers or by us due to unforeseen circumstances. Refunds are subject to our cancellation policy, which varies depending on the tour type and notice period.
        </p>
        <p>
          <strong>Behavior:</strong> All participants are expected to respect fellow travelers, guides, and local customs. Misbehavior or non-compliance may result in removal from the tour without refund.
        </p>
        <p>
          <strong>Liability:</strong> We are not responsible for personal injury, loss, or damage to personal property during the tour. Participants are advised to take appropriate safety precautions.
        </p>
      </div>
    </div>
  );
}

export default TourPolicy;
