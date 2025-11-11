import {useRef, useState, useEffect} from 'react'
import { Graphics, Container,Assets, Sprite} from 'pixi.js'
import {Application, extend} from "@pixi/react"
import './App.css'
export default function Pixi()
{
     const [canvasSize, setCanvasSize] = useState({width: '800', height: '450'})
    const canvasRef = useRef(null)
    useEffect(()=>
    {
        function setSize()
        {
            //When the window is resized it should retain size if the width or length of the
            //screen is less than the canvas size then the screen should shrink to match the proportion
           //800, 450
           if(window.innerWidth < 800 || window.innerHeight < 450)
           {
            setCanvasSize({width: Math.trunc(window.innerWidth * 0.42),height: Math.trunc(Math.trunc(window.innerWidth * 0.42) * 0.5625)})
            return;
           }          
        }
         window.addEventListener('resize', setSize)
         return ()=> window.removeEventListener('resize', setSize)
    },[])

    useEffect(()=>
    {
        if (canvasRef.current) {
  canvasRef.current.renderer.resize(canvasSize.width, canvasSize.height)
}
    },[canvasSize])
 

    /*
        (async() =>{
            const pixi = new Application()
            await pixi.init({ width: 800, height: 450, backgroundColor: 'black' })
            pixi.canvas.style.position = 'absolute'
            pixi.canvas.style.top= '50%'
            pixi.canvas.style.left= '50%'
            pixi.canvas.style.transform = 'translateX(-50%) translateY(-50%)'
            document.getElementById("root").appendChild(pixi.canvas)
        })()
    */
//1920 1080, 800 450
        
        return(
            <>
            <Application  autoDensity ={true} width = {canvasSize.width}  height = {canvasSize.height} >

            </Application>
            </>
        )

}