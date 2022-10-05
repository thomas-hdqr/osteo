import Image from 'next/image'
import { me } from '../assets'

function Me() {
  return (
    <section id="me" className="md:grid grid-cols-2 p-12 bg-[#1C3879] m-20 rounded-2xl justify-center items-center ">
      <div className="">
        <Image className="rounded-2xl" src={me} alt="" objectFit='contain' />
      </div>
      <div className="text-[#DCD6D6] text-right">
        <h2 className="font-semibold">Qui suis-je</h2>
        <p className="pt-5">Lorem ipsum dolor sit amet. Et quia voluptate qui quibusdam obcaecati At explicabo earum. Et ratione consequuntur sit magnam odio ea ipsa voluptates. Nam voluptatem consequatur vel molestiae facilis aut consequatur dignissimos aut nihil aspernatur vel magni unde.</p>
        <p className="pt-5">Et consequatur consequatur sit minima enim id numquam nostrum aut quam culpa eum vitae fugit ab quos neque et sint rerum. Ut vitae voluptate aut architecto vitae 33 nostrum reprehenderit.</p>
      </div>
    </section>
  )
}

export default Me