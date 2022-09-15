import Link from 'next/link'
const Index = () => (
  <div>
    <h1>Deep Link Testing</h1>

    
    <hr />

    <a href="com.amazon.mobile.shopping.web://amazon.com/dp/B077MZ2MPW">com.amazon.mobile.shopping.web://amazon.com/dp/B077MZ2MPW</a>
    <br/>
    <a href="com.amazon.mobile.shopping.web:/amazon.com/dp/B077MZ2MPW">com.amazon.mobile.shopping.web:/amazon.com/dp/B077MZ2MPW</a>
    <br/>
    <a href="com.amazon.mobile.shopping.web:amazon.com/dp/B077MZ2MPW">com.amazon.mobile.shopping.web:amazon.com/dp/B077MZ2MPW</a>
    <br/>
    <br/>
    <a href="https://amazon.com/dp/B077MZ2MPW">https://amazon.com/dp/B077MZ2MPW</a>
    <br/>
    <br/>
    <a href="https://www.google.com">https://www.google.com</a>
    <br/>
    <br/>
    <a href="YouTube://">YouTube://</a>
    <br/>
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
    <a href="linkedin://company/Venmo">linkedin://company/Venmo</a>
    <br/>
    <br/>
    <a href="/about">/about</a>
    <br/>
    <br/>
    
  </div>
)
export default Index;
