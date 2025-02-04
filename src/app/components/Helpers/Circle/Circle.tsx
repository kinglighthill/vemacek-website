interface CircleProps {
  className?: string;
  width: number;
  height: number;
  fill?: boolean;
  [key: string]: any;
}

const Circle: React.FC<CircleProps> = ({
  className = "",
  width,
  height,
  fill = true,
  ...props
}) => {
  return (
    <div
      className={`absolute ${className} ${
        fill ? "bg-primary" : "bg-[#ffe6db]"
      } rounded-full`}
      style={{ width: `${width}px`, height: `${height}px` }}
      {...props}
    ></div>
  );
};

export default Circle;
