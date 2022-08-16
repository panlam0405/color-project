import { colors } from "../seedColors";
import Palette from "./Palette";

function App() {
	return (
		<div>
			<Palette colors={colors[5]} />
		</div>
	);
}

export default App;
