function CComponent(props)
{
    return(
        <button onClick={()=>props.gp('child')}>Click</button>
    )
}
export default CComponent