interface Sgv {
  onClick?: () => void;
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

export const Heart: React.FC<Sgv> = (props) => (
  <svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12.383 6.24.674.777.018-.026a21.752 21.752 0 0 1 2.05-2.492c.65-.677 1.384-1.332 2.136-1.805.758-.476 1.485-.736 2.137-.7 1.827.104 3.175.896 4.026 2.21.863 1.333 1.247 3.257 1.005 5.663-.111 1.098-.909 2.644-2.143 4.409-1.218 1.74-2.802 3.61-4.38 5.337a111.46 111.46 0 0 1-5.608 5.69l.728.688a112.428 112.428 0 0 0 5.619-5.704c1.59-1.741 3.207-3.648 4.46-5.438 1.236-1.766 2.18-3.501 2.318-4.881.258-2.548-.134-4.723-1.16-6.307-1.037-1.603-2.689-2.545-4.809-2.665-.947-.053-1.885.323-2.725.851-.847.533-1.644 1.25-2.325 1.959a22.74 22.74 0 0 0-2.02 2.433Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.251 5.762c.146.188.27.355.37.492l-.604.72-.987-1.14a21.23 21.23 0 0 0-1.189-1.332c-.66-.678-1.404-1.334-2.163-1.807-.765-.477-1.497-.737-2.15-.7-1.827.103-3.175.895-4.026 2.21-.863 1.332-1.247 3.256-1.004 5.662.11 1.1.884 2.617 2.077 4.332 1.177 1.693 2.707 3.501 4.231 5.166a103.156 103.156 0 0 0 5.878 5.897l-.742.675-.3-.279A104.1 104.1 0 0 1 7.07 20.04c-1.538-1.679-3.102-3.524-4.315-5.269C1.556 13.05.642 11.346.503 9.968.245 7.42.637 5.245 1.663 3.66 2.7 2.058 4.352 1.116 6.472.996c.946-.053 1.889.323 2.735.85.853.532 1.66 1.25 2.35 1.957.692.71 1.28 1.424 1.694 1.96Z"
      fill="currentColor"
    />
  </svg>
);

export const Profile: React.FC<Sgv> = (props) => (
  <svg
    width={22}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 14c-4.5 0-6.68 3.301-7 3.793C1.705 21.313 1 25 1 25M11 14c4.5 0 6.68 3.301 7 3.793C20.295 21.313 21 25 21 25"
      stroke="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 14a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m13.538 10 .712.712a4.98 4.98 0 0 1-3.125 1.097A4.98 4.98 0 0 1 8 10.713L8.713 10c.67.508 1.506.81 2.412.81.906 0 1.742-.302 2.413-.81Z"
      fill="currentColor"
    />
  </svg>
);

export const Cart: React.FC<Sgv> = (props) => (
  <svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 10h11.5M11 13h9m-8.5 2.806H19M7 6.622h18l-4.5 13.266H10L7 6.622Zm0 0L5 .5H0"
      stroke="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 25.5c1.105 0 2-.914 2-2.04 0-1.128-.895-2.042-2-2.042s-2 .914-2 2.041c0 1.127.895 2.041 2 2.041Zm0-1.02c.552 0 1-.457 1-1.02a1.01 1.01 0 0 0-1-1.021c-.552 0-1 .457-1 1.02 0 .564.448 1.02 1 1.02ZM18 25.5c1.105 0 2-.914 2-2.04 0-1.128-.895-2.042-2-2.042s-2 .914-2 2.041c0 1.127.895 2.041 2 2.041Zm0-1.02c.552 0 1-.457 1-1.02a1.01 1.01 0 0 0-1-1.021c-.552 0-1 .457-1 1.02 0 .564.448 1.02 1 1.02Z"
      fill="currentColor"
    />
  </svg>
);

export const Logout: React.FC<Sgv> = (props) => (
  <svg
    width={19}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.5 1v6m0 19v-5M9.5 14h8m0 0-4 4m4-4L14 10.5M15 1H6a5 5 0 0 0-5 5v15a5 5 0 0 0 5 5h9"
      stroke="currentColor"
    />
  </svg>
);

export const Search: React.FC<Sgv> = (props) => (
  <svg
    height="27"
    viewBox="0 0 23 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="11.5" cy="11.5" r="10.5" stroke="currentColor" />
    <path d="M18.1411 20.0683L22.2307 25.7078" stroke="currentColor" />
  </svg>
);

export const Logo: React.FC<Sgv> = (props) => (
  <svg
    width={111}
    height={61}
    viewBox="0 0 111 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.396 19.5c.034-.937 0-1.5 0-1.5H5.003s-.202 6.2 2.976 7.933c2.57 1.402 5.274 1.444 7.812 0 1.316-.749 1.984-2.285 2.318-3.808m.287-2.625S20 18.596 20 20.5s-1.891 1.625-1.891 1.625m.287-2.625c-.027.729-.089 1.718-.287 2.625"
      stroke="currentColor"
      strokeWidth={0.5}
    />
    <path
      d="M45.703 22.888c0-.909-.215-1.675-.644-2.3-.42-.635-1.09-1.192-2.007-1.67-.908-.488-2.285-.986-4.131-1.494s-3.233-1.02-4.16-1.538c-.918-.518-1.592-1.118-2.022-1.802-.43-.684-.644-1.514-.644-2.49 0-1.553.654-2.808 1.963-3.765 1.308-.967 3.012-1.45 5.112-1.45 1.367 0 2.593.268 3.677.806 1.093.527 1.938 1.274 2.534 2.24.596.958.893 2.042.893 3.253h-.79c0-1.592-.587-2.906-1.758-3.94-1.172-1.046-2.69-1.568-4.556-1.568-1.875 0-3.394.42-4.556 1.26-1.152.83-1.728 1.875-1.728 3.135 0 1.279.503 2.309 1.508 3.09 1.006.782 2.666 1.475 4.981 2.08 2.315.596 4.009 1.29 5.083 2.08 1.367 1.006 2.05 2.354 2.05 4.043 0 1.075-.302 2.027-.907 2.857-.606.82-1.465 1.455-2.578 1.904-1.114.45-2.364.674-3.75.674-1.544 0-2.93-.254-4.16-.762-1.231-.517-2.159-1.25-2.784-2.197-.615-.947-.923-2.065-.923-3.354h.791c0 1.747.655 3.105 1.963 4.072 1.309.967 3.013 1.45 5.113 1.45 1.865 0 3.403-.425 4.614-1.274 1.21-.86 1.816-1.973 1.816-3.34Zm20.083-3.955c0 1.845-.332 3.481-.996 4.907-.654 1.416-1.592 2.515-2.813 3.296-1.22.771-2.626 1.157-4.218 1.157-2.403 0-4.346-.854-5.83-2.563-1.485-1.71-2.227-4.014-2.227-6.915V15.74c0-1.836.327-3.466.982-4.892.664-1.426 1.606-2.525 2.827-3.296 1.23-.781 2.636-1.172 4.218-1.172 1.592 0 2.998.39 4.22 1.172 1.23.771 2.177 1.875 2.841 3.31.664 1.426.996 3.052.996 4.878v3.194Zm-.79-3.223c0-2.578-.655-4.644-1.964-6.196C61.724 7.95 59.956 7.17 57.73 7.17c-2.198 0-3.95.776-5.26 2.329-1.308 1.543-1.962 3.647-1.962 6.313v3.12c0 1.7.293 3.204.879 4.512.595 1.3 1.44 2.3 2.534 3.003 1.094.703 2.373 1.055 3.838 1.055 2.226 0 3.989-.776 5.288-2.33 1.299-1.552 1.948-3.671 1.948-6.357V15.71Zm6.796-9.038 8.774 20.17 8.804-20.17h1.157V28h-.79V7.844L80.888 28h-.63L71.455 7.946V28h-.79V6.672h1.127Zm36.079 10.752H97.178v9.785h12.187V28H96.387V6.672h12.978v.79H97.178v9.17h10.693v.792ZM19.432 49.467c-.205 2.197-.962 3.886-2.27 5.068-1.31 1.172-3.087 1.758-5.333 1.758-1.514 0-2.856-.38-4.028-1.143-1.162-.771-2.066-1.86-2.71-3.266-.645-1.416-.972-3.032-.982-4.849V43.74c0-1.816.318-3.437.953-4.863.634-1.436 1.538-2.544 2.71-3.325 1.181-.782 2.534-1.172 4.057-1.172 2.227 0 4 .586 5.317 1.758 1.319 1.172 2.08 2.851 2.286 5.039h-.791c-.225-1.963-.909-3.452-2.051-4.468-1.143-1.025-2.73-1.538-4.76-1.538-2.071 0-3.746.781-5.025 2.344C5.535 39.076 4.9 41.17 4.9 43.798v3.135c0 1.68.284 3.169.85 4.467.566 1.29 1.377 2.295 2.432 3.018 1.064.723 2.28 1.084 3.647 1.084 2.041 0 3.633-.503 4.776-1.509 1.152-1.006 1.83-2.515 2.036-4.526h.79Zm20.053-2.534c0 1.845-.332 3.481-.996 4.907-.654 1.416-1.591 2.514-2.812 3.296-1.22.771-2.627 1.157-4.219 1.157-2.402 0-4.346-.855-5.83-2.563-1.484-1.71-2.227-4.014-2.227-6.915V43.74c0-1.836.328-3.466.982-4.892.664-1.426 1.606-2.525 2.827-3.296 1.23-.782 2.637-1.172 4.219-1.172 1.591 0 2.998.39 4.219 1.172 1.23.771 2.177 1.875 2.841 3.31.664 1.426.996 3.052.996 4.878v3.194Zm-.79-3.223c0-2.578-.655-4.644-1.964-6.196-1.308-1.563-3.076-2.344-5.302-2.344-2.198 0-3.95.776-5.26 2.329-1.308 1.543-1.962 3.648-1.962 6.313v3.12c0 1.7.293 3.204.879 4.512.596 1.3 1.44 2.3 2.534 3.003 1.094.703 2.373 1.055 3.838 1.055 2.227 0 3.99-.776 5.288-2.33 1.299-1.552 1.948-3.671 1.948-6.357V43.71Zm17.387 1.802H45.154V56h-.79V34.672h13.212v.79H45.154v9.23h10.928v.82Zm17.168 0H62.322V56h-.79V34.672h13.212v.79H62.322v9.23H73.25v.82Zm16.934-.088H79.49v9.785h12.188V56H78.699V34.672h12.979v.79H79.49v9.17h10.694v.792Zm17.08 0H96.57v9.785h12.188V56H95.779V34.672h12.979v.79H96.57v9.17h10.694v.792Z"
      fill="currentColor"
    />
  </svg>
);

export const Vk: React.FC<Sgv> = (props) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.643 25.305c-.998-.854-10.21-14.483-8.41-15.052 1.799-.57 4.07 0 4.07 0l2.411 3.969 1.93 3.167V12.11s-.486-.973-1.23-1.574c-.742-.6 5.418-.6 5.418 0v4.481s2.526-3.921 3.606-4.49c1.08-.57 4.312.01 4.312.01.36.853-5.35 7.906-5.35 7.906s8.95 6.89 8.59 7.175c-.36.285-5.212.285-5.932 0-.72-.285-5.226-4.009-5.226-4.009v4.009c0 .561-3.19.54-4.189-.314Z"
      stroke="currentColor"
    />
    <circle cx={18} cy={18} r={17.5} stroke="currentColor" />
  </svg>
);

