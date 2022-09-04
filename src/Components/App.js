import Params from "./Params";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import { colors } from "../seedColors";
import History from "./History";
import NewPaletteForm from "./NewPaletteForm";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route exact path='/palette/new' element={<NewPaletteForm />} />
				<Route exact path='/' element={<History palettes={colors} />} />
				<Route exact path='/palette/:id' element={<Params />} />
				<Route exact path='/palette/:paletteId/:colorId' element={<Params />} />
			</Routes>
		</div>
	);
}

export default App;
