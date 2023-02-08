export default function Meat({ meatName, isFrozen }) {

    return (
        <div className="meat">
            <p>{meatName}</p>
            <p>{isFrozen}</p>
        </div>
    )
}