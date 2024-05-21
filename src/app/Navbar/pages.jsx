import Link from 'next/link'

const Navbar= () => {
  return (
    <>
    <div className='grid grid-cols-2 justify-between mx-auto  h-9 max-w-8xl bg-blue-600'>
      <div>Logo</div>
      <div className='  flex gap-4 '>
        <Link href="home">Home</Link>
        <Link href="about">About</Link>
        <Link href="contact">Contact</Link>
        <Link href="login">Login</Link>

    </div></div></>
  )
}

export default Navbar