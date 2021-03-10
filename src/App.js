
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./Navbar";
import CustomerComponent from './components/CustomerComponent'
import OrderComponent from './components/OrderComponent'
import ProductComponent from './components/ProductComponent'

function App() {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <Route path="/" exact component={CustomerComponent} />
                <Route path="/customers/" component={CustomerComponent} />
                <Route path="/orders/" component={OrderComponent} />
                <Route path="/products/" component={ProductComponent} />
            </div>
        </Router>
    );
}
export default App;
