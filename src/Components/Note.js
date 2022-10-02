import React from 'react';
import { MdDelete } from 'react-icons/md';

function Note(props) {
	return (
		<>
			<div className="note--wrapper" style={{ backgroundColor: props.note.color }}>
				<textarea
					className="note--text"
					defaultValue={props.note.text}
					onChange={(event) => props.updateNote(event.target.value, props.note.id)}
				/>

				<div className="note--footer">
					<small>{props.note.date}</small>
					<MdDelete className="delete--icon" size="20" onClick={() => props.deleteNote(props.note.id)} />
				</div>
			</div>
		</>
	);
}

export default Note;
