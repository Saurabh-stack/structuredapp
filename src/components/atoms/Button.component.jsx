import { classNames } from "../../utilities/classNames";
import { SpinnerCircular } from "spinners-react";
const Button = ({
  children,
  customClass,
  disable,
  isSubmitting,
  spinnerControl,
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled={disable || isSubmitting}
      className={classNames(
        `bg-signature_green rounded px-5 py-2 font-medium shadow-sm transition duration-150 hover:bg-teal-600
        ${
          disable &&
          "!cursor-not-allowed !bg-gray-600 hover:!bg-gray-600 !text-black !border-none"
        }`,
        customClass
      )}
    >
      <div className="flex items-center">
        {isSubmitting && (
          <SpinnerCircular
            className="mr-2"
            size={spinnerControl?.size ? spinnerControl.size : 25}
            thickness={
              spinnerControl?.thickness ? spinnerControl.thickness : 250
            }
            speed={spinnerControl?.speed ? spinnerControl.speed : 100}
            color={spinnerControl?.color ? spinnerControl.color : "white"}
            secondaryColor={
              spinnerControl?.secondaryColor
                ? spinnerControl.secondaryColor
                : "teal"
            }
          />
        )}
        {children}
      </div>
    </button>
  );
};

export default Button;
