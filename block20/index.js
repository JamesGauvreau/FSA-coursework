const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

const spacing = `${'\xa0'.repeat(4)}`

function main() {                 // This gives the parameters of the function.
    const h1 = document.createElement("h1");    //
    h1.innerHTML = "FREELANCERS";               //
    root.appendChild(h1);                       // This tells the .js to attach it to the html. "Root" can be named anything. 
    const ul = document.createElement("ul");
    let list = document.getElementById("root");
    for (i = 0; i < users.length; ++i) {
        const li = document.createElement('li');
        li.innerText = `Name: ${users[i].name}. ${spacing} Age: ${users[i].age}. ${spacing} Occupation: ${users[i].occupation}`;
        list.appendChild(li);
    }
}

main(root, users); // The parens don't need to be filled, but they do have to exist so 
        // that the script knows to call this as a function.

// ::Checklist
// Style your site using CSS
    // Color
    // Size
    // Shape
    // Position attributes
