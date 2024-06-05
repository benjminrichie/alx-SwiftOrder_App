import React from 'react'
// import { authorDetails } from '../../assets/authorDetails'
import About from './About'
import MyAuthors from '../../components/MyAuthors/MyAuthors'
import './AboutList.css'

const AboutList = ({authorDetails}) => {

    const AboutComponent = authorDetails.map((user, i) => {
  
      return (
      <MyAuthors 
        key={i}
        id={authorDetails[i].id}
        name={authorDetails[i].name}
        designation={authorDetails[i].designation}
        email={authorDetails[i].email}
        phone={authorDetails[i].phone}
        imageKey={user.imageKey}  // Pass the image key
        />
      )
    })

  return (
    
    <div className='AboutComponent'>
        {AboutComponent}
    </div>
  )
}

export default AboutList