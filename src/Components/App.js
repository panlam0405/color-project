import Params from "./Params";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import { colors } from "../seedColors";
import History from "./History";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route exact path='/' element={<History palettes={colors} />} />
				<Route exact path='/palette/:id' element={<Params />} />
				<Route exact path='/palette/:paletteId/:Colorid' element={<Params />} />
			</Routes>
		</div>
	);
}

export default App;
