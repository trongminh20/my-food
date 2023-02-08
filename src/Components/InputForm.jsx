export default function InputForm({foodName, changeName,
                                    quantity, changeQuantity,
                                    types, changeTypes,
                                    boughtDate, changeBoughtDate,
                                    expiredDate, changeExpiredDate}) 
{

    return (
        <form action="">
            <input type="text" name="name" placeholder="What food?"
                   className=""
                   value={foodName || ""} 
                   onChange={changeName} />
            <input type="number" name="quantity" placeholder="How many (much)?" 
                   className="" 
                   value={quantity || ""} 
                   onChange={changeQuantity} />
            <select name="types" id="food--type" onChange={changeTypes}>
                <option value="meat">Meat</option>
                <option value="drink">Drink</option>
                <option value="seafood">Seafood</option>
                <option value="fruit">Fruit</option>
                <option value="vegetable">Vegetable</option>
                <option value="egg">Egg</option>
                <option value="dairy">Dairy</option>
            </select>
            <input type="date" name="boughtDate" 
                   className="" 
                   value={ boughtDate|| ""}
                   onChange={changeBoughtDate}/>
            <input type="date" name="expiredDate" 
                   className="" 
                   value={ expiredDate|| ""}
                   onChange={changeExpiredDate}/>
            <input type="submit" name="" value="Add Food" className="btn--submit" />
        </form>
    )
}