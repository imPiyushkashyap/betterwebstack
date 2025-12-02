import Link from "next/link";

const UnderlineButton = () => {
  return (
    <Link href="/">
      <button
        className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
      >
        Back
      </button>
    </Link>
  );
};

export default UnderlineButton;
