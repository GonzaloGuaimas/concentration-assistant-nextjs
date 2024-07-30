import Link from "next/link";

const CallToActionBtn = () => {
  return (
    <Link
      href={"/application"}
      className="px-3 py-3 text-dark_white bg-primary whitespace-nowrap text-center hover:bg-opacity-85 transition-all duration-300 rounded-xl text-sm"
    >
      👉🏼 ¡Probar la app! 🚀
    </Link>
  );
};

export default CallToActionBtn;
