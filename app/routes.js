import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './components/homeScreen/container';
import Episode from './components/episode/container';

export default (
	<Switch>
		<Route exact path="/" component={HomeScreen} />
		<Route path="/episode/:episodeId" component={Episode} />
	</Switch>
);
