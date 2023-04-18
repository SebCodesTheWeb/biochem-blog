'use client'

import { MarkdownViewer } from '../../../components/MarkdownViewer'

export default function CellMembraneTrasnport() {
  return (
    <>
      <MarkdownViewer>
        {`
# Cell membrane transport
** The process and chemistry of taking in wanted substances into the cell and getting rid of unwanted substances **

### Semipermeable membrane
The cells membrane is a bilayer of phospholipids, this is important as it creates an hydrophilic outside of the membrane and an hydrophobic inside. This means that molecules which are polar, can not pass through the non polar core, if there is an ion, it might also get rejected by postive or negative group of the polar head. and molecules which are non polar, have a harder time getting through the hydrophilic head of the phospholipids. However small non polar molecules can usually sneak through the cracks between the heads, and diffuse through. Diffusion is the main driving force of this which is the natural phenonemon of substances moving from high concentration to lower concentration. This movement is called moving along the concentration gradient. The rate of diffusion is determined by factors such as the concentration difference, the temperature(more heat more diffusion), the thickness and surface area of the membrane. Some smaller polar molecules can also sometimes get through, although they have an harder time getting through the non polar part. For this they usually need some transport protein. 

### Passive transport proteins / ion channels
There can be certain membrane proteins, that have a certain shape that fit in the cell membrane. This allow certain polar molecules to pass through. One example of this are aquaporins, which is a membrane protein that sits attached to the cell membrane, creating a tunnel like shape that lets water flow through. Its tertiary structure is a cylindrical shape of alpha helixes, with postive and negative charges on the inside of the "tunnel". That excludes other ions. It usually sits very tight, so it just allows enough water to flow through for osmosis. 
![Aquaporin in cellmembrane](https://spinoff.nasa.gov/sites/default/files/2020-08/ps_20_web_0.jpg)
Ion channels are another form of passive transport, where the channel lets the flow of certain ions to pass through. This can often be triggered, via some substance binding to it, mechanical stress or a change in membrane potential. 


### Active transport
Active transport is the process of transporting a substance in or out of the cell, with the help of ATP, up its concentration gradient(from low to high concentration). ATPases are enzymes which can bind to one of this active transport membrane proteins and release energy for the transport. One example for this are Na+/K+ ATPases, which can bind three of the one ion and two of the other(ex three Na+ and 2 K+) on opposite ends of the cell membrane and then rotate them using ATP. 

<br />

Another concept which is called secondary active transport refers to the use of ATP indirectly. ATP might initially be used to move a substance up its concentration gradient, when it later on flows back this generats energy, which could be utilized by a symport, or antiport protein. This one could use that energy to transport another substance, either in the same direction(symport) or opposite direction(antiport) of the substance that is flowing along its concentration gradient.
![Antiports and symports](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jHlZQwZeyT34S0F5PpC7wmMgupynldZyqul-HME8OT6l5RfndGnRDAKs5OMXkeC01dg&usqp=CAU)

### Endocytosis and Exocytosis
Another way that the cell could take up and get rid of substances is through endo(in) and exo(out) -cyto(body) -sis(process). There are three broad categories of endocytosis.

##### Pinocytosis
Often refered to as cellular drinking, pinocytosis is the process in which actin filaments or receptors cause some infolding of the cellmembrane, which creates pit in which water and water soluble contens can enter, that later can be taken into the cell and form a pinocytic vesicle that later on may release its contents. Pinocytosis often occurs in the intestines.

##### Phagocytosis
Phagocytosis often occurs in cell present in the immune defense system. Similiarly to pinocytosis, the cell forms a pit in which pathogens can land. This pit will close when enough pathogens have arrived and then take in to the cell. This creates a phagosome. Later on protons(H+) are injected into the phagosome through primary active transport, and the phagosome is later on merged with a lysosome where the pathogen is broken down. The broken down subunits of the pathogen is later on released

##### Receptor mediated endocytosis
Some molecules need to be taken up and removed. For example LDL(low density lipoprotein) from the blood. This can be done via receptor mediated endocytosis. In which a receptor might bind to the substance it wants to take in. When this binds it may attract clathrin protein which pulls the receptor along with the substance into the cell in a vesicle called the endosome. This endosome is also pumped with protons like the phagosome, and is later split into two. One with the receptors which are put back onto the cell membrane, and one that later on moves to be broken down by lysosomes.

#### Exocytosis
A vesicle might bind with so called V snare proteins, that later on binds T snare proteins located on the inner side of the cell membrane. An action potential might trigger the opening of Ca<sup>2+</sup> channels that then binds to this proteins and makes them pull the vesicle to fuse with the membrane, this later releases the contents of the vesicle out of the cell.


`}
      </MarkdownViewer>
    </>
  )
}
 