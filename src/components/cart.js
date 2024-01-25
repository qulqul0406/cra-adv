import { useContext } from "react";
import { CartContext } from '../store';

export default function Cart() {
    const [state, despatch] = useContext(CartContext);

    return (
        <div className="bg-light p-3">
        <table className="table align-middle">
            <tbody>
            {state.cartList.map((item)=>{
                return (
                    <tr key={item.id}>
                    <td>
                        <a href='#'>x</a>
                    </td>
                    <td>
                        <img src={item.img}
                            className='table-image'
                            alt='' />
                    </td>
                    <td>{item.title}
                        <br />
                        <small className='text-muted'>NT$ {item.price}</small>
                    </td>
                    <td>
                        <select name='' id='' className='form-select'></select>
                    </td>
                    <td className='text-end'>NT$ {item.price * item.quantity}</td>
                </tr>
                )
            })}
                
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={5} className='text-end'>
                        總金額 NT$ 440
                    </td>
                </tr>
            </tfoot>
        </table>
        </div>
    );
}