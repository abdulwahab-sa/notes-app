import './App.css';
import NotesContainer from './Components/NotesContainer';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import { nanoid } from 'nanoid';

function App() {
	const [note, setNote] = useState(JSON.parse(localStorage.getItem('notes-app')) || []);

	const addNote = (item) => {
		const tempNote = [...note];
		const date = new Date();

		tempNote.push({
			id: nanoid(),
			text: '',
			date: date.toLocaleDateString(),
			color: item,
		});
		setNote(tempNote);
	};

	const deleteNote = (id) => {
		const tempNote = [...note];

		const index = tempNote.findIndex((item) => item.id === id);
		if (index < 0) return;

		tempNote.splice(index, 1);
		setNote(tempNote);
	};

	const updateNote = (text, id) => {
		const tempNote = [...note];

		const index = tempNote.findIndex((item) => item.id === id);
		if (index < 0) return;

		tempNote[index].text = text;
		setNote(tempNote);
	};

	useEffect(() => {
		localStorage.setItem('notes-app', JSON.stringify(note));
	}, [note]);

	return (
		<div className="App">
			<>
				<Header addNote={addNote} />
				<NotesContainer notes={note} deleteNote={deleteNote} updateNote={updateNote} />
			</>
		</div>
	);
}

export default App;
