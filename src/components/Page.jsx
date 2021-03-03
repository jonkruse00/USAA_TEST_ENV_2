import React from "react";
import { WELCOME_MSG } from "../const/Greetings";

import "./Page.less";

console.log("woof");

const Page = () => (
  <div className="button-wrapper">
    {WELCOME_MSG.heading}
    <img src="woof.jpg" alt="woof" />
    <div className="link-button">dddd</div>
    {WELCOME_MSG.footer.main}
  </div>
);

export default Page;
