import "./anrufliste.css";
import { createElement } from "../../utils/elements";

import avatar from "../../assets/avatar/avatar.png";
import menu from "../../assets/icon/icon-more-vertical.svg";
import incoming from "../../assets/icon/icon-phone-incoming.svg";
import phone from "../../assets/icon/icon-phone.svg";


/* import search from "../../assets/icon/icon-search.svg"; */

export function createHeader () {

    const headerElement = createElement("header", {
        className: "header",
        children: 
        [
            createElement("img", {
                src: avatar,
                className: "header__avatar",
                alt: "Avatar",
            }),
            createElement("div", {
                children: [
                    createElement("div", {
                       className: "header__searchbar",
                       children: [
                           createElement("input", {
                               type: "search",
                               className: "header__searchbar__input",
                               placeholder: "search",
                           }),
                           createElement("img", {
                               src: menu,
                               alt: "optionsmenu",
                           }),
                       ], 
                    })
                ]
            })
        ],
    });

    return headerElement;
};


export function createContact (contact) {
  
    const contactElement = createElement("div", {
        className: "contactElement",
        children: 
        [
            createElement("img", {
                id: "contactElement__Image",
                alt: `Image of ${contact.name}`,
                src: contact.src,
            }),
            createElement("div", {
                className: "contactElement__Data",
                children: 
                [
                    createElement("span", {
                        className: "contactElement__Name",
                        innerText: contact.name,
                    }),
                    createElement("div", {
                        className: "contactElement__Details",
                        children:
                        [
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
};