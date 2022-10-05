import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import { v4 } from "uuid";
import DraggableColorBox from "./DraggableColorBox";

const DraggableColorList = SortableContainer((props) => {
	const { colors, del } = props;

	return (
		<div style={{ height: "100%", margin: "1rem" }}>
			{colors.map((col, idx) => (
				<DraggableColorBox
					key={v4()}
					index={idx}
					color={col.color}
					name={col.name}
					delete={del}
				/>
			))}
		</div>
	);
});

export default DraggableColorList;
