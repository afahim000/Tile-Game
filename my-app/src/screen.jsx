
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