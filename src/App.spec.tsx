import React from "react";
import { App } from "../src/App";
import { shallow } from "enzyme";

describe("App.tsx", () => {
  test("Mounts", () => {
    shallow(<App />);
  });
});
