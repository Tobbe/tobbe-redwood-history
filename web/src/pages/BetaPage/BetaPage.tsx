import { Link, routes } from '@redwoodjs/router'

const BetaPage = () => {
  return (
    <>
      <h1>BetaPage</h1>
      <p>
        Find me in <code>./web/src/pages/BetaPage/BetaPage.tsx</code>
      </p>
      <p>
        My default route is named <code>beta</code>, link to me with `
        <Link to={routes.beta()}>Beta</Link>`
      </p>
    </>
  )
}

export default BetaPage
