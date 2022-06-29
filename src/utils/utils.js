export function timeFormatted(number) {
    if (number => 60) {
        const hours = Math.floor(number / 60);
        const minutes = number % 60
        return hours + "h " + minutes + "m"
    } else {
        return number + "m"
    }
}