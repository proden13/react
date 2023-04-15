import "./style.css";

const Card = () => {
    return <a className="card">
        <img src="" alt="Картинка" className="card__img"/>
        <span className="card__name">Название</span>
        <span className="card__price">100 ₽</span>
        <button className="card__btn">В корзину</button>
    </a>
}

export default Card;