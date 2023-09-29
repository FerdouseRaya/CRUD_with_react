
import './Books.css'
const Books = ({ id,ISBN,title,author,genre,stock,price,pageCount}) => {
    //console.log('addProductToCart:', addProductToCart);
    return (
        <div className="container">
            <div className="product-card">
                <h5>Title: {title}</h5>
                <h5>ISBN: {ISBN}</h5>
                <h5>Author: {author}</h5>
                <h5>Genre: {genre}</h5>
                <h5>Stock:  {stock}</h5>
                <h5>PageCount: {pageCount}</h5>
                <h5>Price:  ${price}</h5>                
            </div>
        </div>
    );
};
export default Books