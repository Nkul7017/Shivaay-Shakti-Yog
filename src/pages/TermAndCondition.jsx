import React from "react";
import HeroNavbar from "../components/HeroNavbar";
import course from "../../public/Course/course.jpg";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <div className=" = overflow-hidden ">
        <div className=" relative z-10   ">
          <HeroNavbar />
        </div>
        <div className="  w-screen relative h-[170px] sm:h-[470px]  ">
          <img
            className="  w-screen h-[170px]   object-cover sm:object-contain sm:mt-[9vh] sm:h-[470px]   "
            src={course}
            alt=""
          />
          {/* <p
            className=" text-[24px] left-[5vw] bottom-4 sm:text-[48px]  absolute sm:bottom-10 sm:left-16 md:left-20 lg:left-24 heading  "
            style={{ color: "white" }}
          >
            Explore our Courses
          </p> */}
        </div>
        <div className="p-8 bg-gray-100">
          <div className="  w-[88vw] sm:w-[70vw] mx-auto para">
            <h1 className=" font-bold mb-4 text-3xl sm:text-4xl pt-16 heading ">Terms and Conditions</h1>

            <p className="mb-4">
              These terms of use (“Terms of Use” or “Terms”) mandate the terms
              and conditions on which the users (“User”) access and register on
              the website, software (collectively referred to as the
              “Platform”), operated by Shivaay Shakti Yog. (“Organisation), and
              the Platform Services (as defined below) provided through the
              Platform. The terms “we”, “our” or “us” refer to the Company. The
              terms “you”, “your” or “yourself” refer to the User.
            </p>

            <h2 className="text-xl font-bold mb-2">Acceptance of Terms</h2>
            <p className="mb-4">
              Users must agree to the Terms of Use, Medical Waiver, Disclaimer,
              and Privacy Policy before using the platform. Continued use
              signifies acceptance.
            </p>

            <h2 className="text-xl font-bold mb-2">Products and Services</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Users can purchase and avail services and products directly from
                the organization and its trainers, both online and offline.
              </li>
              <li>
                Services include fitness center memberships, yoga and meditation
                classes, booking appointments, and accessing diverse services
                related to usage data and transaction summaries.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">Membership</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Users must be legally capable of entering into a binding
                contract and must register an account with accurate information.
              </li>
              <li>
                Members are responsible for maintaining the confidentiality of
                their account information.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">Subscription Programs</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                The platform offers various subscription packages (monthly,
                quarterly, half-yearly, annual) with auto-renewal options.
              </li>
              <li>
                Users can cancel their subscriptions but will not receive a
                refund for the current subscription period.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">Payment Services</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Payments are processed through third-party vendors and payment
                gateways.
              </li>
              <li>
                Users must provide valid payment details and are responsible for
                ensuring sufficient funds.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">
              Health/Medical Disclaimers
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                The organization disclaims any therapeutic benefits and is not a
                healthcare provider.
              </li>
              <li>
                Users participate at their own risk and should consult a
                physician before enrolling, especially if they have pre-existing
                conditions.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">Use of Platform</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Users are granted non-transferable access to the platform and
                must use it for personal, informational purposes only.
              </li>
              <li>
                The organization reserves the right to review and delete any
                inappropriate content posted by users.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">
              Intellectual Property Rights
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                The platform and its content are protected by intellectual
                property laws. Users are not permitted to use the content
                without prior consent.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">
              Governing Law and Dispute Resolution
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                These terms are governed by the laws of India, with disputes
                subject to binding arbitration in New Delhi.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">General Provisions</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Notices and communications are served via email or platform
                notifications.
              </li>
              <li>
                Users cannot assign their rights under the terms, and the
                organization can freely transfer its rights.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">
              Storage of Personal Information
            </h2>
            <p className="mb-4">
              As part of your use of the Platform, you affirmatively consent
              that you have read and understood the Terms of Use and Privacy
              Policy and hereby consent to the collection, processing, storage,
              disclosure and/or transfer of your personal information in
              accordance with the Privacy Policy. You further agree and confirm
              that the security practices and procedures implemented by the
              Company are reasonable and sufficient for the protection of your
              personal information that is collected and stored by the
              Organization.
            </p>

            <h2 className="text-xl font-bold mb-2">Change of Terms of Use</h2>
            <p className="mb-4">
              The Organization reserves the right to change or update these
              Terms, or any other of our policies or practices, at any time, and
              will notify Users by posting such changed or updated Terms to
              www.Shivaayshaktiyog.com or on our mobile application. Your
              continued use of the Platform constitutes your agreement to abide
              by the Terms as modified. Under certain circumstances, we may also
              elect to notify you of changes or updates to our Terms by
              additional means, such as pop-up or push notifications or through
              e-mail notifications.
            </p>

            <h2 className="text-xl font-bold mb-2">
              Usage of Personal Information and Communication
            </h2>
            <p className="mb-4">
              Shivaay Shakti Yog shall use your Personal Information to ensure
              services with respect to the Platform are presented to you in the
              most effective manner, to secure the Platform and make
              improvements, to carry out our obligations to You, and to
              communicate with you. The said communication can either be by
              calls, text or emails and for purposes which include
              transactional, service, or promotional calls or messages. If at
              any time You wish to not receive any communication from our end,
              you can opt-out of the same by writing to us.
            </p>

            <h2 className="text-xl font-bold mb-2">Becoming a Member</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                You must be legally capable of entering into a binding contract
                and must not be a person barred from receiving Platform Services
                under the applicable laws, in your province, territory or
                country, to sign up as a registered user of the Platform
                Services. You agree that your use of the Platform does not
                violate any applicable law or regulation of your province,
                territory or country.
              </li>
              <li>
                In order to avail the Platform Services on the Platform, you
                will be required to register on the Platform by providing
                details about yourself, including your name, address, contact
                details and such other details as may be required on the
                Platform and create an account (“Account”).
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">
              Confidentiality of Information
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                You will be responsible for maintaining the confidentiality of
                the Account information including confidentiality of your
                password for restricting access to your Account, and are fully
                responsible for all activities that occur under your Account.
              </li>
              <li>
                You agree to (a) immediately notify the Company of any
                unauthorized use of your Account information or any other breach
                of security, and (b) ensure that you exit from your Account at
                the end of each session. The Organization cannot and will not be
                liable for any loss or damage arising from your failure to
                comply with this provision.
              </li>
              <li>
                You may be held liable for losses incurred by Organization any
                other user of or visitor to the Platform due to authorized or
                unauthorized use of your Account as a result of your failure in
                keeping your Account information secure and confidential.
              </li>
              <li>
                Use of another User’s Account information for availing the
                Platform Services is expressly prohibited.
              </li>
              <li>
                You shall not have more than one active Account on the Platform.
                Additionally, you are prohibited from selling, trading, or
                otherwise transferring your Account to another party or
                impersonating any other person for the purposing of creating an
                account with the Platform.
              </li>
              <li>
                Your membership is non-transferrable, however, in case you are
                moving to another city where the Organization provides its
                services, the Organization may transfer your membership against
                the receipt of price difference and any applicable service fee
                for the same (as applicable).
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">Membership for Minors</h2>
            <p className="mb-4">
              Individuals under the age of 18, or the applicable age of majority
              in their respective province, territory or country (“Minors”), may
              utilize the membership(s) / sessions / book a class (including
              free of cost classes) or any activity, only with the involvement
              and consent of the parent or legal guardian, under the account /
              membership of such parent or legal guardian and at all times,
              subject to these Terms of Use. In this regard, the parent or legal
              guardian of such Minor agrees to indemnify, defend and hold
              harmless the Organization and its business partner(s) from and
              against any and all losses, liabilities, claims, damages, costs
              and expenses (including legal fees and disbursements in connection
              therewith and interest chargeable thereon) asserted against or
              incurred by Organization and its business partner(s) that arise
              out of, result from, or may be payable by virtue of, any breach or
              non-performance of any representation, warranty, covenant or
              agreement made or obligation to be performed by you pursuant to
              these Terms.
            </p>

            <h2 className="text-xl font-bold mb-2">Subscription Programs</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Users may access the Platform Services by subscribing to our
                packages through a subscription fee-based program. Please read
                the fine prints of each Subscription Program and the Fitness
                Services before purchasing or subscribing, as the same provides
                all the details about the coverage and exclusions of the
                Subscription Program/the Fitness Services that you purchase.
              </li>
              <li>
                The Organization offers monthly, quarterly, half-yearly and
                annual subscription options. For the purposes of our
                subscriptions, a month constitutes 30 calendar days, a quarter
                constitutes 90 calendar days (3 months), a half year constitutes
                180 calendar days (6 months) and a year constitutes 365 calendar
                days (12 months).
              </li>
              <li>
                The packages offered by the Organization, details of
                subscription fees and any discounts on these packages, if
                applicable, will be reflected on the Platform.
              </li>
              <li>
                You can become a subscriber to the Subscription Program by
                purchasing a subscription to the Platform Services from the
                website or through the mobile application (“Order”). If your
                Order is acceptable to us, we will confirm your Order and send
                you an email to confirm your access to the subscription
                purchased. Our obligation to provide the Platform Services shall
                arise only once we take receipt of your Order, and send a
                confirmation regarding the same to you by email.
              </li>
              <li>
                The Organization reserves the right to not process or to cancel
                your Order in certain circumstances which Organization deems
                appropriate at its sole discretion. The Organization also
                reserves the right, in its sole discretion, to take steps to
                verify your identity in connection with your Order. You may need
                to provide additional information to verify your identity before
                completing your Order. The Organization will either not charge
                you or refund the charges for Orders that we do not process or
                cancel.
              </li>
              <li>
                You will only have access to the Subscription Program while your
                subscription is active and subsisting. The App-based Products
                and Services shall be available on the Platform only upon
                purchase of the Subscription Program, and will continue until
                the end of your current subscription period or till the
                prescribed number of classes under your Subscription Program
                gets completed, whichever is earlier.
              </li>
              <li>
                All amounts are payable and charged (i) at the time you place
                your Order and, (ii) at the time of each renewal, using the
                Payment Details (as defined below) you have provided.
              </li>
              <li>
                For all subscriptions bought on mobile app marketplaces
                (Appstore, Playstore, etc.) there will be auto-debit at the
                renewal dates as shared at the time of subscription. The user
                will be provided with the direction to cancel the subscription
                on the platform and on the mobile app marketplace.
              </li>
              <li>
                In case of any promotional discounts offered by Organization
                through a discount code or voucher, not more than one discount
                code or voucher will be honored at one time, that is to say, a
                User will not be permitted to use more than one discount code or
                voucher at a purchase.
              </li>
              <li>
                We reserve the right to change our Subscription Programs or
                adjust pricing for our Platform Services or any components
                thereof in any manner and at any time as the Organization may
                determine in our sole and absolute discretion. Any price changes
                or changes to your Subscription Program will take effect
                following notice to you. The Organization does not guarantee
                that the charges will be the lowest in the city, region or
                geography or if the Platform Services will be available for
                delivery / performance at all times.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">
              Policies related to Booking/Rescheduling/Cancellation of Classes
              or Membership and In-House Policies
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Users can book their slot in classes only in advance, based on a
                period as decided by the Organization and shown on the website
                or mobile application which may be changed by the Organization
                over time at its discretion. Users may cancel or reschedule
                appointments using the Platform, subject to permitted
                cancellation and rescheduling timelines and availability of a
                timeslot.
              </li>
              <li>
                The Organization reserves the right to cancel or reschedule
                appointments and the Organization shall not be liable for any
                inconvenience or loss caused to you as a result of such
                rescheduling, cancellation and delay in performance or failure
                to meet its obligations.
              </li>
              <li>
                Users shall be permitted to cancel their booking only up to a
                certain time before the scheduled class, or as mentioned on the
                Platform while booking a class, post which the option of
                cancellation shall be disabled from the Platform. In case you
                wish to cancel the class/session after the prescribed time
                period, you may chat with us or write to us on
                contact@Shivaayshsktiyog.com requesting cancellation of your
                appointment, and the Company may consider such request, at its
                sole discretion. Any decision taken by the Organization in this
                regard shall be final and binding. In the event of cancellation
                of a scheduled class within 12 hours from such scheduled class,
                or in the event of excessive/delayed/ last-minute cancellations,
                the Organization reserves the right to charge such amount for
                cancellation, as may be determined by the Organization.
              </li>
              <li>
                The Terms of Use will continue to apply until terminated by
                either you or the Organization as set forth below.
              </li>
              <li>
                If you object to the Terms of Use or wish to discontinue with
                your membership, you may (i) close your Account on the Platform;
                and/or (ii) stop accessing the Platform.
              </li>
              <li>
                Refund of Subscription fee: All Subscription Programs purchased
                by you are non-refundable, non-exchangeable, non-saleable and
                non-transferrable. In the event, you wish to discontinue with
                your Subscription Program, you will not receive a refund for the
                fees you have already paid for your current subscription period
                and you will be entitled to receive the Platform Services
                ordered until the end of your current subscription period or
                till the prescribed number of classes under your Subscription
                Program gets completed, whichever is earlier.
              </li>
              <li>
                The Organization may delist you or block your future access to
                the Platform or suspend or cancel your membership/ terminate
                your Account if it believes, in its sole and absolute discretion
                that you have infringed, breached, violated, abused, or
                unethically manipulated or exploited any term of these Terms of
                Use or anyway otherwise acted unethically. Notwithstanding
                anything in this clause, these Terms of Use will survive
                indefinitely unless and until the Organization chooses to
                terminate them.
              </li>
              <li>
                In the event your usage of the Platform Services violates our
                in-house policies stated above, the Organization suspend or
                cancel your membership/ terminate your Account at any time for
                any reason in its sole discretion with or without notice to you.
                If any complaint is received against a User to the effect he/she
                has used the Platform Services for the above purposes, then upon
                receiving such complaint, the Organization reserves the right to
                terminate the Account / cancel User’s membership in question.
                The Organization reserves the right to initiate legal action
                against you.
              </li>
              <li>
                The Organization shall have the right to cease/terminate
                relationship with you unilaterally without any reason, and
                applicable amount or cash back (if any) shall be refunded to you
                subsequently.
              </li>
              <li>
                Your access to the Platform may be occasionally restricted to
                allow for repairs, maintenance or the introduction of new
                facilities or Platform Services. We will restore your access to
                the Platform as soon as reasonably practicable. In the event
                that the Platform Services are still unavailable, please notify
                us by emailing at contact@Shivaayshaktiyog.com.
              </li>
              <li>
                Upon cancellation of the Subscription Program, the Organization
                may delete any content or other materials relating to your use
                of the Platform Services and the Organization shall have no
                liability to you or any third party for doing so. However, your
                transactions and other details may be preserved by the
                Organization for the purposes of tax or regulatory compliance.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">Payment Services</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                All payments in respect of the Platform Services shall be made
                to the Organization through the Platform. To the extent
                permitted by applicable law and subject to the Organization
                Privacy Policy, you acknowledge and agree that the Organization
                use certain third-party vendors and service providers, including
                payment gateways, mobile application marketplaces (appstore,
                playstore), to process payments and manage payment card
                information.
              </li>
              <li>
                In order to make payments online, you undertake to use a valid
                payment card or bank details or third party wallets or details
                required for any other mode of payment (“Payment Details”) with
                the authority to use the same, to have sufficient funds or
                credit available to complete the payment on the Platform in good
                standing. By providing the Payment Details, you represent,
                warrant, and covenant that: (1) you are legally authorized to
                provide such Payment Details; (2) you are legally authorized to
                perform payments using such Payment Details; and (3) such action
                does not violate the terms and conditions applicable to your use
                of such Payment Details or applicable law. You agree that you
                are responsible for any fees charged by your mobile carrier in
                connection with your use of the payment services through your
                mobile. The Organization shall use the Payment Details as
                described in the Company’s Privacy Policy. You may add, delete,
                and edit the Payment Details you have provided from time to time
                through the Platform.
              </li>
              <li>
                You acknowledge and agree that, in the event you have made
                payments in respect of any Subscription Program through your
                credit card, the Organization is authorized to charge the same
                credit card as was used for the initial subscription fee. In
                case you wish to renew your Subscription Program, the renewal
                subscription fees will be billed to the Payment Details you
                provided, until you change the Payment Details.
              </li>
              <li>
                The payment receipt for completion of a transaction and the
                transaction summary shall be provided by the respective mobile
                app marketplace, or by the Organization, as the case may be, and
                the payment receipt and transaction summary shall be made
                available on the Platform and also be sent to your registered
                email address.
              </li>
              <li>
                Except to the extent otherwise required by applicable law, the
                Organization is not liable for any payments authorized through
                the Platform using your Payment Details. Particularly, the
                Organization is not liable for any payments that do not complete
                because: (1) your payment card or bank account or third party
                wallet does not contain sufficient funds to complete the
                transaction or the transaction exceeds the credit limit in
                respect of the Payment Details provided; (2) you have not
                provided the Organization correct Payment Details; (3) your
                payment card has expired; or (4) circumstances beyond
                Organization control (such as, but not limited to, power
                outages, interruptions of cellular service, or any other
                interferences from an outside force) which prevent the execution
                of the transaction.
              </li>
              <li>
                With regards to payments, the Platform shall not be responsible
                or liable for any unauthorized transactions conducted on our
                Platform using your payment card or internet banking.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">
              Health/Medical Disclaimers
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                The Organization makes no claims, representations or guarantees
                that the Platform Services offered would provide a therapeutic
                benefit to all its Users. We hereby disclaim any guarantees of
                exactness as to the duration, type, satisfaction from the
                Fitness Services provided by us.
              </li>
              <li>
                The Organization is not a healthcare provider or a medical
                device provider and that our Fitness Services are neither
                medical/health care advice, nor a replacement for, or are a form
                of, therapy, and that the Fitness Services are not intended to
                cure, treat, or diagnose any medical conditions which a User may
                have.
              </li>
              <li>
                The Fitness Services offered herein, by their very nature,
                include certain inherent risks that cannot be eliminated
                regardless of the care taken to avoid injuries and/or any kind
                of losses. You hereby assert that your participation is
                voluntary and that you knowingly assume all such risks and hence
                hereby release the Released Party (as defined below) of all
                liability arising out of such aforementioned risks;
              </li>
              <li>
                You are aware of your physical limitations and medical history
                and that your participation by accessing and availing our
                Fitness Services may, in some circumstances, result in a
                physical injury or impact /worsen psychological condition or
                mental fitness. You also undertake that you are sufficiently
                self-aware and would stop any physical activities on the
                Platform Services before you become ill or injured, physically
                or psychologically. You will not attribute any such illness/
                injuries/loss to your health, of any kind, to the Platform
                Services offered by us. Further, we make no representation,
                whatsoever, that Fitness Services provided by us are appropriate
                or safe for use.
              </li>
              <li>
                You will not participate in the Platform Services under the
                influence of heavy medication, drugs, alcohol or other
                mood-altering substances, or undertake the exercises/training
                offered through our App-based Products and Services while
                driving or operating any machinery.
              </li>
              <li>
                You would consult your physician or health care provider before
                enrolling for the Fitness Services offered by us/ booking our
                classes, in the event you are or expect/suspect to (a) be
                pregnant, or (b) wear a pacemaker, or (c) suffer from epilepsy
                or seizures, or (d) have a history of mental illness, or (e)
                have eating disorder, or (f) have diabetes, or (g) have any
                other physical/ psychological/ emotional/ medical condition, or
                (h) are taking any strong medication.
              </li>
              <li>
                You will obtain the approval of your health care provider/doctor
                before participating in the Platform Services, in the event you
                are over 65 years of age.
              </li>
              <li>
                There is no obligation for any person to provide you with
                medical care while performing the activities offered under the
                Platform Services. You further understand and acknowledge that:
                (i) there may be no aid stations available for the said
                activity; and (ii) if medical care is rendered to you, you
                consent to that care if you are unable to give your consent for
                any reason at the time the care is rendered.
              </li>
              <li>
                You, for yourself and for your heirs, next of kin, executors,
                administrators and assigns, fully release, waive and forever
                discharge any and all rights or claims of any nature whatsoever,
                including but not limited to any claims pertaining to a physical
                or mental injury or illness, or claims arising out of negligence
                of any Released Party (as defined below) or anyone else, that
                you may have now or in the future, against the Organization any
                of its affiliates, franchisees and their respective
                representatives, directors, officers, independent contractors,
                consultants, agents, employees or volunteer staff (“Released
                Party”), in relation to or in connection with or arising out of
                the availing of Platform Services by you. Without limiting the
                foregoing, you further release any recourses which you may, now
                or hereafter, have resulting from any decision of any Released
                Party.
              </li>
              <li>
                Without prejudice to the indemnity obligations set out under
                Clause 9.2 of these Terms, you agree to indemnify (reimburse for
                any loss) and hold harmless each Released Party from any loss or
                liability (including any reasonable legal fees they may incur)
                defending any claim made by you or anyone making a claim on your
                behalf, even if the claim is alleged to or did result from the
                carelessness or negligence of any Released Party or anyone else.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">Use of Platform</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Subject to compliance with the Terms of Use, the Organization
                grants you a non-exclusive, freely revocable (upon notice from
                the Organization), non-transferable access and use of the
                Platform, the Platform Services and the content available on the
                Platform. You agree to use the Platform Services, Platform and
                the materials provided therein only: (a) for personal,
                informational and internal purposes, in accordance with and as
                permitted by the Terms of Use; (b) for purposes for which the
                Platform Services are meant to be used; and (b) in accordance
                with any applicable law, regulation or generally accepted
                practices or guidelines. You agree not to engage in activities
                that may adversely affect the use of the Platform by the
                Organization /other Users.
              </li>
              <li>
                By accessing the Platform and using our Platform Services, you
                acknowledge and consent to receive, at any time, customer
                alerts, reminders, or any other communications from the Company,
                its employees, Vendors and/or its affiliates, or in relation to
                offers for other Fitness Services/Platform Services offered by
                the Organization.
              </li>
              <li>
                As part of the Platform Services provided to you, after availing
                such services, you agree to provide honest feedback/review about
                the concerned Platform Service, if required by the Organization.
              </li>
              <li>
                Although we aim to offer you the best service possible, we make
                no promise that the Fitness Services will meet your requirements
                and we cannot guarantee that the Fitness Services will be fault
                free. If a fault occurs in the Fitness Services, please report
                it to us at contact@Shivaayshaktiyog.com and we will review your
                complaint and, where we determine it is appropriate to do so,
                correct the fault. If the need arises, we may suspend access to
                the Fitness Services while we address the fault. We will not be
                liable to you if the Fitness Services are unavailable for a
                commercially reasonable period of time.
              </li>
              <li>
                You acknowledge and agree that by accessing or using the
                Platform or Platform Services, you may be exposed to content
                from others that you may consider offensive, indecent or
                otherwise objectionable. The Company disclaims all liabilities
                arising in relation to such offensive content on the Platform.
              </li>
              <li>
                The Organization may enable Users to publish, post and upload,
                distribute or disseminate any topic /material/information/data
                on the Platform. You hereby agree and undertake to ensure that
                all such topic/material/information/data is appropriate and
                decent, and is not offensive, profane, defamatory, infringing,
                obscene. All such topic/material/information/data added,
                created, published, uploaded, submitted, distributed,
                disseminated or posted to the Platform by you is your sole
                responsibility and the same shall be in accordance with
                applicable law. The Organization reserves the right to review
                any topic/material/information provided/data uploaded, if any,
                by you on the Platform and delete any
                topic/material/information/data that is inconsistent with these
                Terms of Use.
              </li>
              <li>
                Prohibited Uses: Without prejudice to the foregoing, you further
                undertake not to: (i) defame, abuse, harass, threaten or
                otherwise violate the legal rights of the Organization of
                others; (ii) collect or store data about other Users in
                connection with the prohibited conduct and activities set forth
                in this Section; (iii) conduct or forward surveys, contests,
                pyramid schemes or chain letters; (iv) use any device or
                software to interfere or attempt to interfere with proper
                functioning of the Platform or any transaction being conducted
                on the Platform, or with any other person’s use of the Platform;
                (v) upload or distribute files that contain viruses or “Trojan
                horse”, or overloading or “flooding” or “mail bombing” or
                “crashing” or corrupted files, or any other similar software or
                programs that may directly or indirectly damage, interfere with,
                or disrupts access to, the Platform or the Platform Services (or
                the servers and networks which are connected to the Platform)
                and another’s computer or provide you undue advantage or benefit
                in purchasing goods / availing services; (vi) engage in any
                activity that interferes with or disrupts the access to Platform
                or Platform Services (or the servers and networks which are
                connected to the Platform); (vii) use the Platform or any
                material or Content for any purpose that is unlawful or
                prohibited by these Terms of Use, or to solicit the performance
                of any illegal activity or other activity which infringes the
                rights of the Organization or other third parties; (viii)
                disrupt or interfere with the security of, or otherwise cause
                harm to, the Platform, systems resources, accounts, passwords,
                servers or networks connected to or accessible through the
                Platform or any affiliated or linked sites; (ix) modify or alter
                the content available on the Platform; (x) distribute or sell,
                rent, lease, license or commercially host or otherwise make any
                Content on the Platform available to others; (xi) copy, modify,
                re-publish, post, display, translate, transmit/distribute,
                reverse engineer, perform, license, create derivative works, or
                sell any information or software obtained from the Platform
                through any medium without obtaining the necessary authorization
                from the Organization; (xii) remove any text, copyright or other
                proprietary notices contained in the Content downloaded from the
                Platform; (xiii) access (or attempt to access) the Platform and
                the materials or Platform Services by means other than through
                the interface provided by the Organization; (xiv) probe, scan,
                test the vulnerability of the Platform or any network connected
                to the Platform, or beach the security or authentication
                measures on the Platform or any network connected to the
                Platform; (xv) attempt to gain unauthorized access to any
                portion or feature thereof or any other systems, networks,
                servers, linked or affiliated sites, connected to or accessible
                through the Platform or to any Organization server, by hacking,
                password mining or any other illegitimate means; (xvi) use of
                any deep-link, robot, spider or other automatic device, program,
                algorithm or methodology, or any similar or equivalent manual
                process to access, acquire, copy or monitor any portion of the
                Platform or Content; (xvii) reproduce or circumvent the
                navigational structure or presentation of the Platform,
                materials or any Content to obtain or attempt to obtain any
                material, document or information through any means not
                specifically made available through Platform; (xviii) reverse
                look-up, trace or seek to trace any information on any other
                User of, or visitor to, the Platform, to its source; (xix)
                exploit the Platform or Platform Services or information made
                available or offered by or through the Platform in any way
                whether or not the purpose is to reveal any information,
                including but not limited to, personal identification
                information other than your own information, as provided on the
                Platform; (xx) falsify or delete any author attributions, legal
                or other proper notices or proprietary designations or labels of
                the origin or source of software or other material contained in
                a file that is uploaded; (xxi) upload or distribute files that
                contain software or other material protected by applicable
                intellectual property laws unless you own or control the rights
                thereto or have received all necessary consents; (xxii) violate
                any applicable laws or regulations for the time being in force
                within or outside India or anyone’s right to privacy or
                personality; (xxiii) violate the Terms of Use contained herein
                or elsewhere.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">
              Intellectual Property Rights
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                The Platform and the processes, and their selection and
                arrangement, including but not limited to, all text, videos,
                graphics, user interfaces, visual interfaces, sounds and music
                (if any), artwork and computer code (and any combinations
                thereof) (collectively, the “Content”) on the Platform is owned
                and controlled by the Organization / or its licensors and the
                design, structure, selection, coordination, expression, look and
                feel and arrangement of such Content is protected by copyright,
                patent and trademark laws, and various other intellectual
                property rights. You are not permitted to use the Content
                without the prior consent of the Organization or the Vendors, or
                the third party that may own the copyright, patent, trademark or
                any other intellectual property right in such Content.
              </li>
              <li>
                The trademarks, logos and service marks displayed on the
                Platform (“Marks”) are the property of the Organization and / or
                Vendors and / or other respective third parties, as the case may
                be. You are not permitted to use the Marks without the prior
                consent of the Organizer or the Vendors, or the third party that
                may own the Marks.
              </li>
              <li>
                If you believe the Platform or any of the Platform Services
                violates your intellectual property, you must promptly notify
                the Organization in writing at contact@Shivaayshaktiyog.com.
                These notifications should only be submitted by the owner of the
                intellectual property or an agent authorized to act on his/her
                behalf. However, any false claim by you may result in the
                cancellation of your access to the Platform. You are required to
                provide the following details in your notice: (i) The
                intellectual property that you believe is being infringed; (ii)
                The item that you think is infringing and include sufficient
                information about where the material is located on the Platform;
                (iii) A statement that you believe in good faith that the item
                you have identified as infringing is not authorized by the
                intellectual property owner, its agent, or the law to be used in
                connection with the Platform; (iv) Your contact details, such as
                your address, telephone number, and/or email; (v) A statement
                that the information you provided in your notice is accurate,
                and that you are the intellectual property owner or an agent
                authorized to act on behalf of the intellectual property owner
                whose intellectual property is being infringed; and (vi) Your
                physical or electronic signature.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">
              Disclaimer of Warranties & Liability
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                You expressly understand and agree that, to the maximum extent
                permitted by applicable law: (i) the Platform, Platform Services
                and other Content are provided by the Organization on an “as is”
                and on “as available” basis without warranty of any kind,
                express, implied, statutory or otherwise, including the implied
                warranties of title, non-infringement, merchantability or
                fitness for a particular purpose. Without limiting the foregoing
                and notwithstanding anything else contained in these Terms, the
                Organization makes no warranty that (i) the Platform or the
                Platform Services will meet your requirements or your use of the
                Platform or the Platform Services will be uninterrupted, timely,
                secure or error-free; (ii) the results that may be obtained from
                the use of the Platform, or Platform Services will be effective,
                accurate or reliable; (iii) the quality of the Platform or
                Platform Services will meet your expectations; or (iv) any
                errors or defects in the Platform or Platform Services will be
                corrected. No advice or information, whether oral or written,
                obtained by you from the Company or through use of the Platform
                Services shall create any warranty not expressly stated in the
                Terms of Use.
              </li>
              <li>
                The Organization claims any warranty, condition or
                representation in respect of any third party services and/or
                content, which may be made available to you through the
                Platform, in any aspects including, but not limited to, quality,
                accuracy, effectiveness, lack of viruses, non-infringement of
                third party rights and compliance of any applicable laws or
                regulations. You agree and understand that the use of such third
                party services and contents may be governed by such third party
                provider’s terms of use, license agreement, privacy policy or
                other such agreement.
              </li>
              <li>
                The Organization will have no liability related to any User
                Content arising under intellectual property rights, libel,
                privacy, publicity, obscenity or other laws. The Company also
                disclaims all liability with respect to the misuse, loss,
                modification or unavailability of any User Content.
              </li>
              <li>
                The Organization not be liable for any direct and/or any
                special, incidental, indirect, consequential, exemplary or
                punitive loss that you may incur as a consequence of
                unauthorized use of your Account or Account information in
                connection with the Platform or Platform Services, either with
                or without your knowledge.
              </li>
              <li>
                The Organization has endeavored to ensure that all the
                information on the Platform is correct, but the Organization
                neither warrants nor makes any representations regarding the
                quality, accuracy or completeness of any data, information, or
                Platform Services. The Organization shall not be responsible for
                the delay or inability to use the Platform or related
                functionalities, the provision of or failure to provide
                functionalities, or for any information, software,
                functionalities and related graphics obtained through the
                Platform, or otherwise arising out of the use of the Platform,
                whether based on contract, tort, negligence, strict liability or
                otherwise.
              </li>
              <li>
                Any material or data downloaded or otherwise obtained through
                the Platform is done entirely at your own discretion and risk,
                and in the event there is any damage to your computer systems or
                loss of date, you will be solely responsible for any damage to
                your computer systems or loss of data that results from the
                download of such material or data.
              </li>
              <li>
                The Organization shall not be held responsible or liable for any
                damages arising from periodic maintenance operations or
                unplanned interruption/ suspension of Platform Services that may
                occur due to technical reasons or for any reason beyond the
                Organization control or termination of Platform Services in
                accordance with the Suspension and Cancellation Policy of these
                Terms, including but not limited to direct or/and indirect
                or/and incidental or/and special consequential or/and exemplary
                damages, whether such interruption or/and suspension or/and
                termination was justified or not, negligent or intentional,
                inadvertent or advertent.
              </li>
              <li>
                You acknowledge that the above disclaimers under Clauses 6 and
                9.1 are reasonable, and you will accept any such risks and/or
                insure accordingly.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">
              Indemnification and Limitation of Liability
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                You agree to indemnify, defend and hold harmless the
                Organization its affiliates including but not limited to its
                (and its affiliates’) officers, directors, consultants,
                independent contractors, agents and employees on the Platform
                (“Indemnitees”) from and against any and all losses,
                liabilities, claims, damages, demands, costs and expenses
                (including legal fees and disbursements in connection therewith
                and interest chargeable thereon) asserted against or incurred by
                the Indemnitees that arise out of, result from, or may be
                payable by virtue of, any breach or non-performance of any
                representation, warranty, covenant or agreement made or
                obligation to be performed by you pursuant to these Terms of Use
                including, but not limited to, breach of your obligations under,
                inter alia, Clause 3.3 (Membership for Minors), Clause 6
                (Health/Medical Disclaimers), Clause 7 (Use of Platform) and
                Clause 8 (Intellectual Property Rights). Further, you agree to
                hold the Indemnitees harmless against any claims made by any
                third party due to, or arising out of, or in connection with,
                your use of the Platform or Platform Services, any
                misrepresentation with respect to the data or information
                provided by you, your violation of the Terms of Use, or your
                violation of any rights of another, including any intellectual
                property rights.
              </li>
              <li>
                In no event shall the Indemnitees be liable to you or any third
                party for any direct and/or any special, incidental, indirect,
                consequential, exemplary or punitive damages including, but not
                limited to, lost profits, loss of opportunity, loss of data or
                goodwill, service interruption, computer damage or system
                failure or the cost of substitute Platform Services or Fitness
                Services arising out of or in connection with these Terms or
                from the use of or inability to use the Platform, Platform
                Services or Content on the Platform or alteration of User’s
                transmissions and/or data or arising from any other matter
                relating to the Platform Services, whether based on warranty,
                contract, tort (including negligence), product liability or any
                other legal theory, and whether or not the Indemnitees have been
                informed of the possibility of such damage, even if a limited
                remedy set forth herein is found to have failed of its essential
                purpose. The limitations and exclusions in this Section apply to
                the maximum extent permitted by applicable laws.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">
              Violation of the Terms of Use
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                You agree that any violation by you of these Terms of Use will
                constitute an unlawful and unfair business practice, and will
                cause irreparable harm to the Organization and/or Vendors, as
                the case may be, for which monetary damages would be inadequate,
                and you consent to the Organization/or Vendors obtaining any
                injunctive or equitable relief that they deem necessary or
                appropriate in such circumstances. These remedies are in
                addition to any other remedies that the Organization and/or
                Vendors obtaining may have at law or in equity. If the
                Organization and/or Vendors takes any legal action against you
                as a result of your violation of these Terms of Use, they will
                be entitled to recover from you, and you agree to pay, all
                reasonable attorneys’ fees and costs of such action, in addition
                to any other relief that may be granted.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">
              Governing Law and Dispute Resolution
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Governing Law: These terms shall be governed by and construed in
                accordance with the laws of India without reference to conflict
                of laws principles and disputes arising in relation hereto shall
                be subject to the exclusive jurisdiction of courts, tribunals,
                fora, applicable authorities at New Delhi.
              </li>
              <li>
                Agreement to Arbitration: You and the Organization agree that
                any dispute, claim or controversy arising out of or in
                connection to these Terms or the breach, termination,
                enforcement, interpretation or validity thereof or the use of
                the Platform or Platform Services (“Dispute”) will be settled by
                a binding arbitration (“Arbitration”).
              </li>
              <li>
                Procedure of Arbitration: All Disputes, which you or the
                Organization (“Disputing Party”) wishes to have resolved, shall
                be referred upon the application of either the Disputing Party
                or the other party to the Dispute and finally settled under
                [(Indian) Arbitration and Conciliation Act, 1996 (“Act”) and the
                rules made thereunder], in force at the date of intimation of
                such Dispute, which Act and rules are deemed to be incorporated
                by reference in this clause. The number of arbitrators shall be
                three (3). One (1) arbitrator shall be appointed by the
                Disputing Party and one (1) arbitrator shall be appointed by the
                other party to the Dispute and together the two (2) arbitrators
                so appointed shall appoint the third arbitrator. If within
                fourteen (14) days of a request from the other party to do so a
                party fails to nominate an arbitrator, or if the two (2)
                arbitrators fail to nominate the third arbitrator within
                fourteen (14) days after the appointment of the second
                arbitrator, the appointment shall be made in accordance with the
                Act and the rules. No officer, director, shareholder, employee,
                representative or relative of any party may be nominated or
                appointed as an arbitrator. The seat and venue of such
                arbitration will be [New Delhi]. The language of this
                arbitration shall be English and any document not in English
                submitted by any party shall be accompanied by an English
                translation. A written transcript of the proceedings shall be
                made and furnished to the parties.
              </li>
              <li>
                Binding Award: Any award of the arbitrator or arbitral tribunal,
                as the case may be, pursuant to this clause shall be in writing
                and shall be final, conclusive and binding upon the parties, and
                the parties shall be entitled (but not obliged) to enter
                judgment thereon in any one or more of the highest courts having
                jurisdiction.
              </li>
              <li>
                Costs of Arbitration: The arbitrator shall be entitled to award
                costs of the arbitration. Subject to the aforesaid, each party
                to any arbitration shall bear its own expense in relation
                thereto, including but not limited to such party’s attorneys’
                fees and the expenses and fees of the arbitrators shall be borne
                equally by the parties to the Dispute.
              </li>
              <li>
                Class Action waiver: Where permitted under the applicable law,
                you and the Organization agree that each may bring claims
                against the other only in your or its individual capacity, and
                not as a plaintiff or class member in any purported class or
                representative proceeding. Further, where permitted under the
                applicable law, unless both you and the Organization agree
                otherwise, the court may not consolidate more than one person’s
                claims with your claims, and may not otherwise preside over any
                form of a representative or class proceeding.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">
              Links to Website/ Homepage
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                We may provide links to other websites or services for you to
                access. You acknowledge that any access is at your sole
                discretion and for your information only. We do not review or
                endorse any of those websites or services. We are not
                responsible in any way for: (a) the availability of, (b) the
                privacy practices of, (c) the content, advertising, products,
                goods or other materials or resources on or available from, or
                (d) the use to which others make of these other websites or
                services. We are also not responsible for any damage, loss or
                offense caused or alleged to be caused by, or in connection
                with, the use of or reliance on such websites or services.
              </li>
              <li>
                You may also link to our home page, mobile app, or a url within,
                provided, you do so in a way that is fair and legal and does not
                damage our reputation or take advantage of it, but you must not
                establish a link in such a way as to suggest any form of
                association, approval or endorsement on our part where none
                exists. You must not establish a link from any website that is
                not owned by you. The Platform Services must not be framed on
                any other website, nor may you create a link to any part of the
                Platform Services unless you have written permission to do so
                from us. We reserve the right to withdraw linking permission
                with or without written notice. The website from which you are
                linking must be compliant in all respects with the standards set
                out in our policy for acceptable Use of Platform. If you wish to
                make any use of material on or in the Platform Services other
                than that set out above, please address your request to
                contact@Shivaayshaktiyog.com.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">
              Report Abuse and Grievance Redressal
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                In the event you come across any abuse or violation of these
                Terms of Use or if you become aware of any objectionable content
                on the Platform or if you wish to report a grievance regarding
                Platform or Platform Services, please report the same to the
                following e-mail id: contact@Shivaayshaktiyog.com.
              </li>
              <li>
                In case of any dissatisfaction with the Platform Services, you
                shall first file a formal complaint with the customer service of
                the Organization, prior to pursuing any other recourse. The
                complaints can be lodged at contact@Shivaayshaktiyog.com, and
                upon lodging a complaint, you agree to provide complete support
                to the customer service team with such reasonable information as
                may be sought by them from you. The decision of the Organization
                on the complaints shall be final and you agree to be bound by
                the same.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">General Provisions</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Communications and Notice: You hereby expressly agree to receive
                communications such as occasional special offer, marketing,
                survey, Platform based communication emails and other
                communications from the Company, Vendors and other third parties
                relating to the Platform Services provided through the Platform.
                You can unsubscribe/ opt-out or revoke your consent from
                receiving such communications by e-mailing to
                contact@Shivaayshaktiyog.com. However, this may limit the extent
                of Platform Services that you can avail. All communications and
                notices from the Organization will be served by SMS or email to
                your registered email address or pop-up/ push notification
                through website/mobile applications or by general notification
                on the Platform. Any notice provided to the Organization
                pursuant to the Terms of Use should be sent to
                contact@Shivaayshaktiyog.com with subject line – Attention:
                TERMS OF USE.
              </li>
              <li>
                Assignment: You cannot assign or otherwise transfer the Terms of
                Use, or any rights granted hereunder to any third party. The
                Organization rights under the Terms of Use are freely
                transferable by the Organization to any third party without the
                requirement of seeking your consent.
              </li>
              <li>
                Severability: If, for any reason, a court of competent
                jurisdiction finds any provision of the Terms of Use, or any
                portion thereof, to be unenforceable, that provision shall be
                enforced to the maximum extent permissible so as to give effect
                to the intent of the parties as reflected by that provision, and
                the remainder of the Terms of Use shall continue in full force
                and effect.
              </li>
              <li>
                Waiver: Any failure by the to enforce or exercise any provision
                of the Terms of Use, or any related right, shall not constitute
                a waiver by the Organization of that provision or right.
              </li>
              <li>
                Survival: Even after termination, obligations mentioned under
                Clause 4.3.6 (Suspension and Cancellation of Subscription
                Program), Clause 6 (Health/Medical Disclaimers), sub-clause 9.1
                (Disclaimer of Warranties and Liability), sub-clause 9.2
                (Indemnification and Limitation of Liability), sub-clause 9.4
                (Governing Law and Dispute Resolution), sub-clause 9.7.1
                (Communications and Notice), sub-clause 9.7.3 (Severability) and
                sub-clause 9.7.5 (Survival) shall continue and survive the
                termination.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default TermsAndConditions;
