import  { useState } from 'react';

const images = [
  { src: 'https://example.com/moose.jpg', title: 'Moose in the Wild' },
  { src: 'https://example.com/elephant.jpg', title: 'Elephant in the Savannah' },
  { src: 'https://example.com/leopard.jpg', title: 'Leopard in the Jungle' },
  { src: 'https://example.com/deer.jpg', title: 'Deer in the Forest' },
];

const SliderA= () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((currentImage + 1) % images.length);
  const prevImage = () => setCurrentImage((currentImage - 1 + images.length) % images.length);

  return (
    <div className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url(${images[currentImage].src})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 text-white text-center max-w-lg">
        <h1 className="text-4xl font-bold">Design Slider</h1>
        <h2 className="text-2xl font-semibold mt-2">{images[currentImage].title}</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id elit non eros consectetur vestibulum.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
          <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">See More</button>
          <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">Subscribe</button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-10 flex space-x-4 z-10">
        {images.map((img, index) => (
          <div
            key={index}
            className={`w-20 h-20 overflow-hidden rounded-lg cursor-pointer border-2 transition ${index === currentImage ? 'border-white' : 'border-transparent'}`}
            onClick={() => setCurrentImage(index)}
          >
            <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-800 bg-opacity-50 px-2 py-1 rounded-full">&#8249;</button>
      <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-800 bg-opacity-50 px-2 py-1 rounded-full">&#8250;</button>
    </div>
  );
};

export default SliderA;
