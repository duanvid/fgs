import Box from '@/sharedcomponents/Box'
import Button from '@/sharedcomponents/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Box>
        <div>navbar area</div>
        <Button text='Hello' />
      </Box>
    </main>
  )
}
