import styled from 'styled-components';
import {motion} from "framer-motion";
import Card from '@mui/material/Card';
import { Accordion, Typography } from '@mui/material';

export const LogoNative = styled.img`
    width: 10%;
    padding-top: 1%;
    margin-left: 25px;
`;

export const DFlex = styled.nav`
    display: flex;
`;

export const DescriptionOpensea = styled.p`
    color: white;
    font-size: 30px;
    font-weight: 700;

`;

export const NavContent = styled.button`
    font-weight: 700;
    font-size: 20px;
    color: #6328E0;
    cursor: pointer;
    border: 2px solid #6328E0;
    border-radius: 30px;
    padding: 10px;
    background: white;
    box-shadow: -6px 18px 8px -6px rgba(55, 55, 155, 1);
    
`;

export const BackgroundSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${(props)=> props.imgUrl}); 
    background-size: cover;
`;

export const AlienHistory = styled(motion.img)`
    width: 50%;
    height: auto;
`;

export const TitleHistory = styled.p`
    font-size: 40px;
    color: white;
`;

export const HistoryContent = styled.p`
    font-size: 20px;
    color: white;
    margin-right: 5%;
    line-height: 1.2;
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 20px;
`;

export const BackgroundContainer = styled.div`
    background: url(${(props)=> props.imgUrl});
    background-size: cover;  
`;

export const ContentFaq = styled.div`
    margin: 2% 5%;
`;

export const CardTimeCeo = styled(Card)`
    max-width: 350;
    background: transparent;
    width: 24%;
    border: 2px solid white;
    box-shadow: -6px 18px 8px -6px;
`;

export const TitleTime = styled.p`
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: white;
    font-weight: 600;
    padding-top: 3%; 
    margin: 0;
    margin-bottom: 1%;
`;

export const TimeText = styled(Typography)`
    color: white;
    display: flex;
    justify-content: center;
    font-Weight: 600;
    text-align: center;
    height: 40px;
`;

export const CardTime = styled(Card)`
    background: transparent;
    width: 24%;
    border: 2px solid white;
    box-shadow: -6px 18px 8px -6px;
`;

export const ContentTime = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5% 10%;
`;

export const FaqAccordeon = styled(Accordion)`
    border: 1px solid white;
    padding: 1%;
`;

export const ContainerPrincipal = styled.div`
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    margin-left: -17%;
`;

export const ListMenu = styled(motion.li)`
    margin-right: 9%;
`;

export const ContainerSocial = styled.ul`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 3%;
`;

export const ListContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`;

export const FlexContentCenter = styled.div`
    display: flex;
    justify-content: center;
`;

export const ContainerFooter = styled.div`
padding: 2%;
background: linear-gradient(90deg, rgba(179,164,202,1) 47%, rgba(172,187,219,1) 80%);
`;


