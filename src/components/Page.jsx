import React from 'react';
import { WELCOME_MSG } from '../const/Greetings';

import './Page.less';

if (test) {
  console.log('tww');
} 
else {
  console.log('tww');
}

const Page = () => (
  <div className="button-wrapper">
    {WELCOME_MSG.heading}
    <div className="link-button">
      Button
    </div>
    {WELCOME_MSG.footer.main}
  </div>
);

export default Page;
