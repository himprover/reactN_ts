import { useContext } from 'react';
import {
	NavigationScreenProp,
	NavigationRoute,
	NavigationContext,
	NavigationParams,
	NavigationRouter,
} from 'react-navigation';

export function useNavigation() {
	return useContext(NavigationContext) as NavigationScreenProp<
		NavigationRoute,
		NavigationParams
	>;
}
