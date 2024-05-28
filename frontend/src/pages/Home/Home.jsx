import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import DownloadApp from '../../components/DownloadApp/DownloadApp'
// import BackToTopArrow from '../../components/BackToTopArrow/BackToTopArrow'

const Home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
        <Header />
        <Menu category={category} setCategory={setCategory} />
        <FoodDisplay category={category}/>
        <DownloadApp />
        {/* <BackToTopArrow /> */}
    </div>
  )
}

export default Home