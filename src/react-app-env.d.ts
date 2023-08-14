/// <reference types="react-scripts" />
declare module 'react-rating-stars-component' {
	interface RatingProps {
		count?: number;
		onChange?: (ratingChanged: number) => void;
		size?: number;
		activeColor?: string;
		isHalf?:boolean;
		value?:number
		// Define the props of the Rating component here
	}

	const Rating: React.FunctionComponent<RatingProps>;
	export default Rating;
}
