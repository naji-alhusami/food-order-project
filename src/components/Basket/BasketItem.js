import classes from './BasketItem.module.css';

const CartItem = (props) => {

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price} TL</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.deleteItem}>−</button>
        <button onClick={props.addItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
