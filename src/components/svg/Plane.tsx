export const Plane = ({ size = 24, strokeWidth = 2, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    {...rest}
  >
    <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)
