function ImagePopup(props) {
  return (
    <section className={`popup popup_${props.name} ${props.card && "popup_opened"}`}>
      <div className="popup__image-container">
        <button type="button" className="popup__close-icon popup__close-icon_fullscreen" onClick={props.onClose}></button>
        <img src={props.card.link} alt="#" className="popup__full-image" />
        <h2 className="popup__image-name">{props.card.name}</h2>
      </div>
    </section>
  );
}

export default ImagePopup;
