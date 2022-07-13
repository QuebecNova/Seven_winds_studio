export default function customDate(ms : number) : string {
    const date = new Date(ms)
    const year = date.getFullYear()
    const month = ("0" + (date.getMonth() + 1)).slice(-2)
    const day = ("0" + date.getDate()).slice(-2)
        
    return `${day}.${month}.${year}`
}