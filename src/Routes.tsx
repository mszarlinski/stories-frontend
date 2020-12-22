import { Route, Switch } from "react-router-dom";
import { HomeView } from "./components/home/HomeView";
import React from "react";
import { StoryCreatorView } from "./components/story-creator/StoryCreatorView";
import { StoriesView } from "./components/stories/StoriesView";
import { ReadStoryView } from "./components/read-story/ReadStoryView";

export function Routes() {
  return (
    <Switch>
      <Route path="/stories" component={StoriesView} />
      <Route path="/new-story" component={StoryCreatorView}/>
      <Route path="/story/:id/edit" component={StoryCreatorView}/>
      <Route path="/:slug" component={ReadStoryView}/>
      <Route path="/" component={HomeView} />
    </Switch>
  );
}
