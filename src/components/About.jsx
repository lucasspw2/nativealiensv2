import {useState, useRef} from 'react';
import Alien4 from '../assets/alien4.webp';
import Alien1 from '../assets/alien1.webp';
import {BackgroundSection, AlienHistory, TitleHistory, HistoryContent} from './components';
import Background1 from '../assets/1.jpg'

export default function About({about}) {
    const scrollRef = useRef(null);
    const [image, setImage] = useState(Alien4);

    function AlterarImage(){
        if(image === Alien4){
            setImage(Alien1);
        }else{
            setImage(Alien4);
        }
    }
    return (
        <BackgroundSection ref={about} imgUrl={Background1} > 
            <AlienHistory
              alt="Alien"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ root: scrollRef  }}  
              onViewportEnter={false}
             onMouseOut={AlterarImage} src={image} />
            <div>
                <TitleHistory>Historia</TitleHistory>
                <HistoryContent>Estando há cerca de 2000 mil anos-luz da Terra, os aliens nasceram no planeta Kepler-145, onde aconteceu uma guerra, que levou muitos a evacuação imediata.
                    No ano de 3530 a.C., os aliens descobriram um planeta na Via-Láctea, nomeado pelos antigos gregos, ‘’Gaia’’, entidade titânica que representava os terráqueos.
                    A fim de não serem descobertos pelos seres humanos e com receio de instaurarem uma nova guerra neste novo habitat, eles formaram a Sociedade Secreta Alienígena (SSA), onde os demais de sua raça poderiam se reunir, contanto que eles tenham um único objetivo em comum: salvar à terra.
                </HistoryContent>
            </div>
        </BackgroundSection>

    )
}