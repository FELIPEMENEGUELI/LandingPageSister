import * as Styles from "./style.js";
import React from "react";
import { GetImagesNoivas } from "../../Mock/index.js";

export default function PageNoivas() {
  const infoImgNoiva = GetImagesNoivas;

  return (
    <Styles.Container>
      <Styles.Noiva>
        <Styles.NoivaDisplay>
          {infoImgNoiva.map((index, id) =>
            index.img ? (
              <Styles.Imagem key={id}>
                <img src={index.img} alt={index.img} loading="lazy" />
              </Styles.Imagem>
            ) : null
          )}
        </Styles.NoivaDisplay>
      </Styles.Noiva>
    </Styles.Container>
  );
}
