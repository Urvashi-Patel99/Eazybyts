import React from 'react'

const About = () => {
  return (
    <div className='container mb3 about_container' style={{minHeight:'100%'}}>
      <div className='container main_container d-flex justify-content-around flex-wrap'>

        <div className='left_container mt-5'style={{width:500}}>
          <h1>Meet Urvashi Patel</h1>
          <p style={{color:"#666",letterSpacing:".5px", marginTop:2,lineHeight:2}}> Hi there, I’m Urvashi Patel! 🚀 About Me I'm a passionate Full Stack Developer, and PHP developer enthusiast. I specialize in creating attractive and interactive websites .
💻 What I Do 🔹 Full Stack Web Development (Django, Bootstrap, and PHP) 🔹 Django Projects (StudentManagementSystem)

🛠 Tech Stack Frontend: React.js, Bootstrap, HTML, CSS, JavaScript. Backend: Django, PHP, Python, MySQL

📫 Let's Connect 📧 Email: urvashipatel87935@gmail.com</p>

        </div>
        <div className='right_container mt-3'>
          <img src='m.jpg' ></img>
        </div>
      </div>
    </div>
  )
}

export default About