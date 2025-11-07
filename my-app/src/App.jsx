import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Screen from './screen'
import {Application, Graphics, Text, TextStyle, Assets, Sprite,Container} from 'pixi.js'
import {useEffect, useRef} from 'react'
import {initDevtools} from '@pixi/devtools'
function App() {
const munda = false
useEffect( ()=>{
  (async()=>{
    
const pixi = new Application();
await pixi.init({resizeTo: window, backgroundColor: 'black'})
initDevtools({pixi})
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
  
  const style = new TextStyle(
    {
      fill: 'white',
      stroke:
      {
        width: 3,
        color: 'blue'
      },
      font: 72,

    }
  )
  const text = new Text(
    {
      text: 'Mundya to bach',
      style
    }
  )

  const container = new Container();
  container.position.set(200,200)
  const texture = await Assets.load('/vite.svg')
  const sprite = Sprite.from(texture)
  sprite.width = 200
  sprite.height = 400
  sprite.x = 1000
  sprite.y = 200
  sprite.anchor.set(0.5, 0.5)
  sprite.rotation = Math.PI /4
  container.addChild(sprite);
  rectangle.eventMode = 'static'
  rectangle.cursor = 'pointer'
  rectangle.on('pointerdown',()=>
  {
    rectangle.x += 10;
    rectangle.y += 10;
  })

  const circle = new Graphics()
  pixi.ticker.add(()=>{
    circle.circle(
    Math.random() * pixi.screen.width,
    Math.random() * pixi.screen.width,
    5
  )
  .fill(
    {
      color: 'grey'
    }
  );
  pixi.stage.addChild(circle)
  })
  
  
  pixi.stage.addChild(sprite)
  pixi.stage.addChild(text)
  pixi.stage.addChild(triangle)
  pixi.stage.addChild(rectangle)
return () => {
    pixiApp.destroy(true, { children: true })};})()
},[])

  return(munda && <Screen/>)
      
}

export default App
