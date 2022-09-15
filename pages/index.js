import Link from 'next/link'
const Index = () => (
  <div>
    <h1>Deep Link Testing</h1>

    
    <hr />
    
    <h2>&lt;NextLink&gt; element</h2>
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
    <br/>
    <Link href="amzn://amazon.com/dp/B077MZ2MPW">
      <a>amzn://amazon.com/dp/B077MZ2MPW</a>
    </Link>
    <br/>
    <Link href="amzn:/amazon.com/dp/B077MZ2MPW">
      <a>amzn:/amazon.com/dp/B077MZ2MPW</a>
    </Link>
    <br/>
    <Link href="amzn:amazon.com/dp/B077MZ2MPW">
      <a>amzn:amazon.com/dp/B077MZ2MPW</a>
    </Link>
    <br/>
    <br/>
    <Link href="https://amazon.com/dp/B077MZ2MPW">
      <a>https://amazon.com/dp/B077MZ2MPW</a>
    </Link>
    <br/>
    <br/>
    <Link href="https://www.google.com">
      <a>https://www.google.com</a>
    </Link>
    <br/>
    <Link href="mailto:jetucker@paypal.com">
      <a>mailto:jetucker@paypal.com</a>
    </Link>
    <br/>
    <br/>
    <Link href="sms://1-408-555-1212">
      <a>sms://1-408-555-1212</a>
    </Link>
    <br/>
    <Link href="sms:1-408-555-1212">
      <a>sms:1-408-555-1212</a>
    </Link>
    <br/>
    <br/>
    <Link href="tel://1-408-555-1212">
      <a>tel://1-408-555-1212</a>
    </Link>
    <br/>
    <Link href="tel:1-408-555-1212">
      <a>tel:1-408-555-1212</a>
    </Link>
    <br/>
    <br/>
    <Link href="https://venmo.com">
      <a>https://venmo.com</a>
    </Link>
    <br/>
    <Link href="venmo://">
      <a>venmo://</a>
    </Link>
    <br/>
    <br/>
    <Link href="calc://">
      <a>calc://</a>
    </Link>
    <br/>
    <br/>
    <Link href="/about">
      <a>/about</a>
    </Link>
    <br/>
    <br/>

    <hr/>

    <h2>&lt;a&gt; element</h2>
    <a href="com.amazon.mobile.shopping.web://amazon.com/dp/B077MZ2MPW">com.amazon.mobile.shopping.web://amazon.com/dp/B077MZ2MPW</a>
    <br/>
    <a href="com.amazon.mobile.shopping.web:/amazon.com/dp/B077MZ2MPW">com.amazon.mobile.shopping.web:/amazon.com/dp/B077MZ2MPW</a>
    <br/>
    <a href="com.amazon.mobile.shopping.web:amazon.com/dp/B077MZ2MPW">com.amazon.mobile.shopping.web:amazon.com/dp/B077MZ2MPW</a>
    <br/>
    <br/>
    <a href="amzn//:amazon.com/dp/B077MZ2MPW">amzn//:amazon.com/dp/B077MZ2MPW</a>
    <br/>
    <a href="amzn/:amazon.com/dp/B077MZ2MPW">amzn/:amazon.com/dp/B077MZ2MPW</a>
    <br/>
    <a href="amzn:amazon.com/dp/B077MZ2MPW">amzn:amazon.com/dp/B077MZ2MPW</a>
    <br/>
    <br/>
    <a href="https://amazon.com/dp/B077MZ2MPW">https://amazon.com/dp/B077MZ2MPW</a>
    <br/>
    <br/>
    <a href="https://www.google.com">https://www.google.com</a>
    <br/>
    <a href="mailto:jetucker@paypal.com">mailto:jetucker@paypal.com</a>
    <br/>
    <br/>
    <a href="sms://1-408-555-1212">sms://1-408-555-1212</a>
    <br/>
    <a href="sms:1-408-555-1212">sms:1-408-555-1212</a>
    <br/>
    <br/>
    <a href="tel://1-408-555-1212">tel://1-408-555-1212</a>
    <br/>
    <a href="tel:1-408-555-1212">tel:1-408-555-1212</a>
    <br/>
    <br/>
    <a href="https://venmo.com">https://venmo.com</a>
    <br/>
    <a href="venmo://">venmo://</a>
    <br/>
    <br/>
    <a href="calc://">calc://</a>
    <br/>
    <br/>
    <a href="/about">/about</a>
    <br/>
    <br/>
    
  </div>
)
export default Index;
