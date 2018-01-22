import { NavigationActions } from 'react-navigation';

// "Helper" afin de pousser une vue supplémentaire
// au sein du stack de navigation
export function pushRoute (navProp, options) {
    navProp.dispatch(
        NavigationActions.navigate(options)
    );
}
