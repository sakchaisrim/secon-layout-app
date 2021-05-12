const CartItems = (props) => {

    // console.log(props.product);

    // Oject destructuring
    const {imgUrl, name, price, qty} = props.product

  return (
        <div className="card">
            <img src={imgUrl} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}THB</p>
                <p className="card-text">{qty} items</p>
            </div>
        </div>

  )
};

export default CartItems;
