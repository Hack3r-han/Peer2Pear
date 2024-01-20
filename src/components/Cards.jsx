import "../style/Cards.css";

function Card(props) {
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4" >
            <div class="col">
                <div class="card h-100">
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <h6>{props.price}</h6>
                        <p class="card-text">{props.description}</p>
                    </div>
                        <a href="#" class="shop-link"><button class="btn btn-primary btn-sm">Comprar</button></a>
                </div>
            </div>
        </div>
    )
}

export default Card