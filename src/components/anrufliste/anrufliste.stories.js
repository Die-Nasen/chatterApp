import "./anrufliste.css";
import entry from "./entry.html";

import { createHeader } from "./entry";
import { createContact } from "./list";

import avatar from "../../assets/avatar/avatar.png";
import incoming from "../../assets/icon/icon-phone-incoming.svg";
import phone from "../../assets/icon/icon-phone.svg";

export default {
  title: "components/entry",
  parameters: { layout: "centered" },
};

export const entryHTML = () => entry;
export const entryJS = () => createHeader();

export const danWells = () =>
  createContact({
    name: "Dan Wells",
    src: avatar,
    directionOfCall: incoming,
    direction: "Incoming",
    times: "Yesterday, 07:00 pm",
    typeOfCall: phone,
    type: "Phone",
  });

const callerList = [
  {
    name: "Dan Wells",
    src: avatar,
    directionOfCall: incoming,
    direction: "Incoming",
    times: "Yesterday, 07:00 pm",
    typeOfCall: phone,
    type: "Phone",
  },
  {
    name: "Dan Wells",
    src: avatar,
    directionOfCall: incoming,
    direction: "Incoming",
    times: "Yesterday, 07:00 pm",
    typeOfCall: phone,
    type: "Phone",
  },
  {
    name: "Dan Wells",
    src: avatar,
    directionOfCall: incoming,
    direction: "Incoming",
    times: "Yesterday, 07:00 pm",
    typeOfCall: phone,
    type: "Phone",
  },
  {
    name: "Dan Wells",
    src: avatar,
    directionOfCall: incoming,
    direction: "Incoming",
    times: "Yesterday, 07:00 pm",
    typeOfCall: phone,
    type: "Phone",
  },
  {
    name: "Dan Schwells",
    src: avatar,
    directionOfCall: incoming,
    direction: "Incoming",
    times: "Yesterday, 07:00 pm",
    typeOfCall: phone,
    type: "Phone",
  },
  {
    name: "Dan Wells",
    src: avatar,
    directionOfCall: incoming,
    direction: "Incoming",
    times: "Yesterday, 07:00 pm",
    typeOfCall: phone,
    type: "Phone",
  },
  {
    name: "Dan Wells",
    src: avatar,
    directionOfCall: incoming,
    direction: "Incoming",
    times: "Yesterday, 07:00 pm",
    typeOfCall: phone,
    type: "Phone",
  },
];

export const completeList = () => {
  const container = document.createElement("div");
  callerList.forEach(function (call) {
    const element = createContact(call);
    container.append(element);
  });
  return container;
};

export const callScreen = () => {
  const container = document.createElement("div");

  const header = createHeader();
  container.append(header);

  callerList.forEach(function (call) {
    const element = createContact(call);
    container.append(element);
  });

  return container;
};
