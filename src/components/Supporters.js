import React, { useEffect, useRef } from 'react';
import './styles/supportersStyle.css';



const Supporters = () => {


  return (
    <div id="outerContainerSup">
      <h1>COALITION MEMBERS</h1>
      <article className="wrapper">
        <div className="marquee">
          <div className="marquee__group">
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/3rd-level-01-G52H6L32wTqK2x53P5tWTwpRkK9edI.png"/>
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/AustIndia-PJkeJagGFStQWMnzGwO5IiBRrKnfkw.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/3%20Star%20Candy-01-EN0Qi9gqp1wx8LRbcSW0Zkistk9DNU.png"/>
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/Buffet-01-y5EeFX3PRPlt5FDBG3a22EROxD2MNf.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/razzoos-01-cREgUgJFnGZU9lmML9USgHBffw6QC4.png" />
            <img  src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/SMOKEHOUSE-01-Bj3Dsqsj6HnkVztTjhTs2qHJdHTVTh.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/Screenshot%20-xQfFxcqz2l7Tr2LMNSuHFkQrWCvtK1.png" />
          </div>
          <div aria-hidden="true" className="marquee__group">
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/Cajun-01-e2gHjZGlV6BBN3hLfeTh95Oo2Ap7pu.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/CleanEatz-JAblxBzyRKqR1BAqbhwqpONRz5lXQh.png" />
            <img className="whiteLogo" src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/Finley%E2%80%99s-01-f8yvY8Xh8ayVzNO73JXMLtg4j3oHok.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/Gino's-01-DPERoOhGZslzgJbIiJ4jjiQlHhCNnU.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/Rio%20Grande-01-3DvE02ZOiFj915vvKsRF8NesOhSrpW.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/Snack%20ROom-0JCWiaTSzzRNcaLuApdpBF3UQ3i2xJ.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/HURRICANE%20Logo-01-AcJgeWxNMsvAWor9wyRPA4TbHxQDAA.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/NEW_Playtri-OMpl4fbdYGFGuWcV57hO5WpqkE4Vha.png" />

          </div>
        </div>
        <div className="marquee marquee--reverse">
          <div className="marquee__group">
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/HAIR%20SALON-01-jEVujlL7CHBJsjVdJmwTiRt5krf4V0.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/PrincessCraftRV-Adx3agqODkZsXAnAc7VxTVkKzPSaJH.jpeg" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/Kenney%20Fort-01-6w8yOcOtb35AcUCOdq8VyCX2obL1Oy.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/La%20concha-01-tJUKOuPnkVF4ufsrTg1xmO50dCtpJt.png" />
            <img className="whiteLogo" src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/ROUND%20RISK-01-CTCGiNbuUVozgKqe7Hy5VTLWsXzra9.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/Tequila-01-B8oUQzqptyOZA4NHESXt9KSZCy8Llb.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/image-vWUMtEcjFCF2AP1etoZTKtODoJvzfv.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/idk-6wUV9fh4UVwtU8dF6caQDvQlZUsBur.png" />
          </div>
          <div aria-hidden="true" className="marquee__group">
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/mc%20logo%20trasnparent%20(1)-yOSvyH64OeMtVAtkBRSO822In9PcUq.png" />
            <img  src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/LAMPPOST-01-ZCRQBAZWUwfySlllzCr1pI2J2t6eMw.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/Liberty%20Barbeque%20without-KJNjvEogmylsq6vknOZH9YmYWLZVEQ.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/Micro%20Bac-01-jnHybOgQwR96EYHbD4W0spAhgDIk1j.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/Palermo-01-yib0RqdclaZTsZ0TpkAQ4m9e5oHOS0.jpg" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/Santiago's-01-d7JF3TA6YsQYg8U4BHfaeOKs8ArcMO.png" />
            <img src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/Tokyo-01-FidLi6pPcB6WdMv9XpPU9lUpi3i6qy.png" />
            <img className='whiteLogo' src="https://nc3tn0tdhn81gmyy.public.blob.vercel-storage.com/WARPATH%20PIZZA-01-u4xMQLh39JCqNC5HpKil03AQ1H7F5b.png" />
          </div>
        </div>
      </article>

    </div>
  );
};

export default Supporters;

