import React, { useEffect } from 'react';

function Chat() {
  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v9.0',
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return (
    <div
      class='fb-customerchat'
      attribution='install_email'
      page_id='201042233253912'
      theme_color='#FF2B06'
    ></div>
  );
}

export default Chat;
