import { foodInput } from "../demoData"
import Food from "./Food"
export default function Fridge() {
    return (
        <section id="fridge">
            {
                foodInput.map(f => {
                    return <Food name={f.name} boughtDate={f.boughtDate} expiredDate={f.expiredDate} type={f.type} quantity={f.quantity} />
                })
            }
        </section>
    )
}