import React from "react";
import { useContent } from "../hooks";
import { BrowseContainer } from "../containers/browse";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  // we need the series and the films
  const { series } = useContent("series");
  const { films } = useContent("films");

  // we need slides
  const slides = selectionFilter({ series, films });

  // pass it to the browser container
  return <BrowseContainer slides={slides} />;
}
