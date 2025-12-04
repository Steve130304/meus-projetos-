
export default function InputI({setIdade}){
    return(
        <input
        type="number"
        placeholder="digite sua idade pra mim"
        onChange={(e) => setIdade(e.target.value)}
        />

    )
}