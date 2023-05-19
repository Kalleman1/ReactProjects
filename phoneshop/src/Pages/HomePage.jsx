import Divider from '../Components/Divider';
import { ProductCards } from '../Components/ProductCards';
import Carrousel from '../Components/Carrousel';
import { AuthContext } from '../Components/AuthContext';
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