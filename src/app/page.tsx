import Box from '@/sharedcomponents/Box'
import Button from '@/sharedcomponents/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className='bg-white'>
        <Box>
          <nav className='flex flex-row justify-between items-center p-5'>
            <div className='text-2xl font-semibold'>Fotografer Samarinda</div>
            <div className='flex-row flex items-center space-x-5'>
              <ul className='lg:flex flex-row space-x-2 hidden'>
                <li>Home</li>
                <li>About Us</li>
                <li>Gallery</li>
                <li>Contact Us</li>
              </ul>
              <div>
                <Button text='Login or Register' />
              </div>
            </div>
          </nav>
        </Box>
      </section>

      <section className='bg-slate-300 min-h-96'>
        <Box>
          <div className='flex lg:flex-row flex-col'>
            <div className="flex-1 section__content flex flex-col text-slate-900 justify-center">
            <div className="p-5">
              <h1 className="text-2xl lg:text-4xl font-semibold">Temukan <span className='font-extrabold underline uppercase'>Fotografer</span> di <span className='font-extrabold underline uppercase'>Samarinda</span> hanya dengan sekali klik</h1>
            </div>
            <div className="p-5 space-y-5">
              <div>
                <p>Kami adalah platform yang menyediakan wadah bagi bakat fotografi Anda untuk berkembang.</p>
                <p>Dari pernikahan (wedding photography) hingga sesi potret pribadi,</p>
                <p>Anda dapat mengejar minat Anda dan berbagi keahlian Anda dengan klien yang mencarinya.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link href='/discover'><button className="bg-sky-500 text-white py-2 px-4 rounded">Jelajahi Fotografer</button></Link>
                <button className={`bg-emerald-500 text-white py-2 px-4 rounded`}>Daftar Sebagai Fotografer</button>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center flex-1'>
            <Image src='/hero.png' alt='hero image' width={500} height={500}/>
          </div>
          </div>
        </Box>
      </section>

        <section className='bg-sky-500'>
          <Box>
            <div className='p-5'>
              <h3 className='text-xl font font-semibold text-center'>Join sekarang, dan dapatkan beberapa manfaat berikut</h3>
            </div>
            <div className='p-5 grid md:grid-cols-3 place-items-center gap-2'>
              <div className='h-full shadow container max-w-xs bg-white rounded'>
                <div className='p-5 bg-emerald-400 rounded-t '>
                  Pendaftaran yang sangat mudah
                </div>
                <div className='p-5'>
                  Mulai dengan mengisi data diri anda, lalu upload portofolio terbaik anda
                </div>
              </div>
              <div className='shadow container max-w-xs h-full bg-white rounded'>
                <div className='p-5 bg-emerald-400 rounded-t'>
                  akses ke pelatihan dan sumberdaya fotografi
                </div>
                <div className='p-5'>
                  apasaja akses dan pelatihannya
                </div>
              </div>
              <div className='shadow container max-w-xs bg-white rounded'>
                <div className='p-5 bg-emerald-400 rounded-t'>
                  buat klien semakin mudah menemukan jasa anda
                </div>
                <div className='p-5'>
                  buat penjelasan bagaimana klien dapat dnegan mudah meilih fotografer
                </div>
              </div>
            </div>
          </Box>
        </section>
        <section>New Member Section</section>
    </main>
  )
}
