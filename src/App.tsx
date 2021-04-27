import React, { useState } from 'react';
import logo from './logo.svg';



function Heading({title}: {title: number}) {
	return <h1>{title}</h1>
}

function App() {
	const [count, setCount] = useState(0)
	return (
		<div>
			<Heading title={count}></Heading>
			<input onClick={() => setCount(count + 1)} type="Button" value="Increment"/>
		</div>
	);
}

export default App;