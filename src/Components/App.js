import Params from "./Params";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import PaletteList from "./PaletteList";
import { colors } from "../seedColors";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route exact path='/' element={<PaletteList palettes={colors} />} />
				<Route exact path='/palette/:id' element={<Params />} />
			</Routes>
		</div>
	);
}

export default App;
