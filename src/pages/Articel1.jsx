 import React, { useEffect } from 'react'
import HeroNavbar from '../components/HeroNavbar'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom';
 
 function Articel1() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
   return (
    <>
    <HeroNavbar/>
    <div className=' relative sm:pt-20 '>
          <div className='px-8'>
            <img
            className="  hidden sm:block rounded-2xl   w-screen object-cover   h-[170px] sm:h-[500px]   "
              src={'/article/traditional.png'}
              alt=""
            />
            </div>
            <img
            className=" block sm:hidden   w-screen   h-[309px] sm:h-[500px]   "
              src={'/article/traditional.png'}
              alt=""
            />
            </div>
            <div className=' w-[80vw] mx-auto mb-8 '>
            <h1 className=' text-[20px] sm:text-[28px] md:text-[30px] lg:text-[48px] heading mt-8 '>Traditional yoga vs Modern yoga</h1>
            <div className=' para mt-3 text-[12px] sm:text-[16px]  space-y-5'>
<p>From "Yogash chittahvritti nirodhah", to Snake Yoga ; the technique has been improvised many times. Sometimes so harshly that it lost its original essence, but such is the magnitude in the name (read Yog) itself that whichever form it took, it always found a following.</p>
<p>Today millions of people practice yoga, across the globe. This is really overwhelming, because this popularity is very recent. The efforts of our Honourable Prime Minister Mr. Modi and many others great yogis will be remembered by many generations. I remember the time when baba Ramdev has become a household name. The following he got was amazing but only a particular age group was attracted. It was 2001, and just like many others my childish mind also thought that yoga is an "old people's thing".</p>
<p>A decade and a half later I am teaching yoga practices to teenagers and young adults. It is overwhelming to see how the youths have embraced the practice.</p>
<p>We really have come a long way !</p>
<p>Well, let's understand how the traditional practice is different from the one which has attracted the modern world.</p>
<p>The practice which is more than 5000 years old is said to have originated from the lord of universe, Adiyogi or Shiva. The intention of the practice was to achieve a unity between the individual self and the supreme self, thus the name Yog; literally meaning "unity". Adiyogi shared this knowledge with saptrishis (seven sages) and they then educated the masses for many centuries.</p>
<p>This unity is explained to be achieved through several ways out of which 2 are broadly accepted, one is through mind and the other one is through the body.</p>
<p>Sage patanjali was the first person to structure the knowledge of achieving this unity through mind and he called it "Ashtanga Yoga" which basically an 8 stepped process of achieving the ultimate. The steps being yama, niyama, pranayam, asana, pratyahar, dharna, dhyan, samadhi. The second was a more mysterious process called "Tantra Yoga" which is the process of using one's body's full potential to achieve the unity with the supreme self. A tradition which strictly followed the teacher-disciple (guru-shishya) parampara. Unfortunately, In the absence of learned teachers, "Tantra Yoga" started getting distorted. Some teachers may have forseen this and they managed to improvise the Tantra Yoga practice in a way which they thought would be more acceptable, they called it "Hatha Yoga". Along with yogasna and pranayama this practice also involved ways of cleaning the internal organs (shath kriyas), various mudras and bandhas. Above is a general brief of traditional yoga in laymen language. Fast forward 19th century and the yogic practices were almost disappearing, thanks to the constant loot of Indian culture, traditions and ofcourse the prosperity. And then a few learned guru's like BKS Iyengar, Krishnamacharya, Svami shivananda, Svami Vivekananda and many others have dedicated their lives in reminding people about this ancient tradition. But this time the target was Western world.</p>
<p>These contributions are the foundation which has compelled the world to accept India as the spiritual leader.</p>
<p>This new audience , however was seemingly more interested in the physical aspect of yoga. This aspect (read yogasana) then was promoted even more , considering the health benefits which come from the practice.</p>
<p>The gymnast body shapes of the western teachers made the yogasna look even more beautiful and eventually everyone just wanted to loose weight, become flexible, gain strength with yoga. Even the pranayama lost their significance. Meditation, kriyas, mudras, yamas, niyamas etc were almost too boring (read non existent) to follow now.</p>
<p>And suddenly every exercise has become about loosing weight. Yoga practices were no exceptions and hence came the other improvisations such as Power yoga, Hot yoga, Iron Yoga and the list is endless.</p>
<p>These forms only focused on somehow getting through the practice , there was no focus on Body and mind balance.</p>
<p>Despite the popularity of these weight loss yogic fads, some teachers and schools continued with the traditional practices. They continue educating people about the significance of pranayama, the cleanisng techniques and all the other aspects of yogic practices. It was this persistence which has kept the real nature of the practice alive.</p>
<p>As and when the world became more and more fast, anxious, restless, stressed, people started to understand the importance of the traditional yogic practices. In order to quench the thirsts of logical minds many scientific studies were conducted on how the traditional yogic practices are effective in psychosomatic disorders.</p>
<p>As a result there is a significant increase in number of practitioners who want to practice the non yogasana aspect of yoga. The recent events of covid-19 has stamped the efficacy of pranayamas and kriyas for improved lung functioning.</p>
<p>There has been a sudden increase in the commercialization of yoga too. The practices and knowledge which were offered at free of cost earlier is now one of the highest paying jobs. Surprisingly, the higher the fee is, more successfully (at least financially) and knowledgeable the teacher is considered. Perhaps, it's this commercialization which encourages people to keep manipulating the practice in some way or the other. Trends like Beer Yoga, Snake Yoga etc are a result of such commercial motivation.</p>
<p>The conclusion here is that traditional yogic practices are wonderfully structured to achieve optimum body and mind functioning. These can really help in realising the full potential of human beings. Every steps in keeping the practices alive is very much needed and appreciated, however one needs to be careful that any enthusiasm doesn't take the true nature of practice away .</p>
            </div>
            </div>
    <Footer/>
    </>
   )
 }
 
 export default Articel1
 