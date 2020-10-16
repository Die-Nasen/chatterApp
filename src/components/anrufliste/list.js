import "./anrufliste.css";
import { createElement } from "../../utils/elements";

export function createContact(contact) {
  const contactElement = createElement("div", {
    className: "contactElement",
    children: [
      createElement("img", {
        id: "contactElement__Image",
        alt: `Image of ${contact.name}`,
        src: contact.src,
      }),
      createElement("div", {
        className: "contactElement__Data",
        children: [
          createElement("span", {
            className: "contactElement__Name",
            innerText: contact.name,
          }),
          createElement("div", {
            className: "contactElement__Details",
            children: [
              createElement("img", {
                className: "contactElement__Details__Direction",
                src: contact.directionOfCall,
                alt: contact.direction,
              }),
              createElement("span", {
                className: "contactElement__Details__Time",
                innerText: contact.times,
              }),
            ],
          }),
        ],
      }),
      createElement("img", {
        className: "contactElement__TypeOfCall",
        src: contact.typeOfCall,
        alt: contact.type,
      }),
    ],
  });

  return contactElement;
}
