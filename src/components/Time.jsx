import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';
import { CardTimeCeo, TitleTime, TimeText, CardTime, ContentTime, FlexContentCenter, BackgroundContainer } from './components';
import { ObjCeo, ObjTime1, ObjTime2 } from './config/TimeData';
import test4 from '../assets/4.webp';

export default function Time({ time }) {

  const styles = {
    borda: { borderBottom: '1px solid white' },
    fontBold: { fontWeight: 'bold', fontFamily: 'Audiowide' },
    icon: { fontSize: 40, color: 'white' },
    bgTransparent: { background: 'transparent', width: '300px', marginBottom: '1%' }
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
            <Button><a target="_blank" rel="noreferrer" href={ObjCeo.insta}><InstagramIcon sx={styles.icon} /></a></Button>
            <Button><a target="_blank" rel="noreferrer" href={ObjCeo.twitter}><TwitterIcon sx={styles.icon} /></a></Button>
          </FlexContentCenter>
        </CardTimeCeo>
      </FlexContentCenter>
      <ContentTime>
        {ObjTime1.map((team) => (
          <FlexContentCenter>
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
                {team.insta && (
                  <Button>
                    <a target="_blank" rel="noreferrer" href={team.insta}><InstagramIcon sx={styles.icon} /></a>
                  </Button>
                )}
                {team.twitter && (
                  <Button>
                    <a target="_blank" rel="noreferrer" href={team.twitter}><TwitterIcon sx={styles.icon} /></a>
                  </Button>
                )}

              </FlexContentCenter>
            </CardTime>
          </FlexContentCenter>
        ))}
      </ContentTime>
      <ContentTime>
        {ObjTime2.map((team2) => (
          <FlexContentCenter>
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
                {team2.insta && (
                  <Button>
                    <a target="_blank" rel="noreferrer" href={team2.insta}><InstagramIcon sx={styles.icon} /></a>
                  </Button>
                )}
                {team2.twitter && (
                  <Button>
                    <a target="_blank" rel="noreferrer" href={team2.twitter}><TwitterIcon sx={styles.icon} /></a>
                  </Button>
                )}
              </FlexContentCenter>
            </CardTime>
          </FlexContentCenter>
        ))}
      </ContentTime>
    </BackgroundContainer>
  )
}