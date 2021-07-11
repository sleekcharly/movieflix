import React from "react";
import { FaqsContainer } from "./containers/faqs";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron";

export default function App() {
  return (
    <React.Fragment>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </React.Fragment>
  );
}
