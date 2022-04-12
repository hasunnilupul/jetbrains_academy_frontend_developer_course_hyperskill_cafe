function search(numbers) {
    return numbers.find((numb => numb % 11 === 0));
}