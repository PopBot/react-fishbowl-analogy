import React from 'react';
import './../styles/horizontal-scroller.css';

interface SlideProps {
	children: React.ReactNode;
}


const Slide: React.FC<SlideProps> = ({children}) => {
	return (
		<div className="slide-container">
			{children}
		</div>
	);
};

export default Slide;
