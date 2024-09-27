
function cleeeeeek() {
    console.log('cleeeeeek')
}

export default function Button({name}) {
    return(
        <button onClick={cleeeeeek()} name={name}>{name}</button>
    )
}