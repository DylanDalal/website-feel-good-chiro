export type CarePage = {
  slug: string;
  title: string;
  label: string;
  kind: 'service' | 'condition';
  headline: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  /** CSS object-position for photos whose subject is off-center. */
  imagePosition?: string;
  sections: { heading: string; paragraphs: string[]; points?: string[] }[];
  faqs: { question: string; answer: string }[];
  related: string[];
  source?: { label: string; url: string };
};
const consultation = {
  image: '/images/chiropractic-consultation.jpg',
  imageAlt: 'A chiropractor and patient discussing care',
};
const movement = {
  image: '/images/shoulder-mobility.jpg',
  imageAlt: 'A clinician assessing shoulder movement',
};
const active = {
  image: '/images/active-tampa-couple.jpg',
  imageAlt: 'Two adults enjoying a walk outdoors',
};
const sauna = {
  image: '/images/infrared-sauna.jpg',
  imageAlt: 'The infrared sauna at Feel Good Chiropractic in Tampa',
  imagePosition: 'right center',
};
export const carePages: CarePage[] = [
  {
    slug: 'chiropractic-care',
    title: 'Chiropractic Care in Tampa, FL',
    label: 'Chiropractic care',
    kind: 'service',
    headline: 'Good care starts with a good conversation.',
    description:
      'Explore personalized chiropractic care in Tampa with Dr. Frankie Amarillas, including assessment, hands-on treatment, and rehabilitation.',
    intro:
      'An aching back. A stiff neck. Something that just doesn’t move like it used to. At Feel Good Chiropractic, your appointment starts with what you’re feeling—and what you want to get back to.',
    ...consultation,
    sections: [
      {
        heading: 'Your goals belong in the plan.',
        paragraphs: [
          'Maybe you want to sit through a workday more comfortably, turn your head when driving, or return to the gym. Bring those details with you. They help Dr. Frankie connect the examination to the things that matter in your everyday life.',
          'Your health history, movement, and symptoms guide the next step. That may be chiropractic care, rehabilitation, a different treatment option, or a referral when another kind of care is needed.',
        ],
      },
      {
        heading: 'More than an adjustment.',
        paragraphs: [
          'A care plan can combine hands-on treatment with practical ways to move, work, and exercise. Techniques are selected after your examination and discussed with you before treatment.',
        ],
        points: [
          'Joint manipulation or gentler mobilization, when appropriate',
          'Soft tissue techniques for muscles and surrounding tissues',
          'Functional exercises and rehabilitation',
          'Ergonomic guidance for work and daily routines',
        ],
      },
      {
        heading: 'Understand your options.',
        paragraphs: [
          'Spinal manipulation is one nondrug option for some musculoskeletal problems. Benefits vary, and it is not appropriate for every person or condition. Temporary soreness can occur; discuss risks, alternatives, and any health conditions with Dr. Frankie.',
          'You should know what is being recommended, why, and how progress will be assessed. Feel Good Chiropractic does not require long-term contracts. Ask questions, share your preferences, and let the office know if your symptoms change.',
        ],
      },
      {
        heading: 'Care through different stages of life.',
        paragraphs: [
          'Age, previous injuries, bone health, and other medical conditions can affect the examination and treatment choices. Older adults should share information about medications, osteoporosis, falls, and prior procedures.',
          'For a child or teenager, call the office to discuss the reason for the visit, current appointment options, and parent or guardian participation. Bring recommendations from the child’s healthcare team. Pregnancy-related back discomfort should also be discussed with your prenatal provider when considering care.',
        ],
      },
    ],
    faqs: [
      {
        question:
          'Is a chiropractic orthopedist the same as an orthopedic surgeon?',
        answer:
          'No. An orthopedic surgeon is a medical doctor who can operate. Dr. Frankie is a chiropractic physician with board certification in chiropractic orthopedics, which covers non-surgical evaluation and care for the same spine, joint, muscle, and nerve conditions. If your problem calls for a surgeon, he will tell you and help arrange a referral.',
      },
      {
        question: 'Do I have to receive an adjustment?',
        answer:
          'You can discuss your comfort level and preferences before any treatment. The examination helps determine suitable options, and you can ask about alternatives to a particular technique.',
      },
      {
        question: 'How many visits will I need?',
        answer:
          'There is no set number for everyone. Recommendations depend on your history, findings, goals, and response to care. Ask how the plan will be reassessed as you progress.',
      },
      {
        question: 'Can I come in with an existing diagnosis or imaging?',
        answer:
          'Yes. Bring relevant reports and a list of your medications and other care providers. Existing information can help guide the conversation; additional evaluation may still be needed.',
      },
    ],
    related: ['back-pain', 'neck-pain', 'soft-tissue-therapy'],
    source: {
      label: 'NCCIH: Spinal manipulation',
      url: 'https://www.nccih.nih.gov/health/spinal-manipulation-what-you-need-to-know',
    },
  },
  {
    slug: 'acupuncture',
    title: 'Acupuncture in Tampa, FL',
    label: 'Acupuncture',
    kind: 'service',
    headline: 'A little space to focus on you.',
    description:
      'Learn about acupuncture in Tampa with certified acupuncturist Dr. Frankie Amarillas, what to expect, and how it may fit your care plan.',
    intro:
      'Curious about acupuncture? You don’t have to know what to expect before you walk in. Dr. Frankie will talk through your questions and help you decide whether it makes sense for you.',
    ...consultation,
    sections: [
      {
        heading: 'What acupuncture involves.',
        paragraphs: [
          'Acupuncture uses very fine needles placed at selected points on the body. Feel Good Chiropractic uses sterile, single-use needles. Dr. Frankie holds a Certified Acupuncturist credential in addition to his chiropractic training.',
          'Your visit begins with a conversation about symptoms, health history, and goals. Let the office know about medications, pregnancy, bleeding conditions, implanted devices, and previous reactions to treatment.',
        ],
      },
      {
        heading: 'Where it may fit.',
        paragraphs: [
          'Research suggests acupuncture may help some people with back or neck pain, knee osteoarthritis pain, and certain headaches. Evidence and results differ by condition; it is not a cure-all or a substitute for necessary medical care.',
          'If you are considering acupuncture for pain, stress, sleep, or another wellness concern, bring that question to the consultation. Dr. Frankie can explain the available options and whether coordination with another provider makes sense.',
        ],
      },
      {
        heading: 'Know what comes next.',
        paragraphs: [
          'Tell Dr. Frankie if you are nervous about needles. Your comfort and consent are part of the conversation throughout the visit. Sensations vary, and treatment should not be something you feel pressured to tolerate.',
          'The number and spacing of visits depend on your individual plan and response. Ask what changes to watch for, when to check in, and how acupuncture would fit alongside any chiropractic care or rehabilitation.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does acupuncture hurt?',
        answer:
          'Experiences vary. Some people notice a brief sensation as a needle is placed, while others notice very little. Tell your practitioner about any discomfort so the treatment can be adjusted or stopped.',
      },
      {
        question: 'Are there side effects?',
        answer:
          'Minor soreness or bruising can occur. Serious complications are uncommon but possible, particularly with improper technique. Discuss your medical history and personal risks before treatment.',
      },
      {
        question: 'Can acupuncture be part of my chiropractic care?',
        answer:
          'It can be discussed as one part of an individualized plan. Combining treatments is not automatically better for every concern; recommendations should reflect your needs and response.',
      },
    ],
    related: ['chiropractic-care', 'back-pain', 'joint-pain'],
    source: {
      label: 'NCCIH: Acupuncture effectiveness and safety',
      url: 'https://www.nccih.nih.gov/health/acupuncture-effectiveness-and-safety',
    },
  },
  {
    slug: 'cox-spinal-decompression',
    title: 'Cox Spinal Decompression in Tampa',
    label: 'Cox decompression',
    kind: 'service',
    headline: 'A gentler approach to the conversation about back pain.',
    description:
      'Explore Cox lumbar flexion-distraction at Feel Good Chiropractic in Tampa. Learn what the technique involves and how suitability is assessed.',
    intro:
      'When back pain keeps interrupting your day, it helps to understand the choices in front of you. Cox lumbar flexion-distraction is one of the techniques Dr. Frankie offers.',
    ...consultation,
    sections: [
      {
        heading: 'What is Cox flexion-distraction?',
        paragraphs: [
          'This hands-on technique uses a specialized treatment table and controlled movement of the lower spine. It is often described as spinal decompression or flexion-distraction. The movement and pressure are applied by the clinician and adjusted to the patient.',
          'It is a nonsurgical technique. It is different from an operation to decompress the spine, and a recommendation for one does not mean the other is unnecessary.',
        ],
      },
      {
        heading: 'An assessment comes first.',
        paragraphs: [
          'Back pain, pain extending into a leg, or a previous disc diagnosis can raise questions about whether this approach is suitable. Those symptoms alone do not establish that you are a candidate.',
          'Bring your prior imaging reports and details of surgery, implants, bone health concerns, and other medical care. Dr. Frankie will consider your findings, explain options, and recommend referral when appropriate.',
        ],
      },
      {
        heading: 'A plan with room to adapt.',
        paragraphs: [
          'If treatment is recommended, ask what it will feel like, what risks apply to you, and what alternatives are available. Tell Dr. Frankie about symptoms during and after the session.',
          'Progress should be evaluated against your comfort, function, and goals. Exercises, changes to daily activities, and other care may be part of the discussion. No technique can promise to repair a disc or guarantee that you will avoid surgery.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is spinal decompression right for every back problem?',
        answer:
          'No. Your medical history and examination matter. Prior surgery, bone fragility, new neurological symptoms, and other conditions can change which options are appropriate.',
      },
      {
        question: 'Can I ask about a herniated disc or spinal stenosis?',
        answer:
          'Yes. Bring your diagnosis and any reports. Dr. Frankie can discuss whether conservative care is appropriate, whether further evaluation is needed, and how to coordinate with your treating clinician.',
      },
      {
        question: 'Should I cancel a specialist appointment?',
        answer:
          'Keep recommended medical and specialist appointments. Chiropractic care should fit within a coordinated plan, and urgent or progressive symptoms require medical evaluation.',
      },
    ],
    related: ['back-pain', 'sciatica', 'chiropractic-care'],
  },
  {
    slug: 'sports-chiropractic',
    title: 'Sports Chiropractor & Rehabilitation in Tampa',
    label: 'Sports & rehabilitation',
    kind: 'service',
    headline: 'For the things you can’t wait to get back to.',
    description:
      'Sports chiropractic and functional rehabilitation in Tampa with Dr. Frankie Amarillas, a Certified Chiropractic Sports Practitioner.',
    intro:
      'Your morning run. A round of golf. The next workout. Whether activity is your routine or your weekend escape, your goals help shape your recovery plan.',
    ...active,
    sections: [
      {
        heading: 'You don’t need to be a pro.',
        paragraphs: [
          'Dr. Frankie is a Certified Chiropractic Sports Practitioner. His approach brings together a movement assessment, hands-on care when suitable, and functional training and rehabilitation.',
          'Tell him about the activity, when symptoms began, recent changes in training, and what you need to do to feel ready to return. A new injury and a recurring ache may call for different next steps.',
        ],
      },
      {
        heading: 'Build back with a purpose.',
        paragraphs: [
          'Rehabilitation should match the demands of your activity. A plan can work on comfortable movement, strength, coordination, and gradually increasing load. The aim is to connect what you do in the office with what you need outside it.',
        ],
        points: [
          'Discuss running, lifting, court sports, golf, and everyday exercise',
          'Review training volume, recovery, and movement habits',
          'Set useful goals for returning to activity',
          'Coordinate referral when imaging or specialist care is needed',
        ],
      },
      {
        heading: 'An honest return-to-activity conversation.',
        paragraphs: [
          'Less pain is one part of recovery. Confidence, strength, and the ability to tolerate the activity also matter. Discuss how progress will be measured and when to change the plan.',
          'A suspected fracture, joint deformity, inability to use a limb, or concussion symptoms need prompt medical evaluation. Don’t push through a significant injury while waiting for an appointment.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can you help if I’m just getting back into exercise?',
        answer:
          'Bring your questions about movement, recurring pain, and building an activity routine. Dr. Frankie can assess your concerns and discuss an appropriate starting point.',
      },
      {
        question: 'Is sports chiropractic the same as orthopedic surgery?',
        answer:
          'No. Dr. Frankie provides chiropractic care and rehabilitation. An orthopedic surgeon or another specialist may be appropriate for certain injuries; referral can be part of the plan.',
      },
      {
        question: 'Can I book a sports physical?',
        answer:
          'Call the office to ask about current availability, the requirements of your organization, and any forms that need to be completed before scheduling.',
      },
    ],
    related: ['exercise-recovery', 'knee-pain', 'shoulder-pain'],
    source: {
      label: 'NIAMS: Sports injury diagnosis and treatment',
      url: 'https://www.niams.nih.gov/health-topics/sports-injuries/diagnosis-treatment-and-steps-to-take',
    },
  },
  {
    slug: 'exercise-recovery',
    title: 'Exercise Recovery & Infrared Sauna in Tampa',
    label: 'Recovery & sauna',
    kind: 'service',
    headline: 'Recover like an athlete. Even if you’ve never felt like one.',
    description:
      'Exercise recovery in Tampa with Dr. Frankie Amarillas: functional exercise, hands-on care, and an infrared sauna open to everyone.',
    intro:
      'The work you put in matters. So does what happens after it. Whether you’re training for a race, chasing your kids, or getting back to the gym, recovery is part of the plan here.',
    ...sauna,
    sections: [
      {
        heading: 'Everyday people. Athlete-level attention.',
        paragraphs: [
          'Athletes plan their recovery as carefully as their training. We think a parent, a desk worker, or a weekend golfer deserves the same attention. Dr. Frankie is a Certified Chiropractic Sports Practitioner, and he brings that approach to every patient in a family practice.',
          'Tell him what your week looks like: the workouts, the job, the sleep, and the aches that show up afterward. Those details help shape a recovery plan that fits your real life.',
        ],
      },
      {
        heading: 'What recovery can look like.',
        paragraphs: [
          'Recovery is more than rest. It’s how your body adapts to the work you ask of it. A plan can bring together several pieces, chosen after your examination and adjusted as you go.',
        ],
        points: [
          'Functional exercise to build strength, mobility, and control',
          'Hands-on chiropractic and soft tissue care, when suitable',
          'Time in our in-office infrared sauna',
          'Guidance on training load, rest days, and returning after a layoff',
        ],
      },
      {
        heading: 'About the infrared sauna.',
        paragraphs: [
          'Our sauna is infrared. Instead of heating the air around you the way a traditional sauna does, infrared heaters warm your body directly, so the cabin stays at a lower, more comfortable temperature. Many people find a sauna session helps them unwind and eases the stiffness that follows a hard effort. Research on sauna use and exercise recovery is still developing, so we treat it as one comfortable part of a plan rather than a treatment for any condition.',
          'A sauna isn’t right for everyone. Check with your doctor first if you are pregnant or have heart disease, uncontrolled high blood pressure, low blood pressure, or another condition affected by heat. Skip it when you are ill or have been drinking alcohol, keep sessions short, drink water afterward, and step out right away if you feel dizzy or unwell.',
          'The sauna is open to everyone. You don’t need to be a chiropractic patient to book a session. Call the office to reserve a time, or ask about adding one around your visit.',
        ],
      },
      {
        heading: 'Functional exercise, explained.',
        paragraphs: [
          'Functional exercise trains the movements you actually use: squatting to pick something up, carrying groceries, reaching overhead, pushing off for a run. Dr. Frankie can show you exercises in the office and help you build a routine to continue on your own.',
          'Sharp pain, significant swelling, or soreness that keeps getting worse is not ordinary post-workout soreness. Bring it up so it can be assessed. A suspected fracture, an inability to use a limb, or concussion symptoms need prompt medical evaluation.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I have to be an athlete to come in for recovery?',
        answer:
          'No. Most of our patients are everyday people: parents, professionals, retirees, and weekend exercisers. The idea is to give you the kind of attention an athlete would expect, whatever your activity level.',
      },
      {
        question: 'Can I use the sauna without being a chiropractic patient?',
        answer:
          'Yes. The infrared sauna is open to everyone, whether or not you are a patient. Call the office at 813-962-2489 to ask about availability and reserve a time.',
      },
      {
        question: 'Is soreness after exercise normal?',
        answer:
          'Mild muscle soreness a day or two after a new or harder workout is common and usually settles on its own. Pain that is sharp, comes with swelling, or does not improve deserves an assessment.',
      },
      {
        question: 'Will I get exercises to do at home?',
        answer:
          'When exercise is part of your plan, Dr. Frankie can demonstrate the movements and explain how often to do them. Ask how your routine should change as you progress.',
      },
    ],
    related: ['sports-chiropractic', 'soft-tissue-therapy', 'knee-pain'],
    source: {
      label: 'Harvard Health: Sauna benefits and safety',
      url: 'https://www.health.harvard.edu/staying-healthy/saunas-and-your-health',
    },
  },
  {
    slug: 'soft-tissue-therapy',
    title: 'Soft Tissue Therapy in Tampa',
    label: 'Soft tissue care',
    kind: 'service',
    headline: 'Care for the muscles that do so much.',
    description:
      'Learn about instrument-assisted soft tissue techniques, pin-and-stretch treatment, and rehabilitation at Feel Good Chiropractic in Tampa.',
    intro:
      'Sometimes the conversation starts with a tight shoulder, a tired back, or a movement that feels restricted. Soft tissue care may be one part of understanding and addressing those concerns.',
    ...movement,
    sections: [
      {
        heading: 'A closer look at movement.',
        paragraphs: [
          'Muscles and the tissues around them work with your joints to help you move. Dr. Frankie considers how symptoms affect that movement, along with work demands, exercise, and previous injuries.',
          'The examination helps determine whether hands-on soft tissue care belongs in your plan. Not every area that feels tight needs the same treatment.',
        ],
      },
      {
        heading: 'Techniques chosen for you.',
        paragraphs: [
          'Dr. Frankie’s published specialties include instrument-assisted soft tissue manipulation and pin-and-stretch treatment. These approaches use hands-on pressure or a treatment instrument, sometimes paired with movement.',
          'Ask about the reason for a technique and how it is expected to feel. Tell Dr. Frankie about skin conditions, medications, bruising, or sensitivity before treatment, and speak up if a technique is uncomfortable.',
        ],
      },
      {
        heading: 'Carry it into your day.',
        paragraphs: [
          'Your plan may also include mobility, strengthening, or a change in the activity that keeps aggravating the area. Hands-on treatment and a useful home plan can be discussed together.',
          'If you are looking for a standalone massage appointment, call the office for current services and scheduling. Soft tissue techniques within chiropractic care are not necessarily the same as a separately booked massage.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is deeper pressure always better?',
        answer:
          'The intensity should be appropriate to your findings and tolerance. More pressure is not a goal in itself. Discuss discomfort, sensitivity, and your preferences before treatment.',
      },
      {
        question: 'Can I ask about recurring muscle tension?',
        answer:
          'Yes. Explain when it returns and which activities change it. That pattern can help guide the examination and a discussion of practical next steps.',
      },
    ],
    related: ['chiropractic-care', 'sports-chiropractic', 'shoulder-pain'],
  },
  {
    slug: 'back-pain',
    title: 'Back Pain Chiropractor in Tampa',
    label: 'Back pain',
    kind: 'condition',
    headline: 'When your back has other plans.',
    description:
      'Discuss lower, middle, or upper back pain with Tampa chiropractor Dr. Frankie Amarillas. Explore assessment, conservative care, and rehabilitation.',
    intro:
      'Getting out of bed, sitting through work, picking something up—back pain can make ordinary things feel like a project. Let’s start with what has changed for you.',
    ...consultation,
    sections: [
      {
        heading: 'The story matters.',
        paragraphs: [
          'Tell Dr. Frankie where you feel the pain, when it began, and whether it changes with sitting, standing, walking, or lifting. Mention pain traveling into a leg, changes in sensation, and anything that interrupts sleep.',
          'Lower back pain, mid-back discomfort, and upper back tension are descriptions, not diagnoses. An examination helps decide whether conservative care is appropriate or whether another medical evaluation is needed.',
        ],
      },
      {
        heading: 'Explore a practical care plan.',
        paragraphs: [
          'Depending on the findings, your plan may include chiropractic treatment, soft tissue care, functional exercises, or guidance on the activities that aggravate symptoms. Cox lumbar flexion-distraction and acupuncture can also be discussed when appropriate.',
          'The focus is on useful changes: how comfortably you move, what you can do, and how you respond over time. Treatment recommendations should leave room for reassessment.',
        ],
      },
      {
        heading: 'Bring your questions about discs and nerves.',
        paragraphs: [
          'If you have been told you have a herniated disc, a pinched nerve, or spinal stenosis, bring the reports and recommendations you already have. Dr. Frankie can help you understand how that information relates to your symptoms and options.',
          'Seek emergency care for new bladder or bowel changes, numbness around the groin, or severe or worsening leg weakness. Significant trauma, fever with back pain, or other concerning changes also call for prompt medical assessment.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I come in for chronic back pain?',
        answer:
          'Yes. Bring a history of the symptoms and previous treatments, including what helped and what did not. The aim is to discuss realistic options based on an updated assessment.',
      },
      {
        question: 'Do I need an X-ray or MRI first?',
        answer:
          'Imaging is not automatically necessary for every episode of back pain. Your history and examination help determine whether it would be useful or whether referral is needed.',
      },
      {
        question: 'What about pain that travels down my leg?',
        answer:
          'Tell the office when booking and discuss it with the clinician. Leg pain, tingling, numbness, or weakness can change the evaluation. New or worsening weakness needs prompt medical attention.',
      },
    ],
    related: ['cox-spinal-decompression', 'sciatica', 'chiropractic-care'],
    source: {
      label: 'NCCIH: Spinal manipulation and low-back pain',
      url: 'https://www.nccih.nih.gov/health/spinal-manipulation-what-you-need-to-know',
    },
  },
  {
    slug: 'neck-pain',
    title: 'Neck Pain Chiropractor in Tampa',
    label: 'Neck pain',
    kind: 'condition',
    headline: 'A little less stiffness. A little more freedom.',
    description:
      'Explore care for neck pain and stiffness in Tampa, including a careful assessment, movement guidance, and personalized chiropractic options.',
    intro:
      'A stiff neck can follow you from your desk to your drive home. Whether it is new, recurring, or linked to an injury, bring the whole story to your appointment.',
    ...movement,
    sections: [
      {
        heading: 'Look at the pattern.',
        paragraphs: [
          'When does the discomfort start? Is turning your head difficult? Do you notice headaches, symptoms into an arm, dizziness, or changes in balance? Those details help guide the next step.',
          'Dr. Frankie considers your history and movement before recommending treatment. A recent collision, other injury, or new neurological symptoms may require a different level of evaluation.',
        ],
      },
      {
        heading: 'Care that fits your comfort level.',
        paragraphs: [
          'When conservative care is appropriate, options may include joint mobilization or manipulation, soft tissue techniques, exercises, and practical changes to a desk or activity setup. You can discuss alternatives and preferences before treatment.',
          'Neck manipulation has potential risks, including rare but serious complications. Ask about your individual risk factors and the benefits and alternatives to each proposed technique. Your consent matters.',
        ],
      },
      {
        heading: 'Make everyday movement part of the plan.',
        paragraphs: [
          'Bring details about your work setup, sleep habits, and the activities you want to return to. There is no single perfect posture to hold all day; the goal is a plan you can realistically use.',
          'Sudden severe headache, trouble speaking, weakness, loss of balance, or neck pain after significant trauma needs immediate medical assessment. Do not wait for a routine chiropractic appointment.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can headaches be related to the neck?',
        answer:
          'Some headaches can involve the neck, but headaches have many possible causes. Tell Dr. Frankie about their pattern and any associated symptoms. A medical referral may be appropriate.',
      },
      {
        question: 'Can I be evaluated after whiplash?',
        answer:
          'Call to discuss an appointment after urgent injury needs have been addressed. Bring information about the collision, your symptoms, and any medical evaluation you have already had.',
      },
      {
        question: 'Will I have to have my neck adjusted?',
        answer:
          'Discuss your preferences before treatment. You can ask about gentler options and alternatives, and you can decline a particular technique.',
      },
    ],
    related: ['chiropractic-care', 'soft-tissue-therapy', 'shoulder-pain'],
    source: {
      label: 'NCCIH: Spinal manipulation benefits and risks',
      url: 'https://www.nccih.nih.gov/health/spinal-manipulation-what-you-need-to-know',
    },
  },
  {
    slug: 'sciatica',
    title: 'Sciatica Evaluation & Care in Tampa',
    label: 'Sciatica',
    kind: 'condition',
    headline: 'Let’s talk about that pain down your leg.',
    description:
      'Learn about sciatica symptoms and conservative care options with Dr. Frankie Amarillas in Tampa, including when urgent evaluation is needed.',
    intro:
      'Pain that travels from the back or buttock into a leg can make sitting, driving, and walking difficult. A clear assessment is the place to start.',
    ...consultation,
    sections: [
      {
        heading: 'What people mean by sciatica.',
        paragraphs: [
          'Sciatica describes symptoms associated with irritation or compression affecting the sciatic nerve pathway. It may involve sharp or burning leg pain, tingling, numbness, or weakness. Leg pain can also have other causes.',
          'Tell Dr. Frankie where symptoms travel, whether they change with movement, and when they started. Mention any loss of strength or changes in sensation.',
        ],
      },
      {
        heading: 'Match care to the findings.',
        paragraphs: [
          'Dr. Frankie will consider whether conservative chiropractic care is suitable and whether further testing or another medical evaluation is needed. Bring reports if you have already had imaging or a diagnosis.',
          'A plan may discuss activity modifications, rehabilitation, and appropriate hands-on techniques. Cox flexion-distraction is one option available at the practice, but the right approach depends on your individual evaluation.',
        ],
      },
      {
        heading: 'Know when not to wait.',
        paragraphs: [
          'Go to an emergency department for new difficulty urinating, loss of bladder or bowel control, numbness around the genitals or bottom, or severe or worsening weakness in both legs. These can be signs of a serious spinal problem.',
          'If symptoms are worsening or stopping you from doing ordinary activities, arrange a timely medical assessment even without those emergency signs.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is every leg pain sciatica?',
        answer:
          'No. Hip, joint, muscular, vascular, and other problems can also cause leg pain. An assessment is more useful than choosing a treatment based on the symptom label alone.',
      },
      {
        question: 'Can chiropractic care cure sciatica?',
        answer:
          'No outcome can be guaranteed. Whether chiropractic care is appropriate depends on the cause, severity, and findings. Some people need care from another provider or a specialist.',
      },
      {
        question: 'What should I bring to an appointment?',
        answer:
          'Bring relevant imaging reports, a medication list, and notes about symptoms, prior treatment, and activities that make the problem better or worse.',
      },
    ],
    related: ['back-pain', 'cox-spinal-decompression', 'chiropractic-care'],
    source: {
      label: 'NHS: Sciatica symptoms and urgent warning signs',
      url: 'https://www.nhs.uk/conditions/sciatica/',
    },
  },
  {
    slug: 'knee-pain',
    title: 'Knee Pain Care & Rehabilitation in Tampa',
    label: 'Knee pain',
    kind: 'condition',
    headline: 'For stairs, strolls, and everything after.',
    description:
      'Discuss knee pain, movement, and conservative rehabilitation with Dr. Frankie Amarillas at Feel Good Chiropractic in Tampa.',
    intro:
      'Your knees do a lot of everyday work. If walking, getting up, or returning to exercise has become uncomfortable, let’s talk about what is getting in the way.',
    ...active,
    sections: [
      {
        heading: 'Start with the activity that hurts.',
        paragraphs: [
          'Pain on stairs, discomfort after a run, and a knee that suddenly gives way are different experiences. Tell Dr. Frankie about swelling, catching, instability, recent injuries, and changes in your routine.',
          'An examination may consider the knee along with hip strength, ankle movement, walking patterns, and footwear. The purpose is to understand your concern and determine an appropriate next step.',
        ],
      },
      {
        heading: 'A conservative plan, when appropriate.',
        paragraphs: [
          'Rehabilitation, adjustments to activity, and suitable hands-on care may be discussed. Your plan should be built around your findings rather than a promise that one treatment works for every knee.',
          'If you have arthritis or a previous injury diagnosis, bring that information. Some knee problems require imaging, medical treatment, or an orthopedic evaluation. Chiropractic care does not replace those services.',
        ],
      },
      {
        heading: 'Return to what matters to you.',
        paragraphs: [
          'Your goal may be a neighborhood walk, kneeling in the garden, or getting back onto the court. Use that goal to ask how your movement and strength will be assessed over time.',
          'A hot swollen joint with fever, a visible deformity, a locked knee, or inability to bear weight needs prompt medical attention.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can my feet or hips affect how my knee moves?',
        answer:
          'They can be part of the movement assessment. The knee works with surrounding joints, but your individual symptoms still need evaluation rather than assumptions about a single cause.',
      },
      {
        question: 'Does knee pain always mean I need surgery?',
        answer:
          'No, but an examination is needed to understand the problem. Some conditions can be managed conservatively; others require a specialist. No treatment can guarantee that surgery will be unnecessary.',
      },
    ],
    related: ['sports-chiropractic', 'foot-care', 'joint-pain'],
  },
  {
    slug: 'shoulder-pain',
    title: 'Shoulder Pain Care in Tampa',
    label: 'Shoulder pain',
    kind: 'condition',
    headline: 'Reach for a more comfortable day.',
    description:
      'Explore assessment and conservative care for shoulder pain in Tampa, including mobility, soft tissue techniques, and functional rehabilitation.',
    intro:
      'Reaching overhead, getting dressed, lifting at the gym—shoulder discomfort can interrupt all of them. Your symptoms and the way they affect you guide the conversation.',
    ...movement,
    sections: [
      {
        heading: 'Tell us what has changed.',
        paragraphs: [
          'Share whether pain followed an injury, came on gradually, or appears with a particular task. Night pain, weakness, restricted movement, and symptoms into the arm are also useful details.',
          'The assessment may look at the shoulder, neck, and surrounding movement. The aim is to determine whether care at the practice is appropriate or whether you need another evaluation.',
        ],
      },
      {
        heading: 'Connect care with function.',
        paragraphs: [
          'When suitable, your plan may include soft tissue techniques, mobility work, and exercises that address the activities you are finding difficult. Dr. Frankie can also discuss practical changes to training or work tasks.',
          'If a rotator cuff injury, frozen shoulder, or another diagnosis has been suggested, bring any reports. Different problems can look similar from the outside and may need different approaches.',
        ],
      },
      {
        heading: 'Set a useful next goal.',
        paragraphs: [
          'Describe a task you would like to do more comfortably. That gives the conversation a concrete starting point and helps you discuss how progress will be evaluated.',
          'A sudden deformity, severe pain after an injury, or inability to move the arm calls for urgent evaluation. Shoulder pain with chest pressure, shortness of breath, or sweating can be an emergency; call 911.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can shoulder pain come from the neck?',
        answer:
          'Sometimes symptoms overlap or travel from another area. Your history and examination help determine what needs attention and whether referral is appropriate.',
      },
      {
        question: 'Should I keep lifting through pain?',
        answer:
          'Do not force an activity that causes new or worsening pain. Discuss the injury and a safe activity plan with a clinician, especially if you have weakness or loss of movement.',
      },
    ],
    related: ['soft-tissue-therapy', 'neck-pain', 'sports-chiropractic'],
  },
  {
    slug: 'joint-pain',
    title: 'Joint Pain & Mobility Care in Tampa',
    label: 'Joint & hip pain',
    kind: 'condition',
    headline: 'Keep the everyday things in reach.',
    description:
      'Talk with Dr. Frankie Amarillas about joint, hip, and movement concerns in Tampa and whether conservative chiropractic care is appropriate.',
    intro:
      'Joint discomfort can change how you work, exercise, and relax. A conversation about where it hurts—and what you are missing—is a useful first step.',
    ...movement,
    sections: [
      {
        heading: 'Look at the whole picture.',
        paragraphs: [
          'Tell Dr. Frankie about the affected joint, previous injuries, stiffness, swelling, and the activities that have become difficult. Symptoms in a hip, shoulder, knee, or the jaw do not all mean the same thing.',
          'Health history matters too. Arthritis, previous surgery, inflammatory conditions, and medications can change what is appropriate. Bring diagnoses and recommendations from your other providers.',
        ],
      },
      {
        heading: 'Conservative options with a clear purpose.',
        paragraphs: [
          'A plan may include appropriate manual treatment, strengthening, mobility, and activity guidance. The focus is function: the movements you need for everyday life.',
          'Not all joint pain is a chiropractic problem. A medical or specialist evaluation may be the most useful next step, particularly with persistent swelling, new systemic symptoms, or a significant injury.',
        ],
      },
      {
        heading: 'Questions about hips, SI joints, or the jaw?',
        paragraphs: [
          'Bring them to the consultation. Explain where you feel the discomfort and what brings it on rather than trying to arrive with a diagnosis. Dr. Frankie can discuss the scope of an examination and whether coordination with another provider is needed.',
          'A hot, swollen joint with fever, inability to bear weight, sudden severe pain, or a deformity needs prompt medical assessment.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you evaluate hip or SI joint discomfort?',
        answer:
          'These concerns can be discussed during a musculoskeletal evaluation. The source of pain is not always where it is felt, so the examination guides recommendations.',
      },
      {
        question: 'Can chiropractic care reverse arthritis?',
        answer:
          'Do not expect chiropractic care to reverse arthritis. The discussion should focus on appropriate symptom management, movement, and coordination with your medical care.',
      },
      {
        question: 'Can I ask about TMJ or jaw discomfort?',
        answer:
          'Yes. Explain the symptoms and any dental or medical evaluation you have had. Some jaw problems require a dentist or another specialist, and referral may be recommended.',
      },
    ],
    related: ['knee-pain', 'shoulder-pain', 'chiropractic-care'],
  },
  {
    slug: 'foot-care',
    title: 'Foot & Ankle Care in Tampa',
    label: 'Foot & ankle care',
    kind: 'condition',
    headline: 'A good next step starts from the ground up.',
    description:
      'Discuss foot and ankle pain, footwear, walking patterns, and rehabilitation with Feel Good Chiropractic in Tampa.',
    intro:
      'When every step reminds you something is wrong, even a short walk can feel like a lot. Bring your questions about foot, heel, or ankle discomfort.',
    ...active,
    sections: [
      {
        heading: 'What happens when you take a step?',
        paragraphs: [
          'Tell Dr. Frankie where you feel discomfort, whether the first steps are different from later ones, and how your symptoms change with activity. Recent injuries, training changes, and footwear can all be useful details.',
          'An assessment can consider the foot and ankle along with walking patterns and movement above them. If you have been told you have plantar fasciitis or another condition, bring the relevant information.',
        ],
      },
      {
        heading: 'Find a plan that fits.',
        paragraphs: [
          'When appropriate, conservative options may involve rehabilitation, activity adjustments, suitable hands-on care, and guidance about footwear. Recommendations should reflect the examination and your daily demands.',
          'Some problems need a podiatrist, imaging, or other medical treatment. The office can discuss whether a chiropractic evaluation makes sense for your concern before you book.',
        ],
      },
      {
        heading: 'Do not walk off a serious injury.',
        paragraphs: [
          'Inability to bear weight, a visible deformity, major swelling after an injury, or a loss of sensation needs prompt medical evaluation. People with diabetes or circulation problems should seek medical guidance for new foot wounds or concerning changes.',
          'For ongoing discomfort, bring the shoes you use most often or details about them. Your work and activity routine help make the conversation more specific.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I buy inserts before my visit?',
        answer:
          'You do not need to choose a product before an assessment. Bring information about anything you already use and ask whether changes to footwear or support are appropriate.',
      },
      {
        question: 'Can I discuss a previous ankle sprain?',
        answer:
          'Yes. Share when it happened, how it was treated, and whether you still notice instability, pain, or restricted movement. New severe symptoms need prompt medical care.',
      },
    ],
    related: ['knee-pain', 'sports-chiropractic', 'joint-pain'],
  },
];
export const services = carePages.filter((page) => page.kind === 'service');
export const conditions = carePages.filter((page) => page.kind === 'condition');
export const findCare = (slug: string) =>
  carePages.find((page) => page.slug === slug);
