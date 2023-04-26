'use client'

import { MarkdownViewer } from '../../../components/MarkdownViewer'

export default function Immunology() {
  return (
    <>
      <MarkdownViewer>
        {`
# Immunology
There are multiple pathogens that may enter and cause sickness in the body, by killing/rupturing cells, releasing toxin and other. To accomadate for this the body has developed its own way of protecting itself against the pathogens.

### First level of defense
The first level of defense is composed of passive mechanical and chemical barriers which make it harder for the pathogen to enter the body. This may include things like skin(keratin), eyelids, cilli in trachea, mucous, lysozymes and gastric acid. This all utilize different methods, mainly mechanical protective walls, mucous which may trap the pathogen and acid which kills it before it even becomes a threat.

### Second level of defense
The second level of defense, involves more complex processes. Monocytes, a type of white blood cell is produced in the bone marrow and is transported through the blood stream. When an infection occurs inflammation may also occur when infected cells and mast cells send out cytokines and other signals to open up gaps between the endothelial cells. They also trigger the activation of P selectin proteins, which bind to glycoprotein moleculed attached to monocytes. These then "roll" from selectin to selectin until it rolls through out of the blood stream. Monocytes can then enter following the concentration gradient of chemokines to the damaged tissue(postivie chemotaxis). The monocytes may then differentiate into macrophages and dendritic cells. The macrophages can break down pathogens via phagocytosis. Macrophages can also act as APC(antigen-presenting-cells) by taking the antigens of the broken down pathogen and presenting it on a MHC-II protein which may then bind to a CD4+ T help cell. They may also produce more cytokins which will attract more monocytes to the site of infection. Monocytes may also differentiate into dendritic cells, which are cells good at capturing pathogens and presenting their antigens. They may transport from the lymph and present the antigens to naive T cells.

<br />

![Three granulocytes](https://my.clevelandclinic.org/-/scassets/Images/org/health/articles/22016-granulocytes)
Granulocytes, a categoy of white blood cells characetrized by smaule granules in their cytoplasm, which is visible like small grain under a microscope. There are three different types of granulocytes: 
- Neutrophil - This kill pathogens by phagocytosis and release their antigens through exocytosis. Can also release traps(NETs) composed of DNA that kills pathogens.
- Eosinophil - Kills parasites by secreting lysozymes and also breaks down left over antigen-antibody complexes
- Basophil - Produce histamine and heparin to increase blood flow by relaxins smooth muslc cells.

<br />

##### NK cells
NK-cells(natural killer cells), also a type of lymphocyte, kill virusinfected and cancel cells. When the NK-cells locates a damaged cell by loking at the cell membrane it may find that MHC class I is not expressed which is a sign of infection. It relases proteins like granzym B and preforin that trigger programmed cell death, apoptos. They can also produce cytokines which help regulate and coordinate other function of the immune defense system.

![Antibody](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8CoHG6PujX0sWjcxpv0j26d4lA6vyuVAwKA&usqp=CAU)
###### Antigens presentation
Antigens are molecules such as proteins, carbohydrates or glycoproteins which may be part of some viruses and bacteria and play some vital role for that pathogen. These antigens can by recognized by the immune system, as cells can display these antigense on their body through MHC(Major histocompatibility complex) molecules. All cells with a nucleus in the body have a MHC class 1 antigen. When an antigen enters the cell it may bind to the MHC class 1 and travel through ER, to the Golgia apparatus, go through a vesicle and up on the cell membrane. This antigen can then be recognized by CD8+ T cells(also knowon as cytotoxic T cells) that kill virus infected cells and cancer cells. Some specialized cells like antigen-presenting cells(APCs) also have a MHC class 2 protein, which when a pathogen has been engulfed during phagocytosis may bind to this protein and form a MHC class 2 complex. This can then be recognized by CD4+ T helper cells. HLA(Human leukocyte antigen) is the gene complex on chromosome 6 that encodes for the MHC protein, it is polymorphic, meaning the DNA sequence shufles around to produce MHC proteins that can fit a wide range of anitgens.

##### The complement systems
Out in the bloodstream there are also multiple complement proteins, this can bind using different pathways(clasic, alternative and lectin) to help in the immune response. A complement protein migth bind to an antibody which has already bonded to an antigen on a pathogen. The complement proteins will then chain up and later on break off. It will break off into three parts:
- Chemokines, complement proteins C<sub>3</sub>a and C<sub>5</sub>a will break off and act as chemokines to inflammatory cells to site of infec tion.
- MAC(Membrane attack complex), Other complement proteins will form a huge transport channel protein where tons of polar molecules like water and ions like sodium can flow in and kill the pathogen by disturbing its inner environment with the process of lysis.
- C<sub>3</sub>b is a very important complement protein that may stay attached to the antibody, macrophages and neutrophil granulocytes have specific receptors which can bind to these, making it easier to attack the pathogen.

![Interferon](https://cdn.lecturio.com/assets/Interferons.jpg)
##### Interferons
Interferons are proteins that may be produced, often during a virus infection. There are three types of interferons, alpha, beta and gamma. The genes that encodes these proteins may be activated when a healthy cell is infected with a virus, the alpha and beta interferons will then go to a neibourhing cell, "warning it", and makes it activate another protein called kinase R, which protects the cell against viruses by making the cell produce less proteins and activate other antiviral proteins. Gamma interferons are mainly produced by immune cells such as macrophages, can also trigger macrophages to become active, as well as telling neutrophils to start looking for cells which may be infected.

### Third level of defense
The third level of defense mainly consists of T and B lymphocytes which act in the production of antibodies. They are called adaptive as they only act on specific pathogens which specific antigenes. One of the ways they may be activated is by an immune cell, like macrophages, neutrophiles or dendritic cells have picked up pathogen antigenes and put it on MHC class 2 complexes. Naive B Lymphocytes have a lot of polymorphic DNA which give them specific receptors that bind to different antigens. When by chance this antigens come in contact with the right B lymphocyte, this antigen enters the cell via receptor mediated endocytosis. In which case the B cell starts differentiating and putting up more MHC class 2 proteins with that specific antigen. A T helper cell might also bind to MHC. Naive T lymphocytes have a specific protein, CD4+ that fits perfectly with MHC class 2, they also have a variable, a receptor that can bind to the antigen of the MHC class 2 complex. This will then send signals to the T helper cell to produce cytokines, interleukins 2, 4, 5 and 6. This interluekins can start the differntiation of the previousely named B cells, which turn into plasma cells that produce antibodies for these antigens. It should also be noted that the T cells and B cells instead could turn to memory cells, which can aid in a quicker response if an infection by the same pathogen were to occur. This antibodies will then bind to the pathogens antigen, which will neutralise them, as well as making them a target for neutrophiles, and allowing complement proteins to bind to redirect macrophages to location of pathogen and break down via lysis. CD8+ T killer cells can also bind to MHC class 1 complexes of infected virus and cancer cells, breaking down similiar to neutrophiles by protein preforin that opens up gates in the infected cellw here granzym B then can enter and trigger apoptosis. T regulatory cells can regulate other T and B lymphocytes to preven autoimmune disease, by different methods, like secretion of inhabiroty cytokines which dampen the activation of other immune cells.

### Immunity
Immunity can either be natural/artifical and active/passive. Immunity refers to the ability to resists a specific infection by quickly synthesizing antibodies that can exterminate infections quickly, to the point where you become immune. Natural active immunity for example might be memory T and B cells, natural passive immunity might be anitobodies passed along from the mother in a newly born child. Artifical active immunity might be vaccines, which precent fake viruses that trains and creates this memory cells. Articial passive immunity might be monoclonal antibodies, that are synthesized in the lab and then injected into the boyd.

<br />

![curve of antobody response](https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/1094/2016/11/03172609/OSC_Microbio_18_01_responses.jpg)
Antibodies are the core of immunity. In a first exposure to a specific pathogen, antibody M usually forms, the second time

### Alergies and autoimmune sickness
Alergies and autoimmune diseases are examples where the immune system turns against the body. Allergies is when the body thinks an unharmful substance is an harmful pathogen, in which case it triggers features of the immune system that can make on esick, in some cases it might even lead to death. Autoimmune sickness is when the immune systems starts killing the bodys own healthy cells, why these diseases occur one does not know, but in the case of allergies its believed to be due to lack of exposure to substances in young children. 



`}
      </MarkdownViewer>
    </>
  )
}
