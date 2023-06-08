import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#080808" }}
      >
        <div className="container-fluid pt-3">
          <section>
            <a
              className="btn btn-outline-light btn-floating m-2"
              href="https://www.twitter.com/MonProjet"
              role="button"
            >
              <Icon icon="mdi:twitter" />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-2"
              href="https://discord.com/invite/MonProjet"
              role="button"
            >
              <Icon icon="ic:baseline-discord" />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-2"
              href="https://opensea.io/collection/MonProjet"
              role="button"
            >
              <Icon icon="simple-icons:opensea" />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-2"
              href="https://medium.com/MonProjet"
              role="button"
            >
              <Icon icon="bi:medium" />
            </a>
          </section>
        </div>
        <div
          className="text-secondary p-3"
          style={{ backgroundColor: "#050505" }}
        >
          <a className="text-secondary" href=" https://MonProjet.xyz/">
            MonProjet.io
          </a>
        </div>
      </footer>
    </>
  );
}
