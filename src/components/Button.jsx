
export function Addbtn(props) {
    return (
        <a href="#" class="shop-link"><button class="btn d-inline-flex align-self-baseline" type="submit">{props.btnName}</button></a>
    )
}


export const Iconbtn = (props) => {
    return (
        <a href="#" class="shop-link"><span class="material-symbols-outlined">{props.btnName}</span></a>
    )
}


