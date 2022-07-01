import "./App.css";

const products = [
  {
    id: "P01",
    name: "Sensible shoes",
    price: 500
  },
  {
    id: "P02",
    name: "Jolly jeans",
    price: 300
  },
  {
    id: "P03",
    name: "Sultry socks",
    price: 60
  },
  {
    id: "P04",
    name: "Humble hat",
    price: 100
  },
  {
    id: "P05",
    name: "Tingly t-shirt",
    price: 200
  }
];

export default function App() {
  return (
    <div className="app">
      <div className="cart">
        <div className="cart-total-items">
          You have 1 item(s) in your cart
        </div>
        <div className="cart-total-price">
          The total value of your cart is 300 HRK
        </div>
        <div className="cart-item-list">
          <div className="cart-item">
            <div className="cart-item-name">
              Jolly jeans
            </div>
            <div className="cart-item-price">300 HRK</div>
          </div>
        </div>
      </div>
      <div className="product-list">
        <div className="product">
          <div className="product-description">
            <div className="product-name">
              Sensible shoes
            </div>
            <div className="product-price">500 HRK</div>
          </div>
          <div className="product-button">
            <button className="button" type="button">
              Add to cart
            </button>
          </div>
        </div>
        <div className="product">
          <div className="product-description">
            <div className="product-name">Jolly jeans</div>
            <div className="product-price">300 HRK</div>
          </div>
          <div className="product-button">
            <button
              className="button"
              type="button"
              disabled
            >
              Added to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
