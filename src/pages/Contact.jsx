import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import MapSection from "../components/contact/MapSection";

export default function Contact() {
  return (
    <>
    <section className="py-10 px-6 sm:px-12  bg-gray-50">
        
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-4">
            We'd love to hear from you. Reach out to us anytime.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">
          <ContactInfo />
          <ContactForm />
        </div>

        {/* Map */}
        <div className="mt-16">
          <MapSection />
        </div>

      </div>
    </section>
    </>
  );
}