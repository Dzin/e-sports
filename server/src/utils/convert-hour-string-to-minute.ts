// 18:30 -> ['18', '30'] -> [18, 30] -> (18 * 60) + 30 -> 1110
export function convertHourStringToMinutes(hourString: string) {
    const [hours, minutes] = hourString.split(':').map(Number)
    const minutesAmount = (hours * 60) + minutes
    return minutesAmount
}