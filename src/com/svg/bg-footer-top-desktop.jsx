import * as React from "react";

function SvgBgFooterTopDesktop(props) {
  return (
    <svg width={1440} height={158} {...props}>
      <defs>
        <path id="bg-footer-top-desktop_svg__a" d="M0 0h1440v158H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bg-footer-top-desktop_svg__b" fill="#fff">
          <use xlinkHref="#bg-footer-top-desktop_svg__a" />
        </mask>
        <g mask="url(#bg-footer-top-desktop_svg__b)" fill="#00252E">
          <path d="M0 99.424C249.852-14.173 492.347-30.427 727.484 50.661c352.706 121.632 501.421 140.534 727.484 0 150.71-93.69 150.71 129.423 0 669.339H0V99.424z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgBgFooterTopDesktop;
