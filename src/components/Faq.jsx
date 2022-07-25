import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BackgroundContainer, ContentFaq, TitleHistory, FaqAccordeon } from './components';
import teste5 from '../assets/5.jpg';
import { Perguntas } from './QuestionFaq';

export default function Faq({ faq }) {

  const styles = {
    colorBG: { color: 'white', background: 'rgb(127,109,250)' },
    colorBG2: { color: 'white', backgroundColor: '#8a7ae7' },
    white: { color: 'white' },
  }

  const pergunta1 =  {p: 'What is Native Aliens?',
  r: 'Native Aliens is a NFT collection of 10,000 Native Aliens, uniquely generated from over 139 hand drawn traits! Owning a Native Alien NFT allows you to take part in the project and be part of the community.'
}

  return (
    <BackgroundContainer imgUrl={teste5} ref={faq} style={{ padding: '1%' }}>
      <ContentFaq>
        <TitleHistory>FAQ'S</TitleHistory>
        <FaqAccordeon style={styles.colorBG}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={styles.white} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>{pergunta1.p}</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>{pergunta1.r}</p>
          </AccordionDetails>
        </FaqAccordeon>
        {Perguntas.map((per) => (
          <FaqAccordeon sx={styles.colorBG2} key={per.p}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={styles.white} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p>{per.p}</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>{per.r}</p>
            </AccordionDetails>
          </FaqAccordeon>
        ))}
      </ContentFaq>
    </BackgroundContainer>
  )
}