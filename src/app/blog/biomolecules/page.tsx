'use client'

import { Heading, Mark, Text } from '@chakra-ui/react'
import { MarkdownViewer } from '../../../components/MarkdownViewer'

export default function BioChemicalsPage() {
  return (
    <>
      <MarkdownViewer>
        {`
# Biomolecules
**Common patterns of molecules produced and consumed by cells and living organisms**
<br />
<br />
Biomolecules are organic macromolecules used in various body processes. They are varied, however follow common patterns split into four main categories:

- Proteins
- Carbohydrates
- Lipids
- Nucleotides
<br />
<br />

### Proteins
Amino acids are the building blocks of proteins, they all follow a general chemical formula, containing one amino group(NH2), one carboxyl group(COOH), one carbon atom with hydrogen(CH) and a unique residue side chain (R)
![Illustration of amino acid](https://www.researchgate.net/publication/332440930/figure/fig1/AS:748220326084617@1555401035668/Amino-acids-general-formula.jpg)
There are 20 naturally ocurring amino acids, differentiated by their residue side chain (R); nine of these are considered essential(
  Histidine,
  Isoleucine,
  Leucine,
  Lysine,
  Methionine,
  Phenylalanine,
  Threonine,
  Tryptophan,
  Valine), meaning the human body can't produce these by itself, and instead has to be taken in through diet. 
![20 amino acids map](https://www.researchgate.net/publication/308048982/figure/fig1/AS:669011381583887@1536516151692/Chemical-structure-for-the-20-amino-acids-that-are-found-in-all-naturally-occurring.ppm)

This amino acids can be chained together using peptide bonds. These act by the carboxyl group releasing its OH group, and aminio group releasing an hydrogen atom that together bind with the OH group to form water (H20). The carbon atom can then bind to the nitrogen atom in a peptide bond.
![Peptid bond](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/AminoacidCondensation.svg/590px-AminoacidCondensation.svg.png)
This amino acids can then bond together in chains, forming polypeptides, than can later fold into proteins. These proteins can have multiple features, some common ones includes enzymes, anti bodies and cell receptors.

`}
      </MarkdownViewer>
    </>
  )
}
