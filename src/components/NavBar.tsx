"use client";
import Link from "next/link";

export default function Navbar() {
  function teste() {
    alert("testando");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href={"/"}>
          SysDetran
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href={"/pages/finalizados"}
              >
                Finalizados
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-danger" type="submit">
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
