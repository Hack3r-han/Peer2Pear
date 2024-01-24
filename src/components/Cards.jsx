import "../style/Cards.css";
import { Addbtn, Iconbtn } from "./Button";
import { Description } from "./Description";



function Card({props}) {
    return (
        <div class="m-1 mt-5 ">
        <div class="col">
                <div class="card h-200">
                    <img src={props.img} class="card-img-top " alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title d-inline ">{props.title}</h5>
                        <h6>{props.price}$</h6>
                        <div class="d-flex justify-content-between">
                            <Addbtn btnName="Comprar" />
                            <Description props={props}/>                            
                            <Iconbtn btnName="add_shopping_cart" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card