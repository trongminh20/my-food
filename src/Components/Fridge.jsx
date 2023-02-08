import { foodInput } from "../demoData"
import FoodTypes from "./FoodTypes"
export default function Fridge() {
    const getTypes = (foodIn) => {
        //remove the duplicate value in food types
        return [...new Set(foodIn.map(f => { return f.type }))];
    }

    const getQuantity = () => { }
    return (
        <section id="fridge">
            {
                getTypes(foodInput).map(f => {
                    return <FoodTypes type={f} />
                })
            }
        </section>
    )
}