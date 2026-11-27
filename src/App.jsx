import AboutUs from './pages/AboutUs';
import { useDispatch, useSelector } from 'react-redux';

import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from './features/cart/cartSlice';

import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  
const plants = [
  // Indoor Plants
  {
    id: 1,
    name: 'Snake Plant',
    category: 'Indoor Plants',
    price: 299,
    image: 'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    name: 'Peace Lily',
    category: 'Indoor Plants',
    price: 399,
    image: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'Monstera',
    category: 'Indoor Plants',
    price: 499,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400'
  },
  {
    id: 4,
    name: 'Money Plant',
    category: 'Indoor Plants',
    price: 249,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=400'
  },
  {
    id: 5,
    name: 'Areca Palm',
    category: 'Indoor Plants',
    price: 599,
    image: 'https://images.unsplash.com/photo-1597055181300-a8b4be1e5c7e?w=400'
  },
  {
    id: 6,
    name: 'ZZ Plant',
    category: 'Indoor Plants',
    price: 449,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },

  // Outdoor Plants
  {
    id: 7,
    name: 'Rose Plant',
    category: 'Outdoor Plants',
    price: 199,
    image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400'
  },
  {
    id: 8,
    name: 'Hibiscus',
    category: 'Outdoor Plants',
    price: 249,
    image: 'https://images.unsplash.com/photo-1597848212624-e6b3b0c4f9c8?w=400'
  },
  {
    id: 9,
    name: 'Jasmine',
    category: 'Outdoor Plants',
    price: 199,
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400'
  },
  {
    id: 10,
    name: 'Bougainvillea',
    category: 'Outdoor Plants',
    price: 299,
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400'
  },
  {
    id: 11,
    name: 'Marigold',
    category: 'Outdoor Plants',
    price: 149,
    image: 'https://images.unsplash.com/photo-1508615070457-7baeba4003ab?w=400'
  },
  {
    id: 12,
    name: 'Lavender',
    category: 'Outdoor Plants',
    price: 349,
    image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400'
  },

  // Succulents
  {
    id: 13,
    name: 'Aloe Vera',
    category: 'Succulents',
    price: 199,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 14,
    name: 'Echeveria',
    category: 'Succulents',
    price: 249,
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400'
  },
  {
    id: 15,
    name: 'Jade Plant',
    category: 'Succulents',
    price: 299,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400'
  },
  {
    id: 16,
    name: 'Haworthia',
    category: 'Succulents',
    price: 199,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 17,
    name: 'Cactus',
    category: 'Succulents',
    price: 149,
    image: 'https://images.unsplash.com/photo-1509223197845-458d87318791?w=400'
  },
  {
    id: 18,
    name: 'Burro Tail',
    category: 'Succulents',
    price: 349,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  }
];


  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="app">

     <header>
  <h1>🌿 Paradise Nursery</h1>
  <p>Bring Nature Home</p>
 <nav>
  <a href="#home">Home</a>
  <a href="#plants">Plants</a>
  <a href="#about">About Us</a>
  <a href="#cart">Cart ({totalItems})</a>
</nav>
</header>

      <main id="home">
        <section className="hero">
  <div className="hero-content">
    <h1>Welcome to Paradise Nursery</h1>
    <h2>Bring Nature Home 🌱</h2>
    <p>
      Discover beautiful plants and make your home
      greener, fresher and happier.
    </p>

    <button
      onClick={() => {
        document.getElementById('plants').scrollIntoView({
          behavior: 'smooth'
        });
      }}
    >
      Shop Now
    </button>
  </div>
</section>
        <h2 id="plants">Our Beautiful Plants</h2>

        <ProductList
          plants={plants}
          cartItems={cartItems}
          onAddToCart={(plant) =>
            dispatch(addToCart(plant))
          }
        />

        <section className="cart" id="cart">
          <h2>Your Shopping Cart</h2>
<button onClick={() => {
  document.getElementById('plants').scrollIntoView({
    behavior: 'smooth'
  });
}}>
  Continue Shopping
</button>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={(id) =>
                  dispatch(increaseQuantity(id))
                }
                onDecrease={(id) =>
                  dispatch(decreaseQuantity(id))
                }
                onRemove={(id) =>
                  dispatch(removeFromCart(id))
                }
              />
            ))
          )}

          <h3>Total: ₹{totalPrice}</h3>
          <button
  disabled={cartItems.length === 0}
  onClick={() => alert('Checkout Coming Soon!')}
>
  Checkout
</button>
        </section>
<AboutUs />
      </main>
    </div>
  );
}

export default App;
