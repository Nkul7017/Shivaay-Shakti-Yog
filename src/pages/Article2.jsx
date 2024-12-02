import React, { useEffect } from "react";
import HeroNavbar from "../components/HeroNavbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Articel2() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <HeroNavbar />
      <div className=" relative sm:pt-20  ">
        <div className="px-8">
          <img
            className="  hidden sm:block rounded-2xl   w-screen object-cover   h-[170px] sm:h-[500px]   "
            src={
              'https://www.healthifyme.com/blog/wp-content/uploads/2020/10/Surya-Namaskar-1.jpg"'
            }
            alt=""
          />
        </div>
        <img
          className=" block sm:hidden   w-screen   h-[309px] sm:h-[500px]   "
          src={
            'https://www.healthifyme.com/blog/wp-content/uploads/2020/10/Surya-Namaskar-1.jpg"'
          }
          alt=""
        />
      </div>
      <div className=" w-[80vw] mx-auto mb-8 ">
        <h1 className=" text-[20px] sm:text-[28px] md:text-[30px] lg:text-[48px] heading mt-8 ">
          Finding the origin of Sūryanamaskāra
        </h1>
        <div className=" para mt-3 text-[12px] sm:text-[16px]  space-y-5">
          <p>
            The asana sequence known as Sūryanamaskāra literally means
            &quot;salute to the sun&quot; (surya = sun, namaskara = salute).
            Evidence suggests that this sequence has predominantly modern
            origins. In his book The Yoga Body, Mark Singleton traces the
            evolution of Sūryanamaskāra. He argues that the Sun Salutation, as
            practiced today, is &quot;a mixture of yoga as medical gymnastics
            and body-conditioning on the one hand, and state-of-the-art dumbbell
            work and freehand European bodybuilding techniques on the
            other&quot; (Singleton, 2010, p. 124).
          </p>
          <p>
            In the early 20th century, bodybuilders used dynamic sequences as
            warm-up exercises for poses and weight training. However, during
            that period, there was no clear connection between Sūryanamaskāra
            and yoga.
          </p>
          <p className="text-[14px] sm:text-[18px] mt-3 font-bold">
            Krishnamacharya later made these flowing movements the foundation of
            his Mysore style of yoga. Pattabhi Jois, his student and the founder
            of Ashtanga yoga, claimed that the sequences were detailed in the
            Vedas.
          </p>
          <p>Are There Ancient Roots?</p>
          <p>
            The claim by Pattabhi Jois is difficult to verify, as no evidence
            suggests that Sūryanamaskāra was part of physical yoga practices
            before the mid-1930s (Singleton, 2010). However, it is worth
            exploring whether there are deeper roots to this practice predating
            modern times.
          </p>
          <p className="text-[14px] sm:text-[18px] mt-3 font-bold">The Vedas</p>
          <p>
            The Vedic Corpus (12th–10th centuries BCE) consists of hymns,
            rituals, and chants, often praising the sun. These hymns associate
            sun salutations with fire rituals aimed at achieving health and
            prosperity.
          </p>
          <p>
            Over time, as Vedic rituals became more internalized, practitioners
            began using prostrations to honor the sun. The sun was also seen as
            a gate between the human world and the divine. Early references to
            &quot;yoga&quot; in the Vedas describe the connection warriors had with their
            chariots during battle. Warriors (yogayukta) ascended to the gods
            through the sun, guided by seven protective deities, after offering
            themselves to the sacrificial fire.
          </p>
          <p>
            This symbolism may relate to the Virabhadrāsanas (warrior poses) in
            Sūryanamaskāra. Could these ecstatic postures echo the Vedic
            warrior&apos;s journey to enlightenment?
          </p>
          <p className="text-[14px] sm:text-[18px] mt-3 font-bold">Ramayana</p>
          <p>
            Another possible origin comes from the Ramayana, the epic story of
            Rama and Sita. In his quest to rescue Sita from Ravana in Lanka,
            Rama encounters Hanuman. At one point, Hanuman recalls his powers,
            enlarges his body, and leaps across the ocean.
          </p>
          <p>
            This leap might symbolize a proto-Sun Salutation. Hanuman&apos;s
            movements before and after his leap could represent the dynamic flow
            of Sūryanamaskāra. His return journey, during which his tail is set
            ablaze and extinguished in the sea, could also symbolize burning
            karma and attaining peace.
          </p>

          <p className="text-[14px] sm:text-[18px] mt-3 font-bold">
            Surya Worship
          </p>
          <p>
            From Vedic times to today, Surya worship has persisted throughout
            Asia. In ancient Europe and Mesopotamia, the sun was also venerated
            as a deity or a gateway to the divine.
          </p>
          <p>
            The Rigveda references Mitra, a Vedic deity associated with Surya.
            However, traditional Sun worship often involves meditative
            practices, such as gazing at the sun, rather than dynamic sequences.
            Based on these observations, it seems unlikely that Sūryanamaskāra
            has roots in ancient Surya worship.
          </p>
          <p className="text-[14px] sm:text-[18px] mt-3 font-bold">
            Hatha yoga texts
          </p>
          <p>
            Classical Hatha yoga texts make no mention of dynamic sequences like
            Sūryanamaskāra. Instead, they emphasize the &quot;internal sun,&quot; located
            in the abdomen, through practices like pranayama, mudra, and bandha.
          </p>
          <p>
            Certain postures, such as Viparita Karani and Gomukhāsana, are
            associated with the sun because they are believed to prevent amrita
            (nectar) or bindu (essence) from being burned by the internal sun.
            Mayurāsana is said to stimulate the internal fire and provide
            immunity to poison.
          </p>
          <p className="text-[14px] sm:text-[18px] mt-3 font-bold">
            Other Possible Origins
          </p>
          <p>
            Prostration, a common act of devotion, might also be an origin of
            Sūryanamaskāra. During pilgrimages, worshippers often lay their
            bodies flat like a staff (danda in Sanskrit). This practice is
            widespread among Tibetan and Burmese Buddhists, as well as Indian
            Hindus.
          </p>
          <p>
            Mark Singleton suggests that Sūryanamaskāra evolved from such
            prostrations. The sequence may represent a modern interpretation of
            ancient rituals, with the body touching the ground in eight places
            (chin, chest, hands, and feet), reflecting the Ashtanga
            (eight-limbed) yoga system.
          </p>
          <p className="text-[14px] sm:text-[18px] mt-3 font-bold">
            The Goal of the practice
          </p>
          <p>
            Despite its uncertain origins, Sūryanamaskāra has become a
            cornerstone of contemporary yoga. But what purpose does it serve?
          </p>
          <p className="font-bold">1. Dynamic meditation</p>
          <p>
            Many people struggle to maintain focus during meditation. The
            flowing movements of Sūryanamaskāra help the mind concentrate on the
            body&apos;s motion, making it easier to transition into stillness
            and develop ekagrata (one-pointedness).
          </p>
          <p className="font-bold">2. Building physical strength</p>
          <p>
            Sūryanamaskāra builds strength and stamina, essential for advanced
            yoga practices like asanas, pranayama, and prolonged meditation.
          </p>
          <p className="font-bold">3. Awareness and Energy Intensification</p>
          <p>
            Practicing Sūryanamaskāra enhances awareness of the body&apos;s
            energies. It purifies, intensifies, and balances energy flows, such
            as the pranic vayus and chakras.
          </p>
          <p>
            Though likely a modern innovation, Sūryanamaskāra is not redundant
            or degraded. It serves as a practical and transformative tool,
            embodying the essence of yoga while adapting to contemporary needs.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Articel2;
