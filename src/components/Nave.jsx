import { BackgroundSection, TitleHistory, HistoryContent, AlienHistory } from './components';
import teste3 from '../assets/2.jpg';
import Lux13 from '../assets/lux13.png'

export default function Nave({ nativeNave }) {
  return (
    <BackgroundSection ref={nativeNave} imgUrl={teste3}>
      <div style={{ marginLeft: '3%' }}>
        <TitleHistory>NAVE-MÃE “LUX-13”</TitleHistory>
        <HistoryContent>
          Depois de um longo tempo viajando além da velocidade da luz, a nave Lux 13 foi uma das primeiras a cair no solo terráqueo. A nave-mãe não conseguiu ter um pouso bem sucedido, então caiu de forma inesperada, tendo diversos danos que acabaram danificando sua estrutura, o que impossibilitou uma nova decolagem. Por ter sido criada com materiais raros e escassos em Kepler-145, Lux-13 era considerada a maior e mais rápida embarcação dos Native Aliens.
          Lux-13 é vigiada e estudada diariamente na área 51, e sua tecnologia até hoje não foi desvendada.
          Significado da palavra ‘’lux’’=
          “a que ilumina”, “iluminada”, “luminosa”, “esclarecida”.
          “13” = ‘’recomeço’’, ''término de um ciclo’’.

        </HistoryContent>
      </div>
      <AlienHistory src={Lux13}
          initial={{ x: 0, y: 0 }}
          animate={{ x: 0, y: 50}}
          transition={{ ease: "linear", duration: 2,repeatType: "reverse", repeat: Infinity }}  
          />
    </BackgroundSection>
  )
}