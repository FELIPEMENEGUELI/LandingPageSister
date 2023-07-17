import * as Styles from "./style.js";
import React from "react";
import { About } from "../../Components/About/index.js";
import { InfoMedia } from "../../Components/InfoMedia/index.js";
import { CarouselImages } from "../../Components/CarouselImgs/index.js";
import { GetImagesDestaques } from "../../Archives/index.js";

export default function Home() {
  const imgNoivas = GetImagesDestaques;

  return (
    <Styles.Container>
      <Styles.Noiva>
        <InfoMedia />
      </Styles.Noiva>
      <Styles.NoivaDisplay>
        {imgNoivas.map((index, id) =>
          index.img ? (
            <Styles.Imagem key={id}>
              <img src={index.img} alt={index.img} loading="lazy" />
            </Styles.Imagem>
          ) : null
        )}
      </Styles.NoivaDisplay>
      <Styles.AboutSiter>
        {/* <About /> */}
      </Styles.AboutSiter>
      <Styles.Carousel>
        {/* <CarouselImages /> */}
      </Styles.Carousel>
    </Styles.Container>
  );  
}
