
// //note that for Element Types textarea, value and select we use "value"

// import React, { useState } from "react";

// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Henry");


//   function handleFirstNameChange(event) {
//     setFirstName(event.target.value);
//   }
  
//   function handleLastNameChange(event) {
//     setLastName(event.target.value);
//   }



//   return (
//     <form>
//       <input type="text" onChange={handleFirstNameChange} value={firstName} />
//       <input type="text" onChange={handleLastNameChange} value={lastName} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;


//This is an example of checkbox Form Element Type, we use "checked" as oppoesed to "value"
// import React, { useState } from "react";

// function Form() {
//   const [newsletter, setNewsletter] = useState(false);

//   function handleNewsletterChange(event) {
//     // .checked, not .value!
//     setNewsletter(event.target.checked);
//   }

//   return (
//     <form>
//       <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
//       <input
//         type="checkbox"
//         id="newsletter"
//         onChange={handleNewsletterChange}
//         // {/* checked instead of value */}
//         checked={newsletter}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;


//Form handles all the JSX

// src/components/Form
import React from "react";

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
}) {

   // Define the handleSubmit function
   const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>

    
    </form>
  );
}

export default Form;