import {useRef, useState, useEffect} from 'react'
import {Application, Graphics, Container,Assets, Sprite} from 'pixi.js'
import './App.css'
export default function Pixi()
{
    
        (async() =>{
            const pixi = new Application()
            await pixi.init({ width: 800, height: 450, backgroundColor: 'black' })
            pixi.canvas.style.position = 'absolute'
            pixi.canvas.style.top= '50%'
            pixi.canvas.style.left= '50%'
            pixi.canvas.style.transform = 'translateX(-50%) translateY(-50%)'
            document.getElementById("root").appendChild(pixi.canvas)
        })()


 
}