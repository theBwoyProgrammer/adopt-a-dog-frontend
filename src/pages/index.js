import Link from 'next/link'

export default function Home() {
  return (
      <div className="p-10">
         <Link href="/dog">Home</Link>
         <Link href="/availablePuppies">Available Puppies</Link>
      </div>
  )
}
