import "./globals.css";
  import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <body className="min-h-screen">
  {/* Header/nav */} 
        {children}
        
{/* Footer */}
{/* Third party scripts */}
 <Script id="tawk-script" strategy="afterInteractive">
    {`
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/693347b229e54f197c444fba/1jbo504ou';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();
    `}
  </Script>

      </body>
    </html>
  );
}