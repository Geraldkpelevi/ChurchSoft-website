export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>

      <p className="text-gray-600">
        You can reach us through any of the following ways:
      </p>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-700">📍 Address</h4>
          <p className="text-gray-600">
            Great Commission Church International Headquarters
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">📍 Postal Address</h4>
          <p className="text-gray-600">P.O.Box LG 293, LEGON-ACCRA</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">📍 Digital Address</h4>
          <p className="text-gray-600">GD-001-9643</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700">📞 Phone</h4>
          <p className="text-gray-600">+233 59 582 0364 / +233 50 582 0175</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700">✉️ Email</h4>
          <p className="text-gray-600">info@gcci.org</p>
        </div>
      </div>
    </div>
  );
}
