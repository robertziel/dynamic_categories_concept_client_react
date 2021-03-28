import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Modal, Button, Paper } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { getCart } from './selectors';

import Total from './Total';
import Product from './Product';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      total: props.cart.length,
      open: false,
    };

    this.calculateTotal = this.calculateTotal.bind(this);
    this.showProduct = this.showProduct.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  calculateTotal(price) {
    this.setState({
      total: this.state.total + price,
    });
    console.log(this.state.total);
  }

  showProduct(info) {
    console.log(info);
    alert(info);
  }

  openModal() {
    this.setState({
      open: true,
    });
  }

  closeModal() {
    this.setState({
      open: false,
    });
  }

  render() {
    if (!this.props.cart) return <p>loading...!!!!</p>;

    const component = this;
    const products = this.props.cart.map(function(product) {
      return (
        <Product
          name={product.name}
          price={product.price}
          info={product.info}
          amount={product.amount}
          handleShow={component.showProduct}
          handleTotal={component.calculateTotal}
        />
      );
    });

    return (
      <div>
        <Button onClick={component.openModal}>
          <ShoppingCart /> Cart
        </Button>
        <Modal open={this.state.open}>
          <Paper>
            <Button onClick={component.closeModal}>X</Button>
            {products}
            <Total total={this.state.total} />
          </Paper>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = createSelector(getCart(), cart => ({
  cart,
}));

export default connect(mapStateToProps)(Cart);
