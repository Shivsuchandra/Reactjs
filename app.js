const parent = React.createElement("div",{id:"parent"},React.createElement("div",{}, React.createElement("h1",{id:"heading"},["I'm an H1 Tag."," ", "I'm an H2 Tag"])));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

console.log(parent)