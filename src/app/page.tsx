import Box from '@/sharedcomponents/Box'
import Button from '@/sharedcomponents/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Box>
        <nav className='flex flex-row justify-between items-center'>
        <div className='text-2xl font-semibold'>Fotografer Samarinda</div>
        <div className='flex-row flex items-center space-x-5'>
          <ul className='flex flex-row space-x-2'>
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
        <section className='h-5/6 p-5 container'>Hero Section</section>

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
