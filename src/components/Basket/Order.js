// import React, { useRef, useState } from "react";

// import classes from "./Order.module.css";

// const isEmpty = (value) => value.trim() === "";
// const isFiveChars = (value) => value.trim().length === 5;

// const Order = (props) => {
//   const [formValid, setFormValid] = useState({
//     name: true,
//     street: true,
//     city: true,
//     postalCode: true,
//   });

//   const nameRef = useRef();
//   const streetRef = useRef();
//   const postalRef = useRef();
//   const cityRef = useRef();

//   const confirmHandler = (event) => {
//     event.preventDefault();

//     const enteredName = nameRef.current.value;
//     const enteredStreet = streetRef.current.value;
//     const enteredPostal = postalRef.current.value;
//     const enteredCity = cityRef.current.value;

//     const enteredNameValidation = !isEmpty(enteredName);
//     const enteredStreetValidation = !isEmpty(enteredStreet);
//     const enteredPostalValidation = isFiveChars(enteredPostal);
//     const enteredCityValidation = !isEmpty(enteredCity);

//     setFormValid({
//       name: enteredNameValidation,
//       street: enteredStreetValidation,
//       postalCode: enteredPostalValidation,
//       city: enteredCityValidation,
//     });

//     const formIsValid =
//       enteredNameValidation &&
//       enteredStreetValidation &&
//       enteredPostalValidation &&
//       enteredCityValidation;

//     if (!formIsValid) {
//       return;
//     }

//     props.orderSubmit({
//       name: enteredName,
//       street: enteredStreet,
//       city: enteredCity,
//       postalCode: enteredPostal,
//     });
//   };

//   const nameClasses = `${classes.control} ${
//     formValid.name ? "" : classes.invalid
//   }`;
//   const streetClasses = `${classes.control} ${
//     formValid.street ? "" : classes.invalid
//   }`;
//   const postalClasses = `${classes.control} ${
//     formValid.postalCode ? "" : classes.invalid
//   }`;
//   const cityClasses = `${classes.control} ${
//     formValid.city ? "" : classes.invalid
//   }`;

//   return (
//     <form className={classes.form} onSubmit={confirmHandler}>
//       <div className={nameClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input type="text" id="name" ref={nameRef} />
//         {!formValid.name && <p>Please Enter Valid Name</p>}
//       </div>
//       <div className={streetClasses}>
//         <label htmlFor="street">Street</label>
//         <input type="text" id="street" ref={streetRef} />
//         {!formValid.street && <p>Please Enter Valid Street</p>}
//       </div>
//       <div className={postalClasses}>
//         <label htmlFor="postal">Postal Code</label>
//         <input type="text" id="postal" ref={postalRef} />
//         {!formValid.postalCode && <p>Please Enter Valid Postal Code</p>}
//       </div>
//       <div className={cityClasses}>
//         <label htmlFor="city">City</label>
//         <input type="text" id="city" ref={cityRef} />
//         {!formValid.city && <p>Please Enter Valid City</p>}
//       </div>
//       <div className={classes.actions}>
//         <button type="button" onClick={props.hideBasket}>
//           Cancel
//         </button>
//         <button className={classes.submit}>Confirm</button>
//       </div>
//     </form>
//   );
// };

// export default Order;
