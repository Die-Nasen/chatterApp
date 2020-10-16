import "./anrufliste.css";
import entry from "./entry.html";

import { createHeader } from "./entry";
import { createContact } from "./entry";

import avatar from "../../assets/avatar/avatar.png";
import incoming from "../../assets/icon/icon-phone-incoming.svg";
import phone from "../../assets/icon/icon-phone.svg";

export default {
  title: "components/entry",
  parameters: { layout: "centered" },
};

export const entryHTML = () => entry;
export const entryJS = () => createHeader();

export const danWells = () => createContact({
  name: "Dan Wells",
  src: avatar,
  directionOfCall: incoming,
  direction: "Incoming",
  times: "Yesterday, 07:00 pm",
  typeOfCall: phone,
  type: "Phone", 
});