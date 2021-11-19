function ListDemo({arr,data}){
    const number2=arr.map((number,index)=>(<li key={index}>{number*2} index {index}</li>))
    const datalist=data.map((d)=>(<li key={d.id}>I am {d.name} from {d.dept}</li>))
    return(
        <div>
            <ul>{number2}</ul>
            {/* {datalist} */}
        </div>
    )
}
export default ListDemo