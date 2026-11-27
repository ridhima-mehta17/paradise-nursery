
export function Navbar({ currentPage, setCurrentPage, totalItems }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        🌿 Paradise Nursery
      </div>

      <ul className="navbar-links">
        <li>
          <button onClick={() => setCurrentPage('home')}>
            Home
          </button>
        </li>

        <li>
          <button onClick={() => setCurrentPage('plants')}>
            Plants
          </button>
        </li>

        <li>
          <button
            className="cart-nav-button"
            onClick={() => setCurrentPage('cart')}
          >
            <span>🛒 Cart</span>
            <span className="cart-badge">
              {totalItems}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

function ProductList({ plants, onAddToCart, cartItems }) {
  const categories = [
    'Indoor Plants',
    'Outdoor Plants',
    'Succulents'
  ];

  return (
    <div className="product-list">
      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category
        );

        return (
          <section key={category}>
            <h2>{category}</h2>

            <div className="plant-container">
              {categoryPlants.map((plant) => {
                const isAdded = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <div className="plant-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />

                    <h3>{plant.name}</h3>
                    <p>Price: ₹{plant.price}</p>

                    <button
                      onClick={() => onAddToCart(plant)}
                      disabled={isAdded}
                    >
                      {isAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProductList;
