import React from 'react'
import Whocard from './Whocard'
import Whodata from './Whodata'

function Who() {

  return (
    <div id="who" className="sm:p-20 py-20 px-10">
      <div className="font-semibold pb-8">
        <h2>Pour qui ?</h2>
      </div>

      {/* partie avec les personnes en 3d */}
      <div className="flex space-x-6 sm:space-x-10 overflow-scroll scrollbar-hide p-3 -mr-3 drop-shadow-2xl">
        {Whodata.map(({ id, image, title, alt }) => (
                <Whocard 
                key={id}
                image={image} 
                alt={alt}
                title={title}
                />
              ))}
      </div>

    </div>
  )
}

export default Who