import { generatePalette } from "../colorHelpers";
import { colors } from "../seedColors";
import Palette from "./Palette";

function App() {
	console.log(generatePalette(colors[5]));
	return (
		<div>
			<Palette colors={colors[5]} />
		</div>
	);
}

export default App;
