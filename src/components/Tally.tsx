/* eslint-disable react/no-danger */
import React from "react";

const TallyWidget = ({ tallyCode }: { tallyCode: string }): JSX.Element => {
  return (
    <>
      <iframe
        data-tally-src={`https://tally.so/embed/${tallyCode}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
        frameBorder="0"
        height="410"
        loading="lazy"
        title="Form"
        width="100%"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          var d=document,w="https://tally.so/widgets/embed.js",v=function(){
            "undefined"!=typeof Tally? Tally.loadEmbeds() : d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){
              e.src=e.dataset.tallySrc
            });
          };
          if("undefined"!=typeof Tally)v();
          else if(!d.querySelector('script[src="'+w+'"]')){
            var s=d.createElement("script");
            s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);
          }
        `,
        }}
      />
    </>
  );
};

export { TallyWidget };
