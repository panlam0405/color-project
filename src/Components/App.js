import Params from "./Params";
import "../styles/App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { seedColors } from "../seedColors";
import History from "./History";
import NewPaletteForm from "./NewPaletteForm";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
	const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
	const [col, setColor] = useState(savedPalettes || seedColors);
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
	const location = useLocation();
	return (
		<div className='App'>
			<AnimatePresence mode='wait'>
				<Routes key={location.pathname} location={location}>
					<Route
						exact
						path='/palette/new'
						element={
							<NewPaletteForm savePalette={savePalette} palettes={col} />
						}
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
					<Route
						path='*'
						element={<History palettes={col} removePalette={removePalette} />}
					/>
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
