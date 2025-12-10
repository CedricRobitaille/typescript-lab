

interface Page {
  page: string
}

const views: string[] = ["home", "edit"]

const Nav = ({page}: Page) => {

  const handleNavClick = (view: string) => {
    console.log(view)
  }

  return (
    <nav>
      <ul>
        {views.map((view, index) => (
          <li key={index}>
            <button className={page === view ? "active" : ""} onClick={() => { handleNavClick(view) }}>
              {view}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;