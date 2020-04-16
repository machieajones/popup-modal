import React, { useState } from 'react'
import './App.css'

function App() {
  const [modalState, setModalState] = useState(false)

  const toggleModalState = () => {
    setModalState(!modalState)
  }

  return (
    <div className="App">
      <div className={`modalBackground modalShowing-${modalState}`}>
        <div className="modalInner">
          <div className="modalImage">
            <img
              src="https://images.unsplash.com/photo-1586931775007-ad3c3913f216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
              alt="modal pic"
            />
          </div>
          <div className="modalText">
            <h2>This is a modal header</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              harum qui perferendis error molestiae ab in expedita? Quaerat
              molestias adipisci maiores quam incidunt inventore, minima esse
              ratione exercitationem. Porro, illo?
            </p>
            <form action="">
              <button>Join now!</button>
            </form>
            <button className="exitButton" onClick={() => toggleModalState()}>
              exit
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => toggleModalState()}>Open modal</button>
    </div>
  )
}

export default App
