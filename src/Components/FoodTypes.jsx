export default function FoodTypes({ type, quantity }) {

    return (
        <div className="food--type">
            <h3 className="type">{type}</h3>
            <p className="food-quantity">{quantity}</p>
        </div>
    )
}