import React from 'react'
import styled from 'styled-components';
import resume from '../img/f.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            {/* <div className="left-content">
                <img src={resume} alt=""/>
            </div> */}
            <div className="right-content">
                <h4>C'est  <span>Nibrasse HMIDI</span></h4>
                <p className="paragraph">
                j’ai un Master professionnel en administration et sécurité des systèmes et des réseaux,développeuse Web (MERN) Full Stack, active ,curieuse dynamique, passionnée par la programmation et le développement web.. Je suis motivée, j'essaye toujours de faire mon mieux et apprendre le métier developement  avec des bases solides grâce à plusieurs projets académiques et professionnels.
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
                        <p>: 26</p>
                        <p>:27896697</p>
                        <p>:  Tunisian </p>
                        <p>: arabic, French, English </p>
                        <p>: Tunis,Gafsa,Metlaoui</p>
                        <p>: MARN full-stack javascript</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 70%;
            height:70%;
            // border-radius:50%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
