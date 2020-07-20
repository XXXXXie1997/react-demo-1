const React = window.React;
const ReactDOM = window.ReactDOM;

let n = 0;
const App = () =>
  React.createElement("div", null, [
    n,
    React.createElement(
      "button",
      {
        onClick: () => {
          n += 1;
          ReactDOM.render(App(), document.querySelector("#app"));
        },
      },
      "+1"
    ),
  ]);

ReactDOM.render(App(), document.querySelector("#app"));
