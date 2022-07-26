import { BackgroundSection, TitleHistory, HistoryContent, AlienHistory } from './components';
import teste3 from '../assets/2.webp';
import Lux13 from '../assets/lux13.webp';

export default function Nave({ nativeNave }) {
  return (
    <BackgroundSection ref={nativeNave} imgUrl={teste3}>
      <div style={{ marginLeft: '3%' }}>
        <TitleHistory>MOTHERSHIP “LUX-13”</TitleHistory>
        <HistoryContent>
          After a long time traveling beyond the speed of light, the spacecraft Lux 13 was one of the first to land on Earth.
          The mothership was unable to make a successful landing, so it crashed unexpectedly, having several damages that ended up damaging its structure,
          which made it impossible to take off again.  Because it was created with rare and scarce materials in Kepler-145, Lux-13 was considered the largest and fastest vessel of the Native Aliens.
          Lux-13 is watched and studied daily in Area 51, and its technology has yet to be unveiled.  Meaning of the word ‘’lux’’= “the one that illuminates”, “illuminated”, “luminous”, “enlightened”.
          “13” = ''restart'', ''end of a cycle''.

        </HistoryContent>
      </div>
      <AlienHistory src={Lux13}
        initial={{ x: 0, y: 0 }}
        animate={{ x: 0, y: 40 }}
        transition={{ ease: "linear", duration: 2, repeatType: "reverse", repeat: Infinity }}
      />
    </BackgroundSection>
  )
}
