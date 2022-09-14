import Params from "./Params";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import { colors } from "../seedColors";
import History from "./History";
import NewPaletteForm from "./NewPaletteForm";
import {useState} from 'react'

function App( props ) {
	const [ col, setColor ] = useState( colors )
	console.log( colors );
	const savePalette = (newPalette) => {
		setColor([...col,newPalette])
	}

	return (
		<div className='App'>
			<Routes>
				<Route exact path='/palette/new' element={<NewPaletteForm savePalette={savePalette} />} />
				<Route exact path='/' element={<History palettes={col} />} />
				<Route exact path='/palette/:id' element={<Params colors={col} />} />
				<Route exact path='/palette/:paletteId/:colorId' element={<Params />} />
			</Routes>
		</div>
	);
}

export default App;
