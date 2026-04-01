import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import MapSection from "../components/contact/MapSection";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We're here to connect with you. Whether you have questions, need
            support, or want to join our community, reach out to us today.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-white rounded-full"></div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us. Choose the method that works best for
              you.
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <div className="order-2 lg:order-1">
              <ContactInfo />
            </div>
            <div className="order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Find Us
              </h3>
              <p className="text-gray-600">
                Visit our location and experience our community firsthand.
              </p>
            </div>
            <MapSection />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold  mb-4">
            Ready to Connect?
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Join our community and discover the difference faith can make in
            your life.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Learn More About Us
          </button>
        </div>
      </section>
    </div>
  );
}
