import Divider from '../Components/home/Divider';
import { ProductCards } from '../Components/home/ProductCards';
import Carrousel from '../Components/home/Carrousel';
import { AuthContext } from '../Components/Context/AuthContext';
import { useContext } from 'react';



const HomePage = () => {
    const {user} = useContext(AuthContext)

    return(
        <div>

            <p>Hello {user && user.email}</p>
            <Carrousel/>
            <p>
                <br/>
            </p>
            <Divider/>
            <p>
                <br/>
            </p>
            <ProductCards/>
        </div>
    )
}

export default HomePage