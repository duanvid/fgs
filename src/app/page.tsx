import Box from '@/sharedcomponents/Box'
import Button from '@/sharedcomponents/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-poppins">
      <section className='bg-white '>
        <Box>
          <nav className='flex flex-row justify-between items-center p-5'>
            <div className='text-2xl font-semibold text-sky-500'>Fotografer Samarinda</div>

            <ul className='lg:flex flex-row space-x-2 hidden font-semibold'>
              <li>Home</li>
              <li>About Us</li>
              <li>Gallery</li>
              <li>Contact Us</li>
            </ul>

            <div>
              <Button text='Login or Register'/>
            </div>
          </nav>
        </Box>
      </section>

      <section className='bg-slate-300 min-h-96'>
        <Box>
          <div className='flex lg:flex-row flex-col'>
            <div className="flex-1 section__content flex flex-col text-slate-900 justify-center">
            <div className="p-5">
              <h1 className="text-2xl lg:text-4xl font-semibold">Temukan <span className='font-extrabold text-3xl lg:text-5xl uppercase text-sky-600'>Fotografer</span> di <span className='font-extrabold text-3xl lg:text-5xl uppercase text-emerald-600'>Samarinda</span> hanya dengan sekali klik</h1>
            </div>
            <div className="p-5 space-y-5">
              <div>
                <p>Kami adalah platform yang menyediakan wadah bagi bakat fotografi Anda untuk berkembang.</p>
                <p>Dari pernikahan (wedding photography) hingga sesi potret pribadi,</p>
                <p>Anda dapat mengejar minat Anda dan berbagi keahlian Anda dengan klien yang mencarinya.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link href='/discover'><Button text='Jelajahi Fotografer' /></Link>
                <Button text='Daftar Sebagai Fotografer' style='secondary'/>
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
              <div className='h-full shadow container bg-white rounded'>
                <div className='p-5 bg-emerald-400 rounded-t '>
                  Pendaftaran yang sangat mudah
                </div>
                <div className='p-5'>
                  Mulai dengan mengisi data diri anda, lalu upload portofolio terbaik anda
                </div>
              </div>
              <div className='shadow container h-full bg-white rounded'>
                <div className='p-5 bg-emerald-400 rounded-t'>
                  akses ke pelatihan dan sumberdaya fotografi
                </div>
                <div className='p-5'>
                  apasaja akses dan pelatihannya
                </div>
              </div>
              <div className='shadow container bg-white rounded'>
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
        <section className='bg-sky-500'>
          <Box>
            <div className='p-5 space-x-5 flex items-center'>
              <h3 className='text-2xl font-bold'>Trending PhotoShoot</h3>
              <Button text='Lihat Semua Photoshoot' style='secondary' />
            </div>
            <div className='p-5 grid grid-cols-3 gap-2'>
              <div className='bg-white rounded p-5 border-slate-500 border-b-8 hover:border-orange-500'>foto wisuda unmul</div>
              <div className='bg-white rounded p-5 border-slate-500 border-b-8 hover:border-orange-500 shadow'>wedding di islamic</div>
              <div className='bg-white rounded p-5 border-slate-500 border-b-8 hover:border-orange-500 shadow'>birthday party anak balita</div>
            </div>
            <div>section footer</div>
          </Box>
        </section>
    </main>
  )
}
