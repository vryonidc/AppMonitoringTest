import * as React from "react";
import * as ReactDOM from "react-dom";
import { version } from "../package.json";

const appVersion = "my-project-name@" + version;

import * as Sentry from "@sentry/browser";
Sentry.init({
  release: appVersion,
  dsn:
    "https://6e220b18652045c0b402c1845603cf39@o399389.ingest.sentry.io/5256389",
});

ReactDOM.render(<div>Hello world!</div>, document.getElementById("root"));

function foobar() {
    throw new Error("testing integration");
}

console.log(`Version ${appVersion}`);

setTimeout(() => {
    foobar();
}, 5000);
