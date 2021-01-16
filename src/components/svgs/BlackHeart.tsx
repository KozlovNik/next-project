import GenericImage, { GenericProps } from "./GenericImage";

const BlackHeart: React.FC<GenericProps> = ({ color, width = 26, ...rest }) => {
  return (
    <svg
      {...rest}
      width={width}
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3833 6.23919L13.057 7.01717C13.0628 7.00884 13.0689 7.00028 13.0751 6.99149C13.1802 6.84222 13.3347 6.628 13.5303 6.37098C13.9222 5.85605 14.4756 5.17369 15.1243 4.49908C15.7752 3.82225 16.5092 3.16663 17.261 2.69402C18.0189 2.21753 18.746 1.95784 19.3977 1.99469C21.2251 2.09801 22.5735 2.89035 23.424 4.20416C24.2866 5.53663 24.6714 7.46092 24.4285 9.86747C24.3177 10.9646 23.5204 12.5114 22.2856 14.2756C21.068 16.0153 19.4841 17.8861 17.9062 19.6127C16.33 21.3376 14.7682 22.9097 13.5998 24.0512C13.0745 24.5643 12.6292 24.99 12.2984 25.3029L13.0259 25.9911C13.3557 25.6789 13.7901 25.2632 14.2986 24.7665C15.4757 23.6166 17.0516 22.0304 18.6445 20.2873C20.2356 18.546 21.852 16.6392 23.1049 14.849C24.3407 13.0833 25.2841 11.3479 25.4234 9.96791C25.6806 7.42021 25.2891 5.24499 24.2635 3.66072C23.2258 2.05779 21.5741 1.11615 19.4542 0.996282C18.5073 0.942742 17.5692 1.31906 16.7288 1.84742C15.8821 2.37967 15.0845 3.09776 14.4035 3.80594C13.7204 4.51633 13.1417 5.23028 12.7345 5.7654C12.5976 5.94533 12.4797 6.10554 12.3833 6.23919Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2512 5.76212C13.3968 5.95016 13.5213 6.11665 13.6218 6.25379L13.0174 6.97318L12.0297 5.83423C11.692 5.42319 11.2885 4.96059 10.841 4.50155C10.1808 3.82441 9.43736 3.1682 8.67821 2.69505C7.91256 2.21784 7.18054 1.95781 6.5283 1.99469C4.70092 2.09801 3.35253 2.89034 2.50201 4.20415C1.63942 5.53663 1.25462 7.46092 1.49755 9.86747C1.60852 10.9667 2.38159 12.4841 3.57467 14.1994C4.75191 15.8919 6.28217 17.7002 7.80641 19.3646C9.32903 21.0272 10.8373 22.5372 11.9656 23.632C12.5295 24.1792 12.9979 24.6221 13.3251 24.928C13.4768 25.0699 13.5981 25.1822 13.6844 25.2618L12.9422 25.9375C12.8619 25.8633 12.7612 25.7698 12.6421 25.6585C12.3111 25.3489 11.8381 24.9017 11.2692 24.3496C10.1318 23.246 8.60883 21.7215 7.06894 20.04C5.53067 18.3603 3.96715 16.5149 2.75373 14.7704C1.55616 13.0487 0.641697 11.3458 0.502607 9.96791C0.245429 7.42021 0.636966 5.24499 1.66256 3.66072C2.70024 2.05779 4.3519 1.11615 6.47185 0.996281C7.41829 0.942768 8.36058 1.31874 9.20716 1.84639C10.0602 2.3781 10.8669 3.0956 11.557 3.80347C12.2493 4.51352 12.8371 5.22717 13.2512 5.76212Z"
        fill={color}
      />
    </svg>
  );
};

export default GenericImage(BlackHeart);
