
function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove
}) {
  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        width="70"
        height="70"
      />

      <div>
        <h3>{item.name}</h3>
        <p>Price: ₹{item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>
          Total: ₹{item.price * item.quantity}
        </p>
      </div>

      <div className="quantity-controls">
        <button onClick={() => onDecrease(item.id)}>
          −
        </button>

        <span>{item.quantity}</span>

        <button onClick={() => onIncrease(item.id)}>
          +
        </button>

        <button onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
