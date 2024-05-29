import React from 'react'
import './About.css'
import { authors } from '../../assets/assets'
import MyAuthors from '../../components/MyAuthors/MyAuthors'
import { authorDetails } from '../../assets/authorDetails'

const About = () => {
  return (
    <div className="about">
      <MyAuthors
        id={authorDetails[0].id}
        name={authorDetails[0].name}
        designation={authorDetails[0].designation}
        email={authorDetails[0].email}
        phone={authorDetails[0].phone}
      />
      <MyAuthors
        id={authorDetails[1].id}
        name={authorDetails[1].name}
        designation={authorDetails[1].designation}
        email={authorDetails[1].email}
        phone={authorDetails[1].phone}
      />
      <MyAuthors
        id={authorDetails[2].id}
        name={authorDetails[2].name}
        designation={authorDetails[2].designation}
        email={authorDetails[2].email}
        phone={authorDetails[2].phone}
      />
    </div>
  );
}

export default About