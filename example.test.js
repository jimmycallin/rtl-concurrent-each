/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import React from "react";

// this works fine, since we don't run concurrently
test.each([{ param: 1 }, { param: 2 }])("it works $param", ({ param }) => {
  const { getByTestId } = render(<div data-testid="test-container">Hello</div>);
  expect(getByTestId("test-container")).toBeTruthy();
});

// this won't work though, since it will find multiple DOM nodes with id test-container
test.concurrent.each([{ param: 1 }, { param: 2 }])(
  "it works $param",
  ({ param }) => {
    const { getByTestId } = render(
      <div data-testid="test-container">Hello</div>
    );
    expect(getByTestId("test-container")).toBeTruthy();
  }
);
