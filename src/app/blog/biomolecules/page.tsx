'use client'

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
Amino acids are the building blocks of proteins, they all follow a general chemical formula, containing one amino group(NH<sub>2</sub>), one carboxyl group(COOH), one carbon atom with hydrogen(CH) and a unique residue side chain (R)
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

This amino acids can be chained together using peptide bonds. These act by the carboxyl group releasing its OH group, and amino group releasing an hydrogen atom that together bind with the OH group to form water (H<sub>2</sub>O). The carbon atom can then bind to the nitrogen atom in a peptide bond.
![Peptid bond](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/AminoacidCondensation.svg/590px-AminoacidCondensation.svg.png)
This amino acids can then bond together in chains, forming polypeptides, that can later fold into proteins. These proteins can have multiple features, some common ones includes enzymes, anti bodies and cell receptors.
<br />
<br />
### Carbohydrates
Carbohydrates can be described by the general formula (CH<sub>2</sub>O)<sub>n</sub>. As can be hinted by its name, carbohydrates consists of carbon (C) and hydrates (H<sub>2</sub>O). The simplest instances of carbohydrates are monosaccharides, one of the most common monosaccharides, is glucose:  
![Glucose](https://www2.chem.wisc.edu/deptfiles/genchem/netorial/modules/biomolecules/modules/carbs/gluclin1.gif)
As one can see from the image, glucose mainly consists of carbon atoms bonded with hydroxyl groups and hydrogen. At the end of the glucose molecule, there is a carbonyl group (C=O) with a hydrogen atom, forming an aldehyde group (CHO). This aldehyde group can react with the hydroxyl group at the next to last carbon atom on the other end (carbon nr 5 from the top). This happens by the hydroxyl group initiating a nucleophilic attack by donating its lone pair of electrons to the electrophilic carbonyl carbon, which breaks the double bond, and forms a new bond between the oxygen atom from the hydroxyl group and the carbonyl carbon. This results in a cyclic structure, with the oxygen atom acting as a bridge between carbon 1 (the carbonyl carbon) and carbon 5.
![glucose conversion to cyclic form](https://www2.chem.wisc.edu/deptfiles/genchem/netorial/modules/biomolecules/modules/carbs/abgluc.gif)

As you might notice in the above image, the hydroxyl group to the far most right could either point down (alpha glucose) or up (beta glucose)
<br />
<br />
Once the monosaccharide has entered its cyclic form, it can bond with other monosaccharides to form disaccharides. This is done 
via one atom from a monosaccharide discarding its hydroxylgroup, and binding to a carbon atom from another monosaccharide via that ones oxygen and forming water as a biproduct, this is called the glycoside binding.
depending on if the first monsaccharide was the alpha or beta variant, the binding might be called alpha-1,4-glycoside binding or beta-1,4-glycoside binding, where the numbers indicate the number on the carbon atom in each corresponding monosaccharide.
![Glycosidic bond example](https://study.com/cimages/multimages/16/webp.net-resizeimage_4374346235100789572.png)
This glycosid bond can repeat for multiple monosaccharides, building up to polysaccharides. 

### Lipids
Lipids are vaguely defined as molecules that are not soluble in water. This often means they are non polar. Categories of lipids include:
- Fats
- Phospholipides
- Steroids
- Waxes

##### Fats
A fatty acid is a chain (usually 2-18 carbons) and a carboxylic acid(COOH) at the end. The alcohol glycerol(also reffered to as propantriol) is an alcohol with three hydroxylgroups(CH₂OH-CHOH-CH₂OH), binding to each of the three carbon atoms.
This alcohol along with the carboxylic acid from the fatty acid can react via a condensation reaction, where the hydroxyl group leaves its hydrogen, and the carboxylic acid leaves its hydroxylgroup and together form water. 
After this the residue oxygen atom binds what is left of the carboxylic acid(the carbonyl group) with the carbon of the glycerol. Thus an ester bond is formed, this is repeated three times for each carbon atom in the glycerol molecule. 
![Formation of triglyceride](https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3Aa678eb72d1c4f474a77b99c65a056b6aed8723d9d2c3bdc390384fd3%2BIMAGE_THUMB_POSTCARD_TINY%2BIMAGE_THUMB_POSTCARD_TINY.1)
The hydrocarbon part of the fatty acid can contain double bonds, if there are however none double bonds present, the fat is called saturated, otherwise it is called unsaturated, more specifically, if there is only one double bond, the fat is called monounsaturated, if there are multiple, it is called polyunsaturated.

##### Phospholipid
A phospholipid is a fat, in which one of the carbon atoms on one end instead of binding to a fatty acid is binding to a phosphate ion(PO<sub>4</sub><sup>-</sup>) which then bonds to a kolin molecule CH<sub>2</sub>-CH<sub>2</sub>-N<sup>+</sup>(CH<sub>3</sub>)<sub>3</sub>.
![Phosphlipid illustration](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFV9yNedHZC4Xw0blnCn0jTDJ2HZ1YL15Cg&usqp=CAU)

##### Steroids
Steroids are molecules composed of precisely 17 carbon atoms, organized into three six-carbon rings and one 5-carbon ring. Testosterone, estrogen and cholesterol are examples of common steroids
![Steroid example](https://chem.libretexts.org/@api/deki/files/128218/clipboard_e774c891d65106cfde47c8763bc77c0b8.png?revision=1)

### Nucleotides
Nucleotides are molecules consistent of a pentose sugar, one or multiple phosphate ions and a nitrogenous base.
<br />
<br />

The two most common pentose sugars in nucleotides are ribose and deoxyribose. They are both very similiar
![ribose and deoxyribose](https://www.vedantu.com/question-sets/95618de3-2e47-469e-a1f9-2825319f896b3753831585250144778.png)
As on might notice, deoxyribose has the same appearance exact appearance of ribose with a small difference in the absence of an oxygen atom on the 2' carbon position (de oxy - without oxygen). 
#### Nitrogenous bases
There are five nitrogenous bases, divided into two categories, purines(adenine and guanine) and pyramidines(Thymine, Uracil and Cytosine). A nitrogenous base is an organic molecule with nitrogen atoms that can act like a base. Purines have two carbon rings, whilst pyramidines have only one carbon ring, when bonding a purine binds to a pyramidine.
![Nitrogenous bases](https://ib.bioninja.com.au/_Media/nitrogenous-bases_med.jpeg)
<br />
One example of a nucleotide is ATP(adenosine triphosphate), which consists of three phosphate ions, ribose and the nitrogenous base adenin ( ribos and adenin together form adenosine ). ATP is present during cellular respiration
![ATP](https://www.worldofmolecules.com/life/ATP.png)


`}
      </MarkdownViewer>
    </>
  )
}
