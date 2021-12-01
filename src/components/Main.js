import Card from "./Card";

function Main(props) {
  return (
    <main>
      <section className="profile">
        <img src={props.userAvatar} alt="Фото" className="profile__kusto" onClick={props.onEditAvatar} />
        <div className="profile__info">
          <div className="profile__line">
            <h1 className="profile__name">{props.userName}</h1>
            <button type="button" className="profile__button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__text">{props.userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards-grid">
        {props.cards.map((card) => (
          <Card card={card} onCardClick={props.onCardClick} key={card._id} />
        ))}
      </section>
    </main>
  );
}

export default Main;
