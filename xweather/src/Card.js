import './App.css';


function Card({title,value}){
    return(<div className="card">
        <b>{title}</b>
        
        <p>{value}</p>
    </div>)
}

export default Card;