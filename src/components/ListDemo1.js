function ListDemo1({ndata,data})
{
   
    
   const ndata1=ndata.map((n,index)=><li key={index}>{index}{n}</li>)

    const Data1=data.map(d=><li key={d.id1}>{d.name}</li>)
    return(
        <ul>{ ndata1 }</ul>
    )
}
export default ListDemo1
