function pick (obj, fields) {
    const newObj = {};

    fields.forEach(field => {
        newObj[field] = obj[field]
    })

    return newObj;
}

const user = {
    id: 1,
    name: "Алексей",
    surname: "Данчин",
    age: 28,
}

const result = pick(user, ['name', 'surname'])

console.log(result);

// result === { name: "Алексей", surname: "Данчин" }