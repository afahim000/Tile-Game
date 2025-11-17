import {useRef, useState, useEffect} from 'react'
import { Graphics, Container,Assets, Sprite, Texture} from 'pixi.js'
import {Application, extend} from "@pixi/react"
import './App.css'
extend({Container, Sprite, Graphics})
export default  function Pixi()
{
     const [texture,setTexture] = useState(Texture.EMPTY)
    const [canvasSize, setCanvasSize] = useState({width: '800', height: '450'})
     const [resized, setResized] = useState(false)
     const [ghost, setGhost] = useState({width: '0px', height: '0px'})
    const canvasRef = useRef(null)
    extend({Container, Graphics, Sprite})
    useEffect(()=>
    {
         (async()=>{
            const val = await Assets.load('/map.png')
            setTexture(val)
         })()
         window.addEventListener('resize', setSize)
         
         return (()=> {window.removeEventListener('resize', setSize);
                    }
        )
    },[])
    
    function setSize()
        {
            //When the window is resized it should retain size if the width or length of the
            //screen is less than the canvas size then the screen should shrink to match the proportion
           //800, 450
           if(window.innerHeight > 800)
           {
                setGhost({...ghost, width: '800px', height: '450px'})
           }
           if(window.innerWidth < 800 )
           {
                setGhost({...ghost, width: `${Math.trunc(window.innerWidth)}px`, height: `${Math.trunc(window.innerWidth * 0.5625)}px`} )
           }
           setResized(true);        
        }

    
        return(
            <>
            <div ref = {canvasRef} id = "copyCat" style = {{visibility: 'hidden', border: '5px solid black', position: 'fixed', width: ghost.width, height: ghost.height }}></div>
            <Application  resizeTo = {resized ? (document.getElementById('copyCat')) : null} autoDensity ={true} width = {canvasSize.width}  height = {canvasSize.height} backgroundColor={'beige'} >
                <pixiContainer>
                    <pixiSprite texture = {texture}>

                    </pixiSprite>
                </pixiContainer>
            </Application>
            </>
        )

}