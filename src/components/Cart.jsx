import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/redux';  // Redux action

function Cart() {
  const cart = useSelector(state => state.app.cart);
  const dispatch = useDispatch();

  return (
    <ul className="cart">
      {cart.length > 0 ? (
        cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.price}원
            <button onClick={() => dispatch(removeFromCart(item))}>삭제</button>
          </li>
        ))
      ) : (
        <p>장바구니에 담긴 상품이 없어요!</p>
      )}
    </ul>
  );
}

export default Cart;