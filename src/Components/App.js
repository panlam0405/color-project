import { generatePalette } from "../colorHelpers";
import { colors } from "../seedColors";
import Palette from "./Palette";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
	console.log(generatePalette(colors[5]));
	return (
		<div className='App'>
			<Routes>
				<Route exact path='/' />
				<Route
					exact
					path='/palette/:id'
					element={<Palette palette={generatePalette(colors[5])} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
