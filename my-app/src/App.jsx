import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Screen from './screen'
import {Application, Graphics} from 'pixi.js'
import {useEffect, useRef} from 'react'
function App() {
const munda = false
useEffect( ()=>{
  (async()=>{
const pixi = new Application();
await pixi.init({resizeTo: window, backgroundColor: 'black'})
document.getElementById('root').appendChild(pixi.canvas)
  pixi.canvas.style.position = 'absolute'
  const rectangle = new Graphics()
  .rect(200,200,200,180)
  .fill( {
    color: 'red',
    alpha: 0.5
  })
  .stroke(
    {
      width: 1,
      color: 'white'
    }
  )
  const triangle = new Graphics();
  triangle.poly([
    600, 50,
    720, 400,
    420, 400
  ])
  .fill(
    {
      color: 'white',
    }
  )
  .stroke(
    {
      width: 1,
      color: 'red'
    }
  )
  pixi.stage.addChild(triangle)
  pixi.stage.addChild(rectangle)
return () => {
    pixiApp.destroy(true, { children: true })};})()
},[])

  return(munda && <Screen/>)
      
}

export default App
