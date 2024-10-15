import React from 'react';
import HorizontalScroller from './components/HorizontalScroller';
import './styles/basic.css';

const App: React.FC = () => {
	const views = [
		<div style={{backgroundColor: 'red', height: '100%'}}>View 1</div>,
		<div style={{backgroundColor: 'blue', height: '100%'}}>View 2</div>,
		<div style={{backgroundColor: 'green', height: '100%'}}>View 3</div>,
		// Add more views as needed
	];

	return (
		<div id={'app'}>
			<HorizontalScroller views={views}/>
		</div>
	);
};

export default App;

