import './App.css';


function Card({title,value}){
    return(<div className="weather-cards">
        <b>{title}</b>
        
        <p>{value}</p>
    </div>)
}

export default Card;