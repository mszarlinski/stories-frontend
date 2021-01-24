import { Route, Switch } from "react-router-dom";
import React from "react";
import { HomeView } from "./components/home/HomeView";
import { StoryCreatorView } from "./components/story-creator/StoryCreatorView";
import { StoriesView } from "./components/stories/StoriesView";
import { ReadStoryView } from "./components/read-story/ReadStoryView";
import { PrivateRoute } from "./components/auth/PrivateRoute";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/:id" component={ReadStoryView} />

      <PrivateRoute path="/stories">
        <StoriesView />
      </PrivateRoute>
      <PrivateRoute path="/new-story">
        <StoryCreatorView />
      </PrivateRoute>
      <PrivateRoute path="/story/:id/edit">
        <StoryCreatorView />
      </PrivateRoute>
    </Switch>
  );
}
