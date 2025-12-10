import "./Header.css"

interface Data {
  title: string;
  body: string;
}

const Header = ({title, body}: Data) => {

  return (
    <header>
      <h1>{title}</h1>
      <p>{body}</p>
    </header>
  )
}

export default Header;