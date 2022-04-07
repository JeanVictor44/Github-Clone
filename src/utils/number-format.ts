export const numberFormat = (number: number) => {
    return number.toLocaleString(undefined, {notation:'standard'}).replaceAll('.',',')
} 