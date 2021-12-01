import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} name={"profile"} title={"Редактировать профиль"} text={"Сохранить"}>
      <input
        type="text"
        required
        placeholder="Имя"
        name="name"
        className="popup__input popup__input_profile popup__name popup__name_edit_profile"
        id="name-input"
        minLength="2"
        maxLength="40"
      />
      <span className="name-input-error popup__input-error"></span>
      <input
        type="text"
        required
        placeholder="Профессиональная деятельность"
        name="text"
        className="popup__input popup__input_profile popup__text popup__text_edit_profile"
        id="text-input"
        minLength="2"
        maxLength="200"
      />
      <span className="text-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
