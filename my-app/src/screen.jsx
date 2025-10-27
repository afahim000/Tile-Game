import {useState} from 'react'
export default function Screen()
{
    const [pos,setPos] = useState([0,0])
    const grid = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ]
    return(
    
    <>
        <div className = "begin">
            <Player pos ={pos} setPos= {setPos}/>
            {grid.map((column)=>
            {
                return( 
                <><Column>
                        <Tile set={column} />
                    </Column></>)
            })}
            
        </div> 
    </>
    )
}

function Player({pos, setPos})
{

    function handleKey(key)
    {
        switch(key)
        {
            case 'ArrowRight':
                setPos([pos[0]+1, pos[1]])
                break;
            case 'ArrowLeft':
                setPos([pos[0]-1, pos[1]])
                break;
            case 'ArrowUp':
                setPos([pos[0], pos[1]-1])
                break;
            case 'ArrowDown':
                setPos([pos[0], pos[1]+1])
                break;

        }
    }
    return (
        <div tabIndex={0} className = "player" onKeyDown ={(e)=>{handleKey(e.key)}} style ={{height:'50px', width: '50px', outline: "1px solid red", borderRadius: '25px', position: "absolute", transform: `translateX(${pos[0] * 50}px) translateY(${pos[1] * 50}px)`}}></div>
    )
}
function Tile({set})
{
    let zindex = 0;
    return(
        <>
            {set.map((tile)=>
            {
                return( <div className = "tile" style = {{display: 'inline', position: 'absolute', left: zindex * 50, top: 0, zIndex: ++zindex}}></div>)
            })}
        </>
      
    )
}

function Column({children})
{
    let zindex;
    return(
        <div className = 'column' style = {{display: 'block', position: 'relative'}}>
            {children}
        </div>
    )
}