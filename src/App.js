import './App.scss';
import ConverterCard from "./Components/ConverterCard/ConverterCard";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <div className="App">
            <Header></Header>
            <ConverterCard></ConverterCard>
            <Footer></Footer>
        </div>
    );
}

export default App;
