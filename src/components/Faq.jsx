import React, { useState } from "react";

const Faq = () => {
  const [ques1, setQues1] = useState(true);
  const [ques2, setQues2] = useState(false);
  const [ques3, setQues3] = useState(false);
  const [ques4, setQues4] = useState(false);
  const [ques5, setQues5] = useState(false);
  const [ques6, setQues6] = useState(false);
  const [ques7, setQues7] = useState(false);
  const [ques8, setQues8] = useState(false);
  const [ques9, setQues9] = useState(false);
  const [ques10, setQues10] = useState(false);
  const [ques11, setQues11] = useState(false);

  return (
    <>
      <div className="contianer px-5 md:px-64">
        <div>
          <ul class="flex flex-col">
            <li class="bg-white my-2 shadow-lg" x-data="accordion(1)">
              <h2
                class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                onClick={() => {
                  setQues1(!ques1);
                }}
              >
                <span className="text-orange-400">
                  Q.1- Before I pay, can I take a trial class?
                </span>
                <svg
                  class="fill-current text-orange-400 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              {ques1 && (
                <div class="border-l-2 border-orange-500 duration-300  transform transition-transform ">
                  <p class="p-3 text-gray-900">
                    A trial class can be provided to the first-time user. You
                    can request a trial session by emailing our management team.
                    Email us at support @shivaayshakti.com. You can also access
                    a trial class through the following link:-
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div>
          <ul class="flex flex-col">
            <li class="bg-white my-2 shadow-lg" x-data="accordion(1)">
              <h2
                class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                onClick={() => {
                  setQues2(!ques2);
                }}
              >
                <span className="text-orange-400">
                  Q.2- What do I need for an online Yoga Class?
                </span>
                <svg
                  class="fill-current text-orange-400 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              {ques2 && (
                <div class="border-l-2 text-orange-400 duration-300  transform transition-transform ">
                  <p class="p-3 text-gray-900">
                    There are a few necessary elements for an online yoga
                    session that you may want to have on hand to guarantee a
                    relaxing and productive practice. Here is a list of
                    potential necessities:
                    <p className="mt-3">
                      <span className="font-bold">Yoga mat : </span>
                      <span>
                        For your practice, a decent yoga mat offers support,
                        comfort, and grip. It offers a comfortable surface for a
                        variety of positions while assisting in preventing
                        sliding.
                      </span>
                    </p>
                    <p className="mt-3">
                      <span className="font-bold">Comfortable Clothes : </span>
                      <span>
                        Wear loose, flexible, breathable clothing that does not
                        restrict your movement for comfort. Choose attire that
                        will not limit your movement or cause you to become
                        distracted while practising.
                      </span>
                    </p>
                    <p className="mt-3">
                      <span className="font-bold">Water bottle : </span>
                      <span>
                        Keep some fluids on hand during your session to stay
                        hydrated. Even when working out online, it is crucial to
                        stay hydrated.
                      </span>
                    </p>
                    <p className="mt-3">
                      <span className="font-bold">Towel : </span>
                      <span>
                        When doing relaxation or seated postures, keep a towel
                        handy in case you need to wipe off sweat or make
                        yourself more comfortable.
                      </span>
                    </p>
                    <p className="mt-3">
                      <span className="font-bold">
                        YA quiet and well-lit space :{" "}
                      </span>
                      <span>
                        An environment that is both quiet and well-lit should be
                        chosen for your practice sessions. Make sure the space
                        is well-lit so you can see the instructor and the poses
                        properly.
                      </span>
                    </p>
                    <p className="mt-3">
                      <span className="font-bold">
                        Laptop, smartphone, etc :{" "}
                      </span>
                      <span>
                        To access the online yoga class, you will need a
                        computer, tablet, or smartphone with a reliable internet
                        connection. While practising, make sure your device is
                        charged and in a position that makes it simple for you
                        to see the screen.
                      </span>
                    </p>
                    <p className="mt-3">
                      <span className="font-bold">Speakers : </span>
                      <span>
                        External speakers or headphones are not required,
                        however, they can improve your experience by improving
                        the audio quality and allowing you to concentrate on the
                        instructor's instructions.
                      </span>
                    </p>
                    <p className="mt-3">
                      Always remember to arrange your area so that you may move
                      around safely and comfortably. Remove any impediments and
                      make sure you have enough space to comfortably stretch and
                      lengthen your body. Enjoy your yoga class online!
                    </p>
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div>
          <ul class="flex flex-col">
            <li class="bg-white my-2 shadow-lg" x-data="accordion(1)">
              <h2
                class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                onClick={() => {
                  setQues3(!ques3);
                }}
              >
                <span className="text-orange-400">
                  Q.3- Can I eat before a Yoga Session?
                </span>
                <svg
                  class="fill-current text-orange-400 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              {ques3 && (
                <div class="border-l-2 text-orange-400 duration-300  transform transition-transform ">
                  <p class="p-3 text-gray-900">
                    <p>
                      It is generally advised to avoid having a large meal right
                      before practising yoga. When you practise yoga while you
                      are full, it might be difficult to move and stretch
                      without feeling uncomfortable. If you have recently
                      consumed a substantial meal, your body may be diverting
                      energy and blood flow from your practice in favour of
                      helping you digest
                    </p>
                    <p className="mt-3">
                      It is preferable to consume a light snack at least 1-2
                      hours before a yoga session if you feel the desire to do
                      so. Choose items that are simple to digest, such as
                      fruits, yoghurt, a tiny amount of nuts or seeds, or a
                      smoothie. These alternatives provide you with a little
                      boost of energy without making you feel heavy or
                      uncomfortable during your practice.
                    </p>
                    <p className="mt-3">
                      On the other hand, you might opt to practise without food
                      if you are participating in an early morning or
                      pre-breakfast yoga session. To stay hydrated in this
                      scenario, it is still a good idea to drink a glass of
                      water
                    </p>
                    <p className="mt-3">
                      In the end, pay attention to your body and experiment with
                      what suits you the most. It is crucial to strike a balance
                      that enables you to practise easily and pleasantly.
                    </p>
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div>
          <ul class="flex flex-col">
            <li class="bg-white my-2 shadow-lg" x-data="accordion(1)">
              <h2
                class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                onClick={() => {
                  setQues4(!ques4);
                }}
              >
                <span className="text-orange-400">
                  Q.4- Can I change my coach after confirmation and payment?
                </span>
                <svg
                  class="fill-current text-orange-400 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              {ques4 && (
                <div class="border-l-2 text-orange-400 duration-300  transform transition-transform ">
                  <p class="p-3 text-gray-900">
                    <p>
                      Changing coaches and timings are subject to the
                      availability of the trainers. You can request a change and
                      connect with the management team. Changes will be made if
                      a valid reason is provided for the same.
                    </p>
                    <p className="mt-3">
                      While it may be possible to change the coach, you need to
                      understand that the coaches have a predefined schedule as
                      per the bookings, hence changing the coach can lead to
                      many changes across various schedules. It is hence advised
                      to thoroughly go through a programme and select the
                      trainer/ programme.
                    </p>
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div>
          <ul class="flex flex-col">
            <li class="bg-white my-2 shadow-lg" x-data="accordion(1)">
              <h2
                class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                onClick={() => {
                  setQues5(!ques5);
                }}
              >
                <span className="text-orange-400">
                  Q.5- What is the refund policy?
                </span>
                <svg
                  class="fill-current text-orange-400 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              {ques5 && (
                <div class="border-l-2 text-orange-400 duration-300  transform transition-transform ">
                  <p class="p-3 text-gray-900">
                    If cancellation is processed at least 72 hours before the
                    commencement of the programme, a full refund will be
                    provided. A 20% deduction would apply if cancellation is
                    done within 48 to 72 hours. 50% amount would be deducted if
                    a refund is processed within 24 hours of the commencement of
                    the programme. No refund would be provided once the
                    programme starts.
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div>
          <ul class="flex flex-col">
            <li class="bg-white my-2 shadow-lg" x-data="accordion(1)">
              <h2
                class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                onClick={() => {
                  setQues6(!ques6);
                }}
              >
                <span className="text-orange-400">
                  Q.6- How do group sessions and private sessions work?
                </span>
                <svg
                  class="fill-current text-orange-400 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              {ques6 && (
                <div class="border-l-2 text-orange-400 duration-300  transform transition-transform ">
                  <p class="p-3 text-gray-900">
                    <p>
                      <span className="font-bold">GROUP SESSIONS : </span>In a
                      group session there will be a predefined schedule and
                      classes that would be conducted on a designated time
                      duration regularly. A full programme schedule would be
                      available to you before booking the session. You can go
                      through the details and select a programme that best
                      matches your daily routine and your health concerns. You
                      can also contact our consultation team to guide you in
                      selecting the most suitable sessions.
                    </p>
                    <li className="mt-2">
                      ● Group sessions may not have the same trainer for every
                      class. Trainers would be assigned as per availability.
                    </li>
                    <li className="mt-2">
                      ● Classes missed in a group session WILL NOT be
                      re-conducted. You may contact the support team to access
                      the recording of the live class if it is available.
                    </li>
                    <li className="mt-2">
                      ● A WhatsApp or telegram group would be made for a
                      particular group session in which daily updates, class
                      timings or changes would be informed.
                    </li>
                    <li className="mt-2">
                      ● In group sessions, flexibility is limited, hence you
                      will have to punctually attend all the classes to get the
                      maximum benefits.
                    </li>
                    <li className="mt-2"> ● Trial classes may be available.</li>

                    <p className="mt-3">
                      <span className="font-bold">PRIVATE SESSIONS : </span> In
                      a private session, you will have the freedom to select the
                      trainer and timings at your discretion. You can go through
                      the profile of the various trainers available for the
                      particular programme and select the one that best suits
                      your interests. You can even select the timings as per
                      your availability. You will be provided extra days to
                      compensate for any missed sessions.
                      <li className="mt-2">
                        ● Private Sessions will provide you with the liberty to
                        be more open about your concerns with the trainer
                      </li>
                      <li className="mt-2">
                        ● A trainer would be better able to understand your
                        underlying concerns as they would have their entire
                        concentration on you and your treatment. This will
                        ultimately lead to better results and treatments.
                      </li>
                      <li className="mt-2">
                        ● If in case of an unforeseen emergency, you miss a
                        class, extra days in the schedule would be available to
                        compensate.
                      </li>
                      <li className="mt-2">
                        ● A better rapport would be built between you and your
                        trainer and this would lead towards an overall better
                        experience.
                      </li>
                      <li className="mt-2">
                        ● The same trainer would be available throughout the
                        programme
                      </li>
                    </p>
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div>
          <ul class="flex flex-col">
            <li class="bg-white my-2 shadow-lg" x-data="accordion(1)">
              <h2
                class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                onClick={() => {
                  setQues7(!ques7);
                }}
              >
                <span className="text-orange-400">
                  Q.7- If I have an emergency during the period of my membership
                  leading to missed classes, then how would it be covered?
                </span>
                <svg
                  class="fill-current text-orange-400 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              {ques7 && (
                <div class="border-l-2 text-orange-400 duration-300  transform transition-transform ">
                  <p class="p-3 text-gray-900">
                    Missed classes can be covered in the following manner:-
                    <p className="mt-3">
                      <span className="font-bold"> ● Group Sessions : </span>
                      Missed classes in the group sessions would be hard to
                      recover. It is advised that you try your best to attend
                      all the group sessions. In case of an emergency, you can
                      connect with the management team and request a recorded
                      session of the class. You may inform the respective coach
                      and request them to record the session for you.
                    </p>
                    <p className="mt-3">
                      <span className="font-bold"> ● Private Sessions : </span>
                      Missed classes in the group sessions would be hard to
                      recover. It is advised that you try your best to attend
                      all the group sessions. In case of an emergency, you can
                      connect with the management team and request a recorded
                      session of the class. You may inform the respective coach
                      and request them to record the session for you.
                    </p>
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div>
          <ul class="flex flex-col">
            <li class="bg-white my-2 shadow-lg" x-data="accordion(1)">
              <h2
                class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                onClick={() => {
                  setQues8(!ques8);
                }}
              >
                <span className="text-orange-400">
                  Q.8- Which package is the most beneficial?
                </span>
                <svg
                  class="fill-current text-orange-400 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              {ques8 && (
                <div class="border-l-2 text-orange-400 duration-300  transform transition-transform ">
                  <p class="p-3 text-gray-900">
                    Every package is customised to suit the individual needs of
                    a customer or target an individual ailment. You can go
                    through the details provided in every package to find the
                    one that is most beneficial for you. Here are some general
                    guidelines for selecting the type of package:-
                    <p className="mt-3">
                      <span className="font-bold"> ● GROUP SESSIONS : </span>{" "}
                      Group sessions are best for individuals that want to
                      include yoga as a general part of their daily schedule to
                      improvise their health. It does not necessarily have to be
                      related to a particular ailment. A normal individual with
                      no major concerns can easily participate in these sessions
                      and practise yoga.
                    </p>
                    <p className="mt-3">
                      <span className="font-bold"> ● PRIVATE SESSIONS : </span>
                      PRIVATE SESSIONS: Private sessions are best for those
                      individuals who seek to treat a particular ailment and
                      want a private coach. In these sessions classes and their
                      schedule can be customised to suit the needs of the
                      individual. Ailments like diabetes, PCOS, weight
                      management, asthma, etc. can be managed via private
                      sessions to get better results. A dedicated coach can
                      analyse your progress.
                    </p>
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div>
          <ul class="flex flex-col">
            <li class="bg-white my-2 shadow-lg" x-data="accordion(1)">
              <h2
                class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                onClick={() => {
                  setQues9(!ques9);
                }}
              >
                <span className="text-orange-400">
                  Q.9- Can I take a second trial session?
                </span>
                <svg
                  class="fill-current text-orange-400 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              {ques9 && (
                <div class="border-l-2 text-orange-400 duration-300  transform transition-transform ">
                  <p class="p-3 text-gray-900">
                    The second trial session is not available. You may connect
                    with the management team to get a second session in the form
                    of one-time consultation.
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div>
          <ul class="flex flex-col">
            <li class="bg-white my-2 shadow-lg" x-data="accordion(1)">
              <h2
                class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                onClick={() => {
                  setQues10(!ques10);
                }}
              >
                <span className="text-orange-400">
                  Q.10- What should I eat after a Yoga Class?
                </span>
                <svg
                  class="fill-current text-orange-400 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              {ques10 && (
                <div class="border-l-2 text-orange-400 duration-300  transform transition-transform ">
                  <p class="p-3 text-gray-900">
                    It is crucial to refuel your body with nutritional foods
                    that promote recuperation and offer necessary nutrients
                    after a yoga session. The following recommendations on what
                    to eat following a yoga session:
                    <p className="mt-3">
                      <span className="font-bold">● Hydrate : </span>
                      Drink water or other hydrating liquids to rehydrate
                      yourself and replace the fluids you lost while practising.
                      In addition to water, other healthy options include herbal
                      tea, coconut water, and homemade electrolyte drinks.
                    </p>
                    <p className="mt-3">
                      <span className="font-bold">● Balanced Meal : </span> Aim
                      for a meal that is well-balanced and has a variety of
                      carbohydrates, proteins, and healthy fats. This
                      combination will aid in energy restoration, muscle
                      healing, and general recuperation. Think about the
                      following choices:
                    </p>
                    <p className="mt-3">
                      * Include whole grains in your diet, such as brown rice,
                      quinoa, or whole wheat bread, to refill your glycogen
                      reserves and provide you with long-lasting energy.
                    </p>
                    <p className="mt-1">
                      * Lean forms of protein, such as tofu, tempeh, beans, or
                      grilled chicken, are preferred. For muscles to heal and
                      regenerate, protein is necessary
                    </p>
                    <p className="mt-1">
                      * Include sources of healthy fats like avocado, nuts,
                      seeds, and olive oil in your diet. These fats provide
                      people with a feeling of fullness and aid in the
                      assimilation of fat-soluble vitamins.
                    </p>
                    <p className="mt-3">
                      <span className="font-bold">● Veggies and fruits : </span>
                      Include a variety of veggies and fruits in your post-yoga
                      supper. They supply important vitamins, minerals, and
                      antioxidants that promote healing and general health.
                      Fresh fruits, colourful veggies, and leafy greens are all
                      excellent choices.
                    </p>
                    <p className="mt-3">
                      <span className="font-bold">
                        ● Smoothies or Protein Shakes :
                      </span>
                      These can be practical and nourishing post-workout options
                      if you want a lighter alternative or have a lower
                      appetite. A variety of fruits, leafy greens, a protein
                      source (like Greek yoghurt or protein powder), and a
                      liquid (like almond milk or coconut water) should all be
                      present.
                    </p>
                    <p className="mt-3">
                      Keep in mind that every person has distinct dietary
                      choices and constraints. Adapt your post-yoga meal to your
                      particular requirements, tastes, and any dietary
                      restrictions you may have. Additionally, receiving
                      individualised advice can be obtained by speaking with a
                      qualified dietitian or nutritionist.
                    </p>
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div>
          <ul class="flex flex-col">
            <li class="bg-white my-2 shadow-lg" x-data="accordion(1)">
              <h2
                class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                onClick={() => {
                  setQues11(!ques11);
                }}
              >
                <span className="text-orange-400">
                  Q.11- As a beginner, which class/ classes are best for me?
                </span>
                <svg
                  class="fill-current text-orange-400 h-6 w-6 transform transition-transform duration-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                </svg>
              </h2>
              {ques11 && (
                <div class="border-l-2 text-orange-400 duration-300  transform transition-transform ">
                  <p class="p-3 text-gray-900">
                    In the programme details section, the difficulty level of a
                    particular package is mentioned. All packages with
                    difficulty level beginner are good for people just starting
                    with yoga.
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* <div>
        <h1
          onClick={() => {
            setQues2(!ques2);
          }}
        >
          this is Ques 2
        </h1>
        {ques2 && <h1>this is answer 2</h1>}
      </div> */}
      </div>
    </>
  );
};

export default Faq;
