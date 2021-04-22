import "./anrufliste.css";
import { createElement } from "../../utils/elements";

import avatar from "../../assets/avatar/avatar.png";
import menu from "../../assets/icon/icon-more-vertical.svg";

export function createHeader() {
  const headerElement = createElement("header", {
    className: "header",
    children: [
      createElement("div", {
        className: "header__avatar",
        children: [
          createElement("div", {
            className: "header__avatar__dot",
          }),
        ],
      }),

      createElement("div", {
        className: "header__searchbar",
        children: [
          createElement("input", {
            type: "textfield",
            className: "header__searchbar__input",
            placeholder: "Search",
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
