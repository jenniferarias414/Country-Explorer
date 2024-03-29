import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { useSelector } from "react-redux";
import {selectDisplay} from './redux/slices/displayCountrySlice';
// import Loading from "./Components/Loading";

function App() {
    const currentDisplay = useSelector(selectDisplay);
    console.log('display', currentDisplay)
    const potentials = useSelector(selectPotentials);
    console.log(potentials)
    return (
        <div className="App font-link">
            <Header />
           
            {/* <Loading /> */}
           
            {/* {currentDisplay && <MainDisplay /> || !currentDisplay && <OptionDisplay />} */}
            {currentDisplay ? <MainDisplay /> : <OptionDisplay />}

        </div>
    );
}

export default App;
