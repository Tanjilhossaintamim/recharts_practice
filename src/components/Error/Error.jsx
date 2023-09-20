import { Link, NavLink, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{ textAlign: "center" }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <NavLink
        className={({ isActive, isPending }) => {
          isActive ? "active" : isPending ? "pending" : "";
        }}
        to={"/"}
      >
        Go Home
      </NavLink>
    </div>
  );
}
