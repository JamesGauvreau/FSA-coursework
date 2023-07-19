console.log(`Run "node scratch.js" to test this!`) 
    // This will run in the debug console. The `node` command will log it in
    // the terminal.
 
const cowNum = 50;
console.log(`There are ${cowNum} cows`);
const firstNum = 5;
const secondNum = 12;
console.log(`The sum of ${firstNum} and ${secondNum} is ${firstNum + secondNum}`); 
console.log(`The product of those numbers is ${5 * 12}`);
const product = 2 * 3;
const concat = `The following is a concatenation:`;
const conCat = `dog` + ` & ` + `cat`;
const space = ` `;
console.log(concat + space + conCat);

// :: "If" statements
const ifNum = 5;
let ifTest;
if (ifNum % 2 === 0) {
    ifTest = `This If statement has returned "true."`;
}   else {
    ifTest = `This If statement has returned "false."`; 
}
console.log(ifTest);     

// Local API stuff
const localHost_URL = `http://localhost:3000/`

const fetchAllUsers = async () => {
    try {
        const response = await fetch(`${localHost_URL}`);
        const data = await response.json();
        console.log(`confirm fetchAllUsers `)
        // return data;
    }
    catch (error) {
        console.log(`you fucked up: fetchAllUsers`);
    }
}

// const init =

fetchAllUsers()
    
// alert(`This is a test alert! I apologize for all the times that you're going to see this.`)
    // I've commented out this alert because I don't want to deal with it every
    // gd'd time I refresh the page.