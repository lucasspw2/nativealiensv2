import styled from 'styled-components';
import {motion} from "framer-motion";
import Card from '@mui/material/Card';
import { Accordion, Typography } from '@mui/material';

export const LogoNative = styled.img`
  width: 10%;
  padding-top: 1%;
  margin-left: 25px;

  @media(max-width: 800px) {
    flex-direction: column;
    width: 20%;
    margin-left: 39%;
  }
`;

export const DFlex = styled.nav`
  display: flex;
    
  @media(max-width: 800px) {
    flex-direction: column;
  }
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
  
  @media(max-width: 800px) {
    padding: 5px;
  } 
`;

export const BackgroundSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props)=> props.imgUrl}); 
  background-size: cover;

  @media(max-width: 1400px) {
    flex-direction: column;
  }

  @media(max-width: 800px) {
    flex-direction: column;
  }
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
  margin: 5% 5%;

  @media(max-width: 1400px) {
    flex-direction: column;
  }

  @media(max-width: 800px) {
    flex-direction: column;
  }
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

  @media(max-width: 800px) {
    width: 70%;
    margin-left: 15%;
  }
`;

export const ListMenu = styled(motion.li)`
  margin-right: 9%;

  @media(max-width: 800px) {
    margin-right: 3%;
  }

`;

export const ContainerSocial = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 3%;

  @media(max-width: 800px) {
    margin-left: 30%;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
    
  @media(max-width: 800px) {
    margin-left: -3%;
  }
`;

export const FlexContentCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerFooter = styled.div`
  padding: 2%;
  background: linear-gradient(90deg, rgba(179,164,202,1) 47%, rgba(172,187,219,1) 80%);
`;

export const AlienPrincipal = styled.div`
  width: 73%;
  margin-left: -3%;

  @media(max-width: 800px) {
    margin-left: 9%;
    width: 90%;
  }
`;

export const ContainerCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media(max-width: 1400px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99%;
    margin-left: 2%;
  }

  @media(max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin-left: 2%;
  }

`;

export const CarouselCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 20px 20px 0 0;

`;

export const CarouselDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;

`;

export const CarouselContentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  margin-bottom: 5%;
`;

export const CarouselButton = styled.button`
  width: 95%;
  background: linear-gradient(90deg, rgba(186,222,228,1) 0%, rgba(135,94,223,1) 100%, rgba(169,179,226,1) 100%);
  padding: 5%;
  border-radius: 20px;
  border: 2px solid white;
  color: white; 
  box-shadow: 3px 3px 3px 3px #f4f4f4;
`;

export const TitleCard = styled.p`
  font-size: 18px;
  background: -webkit-linear-gradient(purple, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media(max-width: 1280px) {
    font-size: 16px;
    background: -webkit-linear-gradient(purple, blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

