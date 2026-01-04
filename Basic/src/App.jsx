import React from 'react'
import Card from './Components/Card'
import img1 from './assets/download.jpeg'
import img2 from './assets/team-03.png'
import img3 from './assets/team-02.png'
import img4 from './assets/team-01.png'



function App() {
  return (
    <>
      <div className='flex'>

        <Card
          name="Surya Bhanu Pandey"
          description="Frontend React Developer"
          image={img1}
        />

        <Card
          name="Rahul Sharma"
          description="Backend Node.js Developer"
          image={img2}
        />

        <Card
          name="Amit Kumar"
          description="Full Stack Developer"
          image={img3}

        />
        <Card
          name="Vinay Kumar"
          description="Full Stack Developer"
          image={img4}

        />

      </div>
    </>
  )
}

export default App
