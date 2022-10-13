import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/y.svg';
import intelligence from '../img/yah.svg';
import gamedev from '../img/ya.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Mes Services'} span={'mes services'} />
                <div className="services">
                    
                    <ServiceCard 
                        image={design} 
                        title={'Front-End '} 
                        paragraph={`
                        ⚡ Développez des interfaces front-end/utilisateurs hautement interactives pour vos applications Web et mobiles 
                     
                        \n
                        ⚡ Concevoir les interactions des utilisateurs sur les pages Web 
                        
                       \n
                        
                        ⚡ Écrire un code propre et fonctionnel sur le devant`}
                      
                    />
                   
                        <ServiceCard 
                            image={intelligence} 
                            title={'Back-End '} 

                            paragraph={'⚡ Création de serveurs et de bases de données pour les fonctionnalités.'}
                        />
                   
                    <ServiceCard 
                        image={gamedev} 
                        title={'Administration et sécurité des systèmes et des réseaux'} 
                        // paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
