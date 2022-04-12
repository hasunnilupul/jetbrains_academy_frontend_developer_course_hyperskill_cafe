function search(objects) {
    return objects.findIndex((obj) => obj.name === "John" && obj.age === 30);
}