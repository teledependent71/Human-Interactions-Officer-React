import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Human Interactions Officer</title>
        <meta property="og:title" content="Human Interactions Officer" />
      </Helmet>
    </div>
  )
}

export default Home
