'use client'

import { MarkdownViewer } from '../../../components/MarkdownViewer'


export default function Metabolism() {
  return (
    <>
      <MarkdownViewer>
        {`
# Metabolism
** The process of synthesizing energy in form of ATP from food **

### The citric acid cycle (a.k.a. krebs cycle)
The citric acid cycle often shortened to TCA, is a chemical circular process of using acetylCoA to extract energy. It starts off with acetyl-CoA, and ends up with 2CO<sub>2</sub>, 3NADH, 1FADH<sub>2</sub> and 1 ATP (per acetyl-CoA)
![Krebs cycle](https://www.einumm.org/wp-content/uploads/2022/07/Krebs-Cycle.png)
The process is as follows:
1. Acetyl-CoA reacts with oxaloacetate to form citric acid.
1. An isomerisation takes place where the hydroxic group is moved to form isocitric acid.
1. The isocitric acid is oxidized by nucleic acid NAD+, and forms alpha-ketoglutaric acid.
1. Another oxidation takes place to form succinyl-CoA.
1. The CoA is dropped, this releases some energy which is utilized in the formation of GTP, which later on leads to ATP.
1. Another oxidation occurs and succinyl is transformed to fumarate.
1. Water is added to form malatate.
1. One more oxidation and it goes back to oxalic acid.

### Glycolysis
The process of converting glucose to acetyl CoA

### Electron transport chain
This creates a protin gradient that wins energy on its way back.



`}
      </MarkdownViewer>
    </>
  )
}
 