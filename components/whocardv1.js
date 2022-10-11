// Original whocard


import Image from 'next/image';

function Whocard({image, title, alt}) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <div className="relative h-80 w-80">
          <Image className="rounded-2xl"
          alt={alt}
          src={image}
          layout="fill"
          />
        </div>
        <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  )
}

export default Whocard