// import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
// import classes from "./BasketCard.module.css";

// const Backdrop = (props) => {
//   return <div className={classes.backdrop} onClick={props.hideBasket} />;
// };
// const Overlay = (props) => {
//   return (
//     <div className={classes.overlay}>
//       <div className={classes.content}>{props.children}</div>
//     </div>
//   );
// };

// const cardElement = document.getElementById("overlays");

// const BasketCard = (props) => {
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(<Backdrop hideBasket={props.hideBasket} />, cardElement)}
//       {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, cardElement)}
//     </Fragment>
//   );
// };

// export default BasketCard;
