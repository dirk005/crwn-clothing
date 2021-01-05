import React from "react";
import { connect } from "react-redux";

import { toggelCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import "./cart-icon.style.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggelCartHidden,itemCount }) => (
  <div className="cart-icon" onClick={toggelCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggelCartHidden: () => dispatch(toggelCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
