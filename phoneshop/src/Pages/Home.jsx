import Divider from '../Components/home/Divider';
import { ProductCards } from '../Components/home/ProductCards';
import Carrousel from '../Components/home/Carrousel';
import { AuthContext } from '../Components/Context/AuthContext';
import { useContext } from 'react';



const Home = ({cartItems, setCartItems}) => {
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
            <ProductCards cartItems={cartItems} setCartItems={setCartItems} />
        </div>
    )
}

export default Home