export const Insta: React.FC<Sgv> = (props) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="a" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 19.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 1a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 19.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 1a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
      fill="currentColor"
    />
    <path
      d="M18.25 18a.25.25 0 0 1-.25.25v2A2.25 2.25 0 0 0 20.25 18h-2Zm-.25-.25a.25.25 0 0 1 .25.25h2A2.25 2.25 0 0 0 18 15.75v2Zm-.25.25a.25.25 0 0 1 .25-.25v-2A2.25 2.25 0 0 0 15.75 18h2Zm.25.25a.25.25 0 0 1-.25-.25h-2A2.25 2.25 0 0 0 18 20.25v-2Zm1.25-.25c0 .69-.56 1.25-1.25 1.25v2A3.25 3.25 0 0 0 21.25 18h-2ZM18 16.75c.69 0 1.25.56 1.25 1.25h2A3.25 3.25 0 0 0 18 14.75v2ZM16.75 18c0-.69.56-1.25 1.25-1.25v-2A3.25 3.25 0 0 0 14.75 18h2ZM18 19.25c-.69 0-1.25-.56-1.25-1.25h-2A3.25 3.25 0 0 0 18 21.25v-2Z"
      fill="currentColor"
      mask="url(#a)"
    />
    <mask id="b" fill="currentColor">
      <path d="M9 14a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-8a5 5 0 0 1-5-5v-8Z" />
    </mask>
    <path
      d="M14 10h8V8h-8v2Zm12 4v8h2v-8h-2Zm-4 12h-8v2h8v-2Zm-12-4v-8H8v8h2Zm4 4a4 4 0 0 1-4-4H8a6 6 0 0 0 6 6v-2Zm12-4a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6h-2Zm-4-12a4 4 0 0 1 4 4h2a6 6 0 0 0-6-6v2Zm-8-2a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4V8Z"
      fill="currentColor"
      mask="url(#b)"
    />
    <circle cx={22.125} cy={13.875} r={0.375} fill="currentColor" />
    <circle cx={18} cy={18} r={17.5} stroke="currentColor" />
  </svg>
);

export const Fb: React.FC<Sgv> = (props) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.5 29H15V18s-1.5 0-2.5-.5c-.143-.072-.5-.719-.5-1.5v-2h3v-.5S15 9 17.5 8s4.5-.5 4.5-.5V11c0 .5-2.16-.203-2.5 1-.16.564 0 2 0 2H23v4h-3.5v11Z"
      stroke="currentColor"
    />
    <circle cx={18} cy={18} r={17.5} stroke="currentColor" />
  </svg>
);

export const NextArrow: React.FC<Sgv> = (props) => (
  <svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m16 12 17 13.473L16 38" stroke="currentColor" />
    <circle r={24.5} transform="matrix(-1 0 0 1 25 25)" stroke="currentColor" />
  </svg>
);

export const PrevArrow: React.FC<Sgv> = (props) => (
  <svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M34 12 17 25.473 34 38" stroke="currentColor" />
    <circle cx={25} cy={25} r={24.5} stroke="currentColor" />
  </svg>
);
