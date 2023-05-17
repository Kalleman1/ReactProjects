import Divider from '../Components/Divider';
import { ProductCards } from '../Components/realtimeData/ProductCards';
import Carrousel from '../Components/Carrousel';

const MainPage = () => {
    return(
        <div>
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

export default MainPage