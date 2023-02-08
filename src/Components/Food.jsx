import Meat from "./Meat";
import Veg from "./Veg";

export default function Food({ name, boughtDate, expiredDate, type, quantity }) {

    return (
        <div className="food">
            <h3 className="food-name">{name}</h3>
            <p className="quantity">{quantity}</p>
            <div className="food-type">{
                (type === "meat") ? <Meat /> :
                    (type === "vegetable") ? <Veg /> : "other"
            }</div>
            <ul className="date">
                <li>Bought date: {boughtDate}</li>
                <li>Expired date: {expiredDate}</li>
            </ul>
        </div>
    )
}