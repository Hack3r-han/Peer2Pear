
export function Addbtn(props) {
    return (
        <a href="#" className="shop-link" id="pulse"><button className="btn" type="submit">{props.btnName}</button></a>
    )
}


export const Iconbtn = (props) => {
    return (
        <a href="#" className="shop-link"><span className="material-symbols-outlined">{props.btnName}</span></a>
    )
}


