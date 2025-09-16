export const GoogleMap = () => (
  <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200 bg-white">
    <iframe
      className="w-full h-80 md:h-96 lg:h-[28rem]"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.9341102634576!2d139.6515391506741!3d35.55532944437713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f9c5d6e11e5%3A0x2781d6958786ab3a!2z5oW25oeJ576p5aG-5aSn5a2mIOefouS4iuOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1502181984198"
      style={{ border: 0 }}
      allowFullScreen
      title="Google Map showing Keio University location"
      loading="lazy"
    />
  </div>
);
