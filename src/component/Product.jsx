function Product(props){
    return <div className='product'>
     <p className='product-title'>{props.title}</p>
     <p className="product-price">{props.price}</p>
     <p>
      {props.description}
     </p>
    </div>
   }
export default Product
