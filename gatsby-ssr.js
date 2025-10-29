import React from "react";
import "./src/styles/global.css";

import { RecoilRoot } from "recoil";
import Layout from "./src/components/Layout";

export const wrapRootElement = ({ element, data }) => (
  <RecoilRoot {...data}>{element}</RecoilRoot>
);
export const wrapPageElement = ({ element, data }) => (
  <Layout {...data}>{element} </Layout>
);

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <script
      key="meta-pixel"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1372998270846665');
          fbq('track', 'PageView');
        `,
      }}
    />,
  ]);

  setPostBodyComponents([
    <noscript key="meta-pixel-noscript">
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1372998270846665&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>,
  ]);
};
