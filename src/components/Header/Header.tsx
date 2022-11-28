import "./Header.css";

type Props = {
  children?: JSX.Element;
  title: string;
};

const Header = ({ children, title }: Props) => {
  return (
    <div className="companies__header">
      <h2 className="title">{title}</h2>
      {children}
    </div>
  );
};

export default Header;
