import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/redux";  // Redux action
import Item from "./Item";
import OrderModal from "./OrderModal";

function Menu({ menu, cart }) {
  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);
  const dispatch = useDispatch();

  if (!menu || menu.length === 0) {
    return <div>로딩 중...</div>;
  }

  if (!menu || Object.keys(menu).length === 0) {
    return (
      <div style={{ textAlign: "center", margin: "80px" }}>
        메뉴 정보가 없어요!
      </div>
    );
  }

  const categorys = Object.keys(menu);
  return (
    <>
      {categorys.map((category) => (
        <section key={category}>
          <h2>{category}</h2>
          <ul className="menu">
            {menu[category].map((item) => (
              <Item
                key={item.id}
                item={item}
                clickHandler={() => {
                  setModalMenu(item);
                  setModalOn(true);
                }}
              />
            ))}
          </ul>
        </section>
      ))}
      {modalOn && (
        <OrderModal
          modalMenu={modalMenu}
          setModalOn={setModalOn}
          cart={cart}
          setCart={() => dispatch(addToCart(modalMenu))}
        />
      )}
    </>
  );
}

export default Menu;