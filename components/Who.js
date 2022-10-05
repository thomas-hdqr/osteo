import React from 'react'

function Who() {
  return (
    <section id="who" className="p-20">
      <div className="font-semibold pb-8">
        <h2>Pour qui ?</h2>
      </div>

      {/* partie avec les personnes en 3d */}
      <div className="flex flex-nowrap overflow-x-auto cursor-grab">
        <div className="flex flex-auto flex-col relative bg-[#1C3879] w-80 h-80 rounded-2xl mx-5">
        </div>
        <div className="flex flex-auto flex-col relative bg-[#1C3879] w-80 h-80 rounded-2xl mx-5">
        </div>
        <div className="flex flex-auto flex-col relative bg-[#1C3879] w-80 h-80 rounded-2xl mx-5">
        </div>
        <div className="flex flex-auto flex-col relative bg-[#1C3879] w-80 h-80 rounded-2xl mx-5">
        </div>
      </div>

    </section>
  )
}

export default Who