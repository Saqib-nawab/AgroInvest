import React from 'react'
import HarvestCard from './HarvestCard'

const HarvestList = ({harvests}) => {
  console.log("Harvests",harvests)
  return (
    <div className='w-full grid grid-cols-2'>
    {harvests.map((harvest) => {
      return <HarvestCard key={harvest._id} farmer_id={harvest.farmer._id} id={harvest._id} crop={harvest.crop} farmer={harvest.farmer.fullName} date={new Date(harvest.expectedHarvestDate)} qty={harvest.quantity} amount={harvest.amountPerKg} />
    })}
    </div>
  )
}

export default HarvestList