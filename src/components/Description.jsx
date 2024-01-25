export const Description = ({props}) => {
return(
    <div>
        <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target={`#modal${props.id}`}>
            Description
        </button>
        
        <div class="modal fade" id={`modal${props.id}`} tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalLabel">{props.title}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src={props.img} class="img-fluid" alt="..."/>
                        {props.description}
                        <h6>{props.price}€</h6>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>        
)
}