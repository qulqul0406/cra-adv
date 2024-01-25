export default function Cart() {
    return (
        <div className="bg-light p-3">
        <table className="table align-middle">
            <tbody>
                <tr>
                    <td>
                        <a href='#'>x</a>
                    </td>
                    <td>
                        <img src='https://images.unsplash.com/photo-1682687220305-ce8a9ab237b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D'
                            className='table-image'
                            alt='' />
                    </td>
                    <td>啊吧啊吧
                        <br />
                        <small className='text-muted'>NT$ 220</small>
                    </td>
                    <td>
                        <select name='' id='' className='form-select'></select>
                    </td>
                    <td className='text-end'>NT$ 440</td>
                </tr>
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