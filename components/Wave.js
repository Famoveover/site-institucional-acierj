export default function Wave() {
  return (
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
        marginTop: "-2px",
      }}
      preserveAspectRatio="none"
      className="text-[#F5F5F5] dark:text-gray-800"
    >
      <path
        d="M0,40 Q360,100 720,40 T1440,40 L1440,120 L0,120 Z"
        fill="currentColor"
      />
    </svg>
  );
}
