export const Description = ({props}) => {
return(
    <div>
        <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target={`#modal${props.id}`}>
            Description
        </button>
        
        <div className="modal fade" id={`modal${props.id}`} tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modalLabel">{props.title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={props.img} className="img-fluid rounded " alt="..."/>
                        {props.description}
                        <h6>{props.price}$</h6>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>        
)
}