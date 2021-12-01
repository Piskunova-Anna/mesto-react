function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="cards-grid__card">
      <img src={props.card.link} alt={props.card.name} className="cards-grid__image" onClick={handleClick} />
      <button className="cards-grid__trash-bin" type="button"></button>
      <div className="cards-grid__container">
        <h2 className="cards-grid__text">{props.card.name}</h2>
        <div className="cards-grid__like">
          <button className="cards-grid__like_img" type="button"></button>
          <div className="cards-grid__like_num">{props.card.likes.length}</div>
        </div>
      </div>
    </article>
  );
}

export default Card;
