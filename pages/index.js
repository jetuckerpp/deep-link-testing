import Link from 'next/link'
const Index = () => (
  <div>
    Hello World.{' '} This is a test.{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)
export default Index;
