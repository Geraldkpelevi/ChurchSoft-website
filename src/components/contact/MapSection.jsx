export default function MapSection() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
      <iframe
        title="church-location"
        src="https://www.google.com/maps?q=Accra&output=embed"
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}