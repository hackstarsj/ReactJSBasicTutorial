import React from "react";

class CartItem extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.cart.name}</td>
        <td>{this.props.cart.price}</td>
        <td>{this.props.cart.qty}</td>
        <td>{this.props.cart.total}</td>
        <td>
          <button onClick={() => this.props.onIncrement(this.props.cart)}>
            Add (+)
          </button>
          <button onClick={() => this.props.onDecrement(this.props.cart)}>
            Remove (-)
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
