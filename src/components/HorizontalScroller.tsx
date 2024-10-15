import React, {useRef, useEffect, useState} from 'react';
import './../styles/horizontal-scroller.css';

interface HorizontalScrollerProps {
	views: React.ReactNode[];
}

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({views}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollerRef = useRef<HTMLDivElement>(null);

	const handleHorizontalKeyDown = React.useCallback((event: KeyboardEvent) => {
		let newIndex = currentIndex;

		if (event.key === 'ArrowRight') {
			newIndex = Math.min(currentIndex + 1, views.length - 1);
		}
		else if (event.key === 'ArrowLeft') {
			newIndex = Math.max(currentIndex - 1, 0);
		}

		if (newIndex !== currentIndex) {
			setCurrentIndex(newIndex);
		}
	}, [currentIndex, views.length]);

	const handleHorizontalScroll = React.useCallback(() => {
		if (scrollerRef.current) {
			const newIndex = Math.round(scrollerRef.current.scrollLeft / window.innerWidth);
			if (newIndex !== currentIndex) {
				setCurrentIndex(newIndex);
			}
		}
	}, [currentIndex]);

	useEffect(() => {
		window.addEventListener('keydown', handleHorizontalKeyDown);

		return () => {
			window.removeEventListener('keydown', handleHorizontalKeyDown);
		};
	}, [handleHorizontalKeyDown, currentIndex]);

//	useEffect(() => {
//		const scroller = scrollerRef.current;
//		if (scroller) {
//			scroller.addEventListener('scroll', handleHorizontalScroll);
//
//			return () => {
//				scroller.removeEventListener('scroll',
// handleHorizontalScroll); }; } }, [handleHorizontalScroll]);

	useEffect(() => {
		if (scrollerRef.current) {
			scrollerRef.current.scrollTo({
				left: currentIndex * window.innerWidth,
				behavior: 'smooth',
			});
		}
	}, [currentIndex]);

	return (
		<div className="scroller-container" ref={scrollerRef}>
			{views.map((view, index) => (
				<div key={index} className="scroller-item">
					{view}
				</div>
			))}
		</div>
	);
};

export default HorizontalScroller;
