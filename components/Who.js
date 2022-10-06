import React from 'react'
import Whocard from './Whocard'
import Whodata from './Whodata'

function Who() {

  return (
    <section id="who" className="p-20">
      <div className="font-semibold pb-8">
        <h2>Pour qui ?</h2>
      </div>

      {/* partie avec les personnes en 3d */}
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        {Whodata.map(({ id, image, title }) => (
                <Whocard 
                key={id}
                img={image} 
                title={title}
                />
              ))}
      </div>

    </section>
  )
}

export default Who