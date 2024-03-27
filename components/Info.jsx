import React from 'react'
import { Infobox, infobox } from '@/components/Infobox'

const Info = () => {
  return (
    <div> <section>
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        
        <Infobox
        heading='for Renters'
        backgroundColor='bg-grey-100'
        buttonInfo={{
            text:'Bowse properties',
            link:'/properties',
            backgroundColor:'bg-blue-500'
        }}>
             Find your dream rental property. Bookmark properties 
             and contact
              owners.
        </Infobox>
        <Infobox
        heading='for property Owners'
        backgroundColor='bg-blue-100'
        buttonInfo={{
            text:'Add properties',
            link:'/properties/add',
            backgroundColor:'bg-blue-500'
        }}>
             List your properties and reach potential tenants. Rent as an
              airbnb or long term.
        </Infobox>
       
    
      </div>
    </div>
  </section>
</div>
  )
}

export default Info