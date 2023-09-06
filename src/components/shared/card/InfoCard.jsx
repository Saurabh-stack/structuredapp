import React from "react";
import Card from ".";
import Button from "../../atoms/Button.component";

const InfoCard = ({
  title,
  id,
  description,
  footerTitle,
  footerText,
  buttonText,
  onButtonClick,
  pill,
  className,
  ...rest
}) => {
  return (
    <Card title={title} key={id} className={className} pill={pill} {...rest}>
      <div className="flex flex-col my-3 w-full justify-between">
        <div className="my-1 text-gray-400">{description}</div>
        <div className="flex my-1 justify-between items-center">
          {footerTitle && (
            <div className="text-gray-400">
              {footerTitle}
              <span className="text-gray-200">{footerText} </span>
            </div>
          )}
          {buttonText && <Button onClick={onButtonClick}>{buttonText}</Button>}
        </div>
      </div>
    </Card>
  );
};

export default InfoCard;
