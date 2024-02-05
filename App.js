// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello World from React"
// );




const heading = React.createElement(
"div",
{id:"parent"},
React.createElement(
    "div",
{id:"child"}, 
[React.createElement("h1",{},"Hello World from React"),
React.createElement("h2",{},"I am sibling of Hello World REact")
]),
React.createElement(
    "div",
{id:"child"}, 
[React.createElement("h1",{},"Hello World from React"),
React.createElement("h2",{},"I am sibling of Hello World REact")
])
);


const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
console.log(heading);

