import React from "react";
import styled from "styled-components";
import resume from "../img/f.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      {/* <div className="left-content">
                <img src={resume} alt=""/>
            </div> */}
      <div className="right-content">
        <h4>
          C'est <span>Nibrasse HMIDI</span>
        </h4>
        <p className="paragraph">
          Je me présente je suis Nibrasse Hmidi titulaire d'un master
          professionnel en administration et sécurité des systèmes et des
          réseaux et j'ai une Licence appliquée en Réseaux Informatiques . j'ai
          effectué une formation en développement web full stack js, je termine
          mon stage professionnelle en tant que développeur front end . Je suis
          à la recherche d'une nouvelle opportunité en tant que développeur web
          frontend
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Nom</p>
            <p>Âge</p>
            <p>téléphone</p>
            <p>Nationalité </p>
            <p>Langages </p>
            <p>localisation</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>:Nibrasse HMIDI</p>
            <p>: 27</p>
            <p>:27896697</p>
            <p>: Tunisian </p>
            <p>: arabic, French, English </p>
            <p>: Tunis,Gafsa,Metlaoui</p>
            <p>: MARN full-stack javascript</p>
          </div>
        </div>
        <PrimaryButton title={"Download Cv"} />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 70%;
      height: 70%;
      // border-radius:50%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
