import { foodInput } from "../demoData";
import FoodTypes from "./FoodTypes";
import { getTypes, categories } from "../Containers/fridgContainer";

export default function Fridge() {
    return (
        <section id="fridge">
            {
                categories(foodInput).map(item => {
                    return <FoodTypes type={item.name} quantity={item.quantity} />
                })
            }
        </section>
    )
}