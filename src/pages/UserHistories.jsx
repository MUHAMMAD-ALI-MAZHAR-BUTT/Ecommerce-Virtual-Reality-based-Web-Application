import React from 'react'
import Delivered from '../components/userHistory/Delivered'
import Pending from '../components/userHistory/Pending'

export default function UserHistories() {
  return (
    <div className="title userHistory">
       {/* <Delivered /> */}
       <Pending />
    </div>
  )
}



