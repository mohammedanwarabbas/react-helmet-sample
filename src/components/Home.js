import React from 'react'
import {Helmet} from 'react-helmet'

export default function Home() {
  return (
    <>
    <Helmet>
        <title>Home</title>
    </Helmet>
<div className='container'>
    <p>This is home page. see the title when you click on various menu. There will be an changes in title of the page. This is done dynamically using react-helmet, a top react library used by majority of developers</p>
</div>
    </>
  )
}
