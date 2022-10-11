import Image from 'next/image';

function Whocard({image, title, alt}) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out bg-[#1C3879] rounded-2xl">
      <div className="relative h-72 inset-x-0 top-0">
        <Image 
          alt={alt}
          src={image}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="w-56 md:w-64 bg-[#DCD6D6] rounded-2xl text-center p-4 outline outline-2 m-1">
        <p className="text-xl text-[#1C3879]">{title}</p>
      </div>
    </div>
  )
}

export default Whocard