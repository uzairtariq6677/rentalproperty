import React from 'react'
import Navbar from '@/components/Navbar'
import "../assets/styles/globals.css"
import Footer from '@/components/Footer'
export const metadata={
    title:"Propertpulse |the pulse of property",
    description:"find your dream rental car",
    keywords:"rental,find dreams,find rental"
}
const Mainlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Navbar />
         
    <main>{children}</main>
    <Footer />
    </body>
    </html>
  )
}

export default Mainlayout
