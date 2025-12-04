
export default function InputII({setNome}){
    return(
        <input
        type='text'
        placeholder='digite seu nome pra mim'
        onChange={(e) => setNome(e.target.value)}
        />
    )
}