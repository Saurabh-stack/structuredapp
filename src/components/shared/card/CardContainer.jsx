const CardContainer = ({ children }) => {
  return (
    <div className="mx-8 my-28 px-8 py-8 border-2 border-signature_border rounded-2xl">
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default CardContainer;
