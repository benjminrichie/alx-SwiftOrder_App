import React from 'react'
import './MyAuthors.css'
import { authors } from '../../assets/assets'
// import { authorDetails } from '../../assets/authorDetails'

const MyAuthors = ({id, name, designation, email, phone, imageKey}) => {
  return (
    <div>
        <div className='benjamin'>
        <img className='ben' src={authors[imageKey]} alt="Facial" />
        <div className="text">
          <h3>{name}</h3>
          <p>{designation}</p>
          <small>{email}</small>
          <h6>{phone}</h6>
        </div>
      </div>
    </div>
  )
}

export default MyAuthors



// import React from 'react'
// import './MyAuthors.css'
// import { authors } from '../../assets/assets'
// // import { authorDetails } from '../../assets/authorDetails'

// const MyAuthors = ({id, name, designation, email, phone}) => {
//   return (
//     <div>
//       {Object.keys(authors).map((key, index) => (
//        <div key={index} className='benjamin'>
//        <img className='ben' src={authors[key]} alt={key} />
//        <div className="text">
//          <h3>{name}</h3>
//          <p>{designation}</p>
//          <small>{email}</small>
//          <h6>{phone}</h6>
//        </div>
//      </div> 
//       ))}
        
//     </div>
//   )
// }

// export default MyAuthors