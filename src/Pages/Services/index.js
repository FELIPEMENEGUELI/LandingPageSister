import React from "react";
import * as Styles from "./style";
import { GetImagesServices } from "../../Mock";

export function Services() {
  const infoService = GetImagesServices;
  return (
    <Styles.Container>
      <Styles.NoivaDisplay>
          {infoService.map((index, id) =>
            index.img ? (
              <Styles.Imagem key={id}>
                <img src={index.img} alt={index.img} loading="lazy" />
              </Styles.Imagem>
            ) : null
          )}
        </Styles.NoivaDisplay>
    </Styles.Container>
  );
}
