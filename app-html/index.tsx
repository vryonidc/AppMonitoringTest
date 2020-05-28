import * as React from "react";
import * as ReactDOM from "react-dom";
import { version } from "../package.json";

import * as Sentry from "@sentry/browser";
Sentry.init({
  release: "my-project-name@" + version,
  dsn:
    "https://6e220b18652045c0b402c1845603cf39@o399389.ingest.sentry.io/5256389",
});

ReactDOM.render(<div>Hello world!</div>, document.getElementById("root"));

function foo() {
    throw new Error("testing integration");
}

setTimeout(() => {
    foo();
}, 5000);
