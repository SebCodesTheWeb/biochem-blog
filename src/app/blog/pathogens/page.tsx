'use client'

import { MarkdownViewer } from '../../../components/MarkdownViewer'

export default function NervousSystem() {
  return (
    <>
      <MarkdownViewer>
        {`
# Pathogens
A pathogen is a microorganism or substance that can cause sickness, this includes bacteria, viruses, fungi and parasites. 

### Bacteria
Single celled organism that can exist in multiple shapes, such as spheres, rods and spirals. They are classified by their cell wall into either Gram-positive or Gram-negative. In some cases they can be beneficial, by helping in digestion(like in the large intestine) or cause disease. Being able to classify bacteria is esential for setting right diagnosis and treatment.

![Bacteria anatomy](https://micro.magnet.fsu.edu/cells/procaryotes/images/procaryote.jpg)
Bacteria are similiar to animal cells but have generally less organelles. Instead of a nucleus they have free roaming circular DNA, and plasmids which may is DNA that might be shared between bacteria. The ribosomes in bacteria are smaller than eukaryotic ribosomes are commonly referred to as 70s ribosomes. It has a cell wall made of peptidoglycan (polymers of sugars with amino acids) and small pilli attached to the cell wall that helps it attach to other cells and facillitates exchanges of genetic material with other bacterial cells. It has F-pilli(fertility pilli), which helps it share DNA between bacteria, and P-pilli, which help it attach. Flagell is one giant pilli that handles movement of the bacteria. The capsule might surround some bacteria to protect it.

<br />

Gram coloring, gram coloring is a method used in labs to identiy bacteria based on the cell wall, it will color the bacteria using iodine, gram positive bacteria have a thicker cell wall and will be colored purple during this coloring. Gram negative bacteria have thinner walls and  an outer membrane aand are colored red. Some bacteria require oxygen(aerobee) and some dont (anaerob). Bacteria can exists in three shapes: Round(cocci), spiral(spirilla), rod(bacilli).

<br />

Bacteria infections that cause disease are commonly treated with antibiotics(anti-life). One such antiobiotics is penicillin, which disrupts the function of the enzyme that helps in formation of peptidoglycan in the cell wall, which weakens it and makes the bacteria susceptible to osmotic pressure. Other antibiotics include actinomycin D, that disrupt DNA synthesis within the bacteria.

<br />

Some bacteria can form endospores, which is a small part of the bacteria, wrapped in a resistant shell. This endospores can survive extreme temperature, draught and ultraviolet light. When habitats are unwelcoming the bacteria usually produces endospores to survive, when the environment becomes better this grow back to full bacteria.

<br />

Bacteria replicate via process called binary fussion, it allows the bacteria to divide into two part, similiar to mitosis. The bacteria duplicates its genetic material, attach to the cell membrane att different end, grows in size and then a septum forms in the middle and splits them two into different bacteria.

<br />

![Isoltating bacteria](https://www.studyandscore.com/images_all/1_Study%20material/Life%20sciences/Cell%20Biology/Cell%20organelles/bacterial-cell-wall-.png)
Bacteria are encapsulate by a membrane, which is your usual bilayer of phospholipids. What then follows is the cellwall, which consists of NAM and NAG sugars attaches adjacent to each other in a row. Between these are peptides linking them. In gram positive bacteria this cell wall is thick, in gram negative bacteria this wall is thin and ends with another outer membrane. Some bacteria has previously mentioned have a capusle on top of this which is made up of polysaccharides and or polypeptides. Antigens and pilli might stick out from these shell.



### Viruses
![viruses map](https://www.vetenskaphalsa.se/wp-content/uploads/2022/10/VIRUS_ILLUSTRATION.png)
Viruses are microorganisms on the edge between living and dead. The consists of a genome, either DNA and RNA, encapsulated by a protein capsid and some antigenes on top. They may also have a lipid membrane after exiting their host cell through budding. They do not count as living as they can not reproduce nor metabolise by themselves but require an host cell. Viruses work by insertin their genome into an host cell, and using its resources to make more copies of itself, which then may stay and wait in the membrane to then burst out(lysogenic cycle), or immediately go out ASAP(lysic cycle) 

##### Replication / categories
Viruses replicate in multiple ways depending on which virus. DNA viruses with DNA genome just enter the nucleus and act as normal DNA that immediately gets transcribed into mRNA. RNA viruses might be either positive, negative or retro. A positive sense RNA virus enters the cytoplasm, the virus carried with it RNA dependent RNA polymerase(RdRp) which can duplicate the RNA strand that later go into the ribosomes. Negative sense RNA viruses must first be transcribe into postive by the same RdRp polymerase before it can reproduce. Retroviruses reverse transcribe their genom into DNA that forms a provirus that merges with the host cell DNA. RNA viruses also usually replicate in the cytoplasm whilst DNA viruses replicate in the nucleus.

##### Infection
The virus binds by its to some specific receptors on the host cell and enters either via endocytosis as an endosome, via direct fusion or by secreting its genome into the host cell. The viruses can then exit via exocytosis ina vesicle, by lysis by crushing the membrane, or by budding by taking on a part of the membrane.


`}
      </MarkdownViewer>
    </>
  )
}
