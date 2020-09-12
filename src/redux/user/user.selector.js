//Used to memoize the state of our app to avoid rerendering components

import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
	[ selectUser ],
	(user) => user.currentUser
);
