
interface HeaderProps {
  title: string;
  image: string;
}


const Header = (props: HeaderProps) => {
  return (
    <div className="header">
      <h4>{props.title}</h4>
      <img src={props.image} alt={props.title} className="image" width="500"/>    
      </div>
  );
};

export default Header;
