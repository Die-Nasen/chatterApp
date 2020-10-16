import "./anrufliste.css";
import { createElement } from "../../utils/elements";

import avatar from "../../assets/avatar/avatar.png";
import menu from "../../assets/icon/icon-more-vertical.svg";

export function createHeader() {
  const headerElement = createElement("header", {
    className: "header",
    children: [
      createElement("img", {
        src: avatar,
        className: "header__avatar",
        alt: "Avatar",
      }),

      createElement("div", {
        className: "header__searchbar",
        children: [
          createElement("input", {
            type: "textfield",
            className: "header__searchbar__input",
            innerText: "Search",
          }),
          createElement("img", {
            src: menu,
            alt: "optionsmenu",
          }),
        ],
      }),
    ],
  });

  return headerElement;
}
