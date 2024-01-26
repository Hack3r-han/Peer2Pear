import "../style/Cards.css";
import React,{useState} from 'react'
import { Addbtn, Iconbtn } from "./Button";
import { Description } from "./Description";



function Card({props}) {
    return (
        <div className="m-1 mt-5 ">
        <div className="col">
                <div className="card h-200">
                    <img src={props.img} className="card-img-top " alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title d-inline ">{props.title}</h5>
                        <h6>{props.price}$</h6>
                        <div className="d-flex justify-content-between">
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