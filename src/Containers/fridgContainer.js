export const getTypes = (foodIn) => {
    //remove the duplicate value in food types
    return [...new Set(foodIn.map(f => { return f.type }))];
}

export const categories = (foodIn) => {
    let categories = [];
    let types = [...new Set(foodIn.map(f => { return f.type }))];
    let count = 0;
    let index = 0;
    let t = types[index];
    while (index < types.length) {
        foodIn.forEach(item => {
            if (item.type === types[index]) {
                count++;
            }
        });

        categories.push({ "name": types[index], "quantity": count });
        count = 0;
        index++;
    }

    return categories;
}