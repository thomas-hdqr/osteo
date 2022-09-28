import Image from 'next/image'
import { me } from '../assets'

function Me() {
  return (
    <section id="me"
    className="md:grid grid-cols-3 p-[3rem]">
      <div className="col-span-2">
        <Image className="rounded-lg" src={me} alt="" width="550vw" height="550vh"objectFit='cover'/>
      </div>
      <div className="">
        <h3>Qui suis-je</h3>
        <p className="pt-5 leading-10">Lorem ipsum dolor sit amet. Et quia voluptate qui quibusdam obcaecati At explicabo earum. Et ratione consequuntur sit magnam odio ea ipsa voluptates. Nam voluptatem consequatur vel molestiae facilis aut consequatur dignissimos aut nihil aspernatur vel magni unde.</p>
      </div>
    </section>
  )
}

export default Me