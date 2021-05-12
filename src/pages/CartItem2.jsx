//rafce

const CartItem2 = (probs) => {

    console.log(probs);
    
    // object destructuring
    const {imgUrl, name, price, qty} = probs.product

    return (
        <div className="card" style={{width: '18rem'}}>
          <img src={imgUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price}</p>
            <p className="card-text">{qty}</p>
          </div>
        </div>

        // <div className="card">
        //   <p>Name: {probs.name}</p>  
        //   <p>Price: {probs.price}</p>  
        //   <p>Qty: {probs.qty}</p>  
        // </div>
    )
}

export default CartItem2
