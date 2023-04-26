'use client'

import { MarkdownViewer } from '../../../components/MarkdownViewer'

export default function NervousSystem() {
  return (
    <>
      <MarkdownViewer>
        {`
# Nervous system
The nervous system is a complex network of nerves responsible for transmitting signals throughout the body. It processes sensory information, and enables body movement.

##### Categorisation
The nervous system can be put into many categories, one of these important distinctions is between the central nervous system(CNS) and the peripheral nervous sytem(PNS). CNS is composed of the brain, and spinal cord. PNS consists of all the nerves outside of CNS. Sensory/Motor nerves is another distinction, sensory nerves transmits information from our senses, whilst are motor nerves, usually with their head in CNS transports signals of muscle movement. The somatic nervous system can be consciously controlled, whilst the autonomous system is automatic. The autonmomic nervous system can be further divided into two parts, the sympathetic and parasympathetic nervous systems. The sympathetic nervous system is activated during stress or danger, increases heart rate, widens the trachea, increases breathing and blood pressure as well as divering focus away from digesting food. The parasympathetic nervous system does the opposite of the sympathetic one and is activated during calm. The enteric nervous system is an independent nervous system that regulates digestion and bowel movements.

##### The nerve cell(neuron)
![Neuron](https://upload.wikimedia.org/wikipedia/commons/1/10/Blausen_0657_MultipolarNeuron.png)
The neuron is composed of a dendrites, cellbody, synaptic terminals and an axon connecting the cellbody with the synaptic terminals. In the dendrites there are ligand gated ion channels, a neurotransmitter may bind to these channels, opening them up and allowing the flow of ions into the neuron, this could be both positive and negative. G protein receptors are also at the dendrites surface, and could trigger G protein to trigger a second messager to trigger the activation of another transport protein to allow ions to go into the neuron. This ion influx will lead to depolarization which travels through the neuron throughout the axon. The deploarization flows through the axon by opening up sodium channels, right after the sodium channels pottassium channels open up and potassium leaves the cell, making it more negative again. Microtubules are attached throughut the axon and transport neurotransmitters in vesicles from the golgi appartus and cell organelles to the synaptic terminals(through kinesin) and dynein(backwards). A virus or other pathogen might also travel with the microtubule up to the nucleus where it hijacks the cell. When the depolarization reaches the synaptic terminals it triggers the opening of calcium ion channels. This calcium binds to a protein in vesicles and allows for V snares to attach to T snares in exocytosis. This neurotransmitters are then secreted to bind to receptors and transport proteins on the dendrites or target cell of another neuron. The neurotransmitter is then taken up again through a transport protein so it does not continue to stimulate the other neuron.

<br />

There are multiple different types of neurons, one is the multipolar neuron, which has many branches of dendrites to connect or listen to multple other neurons. Bipolar neurons, which have only one main branch of dendrites, pseudo-unipolar neuronw which have their cellbody in the middle of their axon. They can also be grouped by functionality, namely sensory nerves, which are usually pseudo unipolar, muscle neurons and interneurons. Interneurons sit in the spinal chord and brain and redirect input from sensory nerves onto muscle nerves.

##### Myelin
![Myelin illustration](https://i2.wp.com/www.differencebetween.com/wp-content/uploads/2017/07/Difference-Between-Oligodendrocytes-and-Schwann-Cells-.jpg)
Nervous tissue does not only consist of neuron, but also of glia cells. Examples of glia cells includes oligodendroctyes(CNS) and schwann cells(PNS). These are both important as they produce myelin, which is a fatty substance made of lipids and proteins that isolates and wraps around axons. This helps by being placed in segments that speeds up depolarization and repolarization by insulating and decreasing the resistance. These means that the sodium/potassium ions can only move in one direction, by making the part that is not isolated completely non permeable and non charged. The more myelin and thicker the faster the signal can be sent.


##### Membrane potential
![resting membrane potential transport proteins](https://upload.wikimedia.org/wikipedia/commons/4/4f/Sodium-potassium_pump_and_diffusion.png)
Membrane potential is the voltage between the inside and outside of the membrane. One might believe it should be 0V, no potential, but this is not the case, Na+/K+ ATPases take three Na+ out of the cell and two K+ into the cell, creating a small negative voltage around -5mV. These K+ ions usually bind to some negative ion or polar molecule, such as a phosphate ion or protein, these then leave the cell through leaky channels and leave the negative ion, chaning the potential to around -90mV. Finally some leaky Na+ let some postive charges into the cell, however the its a lot harder for these to get into the cell than for K+ to leave the cell, so it only depolarizes the membrane potential to about -70mV. This is the resting membrane potential, however during depolarization when more sodium ions enter the cell it might increase to -55mV, which is the action potential. It may also decrease, to -90mV during hyperpolarization. In a dendrit a neurotransmitter, for example:

- Acetylcholine(very common)
- Dopamine
- Serotonine
- Norepinephrine
- Glutamate

![depolariation wave](https://cdn.kastatic.org/ka-perseus-images/3be9254548b0dbe003574cdc780718bb4876c355.png)

These neurotransmitters may open up ion channels and start changing the membrane potential, this could mean both depolarization and hyperpolarization, there is a constant fight between these two, and after prolonged depolarization stimuli or multiple stimuli for different neurons it may reach the action potential under which the axon hillock will open its sodium channels. These are voltage controlled with two gates on both sides and open when the action potential is reached, sodium flows into the cell and depolarizes it all the way to +30mV when the other gate on the inside of the cell closes. This sodium ions trigger the opening of the next sodium channel and the next, creating a wave of depolarization. On the other end of the axon, potassium channels open up when the +30mV threshold is reached and K+ flows out of the cell and hyperpolarizes the membrane to -90mV, this goes in a wave which follow right after the depolarization wave. When the wave finally hits the synaptic terminals it opens up calcium channels which triggers exocytosis of neurotransmitters as mentioned above. 

![membrane potential diagram](https://upload.wikimedia.org/wikipedia/commons/4/4a/Action_potential.svg)
This is a diagram describing the membrane potential. Directly after repolarization follows what is called the absolute refractory period and relative refractory period. During the absolute refractory period the inner gate of sodium channels will not until resting membrane potential has been reached, this means its impossible to trigger a depolarization again until resting membrane potential has been restored. The potassium channels are rather slow to close, so directly after follows a short time frame when the membran potential is slightly negative, here another action potential could be trigger but it is harder as even more depolarization stimuli would be needed. It is then restored.

##### Receptors and hormones

Hormones could either be a peptide or steroid and are produced by an endocrine glands. They, along with neurotransmitters, communicate with cells to regulate the activity of specific protein. Key endocrine glands include the hypothalamus, which regulates other endocrine glands and produces many hormones like growth hormone, other glands include the pituitary gland, pineal gland, thyorid gland, parathyroid glands. Steroid hormones can diffuse into the cell and bind to an intracellular receptor and activate genes to produce proteins. If the hormone is a peptide, it can not pass through the membrane, instead it binds to a receptor, for example a G protein receptor. On the other side of the G protein receptor lies G protein, more specifically alpha, beta and gamma G protein. GDP is attached to the alpha G protein and when the hormone binds to the receptor it undergoes a change in fold that activates the G prtoein. In its inactive state there is a GDP molecule attached to the alpha G protein. When activated GTP is added to the alpha G protein whilst GDP is released, the alpha G protein then roams free until it meets some enzyme like adenylyl cyclase or phospholipase C, which varies on the type of the alpha G protein(G<sub>i</sub>, G<sub>s</sub>, G<sub>q</sub>). This enzyme will however later lead to some 2nd message, like cAMP(cyclic adenosine mono phosphate), IP3 or DAG. This 2nd messager will trigger activation of a kinase enzyme. Which in turn will start putting phosphate group on proteins, like transport proteins to activate them. The beta-gamma subunit can also regulate activity of some proteins, by interacting with similiary enzymes.
![G protein activation](https://upload.wikimedia.org/wikipedia/commons/6/6d/GPCR-Zyklus.png)

`}
      </MarkdownViewer>
    </>
  )
}
