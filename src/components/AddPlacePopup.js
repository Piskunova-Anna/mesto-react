import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} name={"card"} title={"Новое место"} text={"Создать"}>
      <input
        type="text"
        required
        placeholder="Название"
        name="name"
        className=" popup__input popup__input_card popup__name popup__name_card"
        id="name-card-input"
        minLength="2"
        maxLength="30"
      />
      <span className="name-card-input-error popup__input-error"></span>
      <input
        type="url"
        required
        placeholder="Ссылка на картинку"
        name="link"
        className="popup__input popup__input_card popup__text popup__text_card"
        id="url-input"
      />
      <span className="url-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
