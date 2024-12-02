import React, { useEffect } from "react";
import HeroNavbar from "../components/HeroNavbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Articel1() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <HeroNavbar />
      <div className=" relative sm:pt-20 ">
        <div className="px-8">
          <img
            className="  hidden sm:block rounded-2xl   w-screen object-cover   h-[170px] sm:h-[500px]   "
            src={"/article/traditional.png"}
            alt=""
          />
        </div>
        <img
          className=" block sm:hidden   w-screen   h-[309px] sm:h-[500px]   "
          src={"/article/traditional.png"}
          alt=""
        />
      </div>
      <div className=" w-[80vw] mx-auto mb-8 ">
        <h1 className=" text-[20px] sm:text-[28px] md:text-[30px] lg:text-[48px] heading mt-8 ">
          Traditional yoga vs Modern yoga
        </h1>
        <div className=" para mt-3 text-[12px] sm:text-[16px]  space-y-5">
          <p>
            From &quot;Yogas chitta vritti nirodhah&quot; to &quot;Snake Yoga,&quot; the practice of
            yoga has evolved significantly over the years. In some cases, it has
            been altered so extensively that it has lost much of its original
            essence. Yet, the name &quot;Yoga&quot; carries such profound depth that, in
            every form it takes, it continues to find devoted followers.
          </p>
          <p>
            Today, millions of people around the world practice yoga. This
            global popularity is a relatively recent phenomenon. Much credit
            goes to leaders like Prime Minister Narendra Modi and great yogis
            whose efforts have made yoga accessible and celebrated worldwide. I
            still remember the early 2000s when Baba Ramdev became a household
            name in India. Back then, yoga was primarily associated with older
            generations. As a child, I, too, thought yoga was &quot;something old
            people did.&quot;
          </p>
          <p>
            Fast forward to today, I find myself teaching yoga to teenagers and
            young adults. It&apos;s heartening to witness how younger
            generations have embraced the practice.
          </p>

          <p className=" font-bold ">
            How Traditional Yoga Differs from Modern Yoga
          </p>

          <p>
            Yoga, with its roots stretching back over 5,000 years, is said to
            have originated with Adiyogi, or Shiva, the Lord of the Universe.
            The goal of yoga was to achieve unity between the individual self
            and the supreme self—hence the name Yoga, meaning &quot;union.&quot; This
            wisdom was passed on by Adiyogi to the seven sages (Sapta Rishis),
            who then spread it to the world.
          </p>
          <p>
            Historically, this unity could be achieved in two broad ways:
            through the mind or through the body.
          </p>

          <p className="font-bold ">
            1. Yoga of the Mind (Ashtanga Yoga):
          </p>
          <p>
            Sage Patanjali codified a system called Ashtanga Yoga, an eight-step
            process aimed at achieving self-realization. The steps are:
          </p>

          <ul className="list-disc list-inside">
            <li>Yama (ethical principles)</li>
            <li>Niyama (self-discipline)</li>
            <li>Asana (physical postures)</li>
            <li>Pranayama (breath control) </li>
            <li>Pratyahara (withdrawal of senses)</li>
            <li>Dharana (concentration)</li>
            <li>Dhyana (meditation)</li>
            <li>Samadhi (ultimate liberation)</li>
          </ul>

          <p className="font-bold ">
            2. Yoga of the Body (Tantra Yoga):
          </p>
          <p>
            Tantra Yoga involved using the body&apos;s full potential to unite
            with the supreme self. It relied heavily on the guru-shishya
            (teacher-disciple) tradition. Over time, due to a lack of qualified
            teachers, Tantra Yoga became distorted. To preserve its essence,
            some teachers simplified it into Hatha Yoga. This form focused on
            postures (asanas), breath control (pranayama), cleansing techniques
            (shat kriyas), and energy locks (mudras and bandhas).
          </p>

          <p className="font-bold ">
            The Modern Transformation of Yoga
          </p>
          <p>
            By the 19th century, yoga practices were fading, partly due to the
            colonization and cultural erosion of India. However, yogis like
            B.K.S. Iyengar, Krishnamacharya, Swami Sivananda, and Swami
            Vivekananda revived interest in yoga, particularly in the Western
            world.
          </p>

          <p>
            The Western audience, however, was primarily drawn to the physical
            aspect of yoga, especially postures (asanas). The health benefits of
            asanas were emphasized, while other aspects like pranayama,
            meditation, and ethical principles were sidelined. Soon, yoga became
            a physical fitness trend, with forms like Power Yoga, Hot Yoga, and
            Iron Yoga emerging. These variations often prioritized weight loss
            and physical fitness over holistic wellness.
          </p>

          <p className="font-bold">
            Commercialization and Its Impact
          </p>

          <p>
            The commercialization of yoga has further transformed its landscape.
            Practices once taught freely are now part of a booming industry. The
            perception that higher fees equate to better teachers has fueled
            this trend. Novel and sometimes questionable practices like Beer
            Yoga and Snake Yoga have emerged, driven more by commercial
            interests than authentic yogic principles.
          </p>

          <p className="font-bold">
            The Persistence of Traditional Yoga
          </p>

          <p>
            Despite these trends, many teachers and schools have remained
            committed to traditional yoga. They continue to educate people about
            the significance of pranayama, meditation, and other non-physical
            aspects of yoga. The COVID-19 pandemic highlighted the efficacy of
            pranayama and kriyas in improving respiratory health, further
            validating traditional practices.
          </p>

          <p>
            As more people experience the fast-paced, stressful modern
            lifestyle, there is a growing recognition of the value of
            traditional yoga for mental and physical well-being. Scientific
            studies have reinforced the effectiveness of traditional yoga in
            managing psychosomatic disorders.
          </p>

          <h1 className="text-[20px] sm:text-[28px] md:text-[30px] lg:text-[48px] heading mt-8 ">
            Conclusion
          </h1>
          <p>
            Traditional yoga is a well-structured system designed to optimize
            both body and mind, helping individuals realize their full
            potential. While modernization and commercialization have expanded
            yoga&apos;s reach, it&apos;s crucial to preserve its true essence. Any
            enthusiasm to innovate must be balanced with respect for the
            tradition&apos;s original purpose: achieving harmony of body, mind,
            and spirit.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Articel1;
