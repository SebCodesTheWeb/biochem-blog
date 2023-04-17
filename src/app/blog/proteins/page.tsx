'use client'

import { MarkdownViewer } from '../../../components/MarkdownViewer'

export default function Proteins() {
  return (
    <>
      <MarkdownViewer>
        {`
# Proteins
** Folded biomolecular structure of amino acid sequences **  
<br />

Proteins play a crucial role in many cellular processes. They are involved in structural support, catalysis of chemical reactions, transport of molecules, regulation of gene expression, and immune responses. For a quick recap on the basics of proteins, please review [biomolecules](https://biochemblog.vercel.app/blog/biomolecules).

<br />

Continuing of that knowledge, let's elaborate on the structures of amino acids.
![Illustration of amino acid](https://www.researchgate.net/publication/332440930/figure/fig1/AS:748220326084617@1555401035668/Amino-acids-general-formula.jpg)
The carbon in the center of the above illustration is called the alpha carbon, hen the amino group binds directly to the alpha carbon. In the residue chain there might be another carbon, for which an amino group may bind, in which case the amino acids is called a beta amino acid. Alpha amino acids are strongly preferred in nature.

<br />

Other properties to note is that the central alpha carbon is chiral(except if the amino acid is glycine, in which the residue side chain is a single hydrogen atom). This means that all amino acids can exist in two isomers, a L and D isomer. The L isomer is also strongly preffered in nature. Hence, all amino acids going forward should be expected to be the L alpha variant.

<br />

Notice also that amino acid is both a base(the amino group) and an acid(the carboxylic group), thus it is called a zwitterion(zwitter is german for hybrid). When solved in water it is most often in it's zwitterion state. 

![20 amino acids map](https://www.researchgate.net/publication/308048982/figure/fig1/AS:669011381583887@1536516151692/Chemical-structure-for-the-20-amino-acids-that-are-found-in-all-naturally-occurring.ppm)

If one reviews the map of amino acids, we can categorise the above. Starting, glycine, alanine, valine, leucine, isoleucine, proline, methionine, phenylalanine and tryptophan are marked as non polar, this means they often want to bind to each other via van der waals, which is important for protein folder later on. Lysine, Arginine and Histidine are basic, as they have an easily oxidized amino group, Aspartic acid and glutamic acid are both acids, and the rest could be counted as polar. Notice also that Cystein has an thiol(SH) group, which might bind with another thiol group to form a disulfide bridge later on in protein folding.  

![Amino acid rotation](https://ars.els-cdn.com/content/image/3-s2.0-B978012416687500004X-f04-02-9780124166875.jpg)
The rotation of the peptide bond also plays an important role. Notice that the peptide(multiple amino acids chained together via peptide bonds), consists of single bonds, hence rotation is free, and defined by the angles psi and phi. This plays an important role in formation of secondary structures as will be viewed later. However, there is one double bond with oxygen with the carbon that used to belong the carboxylic group. This double bond acutally exists in a resonance structure, where that electron is delocalised between the oxygen atom and the nitrogen atom, hence it is a partial double bond with limited rotation. Notice also that the peptide bonds are in a trans position between each other, as to maximise distance.

<br />

A quick note on naming, a peptide is a chain of amino acids bound by peptide binding. A dipeptid, tripeptide, oligopeptide and polypeptide are two, three, few and many amino acids connected with peptide binding. Polypeptides with more than ca 50 amino acids are usually called proteins. Proteins can consists of hundreds up to thousands of amino acids.

### Higher order structures
Proteins usually aren't just long strands of peptides, they fold due to the bindings that occur between the peptides outside of the peptide bond.
![Alpha helix](https://ars.els-cdn.com/content/image/3-s2.0-B9780080571737500134-f08-05a-9780080571737.jpg)
As can be seen in the above image, an hydrogen bond is formed between the hydrogen atom and the nitrogen atom and the double bonded oxygen atom later on in the chain. These creates a structure known as the alpha helix. 

![Beta sheet](https://www2.chem.wisc.edu/deptfiles/genchem/netorial/modules/biomolecules/modules/protein2/beta_para.gif)
The above image is an example of a beta sheet. In which the same hydrogen bond has formed but instead formed a different structure. The above is called a parallell beta sheet, which is when the two parts of the amino acid chain line up and the C-terminus and the N-terminus line up. Notice that this is the same amino acid sequence that has folded, and not two seperate sequences that have attached. There is also an antiparallel sheet, in which the C terminus of the one end lines up with the N terminus of the other end.

<br />

This secondary structures can repeat for the entire protein, in which they are called fiber proteins. However, many times these secondary structures fold over each other, forming tertiary structures, in this case the protein is called globular.

<br />
Some forces that can help keep a tertiary structure in place are disulfide bridges. Which occurs when two cystein amino acids lie close to each other. Also, the protein might form a structure resembling to that of a micelle, where the non polar amino acids will end up in the center of the protein, and the polar ones on the outmost surface.

![Hemoglobine](https://assets.kompasiana.com/statics/crawl/556312910423bd147b8b4567.jpeg?t=o&v=400)
The above is an image of hemoglobine, which is an example of a quarternary structure. Here four different peptides, tertiary structures have bound together to form a quarternary structure, which is when multiple _different_ peptides bind together. One can also notice the arrows marking what is called the heme group. The heme group is what is called a prosthetic group, which is a group, in this case an iron ion, that is attached to the protein to serve some vital function.

<br />

The final shape, is what determines the functionality of the protein, not the amino acid sequence directly. The amino acid sequence encodes the folding, which is an effect of finding the most stable thermodynamical state for the amino acid sequence with the most and strongest bonds between different parts of the peptide. 

<br />
## Functions of proteins
**These are the broad categories of proteins that define their purpose**

### Transport
### Enzyme
### Channel
### Receptor
### Motor
### Structural
### Hormone/Signaling
### Antibodies

`}
      </MarkdownViewer>
    </>
  )
}
 