import React from 'react';
import logo from './logo.svg';

function Heading({title}: {title: string}) {
	return <h1>{title}</h1>
}

function App() {
	return (
		<div>
			<Heading title="Hi"></Heading>
		</div>
	);
}

export default App;