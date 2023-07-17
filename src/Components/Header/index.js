import React, { useState } from "react";
import * as Styles from "./style.js";
import { GetImgProfile, GetNAvBar } from "../../Mock/index.js";
import { Link } from "react-router-dom";

export function Header() {
  const infoProfile = GetImgProfile;
  const imgProfile = infoProfile;
  const infoNavBar = GetNAvBar;

  const [, setActive] = useState(infoNavBar[0]);
  const actives = window.location.pathname;

  return (
    <Styles.Container>
      <Styles.NavBar>
        {infoNavBar.map((info, id) =>
          info.title ? (
            <Link style={{textDecoration: "none"}} to={`${info.redirect}`}>
              <Styles.ButtonToggle
                id={id}
                key={info.redirect}
                active={actives === info.redirect}
                onClick={() => setActive(info.redirect)}
              >
                <span active={actives === info.redirect}>
                  {info.title}
                </span>
              </Styles.ButtonToggle>
            </Link>
          ) : null
        )}
      </Styles.NavBar>

      <Styles.ImgProfile>
        <img src={imgProfile} alt="Teste de imagem" loading="lazy" />
      </Styles.ImgProfile>
    </Styles.Container>
  );
}
