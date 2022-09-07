import Link from 'next/link'
const Index = () => (
  <div>
    <h1>Deep Link Testing</h1>
    <Link href="/about">
      <a>About (local)</a>
    </Link>
    <br/>
    <Link href="https://www.google.com">
      <a>Google (external https)</a>
    </Link>
    <br/>
    <Link href="https://venmo.com">
      <a>Venmo (external https)</a>
    </Link>
    <br/>
    <Link href="mailto:jetucker@paypal.com">
      <a>mailto jetucker@paypal.com</a>
    </Link>
    <hr />
    <Link href="https://amazon.com/dp/B077MZ2MPW">
      <a>https://amazon.com/dp/B077MZ2MPW</a>
    </Link>
    <br/>
    <Link href="com.amazon.mobile.shopping.web://amazon.com/dp/B077MZ2MPW">
      <a>com.amazon.mobile.shopping.web://amazon.com/dp/B077MZ2MPW</a>
    </Link>
    <br/>
    <Link href="com.amazon.mobile.shopping.web:/amazon.com/dp/B077MZ2MPW">
      <a>com.amazon.mobile.shopping.web:/amazon.com/dp/B077MZ2MPW</a>
    </Link>
    <br/>
    <Link href="com.amazon.mobile.shopping.web:amazon.com/dp/B077MZ2MPW">
      <a>com.amazon.mobile.shopping.web:amazon.com/dp/B077MZ2MPW</a>
    </Link>
    
  </div>
)
export default Index;
