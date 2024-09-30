import Link from 'next/link'

function Page() {
  return (
    <div>
      <div>Hello world</div>
      <Link href='/skills'>Checkout my skills</Link>
      <Link href='/projects'>Checkout my projects</Link>
      <Link href='/contact'>Contact me!</Link>
    </div>
  );
}

export default Page