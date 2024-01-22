import getProducts from "../services/productService";
import "../style/Cards.css";
import Addbtn from "./Button";



function Card(props) {
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4 m-0 d-inline-flex align-items-baseline" >
        <div class="col">
                <div class="card h-100">
                    {/* <img src={products.img} class="card-img-top" alt="..."/> */}
                        <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <h6>{props.price}</h6>
                        <p class="card-text">{props.description}</p>
                        <Addbtn btnName="Comprar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card