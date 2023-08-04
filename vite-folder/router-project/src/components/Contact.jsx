import { useState } from "react";

export default function ContactApp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    console.log(name);
    console.log(email);

    const submitHandler = (laEvent) => {
        laEvent.preventDefault();
        alert(`Thanks for submitting:
        ${name}
        ${email}`);
    }

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={(submitHandler)}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

// const Contact = return (
//         <h1>Contact Header2</h1>
// )

// export default ContactApp
