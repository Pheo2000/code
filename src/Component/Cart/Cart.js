import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import { useContext } from 'react'
import CartItem from './CartItem'
import CartContext from '../../Store/cart-context'
const Cart = props => {


    const cartCtx = useContext(CartContext)
    // convert số tiền thành số có 2 thập phân đăng sau 
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    // kiểm tra xem nếu trogn cart có giỏ hàng thì mới cho hiển thị nút order
    const HasItems = cartCtx.items.length > 0



    const CartItemremoveHanlder = id => {
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = item => {
        cartCtx.addItem(item)
    }
    const CartItems = <ul className={classes['cart-items']}>{
        cartCtx.items.map(item =>
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={CartItemremoveHanlder.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            />
        )}</ul>
    return (
        <Modal onClose={props.onClose}>
            {CartItems}
            <div className={classes.total}>
                <span>total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}
                    onClick={props.onClose}
                >Close</button>
                {HasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}
export default Cart