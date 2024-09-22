import { useDispatch, useSelector } from 'react-redux';
import { setMenu, addToCart } from "./redux/redux";

function Menu() {
  const dispatch = useDispatch();
  const menu = useSelector(state => state.app.menu);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <h2>메뉴</h2>
      <ul>
        {menu.map(item => (
          <li key={item.id}>
            {item.name} - {item.price}원
            <button onClick={() => handleAddToCart(item)}>장바구니에 추가</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;