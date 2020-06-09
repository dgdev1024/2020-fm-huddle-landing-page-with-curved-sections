import * as React from "react";

function SvgBgFooterTopMobile(props) {
  return (
    <svg width={375} height={53} {...props}>
      <defs>
        <path id="bg-footer-top-mobile_svg__a" d="M0 0h375v53H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bg-footer-top-mobile_svg__b" fill="#fff">
          <use xlinkHref="#bg-footer-top-mobile_svg__a" />
        </mask>
        <g mask="url(#bg-footer-top-mobile_svg__b)" fill="#00252E">
          <path d="M0 20.756c57.764-25.65 127.028-25.65 207.792 0C328.938 59.229 332.12 25.58 375.022.696 403.624-15.893 429.283 263.876 452 840H0V20.756z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgBgFooterTopMobile;
