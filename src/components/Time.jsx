import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';
import { CardTimeCeo, TitleTime, TimeText, CardTime, ContentTime, FlexContentCenter, BackgroundContainer } from './components';
import lucassilva from '../assets/lucassilva.webp';
import mirela from '../assets/mirela.webp';
import borja from '../assets/borja.webp';
import thales from '../assets/Thales.webp';
import marcus from '../assets/marco.webp';
import djonga from '../assets/djonga.webp';
import gabriel from '../assets/felipe.webp';
import arthur from '../assets/arthur.webp';
import clarisse from '../assets/clarisse.webp';
import test4 from '../assets/4.jpg'


export default function Time({ time }) {
  const ObjCeo = { nome: 'Lucas Silva', funcao: 'Co-Founder & CEO Chief Executive Officer', nft: lucassilva }
  const ObjTime1 = [
    { nome: 'Mirela Pedrosa', funcao: 'Co-Founder & CCO chief compliance officer', nft: mirela }
    , { nome: 'Arthur Chequer', funcao: 'Co-Founder & COO chief operating officer', nft: arthur }
    , { nome: 'Thales Pacheco', funcao: 'Co-Founder C CCO chief creative officer', nft: thales }
    , { nome: 'Lucas Borja', funcao: 'Dev Team', nft: borja }

  ]
  const ObjTime2 = [
    { nome: 'Clarisse Rodrigues', funcao: 'Dev Team', nft: clarisse }
    , { nome: 'Gabriel Felipe', funcao: 'Dev Team', nft: gabriel }
    , { nome: 'Marcos Felix', funcao: 'Dev Team', nft: marcus }
    , { nome: 'João Victor', funcao: 'Dev Team', nft: djonga }
  ]

  const styles = {
    borda: { borderBottom: '1px solid white' },
    fontBold: { fontWeight: 'bold', fontFamily: 'Audiowide' },
    icon: { fontSize: 40, color: 'white' },
    bgTransparent: { background: 'transparent' }
  }

  return (
    <BackgroundContainer imgUrl={test4} style={{ paddingBottom: '1%' }} ref={time}>
      <TitleTime>OUR TEAM</TitleTime>
      <FlexContentCenter>
        <CardTimeCeo sx={styles.bgTransparent}>
          <CardMedia
            component="img"
            alt="Time"
            height="320"
            image={ObjCeo.nft}
            sx={styles.borda}
          />
          <CardContent >
            <TimeText variant="h5" sx={styles.fontBold}>
              {ObjCeo.nome}
            </TimeText>
            <TimeText variant="body2" component="div" sx={styles.fontBold}>
              {ObjCeo.funcao}
            </TimeText>
          </CardContent>
          <FlexContentCenter>
            <Button><InstagramIcon sx={styles.icon} /></Button>
            <Button><TwitterIcon sx={styles.icon} /></Button>
          </FlexContentCenter>
        </CardTimeCeo>
      </FlexContentCenter>
      <ContentTime>
        {ObjTime1.map((team) => (
          <CardTime sx={styles.bgTransparent} key={team.nome}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={team.nft}
              sx={styles.borda}
            />
            <CardContent>
              <TimeText gutterBottom variant="h6" component="div" sx={styles.fontBold}>
                {team.nome}
              </TimeText>
              <TimeText variant="body2" sx={styles.fontBold}>
                {team.funcao}
              </TimeText>
            </CardContent>
            <FlexContentCenter>
              <Button><InstagramIcon sx={styles.icon} /></Button>
              <Button><TwitterIcon sx={styles.icon} /></Button>
            </FlexContentCenter>
          </CardTime>

        ))}
      </ContentTime>
      <ContentTime>
        {ObjTime2.map((team2) => (
          <CardTime sx={styles.bgTransparent} key={team2.nome}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={team2.nft}
              sx={styles.borda}
            />
            <CardContent>
              <TimeText gutterBottom variant="h6" component="div" sx={styles.fontBold}>
                {team2.nome}
              </TimeText>
              <TimeText variant="body2" sx={styles.fontBold}>
                {team2.funcao}
              </TimeText>
            </CardContent>
            <FlexContentCenter>
              <Button><InstagramIcon sx={styles.icon} /></Button>
              <Button><TwitterIcon sx={styles.icon} /></Button>
            </FlexContentCenter>
          </CardTime>
        ))}
      </ContentTime>
    </BackgroundContainer>
  )
}