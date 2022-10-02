import React from 'react';
import Note from './Note';

function NotesContainer(props) {
	const reverseArray = (arr) => {
		const array = [];

		for (let i = arr.length - 1; i >= 0; --i) {
			array.push(arr[i]);
		}

		return array;
	};

	const notes = reverseArray(props.notes);

	return (
		<>
			<div className="container">
				{notes.map((note) => (
					<Note key={note.id} note={note} text={note.text} date={note.date} deleteNote={props.deleteNote} updateNote={props.updateNote} />
				))}
			</div>
		</>
	);
}

export default NotesContainer;
