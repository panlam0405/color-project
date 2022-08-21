import Params from "./Params";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route exact path='/' />
				<Route exact path='/palette/:id' element={<Params />} />
			</Routes>
		</div>
	);
}

export default App;
