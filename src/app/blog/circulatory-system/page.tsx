'use client'

import { MarkdownViewer } from '../../../components/MarkdownViewer'

export default function CirculatorySystem() {
  return (
    <>
      <MarkdownViewer>
        {`
# Circulatory System
The circulatory system or the cardiovascular system is responsible for transport of oxygen, carbon dioxide, nutrients and hormones, it  also stabilizes the body temperature and supports the immune system. It is composed of a pump, the heart, and transport tubes called the blood vessels. 

##### The flow of blood
![Heart anatomy illustration](https://www.texasheart.org/wp-content/uploads/2018/01/thi-anatomy-heart-250x285.jpg)
The blood enters the heart in the right atrium after passing through either the superior or inferior vena cava vein. The right atrium then contracts and the blood flows over passed the tricupsid valve and into the right ventricle. The right ventricle then contracts and pushes the blood through the pulmonary valve and into the pulmonary artery which caries the blood to the lungs. The blood then returns through the pulmonary veins to the left atrium, down to the left ventricle and out to the body via the aorta.

##### Cardiac Cycle 
The blood flow previously described follow a certain cycle/tempo, with certain pressures at every phase. These phases can then be analyzed via EKG(electrocardiography). The cycle starts with the intial dystole phase, here the right and left atrium is filled with blood from the veins, this increases the pressure so it is higher in the atrium than in the ventricles, which opens the atrial valves and about 70% of the blood flows down passively by gravity. In the later stages of the dystole phase the SA node then sends a signal that depolarizes the muscle cells in the atrium and contracts the atrium to flow down another 20% or so down to the ventricle. This is represented as the P wave in EKG. The systole phase then starts when the AV node receives the singal from the SA node and starts contracting the ventricles muscle cells, in which the pressure increases, closes the atrial valves which causes the first "lub" sound, and then opens the ventricular valves into the arteries. The ventricular valves then closes and creates the later "dub" sound during repolarization and relaxation. Note that the pressure is always higher in the oxygen rich parts(the left parts) than the right heart parts.

##### EKG
EKG is a method were electrodes(small devices that can conduct and detect electricity) called leads are placed on the heart. The most common placement is called lead II, were a negative lead is placed on the upper right atrium and a positive lead is placed on the lower left ventricle. The potential, or voltage is measured between these two leads. Potential is simply defined as the amount of joules needed to pass one postiive charge of couloumb to the positive end(against its will). For this purpose it is enough to understand that when the difference between the charges increase, the potential increases as the strength of the electrical field increases and vice versa. So when a positive charge(caused by depolarization) moves to the positive lead it will be displayed as an increase in the potential between the two leads, hence a line upwards. It is also important to note that this leads simply detect change, and after some time it will return back to the baseline if the change stops, which would result in a smooth line downwards. This is called an upward deflection. 
![EKG lead II basic diagram](https://alivecorcms.s3.amazonaws.com/sites/51b0fa1d9005a1000f00292e/theme/images/PES_ecg_mobile.png)
Here is an example of the lead II EKG of a normal cardiac cycle. When the muscle cells in right atrium first starts to depolarize, this creates a positive charge that moves towards the positive end(away from the SA node), meaning the line goes up(start of P wave), and after som time when the entire atrium is depolarized the vectors of charges cancels out and the line moves back to baseline(end of P wave). There is a delay of the AV node before it sends on the signal, hence the waiting PR segment. During the QRS complex the AV node sends the signal on to deploarize the muscle cell down by the ventricles. This process is a bit more intricate tough, it starts of with the depolarizing towards the SA node, hence a small dip in point Q, then depolarizes out down towards the edge of the heart, hence point R, it then in the moves to the top of the ventricles, to the negative lead, hence a small dip in S, and then finally stabilizes during the waiting ST segment. In the T wave the ventricles then start to repolarize back to the AV node, which causes an upward deflection(as this charge is now negative as opposed to previousely positive). One can note that the muscle cell in the atrium also needed to repolarize, however this does not usually show up on EKG as it is overshadowed by the repolarization in the QRS complex.


##### Blood vessels
There are many types of blood vessels, but they are generally put into two categories, arteries and veins. Arteries lead blood from the heart, whilst veins lead blood back to the heart. The arteries are generally thick to withstand the high blood pressure, and have certain smooth muscles that push the blood forward. The arteries eventually branch out to small capillaries where oxygen and other nutrients are left and waste products are picked up. The blood then as to return to the heart to pick up new nutrients, on this way the capillaries connect into veins. In the veins the blood pressure is a lot smaller(due to larger diameter(more volume) and not having as much power left from the hearts initial pump), so the veins are often tied to skeletal muscles, that when they contract push the blood towards the heart. It also uses one way valves, which restrain the blood flow to one direction when the skeletal muscles are relaxes. When a person breathes, their stomach and chest contracts, this also puts pressure on the veins which they can use to transport blood.

##### Diseases
Blood pressure is the pressure against the wall of the blood vessels. This blood pressure varies has it is higher when heart has just pumped, and lower afterwards during rest. A blood pressure is measured in millimeters of mercury(mmHg), which is defined as the pressure created by one millimeter of mercury in a barometer, which is around 133Pa. A normal blood pressure is around 80/120mmHg, where 80 is the lower value and 120 the higher. High blood pressure may occur when substances block the pathway of the blood vessels, requiring higher blood pressure to pass through. This can lead to several diseases. Plaque may build up on walls blood vessels, consisting mainly of LDL(low density lipoprotein) and cholesterol, these narrow and prevent the blood flow. If blood coagulates, it may create blood clots which block the blood flow by being directly in the way. If plaque ruptures, blood clots may also fill up there and further block the blood vessel. These blocked blood vessels can cause fatal damage, if they block blood flow to the brain, they may cause a stroke, if to the heart, it might case an heart attack.

![Blood types](https://upload.wikimedia.org/wikipedia/commons/3/32/ABO_blood_type.svg)
##### Blood type
There are different blood types, which marked out by which antigenes are present on red blood cells. The purpose of this is unknown, however they can cause troubles in blood donation, as someone with bloodtype A will have antibodies against blood type B, so if someone with bloodtype B or AB tries to donate their blood which has antigen B the antibodies will bind and destroy the red blood cells. As a quick note: O can give to everyone as it does not have any antigenes,  AB can only give to individuals with blood type AB, as both A and B antigens are present on the red blood cells, B cannot give to A, A cannot give to B, no one can give to O except O.

<br />

There is also a another antigen called the Rh factor, if the antigen is present on the red blood cells, the blood type is called Rh positive, if not, it is called Rh negative. An Rh negative mother has to be very careful giving birth to a Rh positive child, as the mothers antibodies might kill the babys red blood cells. 

<br />
Here is a quick overview of who can what blood type can donate to whom:
- Blood type O can donate to blood types A, B, AB, and O.
- Blood type A can donate to blood types A and AB.
- Blood type B can donate to blood types B and AB.
- Blood type AB can donate only to blood type AB.

Note though that blood type A for example has antibodies against blood type B, so the red blood cells and plasma have to be seperated before the blood transfusion.

`}
      </MarkdownViewer>
    </>
  )
}
