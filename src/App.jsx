import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import "./App.css";

function SelfIntroduction() {
  return (
    <div className="profile">
      <h1>Self Introduction</h1>

      <h2>Jagadeesh</h2>

      <p><strong>Profile:</strong> Frontend Developer</p>

      <p><strong>Education:</strong> Bachelor of Technology</p>

      <p>
        <strong>Skills:</strong> HTML, CSS, JavaScript, React JS
      </p>

      <p>
        <strong>Experience:</strong> Fresher
      </p>

      <p>
        <strong>Hobbies:</strong> Learning new technologies, coding, and
        listening to music
      </p>

      <p>
        <strong>Career Goal:</strong> To become a professional Full Stack
        Developer.
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      <SelfIntroduction />
    </>
  );
}

export default App;







