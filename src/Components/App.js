import { colors } from "../seedColors";
import Palette from "./Palette";

function App() {
	return (
		<div>
			<Palette {...colors[4]} />
		</div>
	);
}

export default App;
