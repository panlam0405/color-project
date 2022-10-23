import Params from "./Params";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import { colors } from "../seedColors";
import History from "./History";
import NewPaletteForm from "./NewPaletteForm";
import { useEffect, useState } from "react";

function App(props) {
	const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
	const [col, setColor] = useState(savedPalettes || colors);
	const savePalette = (newPalette) => {
		console.log("new Palette", newPalette);
		setColor([...col, newPalette]);
	};

	const syncLocalStorage = () => {
		window.localStorage.setItem("palettes", JSON.stringify(col));
	};
	useEffect(syncLocalStorage, [col]);

	const removePalette = (id) => {
		setColor(col.filter((palette) => palette.id !== id));
	};
	return (
		<div className='App'>
			<Routes>
				<Route
					exact
					path='/palette/new'
					element={<NewPaletteForm savePalette={savePalette} palettes={col} />}
				/>
				<Route
					exact
					path='/'
					element={<History palettes={col} removePalette={removePalette} />}
				/>
				<Route exact path='/palette/:id' element={<Params colors={col} />} />
				<Route
					exact
					path='/palette/:paletteId/:colorId'
					element={<Params colors={col} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
