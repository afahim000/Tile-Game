import {useRef, useState, useEffect} from 'react'
import { Graphics, Container,Assets, Sprite, Texture, AnimatedSprite, Ticker} from 'pixi.js'
import {Application, extend} from "@pixi/react"
import './App.css'
extend({Container, Sprite, Graphics, AnimatedSprite})
export default  function Pixi()
{   
    const cameraRef = useRef(null);
    const movementTimer = useRef(null);
    const textureChanged = useRef(false);
    const moving = useRef(false)
    const animations = useRef(null)
    const playerRef = useRef(null)
    const orientation = useRef('down')
    const appRef = useRef(null)
    const [playerTexture, setPlayerTexture] = useState(Texture.EMPTY)
     const [mapTexture,setMapTexture] = useState(Texture.EMPTY)
    const [canvasSize, setCanvasSize] = useState({width: '800', height: '450'})
     const [resized, setResized] = useState(false)
     const [ghost, setGhost] = useState({width: '0px', height: '0px'})
    const canvasRef = useRef(null)

    extend({Container, Graphics, Sprite})
    let down1, down2, down3, down4, left1,left2, left3, left4, right1, right2, right3, right4, up1, up2, up3, up4
    useEffect(()=>
    {
        
         (async()=>{
            const ticker = new Ticker()  
            const val = await Assets.load('/map (1).png')
            down1 = await Assets.load('/down1.png')
            down2 = await Assets.load('/down2.png')
            down3 = await Assets.load('/down3.png')
            down4 = await Assets.load('/down4.png')
            left1 = await Assets.load('/left1.png')
            left2 = await Assets.load('/left2.png')
            left3 = await Assets.load('/left3.png')
            left4 = await Assets.load('/left4.png')
            right1 = await Assets.load('/right1.png')
            right2 = await Assets.load('/right2.png')
            right3 = await Assets.load('/right3.png')
            right4 = await Assets.load('/right4.png')
            up1 = await Assets.load('/up1.png')
            up2 = await Assets.load('/up2.png')
            up3 = await Assets.load('/up3.png')
            up4 = await Assets.load('/up4.png')
            animations.current = {
                up: [up2, up3, up4, up1],
                down: [down2, down3, down4, down1 ],
                left: [left2, left3, left4, left1],
                right: [right2, right3, right4, right1],
                idleDown: [down1],
                idleLeft: [left1,left1],
                idleRight: [right1,right1],
                idleUp: [up1,up2]
            };
            ticker.add((time)=>{
               
                if(moving.current)
                {
                    switch(orientation.current)
                        {
                            case 'down':
                            if(!textureChanged.current)
                                {
                                    playerRef.current.textures = animations.current.down
                                    textureChanged.current = true;
                                    break;
                                }
                            cameraRef.current.position.y = cameraRef.current.position.y  - 1;
                            playerRef.current.position.y = playerRef.current.position.y + 1
                            playerRef.current.animationSpeed = 0.1
                            playerRef.current.loop = true;
                            playerRef.current.play()
                            break;
                            case 'up':
                            if(!textureChanged.current)
                                {
                                    playerRef.current.textures = animations.current.up
                                    textureChanged.current = true;
                                }
                            cameraRef.current.position.y = cameraRef.current.position.y  + 1;
                            playerRef.current.position.y = playerRef.current.position.y - 1
                            playerRef.current.animationSpeed = 0.1
                            playerRef.current.loop = true;
                            playerRef.current.play()
                            break;
                            case 'left':
                            if(!textureChanged.current)
                                {
                                    playerRef.current.textures = animations.current.left
                                    textureChanged.current = true;
                                }
                            cameraRef.current.position.x = cameraRef.current.position.x + 1;
                            playerRef.current.position.x = playerRef.current.position.x - 1
                            playerRef.current.animationSpeed = 0.1
                            playerRef.current.loop = true;
                            playerRef.current.play()
                            break
                            case 'right':
                            if(!textureChanged.current)
                                {
                                    playerRef.current.textures = animations.current.right
                                    textureChanged.current = true;
                                }
                            cameraRef.current.position.x = cameraRef.current.position.x - 1;
                            playerRef.current.position.x = playerRef.current.position.x + 1
                            playerRef.current.animationSpeed = 0.1
                            playerRef.current.loop = true;
                            playerRef.current.play()
                            break
                            default:
                            break;
                        }
                }
                else
                {
                    
                }
                
               

            })
             ticker.start()
            
            
            setPlayerTexture(animations.current.idleDown)
           
            
            setMapTexture(val)
            window.addEventListener('resize', setSize)

         window.addEventListener('keydown',(e)=>
        {
            //Logic for controls:
            /*
            If the user presses the arrow key once the character faces that
            */
            switch(e.key)
            {
                case 'ArrowUp':
                    if(e.repeat)
                    {
                            return;
                    }
                    orientation.current ='up'
                    moving.current = false;
                    if(playerRef.current.textures !== animations.current.idleUp)
                    {
                        movementTimer.current = setTimeout(()=>{
                        moving.current = true;
                        },100)
                    }
                    else
                    {
                        moving.current = true;
                    }
                    

                    break;
                case 'ArrowDown':
                    if(e.repeat)
                    {
                        return;
                    }
                    orientation.current ='down'
                    if(playerRef.current.textures !== animations.current.idleDown)
                    {
                        movementTimer.current = setTimeout(()=>{
                        moving.current = true;
                        },100)
                    }
                    else
                    {
                        moving.current = true;
                    }
                    break;
                case 'ArrowRight':
                    if(e.repeat)
                    {
                        return;
                    }
                    orientation.current ='right'
                    if(playerRef.current.textures !== animations.current.idleRight)
                    {
                        movementTimer.current = setTimeout(()=>{
                        moving.current = true;
                        },100)
                    }
                    else
                    {
                        moving.current = true;
                    }
                    break;
                case 'ArrowLeft':
                    if(e.repeat)
                    {
                        return;
                    }
                    orientation.current ='left'
                    if(playerRef.current.textures !== animations.current.idleLeft)
                    {
                        movementTimer.current = setTimeout(()=>{
                        moving.current = true;
                        },100)
                    }
                    else
                    {
                        moving.current = true;
                    }
                    break;
                default:
                    break;               
            }
        })
        window.addEventListener('keyup',(e)=>
        {
            switch(e.key)
            {
                
                case 'ArrowUp':
                    clearTimeout(movementTimer.current)
                    textureChanged.current = false;
                    moving.current = false;
                    playerRef.current.textures = animations.current.idleUp

                    break;
                case 'ArrowDown':
                    clearTimeout(movementTimer.current)
                    textureChanged.current = false;
                    moving.current = false;
                    playerRef.current.textures = animations.current.idleDown
                    break;  
                case 'ArrowRight':
                    clearTimeout(movementTimer.current)
                    textureChanged.current = false;
                    moving.current = false;
                    playerRef.current.textures = animations.current.idleRight
                    break;
                case 'ArrowLeft':
                    clearTimeout(movementTimer.current)
                    textureChanged.current = false;
                    moving.current = false;
                    playerRef.current.textures = animations.current.idleLeft
                    break; 
                default:
                    break;               
            }
        })
         })()
         window.addEventListener('resize', setSize)

         
        
         
         return (()=> {window.removeEventListener('resize', setSize);
                    }
        )
    },[])
    useEffect(() => {
  if (playerRef.current) {
    
    playerRef.current.play(); // start the animation
  }
}, [playerTexture]);
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
            <Application  sharedTicker = {true} ref = {appRef} resizeTo = {resized ? (document.getElementById('copyCat')) : null} autoDensity ={true} width = {canvasSize.width}  height = {canvasSize.height} backgroundColor={'beige'} >
                <pixiContainer ref = {cameraRef}> 
                   
                    <pixiSprite texture = {mapTexture}/>
                    <pixiAnimatedSprite loop = {true} ref = {playerRef}  autoPlay = {true} textures = {playerTexture} x= {100} y = {100} animationSpeed ={0.1}/>
                        
                    
                </pixiContainer>
            </Application>
            </>
        )

}