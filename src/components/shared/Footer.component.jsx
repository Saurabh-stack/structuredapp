import { FooterTxt_copyRight, FooterTxt_policy } from "../../constants";
const Footer = () => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center md:justify-between z-[45] w-full space-y-4 md:space-y-0 px-5 bottom-8 md:bottom-5 absolute text-[12px] md:text-[14px]`}
    >
      <div className="w-20 h-auto"></div>
      <div>
        <span className="text-sky-500">{FooterTxt_policy}</span>
        <span> | </span>
        <span>{FooterTxt_copyRight}</span>
      </div>
      <div></div>
    </div>
  );
};
export default Footer;
