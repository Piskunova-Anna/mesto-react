import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} name={"avatar"} title={"Обновить аватар"} text={"Сохранить"}>
      <input
        type="url"
        required
        placeholder="Обновить аватар"
        name="avatar"
        className=" popup__input popup__input_avatar popup__text"
        id="avatar-input"
      />
      <span className="avatar-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
