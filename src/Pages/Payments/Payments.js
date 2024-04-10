import { useNavigate } from 'react-router-dom';
import './Payments.scss'
const Payments=()=>{
    const navigate = useNavigate()
    return(
        <div className='payments'>
            <h3>Thanks For Odering</h3>
            <button onClick={()=>navigate('/')}>Shop More</button>
        </div>
    )

}
export default Payments;