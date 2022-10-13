import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Continuer'} span={'continuer'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Expériences professionnelles'} />
                </div>
                    <div className="resume-content">
                    <ResumeItem 
                        year={'De janvier 2022 à  mai 2022'} 
                        title={'DEVELOPPEUR WEB FRONT_END'}
                        subTitle={'Teklick'}
                        text={'Participer au Développement d’une application web nommée “Canadin-app” utilisée par des dizaines des recruteurs basé au Québec et embauchant depuis l’international.'} 
                    />
                    <ResumeItem 
                        year={'De mai 2021 à  novembre 2021'} 
                        title={'DEVELOPPEUR WEB FULL STACK'}
                        subTitle={'GoMyCode'}
                        text={'Développement d’une application web responsive d’annonces de location des équipements FrontEnd: Reactjs Backend: NodeJS, ExpressJS, MongoDB'} 
                    />
                
                    {/* <ResumeItem 
                        year={'De janvier 2020 à  janvier 2021'} 
                        title={'Agente Administratif'}
                        subTitle={'Ecole Primaire Privée Le Pilote Metlaoui'}
                        text={'Traiter le courrier : envois et réception , Identifier, établir, vérifier et mettre à jour les documents administratifs.Reproduire, diffuser, classer et archiver manuellement des documents'} 
                    /> */}

                    <ResumeItem 
                        year={'De février 2019 à août 2019'} 
                        title={'PROJET DE FIN D’ÉTUDE:'}
                        subTitle={'l’Institut Supérieur d’Informatique de Mahdia'}
                        text={'Implémentation d’un algorithme de routage basé sur RSSI et LQI Tâches: Configuration de la carte Raspberry pi B+. Etude de fonctionnement des métriques RSSI et LQI . Elaboration et implémentation de l algorithme de routage. '} 
                    />

                    <ResumeItem 
                        year={'De juillet 2018 à août 2018'} 
                        title={'STAGE OUVRIER'}
                        subTitle={'Compagnie des phosphates de Gafsa'}
                        text={'Gestion des tâches et surveillance des ressources via le Windows Server 2012'} 
                    />

                    <ResumeItem 
                        year={'De juillet 2016 à août 2016'} 
                        title={'STAGE OUVRIER'}
                        subTitle={'Société Tunisie Télécom'}
                        text={'Prise en charge des réclamations de dérangement client, Vérification de la couverture réseaux en temps réel'} 
                    />

                    <ResumeItem 
                        year={'De juillet 2015 à août 2015'} 
                        title={'STAGE TECHNICIEN'} 
                        subTitle={'Poste Tunisienne'} 
                        text={'agent de guichet: Traitement des demandes clients,'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Formations académiques'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'De 2017 à 2019'} 
                        title={'Mastère professionnelle en administration et sécurité des systèmes et des réseaux'}
                        subTitle={'L’Institut Supérieur d’Informatique de Mahdia'}
                        // text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'De 2014 à 2017'} 
                        title={'Licence appliquée en Réseaux Informatiques'}
                        subTitle={'L’Institut Supérieur d’Informatique de Mahdia'}
                        // text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'De 2013 à 2014'} 
                        title={'Baccalauréat section Mathématiques'}
                        subTitle={'Lycée Mixte Metlaoui'}
                        // text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
