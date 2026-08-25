import "./globals.css";
  import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html >
      <body className="min-h-screen">
  {/* Header/nav */} 
        {children}
        
{/* Footer */}
{/* Third party scripts */}

      </body>
    </html>
  );
}