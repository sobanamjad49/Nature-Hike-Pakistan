import React, { useEffect } from 'react';

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <div className="max-w-4xl mx-auto space-y-4 text-gray-700 text-justify">
        <p>
          Your privacy is extremely important to us. We are committed to protecting any personal information you share with us and using it responsibly. This policy explains how we collect, use, and safeguard your data.
        </p>
        <p>
          We may collect information such as your name, email, contact number, and browsing behavior to improve our services, communicate updates, and provide you with a personalized experience.
        </p>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy or with your consent. We take all reasonable measures to secure your data against unauthorized access or disclosure.
        </p>
        <p>
          By using our services, you consent to our privacy practices. You may contact us at any time for information regarding the data we hold about you or to request changes.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
