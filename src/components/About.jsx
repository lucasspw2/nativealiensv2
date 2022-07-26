import {useState, useRef} from 'react';
import Alien4 from '../assets/alien4.webp';
import Alien1 from '../assets/alien1.webp';
import {BackgroundSection, AlienHistory, TitleHistory, HistoryContent} from './components';
import Background1 from '../assets/1.webp';

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
                <TitleHistory>History</TitleHistory>
                <HistoryContent>Being about 2000 thousand light years from Earth, the aliens were born on the planet Kepler-145, where a war took place, which led many to immediate evacuation.
                      In the year 3530 BC, the aliens discovered a planet in the Milky Way, named by the ancient Greeks,
                      “Gaia”, a titanic entity that represented the earthlings.  In order not to be discovered by humans and fearful of initiating a new war in this new habitat, they formed the Alien Secret Society (SSA), where the rest of their race could gather, as long as they have a single common goal:save the earth.
                </HistoryContent>
            </div>
        </BackgroundSection>

    )
}