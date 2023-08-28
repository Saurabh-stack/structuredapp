import { classNames } from "../../../utilities/classNames";

const Card = ({ noHover, title, className, children, ...rest }) => {
  return (
    <div
      className={classNames(`card px-3 py-4 lg:px-7 lg:py-6 rounded-md border-2 border-signature_border text-white bg-signature_light relative shadow-md
    transition duration-300 ${
      !noHover && "hover:border-signature_green hover:shadow-2xl"
    } md:before:hover:!opacity-100 before:hover:!opacity-0`)}
    >
      {title && <div className={`flex text-base text-xl w-full`}>{title}</div>}
      <div className="h-full w-full flex">{children}</div>
    </div>
  );
};

export default Card;
