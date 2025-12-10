import "./Nav.css"

interface Props {
  page: string,
  handlePageChange: (view: string) => void
}

const views: string[] = ["home", "edit"]

const Nav = ({ page, handlePageChange }: Props ) => {

  return (
    <nav>
      <ul>
        {views.map((view, index) => (
          <li key={index}>
            <button className={page === view ? "active" : ""} onClick={() => { handlePageChange(view) }}>
              {view}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;