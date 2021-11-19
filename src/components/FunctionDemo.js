import kl from '../kl.jpeg'
function FunctionDemo()
{
    return(
          <div>
              Functional COmponent
              <img src="logo192.png" alt='logo'/><br/>
              <img src={kl} width='250' height='250' alt="Logo"/>
              </div>
    )
}
export default FunctionDemo