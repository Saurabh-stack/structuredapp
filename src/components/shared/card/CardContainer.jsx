import { classNames } from "../../../utilities/classNames";
const CardContainer = ({ children, customClass = "" }) => {
  return (
    <div
      className={classNames(
        `mx-8 my-5 px-8 py-8 border-2 border-signature_border rounded-2xl`,
        customClass
      )}
    >
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default CardContainer;
