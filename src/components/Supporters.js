import React, { useEffect, useRef } from 'react';
import './styles/supportersStyle.css';




const Supporters = () => {


  return (
    <div id="outerContainerSup">
      <h1>COALITION MEMBERS</h1>
      <article className="wrapper">
        <div className="marquee">
          <div className="marquee__group">
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/levelSvg.svg?alt=media&token=52bbecdb-f52a-46de-9793-9c79237cee42"/>
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/AustIndia.svg?alt=media&token=2023bb3c-7f3d-4cfd-9068-49312220ca7e" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/3StarCandy-01.png?alt=media&token=757408e7-2775-43b8-8888-e2f06e02c90d"/>
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/25Years.png?alt=media&token=c39e2f08-617a-4eef-9d01-e15bdf5d4dda" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/Buffet.png?alt=media&token=58d53753-5b2c-4f32-97e2-88bc25867d86" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/Razzoos.png?alt=media&token=239be2af-0b0b-4775-81f5-783e3f1511bf" />
            <img  src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/SMOKEHOUSE.png?alt=media&token=af061eef-14cd-4cdc-9b36-aa037eeb6ae9" />
            <img className="whiteLogo" src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/UrbanCreetside.png?alt=media&token=db8a7526-b5d6-424e-9a3e-a412880b4203" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/Screenshot%20.png?alt=media&token=d193b537-7644-4cf1-a61c-2138779cfd5d" />
          </div>
          <div aria-hidden="true" className="marquee__group">
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/Cajun.png?alt=media&token=69bd4bfc-d499-4e75-af52-9b0f1c148392" />
            <img className="whiteLogo" src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/Centro.png?alt=media&token=f87d239c-36fc-466b-9f3a-32dd2fa403d3" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/CleanEatz.png?alt=media&token=5381db1a-60be-4bcb-964f-deaa7762ff76" />
            <img className="whiteLogo" src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/Finleys.png?alt=media&token=6770daf5-3638-478e-a671-2936b2c3ac06" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/Ginos.png?alt=media&token=eea17018-37a1-4ebd-a52d-d1abb850499b" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/RioGrande.png?alt=media&token=1a1e7d00-2194-47e1-a0dc-fdabbcda9646" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/SnackRoom.png?alt=media&token=c6479257-c987-4d45-9a4d-184c8367694e" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/UrbanRoof.png?alt=media&token=9d12b464-9a32-43d8-aaf3-a41726121a46" />
          </div>
        </div>
        <div className="marquee marquee--reverse">
          <div className="marquee__group">
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/HAIRSALON.png?alt=media&token=6fa88619-b3dd-4a7c-88ea-4c603ef1032a" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/HURRICANE.png?alt=media&token=a7270f56-8d9c-4ee1-b2c0-6920feb6a338" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/PrincessCraftRV.jpeg?alt=media&token=d6036127-906b-4cd8-afb7-b8b301bfdd41" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/KenneyFort.png?alt=media&token=2c0212c0-956a-4bed-aeee-d01d25bb24ea" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/LaConcha.png?alt=media&token=6301fe81-7de0-4fe2-855e-44be4361d3c3" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/ROUND%20RISK-01.jpg?alt=media&token=c499b8b5-7910-461b-bd3d-56532c0f5d05" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/Tequila.png?alt=media&token=17e15b99-16ee-4c2b-92ce-c0442d52405c" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/URBAN.png?alt=media&token=15135f54-d02d-4488-843c-9019556f735b" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/NEW_Playtri.png?alt=media&token=851cbb28-1f91-48e3-83d9-bbefcb25d751" />

          </div>
          <div aria-hidden="true" className="marquee__group">
            <img  src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/LAMPPOST-01.png?alt=media&token=7a86ffcc-0554-4ff6-a1b5-314f74d958dc" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/LibertyBarbeque.png?alt=media&token=adaa0a5e-5226-48e5-854c-a4e3543148ea" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/MicroBac.png?alt=media&token=9b4ba8b0-93be-4405-9728-0973ce492ee0" />
            <img className="whiteLogo" src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/MOD.png?alt=media&token=954d87ac-780d-4991-acf3-012d9e8413f9" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/Palermo-01.jpg?alt=media&token=241d33f3-6374-4b94-bc46-e8916edc2dd0" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/Santiagos.png?alt=media&token=301e37fd-e078-4b09-8cef-0142881573cb" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/Tokyo.png?alt=media&token=2940ecbb-d107-4cf9-94f6-3a92b875a1bd" />
            <img src="https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/WARPATHPIZZA.png?alt=media&token=b96162c5-e0f0-439b-baa3-8c3b4fbfe405" />
          </div>
        </div>
      </article>

    </div>
  );
};

export default Supporters;

