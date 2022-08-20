import { generatePalette } from "../colorHelpers";
import { colors } from "../seedColors";
import Palette from "./Palette";
import "../styles/App.css";

function App() {
	console.log(generatePalette(colors[5]));
	return (
		<div className='App'>
			<Palette palette={generatePalette(colors[5])} />
		</div>
	);
}

export default App;
