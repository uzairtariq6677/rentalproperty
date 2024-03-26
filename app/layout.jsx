import React from 'react'
import "../assets/styles/globals.css"
export const metadata={
    title:"Propertpulse |the pulse of property",
    description:"find your dream rental car",
    keywords:"rental,find dreams,find rental"
}
const Mainlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
    <div>{children}</div>
    </body>
    </html>
  )
}

export default Mainlayout
