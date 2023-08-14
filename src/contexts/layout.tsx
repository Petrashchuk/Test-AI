import { createContext, ReactElement, useContext, useReducer, Dispatch } from 'react';


type StateType = {
	isUpdatedFeedbacks: boolean;
}

type StateActionType = {
	type: 'update_feedbacks';
	payload: boolean;
}


export const LayoutContext = createContext<[StateType, Dispatch<StateActionType>]>([{
	isUpdatedFeedbacks: false
}, () => {
}]);

function reducer(state: StateType, action: StateActionType) {
	switch (action.type) {
		case 'update_feedbacks': {
			return { ...state, isUpdatedFeedbacks: action.payload };
		}

		default: {
			return state;
		}
	}
}

export const LayoutProvider = ({ children }: {
	children: ReactElement
}) => {
	const [state, dispatch] = useReducer(reducer, {
		isUpdatedFeedbacks: false
	});

	return <LayoutContext.Provider value={[state, dispatch]}>
		{children}
	</LayoutContext.Provider>;
};


export const useLayout = () => useContext(LayoutContext);
