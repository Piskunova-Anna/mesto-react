import React from "react";

function PopupWithForm(props) {
  return (
    <section className={`popup popup_${props.name} ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <h2 className="popup__heading">{props.title}</h2>
        <form name={`form${props.name}`} className={`popup__form popup__form_${props.name}`}>
          {props.children}
          <button type="submit" value={`${props.text}`} className={`popup__button popup__button_${props.name} popup__button_disabled`}>
            {props.text}
          </button>
        </form>
        <button className="popup__close-icon" type="button" onClick={props.onClose}></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
