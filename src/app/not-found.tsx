import Image from "next/image";
import NotFoundImage from "../../public/assets/images/404.svg";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src={NotFoundImage} alt="404" />
      <p className="text-2xl font-bold">
        OOPS! The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound