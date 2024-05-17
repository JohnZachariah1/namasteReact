// const heading = React.createElement("h1",{id: "heading"},"this is created using react")


const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child1"},
       [ React.createElement("h1",{},"congragualtion"
        ),React.createElement("h2",{},"congragualtion"
    )]
    ), React.createElement("div",{id:"child2"},
    [ React.createElement("h1",{},"congragualtion"
     ),React.createElement("h2",{},"congragualtion"
 )]
 )
)
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)