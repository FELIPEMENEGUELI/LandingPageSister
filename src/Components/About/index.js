import React from "react";
import * as Styles from "./style";
import { GetAbout } from "../../Archives";

export function About() {
  const infoAbout = GetAbout;
  const imgAbout = infoAbout[0].imgAbout;

  return (
    <Styles.Container id="about">
      <Styles.Text>
        <h3>Sobre!</h3>
        <Styles.Separator />
        {infoAbout.map((index, id) => (
          <div key={id}>
            {index.titleText ? <p>{index.titleText}</p> : null}
            {index.description ? <p>{index.description}</p> : null}
            {index.subDescription ? <p>{index.subDescription}</p> : null}
            {index.subDescriptionText ? (
              <p>{index.subDescriptionText}</p>
            ) : null}
            {index.text ? <p>{index.text}</p> : null}
          </div>
        ))}
      </Styles.Text>
      <Styles.StyleImg>
        <img src={imgAbout} alt={`Imagem sobre ${imgAbout}`} loading="lazy" />
      </Styles.StyleImg>
    </Styles.Container>
  );
}
