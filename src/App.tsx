import React, { useState } from 'react';
import logo from './logo.svg';

function Heading({title}: {title: number}) {
	return <h1>{title}</h1>
}

const getDisplayValue = (count: number) => {
	if (count == 0) {
		var newdisplay = "Wow you suck!"
	} else if(count < 100 && count >= 0) {
		var newdisplay = "Wow that's pretty good!"
	} else if (count <= 999 && count >= 100) {
		var newdisplay = "You are the best!"
	} else if (count > 999) {
		var newdisplay = "Wow good job!"
	} else {
		var newdisplay = "You suck so bad!"
	}
	return newdisplay
}

function App() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<Heading title={count}></Heading>
			<h1>{getDisplayValue(count)}</h1>
			<input onClick={() => setCount(count + 1)} type="Button" value="Increment"/>
			<input onClick={() => setCount(count - 1)} type="Button" value="Decrement"/>
		</div>
	); 
}

export default App;