import { useState } from 'react'

export default function App() {
  const [color, setColor] = useState('white')
  const [textColor, setTextColor] = useState('black')

  const changeColor = (bgColor, txtColor) => {
    setColor(bgColor)
    setTextColor(txtColor)
  }

  return (
    <div className='w-full h-screen duration-1000' style={{ backgroundColor: color }}>
      <h1
        className='flex justify-center items-center h-screen text-3xl font-bold'
        style={{ color: textColor }}
      >
        Apply your favourite color to the App!
      </h1>
      <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-1 rounded-full border'>
          <button
            onClick={()=> changeColor("red", "white")}
            className='outline-none px-4 py-1 shadow-lg rounded-full text-white'
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => changeColor("black", "yellow")}
            className='outline-none px-4 py-1 shadow-lg rounded-full text-white'
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => changeColor("yellow", "black")}
            className='outline-none px-4 py-1 shadow-lg rounded-full text-black'
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
           <button
            onClick={() => changeColor("olive", "black")}
            className='outline-none px-4 py-1 shadow-lg rounded-full text-black'
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
           <button
            onClick={() => changeColor("blue", "white")}
            className='outline-none px-4 py-1 shadow-lg rounded-full text-white'
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  )
}





