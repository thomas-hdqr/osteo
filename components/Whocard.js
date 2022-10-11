import Image from 'next/image';

function Whocard({image, title, alt}) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center">
        <Image 
          alt={alt}
          src={image}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
        <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Nike Revolt</div>
      </div>
      <h3 className="text-2xl text-red-700 mt-3">{title}</h3>
    </div>
  )
}

export default Whocard