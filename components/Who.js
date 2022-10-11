import React from 'react'
import Whocard from './Whocard'
import Whodata from './Whodata'
import Image from 'next/image'

function Who() {

  return (
    <section id="who" className="sm:p-20">
      <div className="font-semibold pb-8">
        <h2>Pour qui ?</h2>
      </div>

      {/* partie avec les personnes en 3d */}
      <div className="flex space-x-10 overflow-scroll scrollbar-hide p-3 -mr-3 drop-shadow-2xl">
        {Whodata.map(({ id, image, title, alt }) => (
                <Whocard 
                key={id}
                image={image} 
                alt={alt}
                title={title}
                />
              ))}
      </div>

    </section>
  )
}

export default Who