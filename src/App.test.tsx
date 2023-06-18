import { render, screen } from "@testing-library/react";
import App from "./App";

const versions = window.versions;
const chrome = () => "114.0.5735.106";
const node = () => "18.15.0";
const electron = () => "25.1.1";
const ping = () => "pong";

describe("Link's are present in screen", () => {
  test("renders react link", () => {
    render(
      <App
        ping={ping}
        chrome={chrome}
        node={node}
        electron={electron}
        versions={versions}
      />
    );
    const reactLink = screen.getByText("React");
    expect(reactLink).toBeInTheDocument();
  });

  test("renders electron link", () => {
    render(
      <App
        ping={ping}
        chrome={chrome}
        node={node}
        electron={electron}
        versions={versions}
      />
    );
    const electronLink = screen.getByText("Electron");
    expect(electronLink).toBeInTheDocument();
  });
});
