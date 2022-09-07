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
    <h2>HTTPS Link element</h2>
    <Link href="https://amazon.com/dp/B077MZ2MPW">
      <a>https://amazon.com/dp/B077MZ2MPW</a>
    </Link>
    <br/>
    <h2>Deeplink Link element</h2>
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
    <br/>
    <h2>Deeplink Anchor element</h2>
    <a href="com.amazon.mobile.shopping.web://amazon.com/dp/B077MZ2MPW">com.amazon.mobile.shopping.web://amazon.com/dp/B077MZ2MPW</a>
    <br/>
    <a href="com.amazon.mobile.shopping.web:/amazon.com/dp/B077MZ2MPW">com.amazon.mobile.shopping.web:/amazon.com/dp/B077MZ2MPW</a>
    <br/>
    <a href="com.amazon.mobile.shopping.web:amazon.com/dp/B077MZ2MPW">com.amazon.mobile.shopping.web:amazon.com/dp/B077MZ2MPW</a>
    
  </div>
)
export default Index;
