import {useState} from 'react'
export default function Screen()
{
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
            <Player/>
            {grid.map((column)=>
            {
                return(
                <Column>
                    <Tile set = {column}/>
                </Column>)
            })}
            
        </div> 
    </>
    )
}

function Player()
{

    const [pos,setPos] = useState([1,0])
    function moveX(val)
    {
        setPos(pos.map((elem)=>
        {
            return [elem[0]+val,elem[1]]
        }))
    }

    function moveY(val)
    {
        setPos(pos.map((elem)=>
        {
            return [elem[0],elem[1]+val]
        }))
    }
    return(
        <div className = "player" style = {{outline: '1px solid red', borderRadius: '25px', height:'50px', width: '50px', margin: '0', boxSizing: 'border-box', position: 'absolute', left: pos[0]* 50, top: pos[1]* 50}}></div>
    )
}
function Tile({set})
{
    let zindex = 0;
    return(
        <>
            {set.map((tile)=>
            {
                return( 
                   
                <div className = "tile" style = {{display: 'inline', position: 'absolute', left: zindex * 50, top: 0, zIndex: ++zindex, padding: '0'}}>
                 
                </div>
                )
                
            })}
        </>
      
    )
}

function Column({children})
{
    let zindex;
    return(
        <div className = 'column' style = {{display: 'block', position: 'relative', boxSizing: 'border-box'}}>
            {children}
        </div>
    )
}