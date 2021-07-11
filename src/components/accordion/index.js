import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Title,
  Item,
  Inner,
  Header,
  Body
} from "./styles/accordion.js";

// create a context to be used by various elements to control the state
const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    // provide the state to the underlying children
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  // get the state from context to affect behavior of the Header component
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      onClick={() => setToggleShow(toggleShow => !toggleShow)}
      {...restProps}
    >
      {children}

      {/* Do this to check what state exists in the element for debugging purposes */}
      {/* <pre>{JSON.stringify(toggleShow, null, 2)}</pre> */}

      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  // get the state from context to toggle display of the body element content
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
