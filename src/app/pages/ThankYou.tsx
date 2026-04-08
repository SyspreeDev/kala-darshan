import { useNavigate } from 'react-router';
import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThankYou() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem('consultationForm');
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const handleWhatsAppClick = () => {
    // Dummy WhatsApp link - replace with actual number
    const message = formData 
      ? `Hi, I just submitted a consultation form. My name is ${formData.name}.`
      : 'Hi, I would like to inquire about gemstones';
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef5e7] to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <div className="mb-6 flex justify-center">
            <CheckCircle className="w-20 h-20 text-green-500" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif text-[#0a0a0a] mb-4">
            Thank You for Your Interest!
          </h1>
          
          <p className="text-lg text-[#6b7280] mb-8">
            We've received your consultation request and will get back to you within 24 hours.
          </p>

          {formData && (
            <div className="bg-[#fafafa] rounded-lg p-6 mb-8 text-left">
              <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">Your Submission Details:</h2>
              <div className="space-y-2 text-[#6b7280]">
                <p><span className="font-medium text-[#0a0a0a]">Name:</span> {formData.name}</p>
                <p><span className="font-medium text-[#0a0a0a]">Email:</span> {formData.email}</p>
                <p><span className="font-medium text-[#0a0a0a]">Phone:</span> {formData.phone}</p>
                {formData.message && (
                  <p><span className="font-medium text-[#0a0a0a]">Message:</span> {formData.message}</p>
                )}
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 pt-8">
            <p className="text-[#6b7280] mb-6">
              Want to speak with us immediately?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                      window.open(
                        "https://wa.me/917666694747",
                        "_blank"
                      )
                    }
                className="bg-[#25d366] text-white px-8 py-4 rounded-lg hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-2 font-medium"
              >
                <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.05 0C4.52 0 0.02 4.48 0.02 10c0 1.77.46 3.44 1.27 4.89L0 20l5.25-1.38c1.39.76 2.97 1.18 4.63 1.18 5.53 0 10.03-4.48 10.03-10S15.58 0 10.05 0zm5.94 14.14c-.25.7-1.47 1.29-2.03 1.37-.54.08-1.08.12-1.75-.11-.4-.14-1.03-.32-1.77-.63-3.11-1.35-5.14-4.48-5.29-4.69-.15-.21-1.26-1.68-1.26-3.2 0-1.52.8-2.27 1.08-2.58.29-.31.63-.39.84-.39.21 0 .42.01.6.01.19.01.45-.07.7.53.26.61.88 2.14.96 2.3.08.15.13.33.03.54-.11.21-.16.34-.32.52-.16.18-.34.4-.48.54-.16.15-.33.32-.14.63.19.31.84 1.38 1.8 2.24 1.24 1.1 2.29 1.44 2.61 1.6.32.16.51.13.7-.08.19-.21.81-.95 1.03-1.28.21-.32.42-.27.71-.16.29.11 1.85.87 2.17 1.03.32.16.53.24.61.37.08.13.08.75-.17 1.45z"/>
                </svg>
                Chat on WhatsApp
              </button>

              <button
                onClick={() => navigate('/')}
                className="border-2 border-[#0a0a0a] text-[#0a0a0a] px-8 py-4 rounded-lg hover:bg-[#0a0a0a] hover:text-white transition-colors font-medium"
              >
                Back to Home
              </button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="font-semibold text-[#0a0a0a] mb-1">Call Us</p>
                <p className="text-[#6b7280]">+91 98765 43210</p>
              </div>
              <div>
                <p className="font-semibold text-[#0a0a0a] mb-1">Email Us</p>
                <p className="text-[#6b7280]">info@kaladarshansgems.com</p>
              </div>
              <div>
                <p className="font-semibold text-[#0a0a0a] mb-1">Working Hours</p>
                <p className="text-[#6b7280]">Mon-Sat, 10AM-7PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-[#6b7280] text-sm">
            Need help? Contact our customer support team at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
