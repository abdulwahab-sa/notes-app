import React from 'react';

function Header(props) {
	const colors = ['#fe9b72', '#fec971', ' #00d4fe', '#b693fd', '#e4ee91'];

	return (
		<div>
			<>
				<header>
					<h2 className="header--title">Sticky Notes</h2>

					<ul className="colors-list">
						{colors.map((item, index) => (
							<li key={index} className="colors-list-item" style={{ background: item }} onClick={() => props.addNote(item)} />
						))}
					</ul>
				</header>
			</>
		</div>
	);
}

export default Header;
