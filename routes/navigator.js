import { NavigationActions } from 'react-navigation';

export function pushRoute (navProp, options) {
    navProp.dispatch(
        NavigationActions.navigate(options)
    );
}
