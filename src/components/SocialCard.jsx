const HOVER_BY_NETWORK = [
  ["github", "hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"],
  ["linkedin", "hover:bg-[#0a66c2] hover:text-white"],
  ["twitter", "hover:bg-sky-500 hover:text-white"],
  ["gitlab", "hover:bg-orange-600 hover:text-white"],
];

const SocialCard = ({ name = "", icon = "", link = "" }) => {
  const hover =
    HOVER_BY_NETWORK.find(([key]) => name.toLowerCase().includes(key))?.[1] ??
    "hover:bg-primary-600 hover:text-white";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      title={name}
      className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-slate-300 ${hover}`}
    >
      <i className={`${icon} text-sm`} aria-hidden="true"></i>
    </a>
  );
};

export default SocialCard;
