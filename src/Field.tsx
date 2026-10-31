export default function Field({func, id, text, style={}}){
    return(
        <div className="field" onClick={() => func(id)} style={style}>
            <h1>{text}</h1>
        </div>
    )
}