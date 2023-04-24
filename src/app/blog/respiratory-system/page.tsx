'use client'

import { MarkdownViewer } from '../../../components/MarkdownViewer'

export default function RespiratorySystem() {
  return (
    <>
      <MarkdownViewer>
        {`
# Respiratory System
The organs needed for the circulation of oxygen and carbon dioxide in the body.

##### Mechanics of breathing
Breathing might seem a bit magical, however it follows simple principles of physics in terms of thermodynamics and pressure. As one might recall, the follow equilbrium: pV = nRT is true for all ideal gases. As one might deduce from this, it means that if the pressure decreases over a limited volume, then that limited volume must increase proportionaly to the decrease in pressure to maintain the equality.  
![Breathing illustration](https://cdn-prod.medicalnewstoday.com/content/images/articles/319/319924/diagram-of-breathing-and-exhalation.jpg)
In the case of breathing, when the lung expands(mainly through contrction of the diaphragm), its volume increases, as a result of this the pressure of the air inside the lung decreases to the point where it is lower than the pressure outside(approx 101.3kPa). This creates a pressure difference where the air moves from high to low pressure, hence the air moves through the nostral area into the lungs. On the opposite, when the lung volume decreasees(through relaxation of the diaphragm), the pressure increases above that of the outside pressure, and the air moves out.

##### The path of air
![Human lung air pathaway](https://img.brainkart.com/article/article-Anatomy-of-the-Respi-jog.jpg)
1. Air is inhaled through the nostrils, small hairs called cillia filters out pathogens inhaled through the air.
1. The air enters the nasal cavity, An open volume where the air is filtered, warmed and moistened through the mucous membran lining and the nasal conchae infoldings. Odors are also detected here. 
1. The air is passed through the pharynx(the throat), the larynx(voice box), and down the trachea(the windpipe). The pharynx seperates the food from the air, the larynx enables speaking and the trachea transports the air down to the lungs. The trachea is a long pipe made up of cartiliage rings and mucus secreting cells. The particles get stuck in the mucus, and handled by the cillia that rythmically wave the mucus upwards and out of the trachea.
1. The trachea divides up into two bronchi, which furter divide into smaller bronchi and then bronchioles. 
1. The brioncholes finally end up by the alveoli, tiny air sacs were gas exchange occurs and oxygen is added to the blood and carbon dioxide is picked up. 
1. The air flows back

The air that was breathed in likely consists of about 21% oxygen and 0.04% carbon dioxide, the air that comes out consists of about 14% oxygen and 5% carbon dioxide.

##### Gas exchange
Going on a deeper chemical level, this is what occurs in the avioli during gas exchange. The oxygen(O<sub>2</sub>) is provided from the lungs, and reacts with Hemaglobin(Hb) from the blood: <br/>
**O<sub>2</sub> + HHb <--> H<sup>+</sup> + HbO<sub>2</sub>** <br/>
This hydrogen ion(H<sup>+</sup>) then reacts with hydrogen carbonate(HCO<sub>3</sub><sup>-</sup>) to free the carbon in the blood: <br/>
**H<sup>+</sup> + HCO<sub>3</sub><sup>-</sup> <--> H<sub>2</sub>CO<sub>3</sub> <--> H<sub>2</sub>O + CO<sub>2</sub>** <br/>
The carbon dioxide is picked diffused into the alvioli and breathed out whilst the oxygen is now carried with the hemaglobin. In the cells, the same reaction takes place but backwards, were it starts with water and carbon dioxide from the cellular respiration and ends hydrogen carbonate and emptied hemaglobin(HHb).

<br />

The bohr effect is an important concept as in regards to how increased demand for oxygen is met. As an example, when a human is running they need more energy for their leg muscles, thus those muscles produce ATP and carbon dioxide as a product. This carbon dioxide makes the blood more acidic. This change in pH, a man named Christian Bohr discovered to cause a decrease in the affinity for oxygen of hemaglobin. This makes it more willing to drop of the oxygen. Thus it can supply more oxygen in those areas were it is more needed. Borh also found that increase in temperature or BPG(a substance secreted during anaerob ATP synthesis) cause a simliar decrease in oxygen affinity for hemaglobin.

##### Measurement of breathing ability
**Spirometry** is a common method of testing breathing ability by measuing the volume of air present within the lungs. This can often draw an air plotted against time diagram where the patient is instructed to breathe in as much air as possible and then exhale it.
![spriometry diagram](https://www.vernier.com/wp-content/uploads/2020/06/ill._lung-volume._respiration._terms.01.png)
The tidal volume that one average breath usually inhales/exhales. The maximum volume of air one can exhale is the vital capacity, whilst what air is left within the lung is called residual volume, this volume of air is a minimum that may never leave the lung as the lung would otherwise collapse. Inspiratory reserve volume is the volume of air that can inhaled above the tidal volume, and the expiratory reserve volume is the volume of air that can be exhaled below the tidal volume.


##### Related diseases
The respiratory system is vulnerable to infections, as its directly connected to the outside world. Infections can occur, such as the common cold(caused by the rhinovirus). A disease might also directly limit the ability of the respiratory system, these diseases are generally split into two categories, obstructive and restrictive diseases. Obstructive diseases block the air pathaways, whilst restrictive diseases limit the lungs ability to expand. Common obstructive diseases are asthma and COLD(common obstructive lung disease). Common resrictive diseases include pulmonary fibrosis, silicosis and sarcoidosis. 












`}
      </MarkdownViewer>
    </>
  )
}
 