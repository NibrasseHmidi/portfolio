import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'MES COMPÉTENCES'} span={'COMPÉTENCES'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'70%'}
                          
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'90%'}
                         
                        />

<ProgressBar 
                            title={'Bootstrap '}
                            width={'65%'}
                            
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'85%'}
                         
                        />
                        <ProgressBar 
                            title={'Laravel 5.2'}
                            width={'50%'}
                           
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'40%'}
                          
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'75%'}
                            
                        />
                           <ProgressBar 
                            title={'Express '}
                            width={'75%'}
                           
                        />

<ProgressBar 
                            title={'MongoDB '}
                            width={'75%'}
                           
                        />


<ProgressBar 
                            title={'Lunix-Ubuntu '}
                            width={'90%'}
                            
                        />
             
<ProgressBar 
                            title={'Raspbian '}
                            width={'60%'}
                            
                        />    

                        <ProgressBar 
                            title={'Administration de réseau et sécurité'}
                            width={'70%'}
                            
                        />    
  <ProgressBar 
                            title={'Réseaux locaux et sans fils'}
                            width={'70%'}
                           
                        />    
                          <ProgressBar 
                            title={'CCNA'}
                            width={'70%'}
                            
                        />

                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
