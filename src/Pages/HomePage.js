import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedinIcon from '@material-ui/icons/LinkedIn';

import Particle from '../Components/Particle';
import MessengerCustomerChat from 'react-messenger-customer-chat';


function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Bonjour, je me présente je suis <span>Nibrasse HMIDI</span></h1>
                <p>
                Je viens de terminer ma formation de développeur web (MERN full-stack js) chez GoMyCode et je cherche un poste de développeur web.

Si vous êtes à la recherche d’un nouveau collaborateur dans le domaine du développement Frontend ou Backend, Alors n’hésitez pas à me contacter.
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/nibrasse.hmidi.5/" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/NibrasseHmidi" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.instagram.com/nibrassehmidi/" className="icon i-youtube">
                        <InstagramIcon />
                    </a>
                    <a href="https://www.instagram.com/nibrassehmidi/" className="icon i-Linkedin">
                        <LinkedinIcon />
                    </a>
                </div>
            </div>
            <MessengerCustomerChat
    pageId="100008310638349"
    appId="334238384873908"
   
  />,
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid pink;
                    color: pink;
                }
            }
            
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
