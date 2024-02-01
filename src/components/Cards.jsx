import "../style/Cards.css";
import React,{useState} from 'react'
import { Iconbtn } from "./Button";
import { Description } from "./Description";



function Card({props}) {
    return (
        <div class="mt-0  ">
        <div class="col h-100">
                <div class="card">
                    <img src={props.img} class="card-img-top " alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title d-inline ">{props.title}</h5>
                        <h6>{props.price}$</h6>
                        <div class="d-flex align-items-center">
                            <button type="button" class="btn btn-outline-success btn-sm ml-2">Comprar</button>
                            <Description props={props}/>                            
                            <Iconbtn btnName="add_shopping_cart " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card