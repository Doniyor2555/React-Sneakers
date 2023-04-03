import './card.scss';

function Card(props) {
  const {title, price, imageUrl} = props;
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart.svg" alt="Unliked" />
      </div>
      <img src={imageUrl} style={{marginBottom: '14px'}} width={133} height={112} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
          <button className="button">
            <img width={11} height={11}  src="/img/plus.svg" alt="plus.svg"  />
          </button>
      </div>
    </div>
  )
}

export default Card