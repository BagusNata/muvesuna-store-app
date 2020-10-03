import React, { Component } from "react";
import { generate } from "shortid";

const initialState = {
  name: "",
  price: "",
  picture: "",
};
export class Maincontent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      initialState,
    };
  }

  componentDidMount() {
    const itemData = [
      {
        id: 1,
        name: "jordan 1 high",
        price: 500,
        picture:
          "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Court-Purple-White_01.jpg",
      },
      {
        id: 2,
        name: "jordan 1 high",
        price: 500,
        picture:
          "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Court-Purple-White_01.jpg",
      },
      {
        id: 3,
        name: "Jordan 6 Retro DMP",
        price: 251,
        picture:
          "https://stockx.imgix.net/Air-Jordan-6-Retro-DMP-2020-Product.jpg",
      },
      {
        id: 4,
        name: "Jordan 1 Mid Camo (2020)",
        price: 203,
        picture: "https://stockx.imgix.net/Air-Jordan-1-Mid-Camo-2020.png",
      },
      {
        id: 5,
        name: "Jordan 1 Retro Bred (2001)",
        price: 600,
        picture:
          "https://stockx.imgix.net/Air-Jordan-1-Retro-Bred-2001-Product.jpg",
      },
      {
        id: 6,
        name: "Adidas Yeezy Boost 350 V2",
        price: 305,
        picture:
          "https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra-Product-1.jpg",
      },
      {
        id: 7,
        name: "jordan 1 high",
        price: 500,
        picture:
          "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Court-Purple-White_01.jpg",
      },
      {
        id: 8,
        name: "jordan 1 high",
        price: 500,
        picture:
          "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Court-Purple-White_01.jpg",
      },
    ];
    this.setState({ item: itemData });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // clear form
    this.setState(initialState);

    const newItem = {
      id: generate(),
      name: this.state.name,
      price: this.state.price,
      picture: this.state.picture,
    };
    console.log("state -->", this.state.item);
    console.log("new item -->", newItem);

    // get all the item from state
    const item = [...this.state.item];

    // add new item to the item array in state
    item.push(newItem);

    // clear form for next item
    this.setState({
      item: item,
      name: "",
      price: "",
      picture: "",
    });
    console.log("clicked !");
    return;
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value,
    });
  };

  render() {
    const ItemCards = this.state.item.map((item) => (
      <ItemCard
        key={item.id}
        item={item}
        price={item.price}
        // addToCard={this.addToCard}
      />
    ));

    return (
      <div>
        <div className="container">
          <form className="style-form" onSubmit={this.handleSubmit}>
            <div>
              <h3 className="seller-form-font">New Item Form</h3>
            </div>
            <div>
              <input
                className="style-input"
                type="text"
                name="name"
                placeholder="Item Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                className="style-input"
                type="number"
                name="price"
                placeholder="Item Price"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <div>
                <input
                  className="style-input"
                  type="text"
                  name="picture"
                  placeholder="Picture Link"
                  value={this.state.picture}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <br />
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>

        <div className="container">
          <div>{ItemCards}</div>
        </div>
      </div>
    );
  }
}

function ItemCard(props) {
  // const clickEditBtn = () => {
  //   props.addToCard(props.item);
  // };
  const clickDeleteBtn = () => {
    console.log("DELETE KU AING");
  };
  return (
    <div className="card items-card">
      <div>
        <button
          onClick={clickDeleteBtn}
          type="button"
          className="btn btn-delete btn-danger"
        >
          <h5 style={{ margin: "-7px -6px" }}>X</h5>
        </button>
        <img className="img" src={props.item.picture} alt="" />
      </div>
      <div className="card-body" alt="">
        <p className="card-text">{props.item.name}</p>
        <p className="card-text">${props.price}</p>
        <button
          // onClick={clickBuyBtn}
          className="btn btn-success btncolor full-width"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default Maincontent;
