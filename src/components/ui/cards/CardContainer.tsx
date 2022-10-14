interface CardContainerProps {
  title?: string;
  children?: React.ReactNode;
}

const CardContainer = ({ title, children }: CardContainerProps) => {
  return (
    <div className="h-1/3 xl:h-1/5 2xlh-1/5">
      {title ? (
        <p className="text-gray-500 font-medium mb-2 ml-2 xl:ml-0">{title}</p>
      ) : null}

      <div className="max-h-full bg-white p-3 shadow-md flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
