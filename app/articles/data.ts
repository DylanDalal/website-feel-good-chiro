export type Article = {
  slug: string;
  title: string;
  description: string;
  category: 'Pain & mobility' | 'Auto accidents' | 'Workplace health' | 'Sports & activity';
  readTime: string;
  image: string;
  imageAlt: string;
  introduction: string;
  sections: { heading: string; body: string }[];
};

export const articles: Article[] = [
  {
    slug: 'care-after-auto-accidents', title: 'Care After a Car Accident: What to Know', category: 'Auto accidents', readTime: '4 min read', image: '/images/chiropractic-consultation.jpg', imageAlt: 'Chiropractor discussing care with a patient',
    description: 'A calm, practical overview of what to do after a collision and when to seek a musculoskeletal evaluation.',
    introduction: 'A collision can leave more than visible damage. Soreness, stiffness, or limited movement may appear hours or days later, even after a low-speed impact. This guide explains the role of a timely evaluation after emergency needs have been addressed.',
    sections: [
      { heading: 'Start with safety', body: 'If you have severe pain, loss of consciousness, weakness, numbness, trouble breathing, or any concern for a serious injury, call 911 or seek emergency care first. Once urgent needs are addressed, document your symptoms and follow any instructions from the clinicians who evaluated you.' },
      { heading: 'Why an assessment can be helpful', body: 'Neck, back, shoulder, and soft-tissue symptoms can be delayed after a crash. A chiropractic visit can include a history, examination, and referral or imaging when appropriate. The goal is to understand how the incident may be affecting your movement and make a conservative plan when care is suitable.' },
      { heading: 'Take the next step thoughtfully', body: 'Avoid pushing through new pain simply because you feel better in the moment. Keep notes about changes in symptoms, ask questions about activity modifications, and seek care promptly if symptoms worsen or new neurologic symptoms appear.' },
    ],
  },
  {
    slug: 'back-pain', title: 'A Practical Guide to Back Pain', category: 'Pain & mobility', readTime: '4 min read', image: '/images/shoulder-mobility.jpg', imageAlt: 'Gentle mobility assessment in a chiropractic clinic',
    description: 'Learn how posture, daily demands, and movement patterns can contribute to back discomfort—and how a conservative plan may help.',
    introduction: 'Back pain is common, but it is never one-size-fits-all. It can be influenced by an injury, prolonged sitting, repetitive work, stress, fitness changes, or other health concerns. A careful evaluation helps separate ordinary mechanical back pain from symptoms that need another type of medical attention.',
    sections: [
      { heading: 'Look beyond the sore spot', body: 'A useful assessment considers your symptoms, daily routines, range of motion, strength, posture, and relevant health history. The objective is to identify meaningful contributors rather than to promise a single quick fix.' },
      { heading: 'Conservative care may include several tools', body: 'When chiropractic care is appropriate, a plan may combine gentle hands-on treatment, mobility work, strengthening, ergonomic guidance, and changes to activities that are aggravating symptoms. Your plan should reflect your goals and your response to care.' },
      { heading: 'Know when to seek urgent help', body: 'New bowel or bladder changes, numbness in the groin area, unexplained fever, major trauma, or rapidly worsening weakness require prompt medical attention. For ongoing but non-urgent pain, a clinician can help you decide on the right next step.' },
    ],
  },
  {
    slug: 'headaches', title: 'When Headaches May Be Connected to the Neck', category: 'Pain & mobility', readTime: '4 min read', image: '/images/chiropractic-consultation.jpg', imageAlt: 'Patient and chiropractor talking in a bright clinic',
    description: 'Frequent headaches can have many causes. Here is how posture, tension, sleep, and neck movement fit into a thoughtful evaluation.',
    introduction: 'Headaches are common, and their causes can range from hydration and sleep changes to stress, medication use, vision issues, migraine disorders, and neck tension. If recurring headaches are affecting your day, it is worth talking with a qualified health professional about the pattern you are noticing.',
    sections: [
      { heading: 'Track the pattern', body: 'Notice when a headache starts, where it is felt, how long it lasts, and what was happening beforehand. Screen time, jaw clenching, skipped meals, caffeine changes, sleep quality, and neck position can all be useful details to share with a clinician.' },
      { heading: 'A neck-focused evaluation is one piece of the picture', body: 'For some people, restricted neck movement or muscular tension may be a contributing factor. When appropriate, chiropractic care may focus on mobility, comfortable movement, posture habits, and self-management strategies alongside coordination with other health care providers.' },
      { heading: 'Do not ignore red flags', body: 'Seek urgent care for a sudden severe headache, a headache after a significant injury, new confusion, fainting, fever with neck stiffness, vision loss, weakness, or trouble speaking. Those symptoms need immediate medical evaluation.' },
    ],
  },
  {
    slug: 'joint-problems', title: 'Joint Pain: Mobility, Strength, and a Conservative Plan', category: 'Pain & mobility', readTime: '3 min read', image: '/images/shoulder-mobility.jpg', imageAlt: 'Shoulder range-of-motion assessment',
    description: 'Joint discomfort often has more than one contributor. Explore a practical approach to movement, load management, and evaluation.',
    introduction: 'Joint pain can involve the shoulder, hip, knee, ankle, wrist, jaw, or spine. It may follow an injury, develop after repetitive work, or build gradually with changes in activity. The best plan starts by looking at the joint in the context of how your whole body moves.',
    sections: [
      { heading: 'Understand the source', body: 'A clinician may consider swelling, range of motion, strength, activity history, footwear, work demands, prior injuries, and medical conditions. Some joint problems need imaging, medication, or a specialist evaluation, while others respond well to conservative care.' },
      { heading: 'Use movement strategically', body: 'Appropriate mobility and strength work can support confidence and function, but the right dose matters. Reducing an aggravating activity for a short time does not have to mean stopping all movement. A tailored plan can help you stay active while protecting an irritated area.' },
      { heading: 'Get help for concerning symptoms', body: 'A hot or markedly swollen joint, inability to bear weight, a visible deformity, fever, or sudden severe pain should be evaluated promptly. Do not try to self-treat a potentially serious injury.' },
    ],
  },
  {
    slug: 'knee-pain', title: 'Knee Pain: A Whole-Body Perspective', category: 'Pain & mobility', readTime: '3 min read', image: '/images/active-tampa-couple.jpg', imageAlt: 'Active couple walking on a Tampa trail',
    description: 'The knee is affected by what happens above and below it. Learn why gait, hips, feet, and activity load all matter.',
    introduction: 'Knee discomfort can come from a new injury, repetitive loading, arthritis, changes in training, or the way the foot, hip, and core are sharing work. A whole-body assessment can be especially helpful when pain shows up during walking, running, stairs, or sport.',
    sections: [
      { heading: 'Consider the full movement chain', body: 'Footwear, arch support, hip strength, ankle mobility, and training volume can all influence how the knee is loaded. An evaluation may include movement testing and practical questions about work, exercise, and the surfaces you spend time on.' },
      { heading: 'Choose an appropriate care plan', body: 'Conservative care may include activity adjustments, targeted rehabilitation, hands-on treatment where appropriate, and guidance about supportive footwear or bracing. If your symptoms suggest a more significant injury, referral for imaging or specialist care may be recommended.' },
      { heading: 'Watch for urgent signs', body: 'Severe swelling after an injury, a locked knee, inability to walk, joint instability, fever, or a major change in knee shape should be assessed promptly.' },
    ],
  },
  {
    slug: 'neck-pain', title: 'Neck Pain: Common Triggers and Better Next Steps', category: 'Pain & mobility', readTime: '4 min read', image: '/images/shoulder-mobility.jpg', imageAlt: 'Gentle shoulder and neck mobility work',
    description: 'Neck pain may be linked to posture, stress, a collision, sleep position, or an injury. Learn what a safe evaluation should consider.',
    introduction: 'The neck supports the head while allowing a wide range of motion, so everyday habits can matter. Prolonged device use, desk setup, sleep position, sudden movements, sport, and vehicle collisions can all contribute to stiffness or discomfort.',
    sections: [
      { heading: 'Begin with a careful history', body: 'An exam should account for where symptoms are felt, whether pain travels into the arm, any headaches or dizziness, previous injuries, and how symptoms change with movement. This helps determine whether conservative care is appropriate or whether another medical evaluation is needed first.' },
      { heading: 'Build a plan for daily life', body: 'When suitable, care may include gentle mobility work, hands-on treatment, strengthening, ergonomic changes, and guidance about comfortable sleep and screen positions. Small adjustments made consistently can be more useful than one dramatic change.' },
      { heading: 'Seek immediate care for warning signs', body: 'Neck pain after significant trauma, sudden weakness, loss of balance, severe headache, fever, or new numbness needs prompt medical assessment.' },
    ],
  },
  {
    slug: 'common-auto-accident-injuries', title: 'Common Injuries After a Car Accident', category: 'Auto accidents', readTime: '3 min read', image: '/images/chiropractic-consultation.jpg', imageAlt: 'Chiropractor consulting with a patient after an injury',
    description: 'A simple guide to the symptoms that can follow a collision and why a complete assessment matters.',
    introduction: 'Every collision is different. The direction of impact, speed, seatbelt use, airbag deployment, body position, and previous injuries can all influence what a person feels afterward. Some symptoms are immediate; others can take time to become noticeable.',
    sections: [
      { heading: 'Symptoms can involve more than the neck', body: 'People may notice stiffness, reduced range of motion, back discomfort, headaches, shoulder pain, or soreness in the hips and knees. These symptoms are not a diagnosis on their own, but they are useful reasons to check in with a health professional.' },
      { heading: 'Whiplash is a pattern, not a one-size-fits-all experience', body: 'Rapid movement of the head and neck can irritate muscles and other soft tissues. Symptoms may include neck pain, stiffness, headache, or trouble turning the head. A clinician can determine what kind of care and monitoring is appropriate.' },
      { heading: 'Choose the right level of care', body: 'Call 911 for serious symptoms or a potentially life-threatening injury. For less urgent musculoskeletal concerns, a timely clinical evaluation can help document symptoms, guide activity, and coordinate care or referral as needed.' },
    ],
  },
  {
    slug: 'common-workmans-comp-injuries', title: 'Common Workplace Injuries and Prevention', category: 'Workplace health', readTime: '3 min read', image: '/images/shoulder-mobility.jpg', imageAlt: 'Assessment of shoulder movement in a clinic',
    description: 'Repetitive motion, lifting, and prolonged positions can add up. Learn what workplace injuries often look like and how to respond.',
    introduction: 'Work injuries do not only happen in physically demanding jobs. Repetition, awkward positions, prolonged sitting or standing, sudden lifting, and slips can all affect muscles, joints, and nerves. Early reporting and a clear medical plan are important.',
    sections: [
      { heading: 'Patterns worth noticing', body: 'Back pain, strains, sprains, radiating discomfort, numbness, and tingling can occur with workplace injuries. Symptoms that develop gradually still deserve attention, especially when they interfere with sleep, concentration, or normal job tasks.' },
      { heading: 'Report and document promptly', body: 'Follow your employer’s injury-reporting procedure and ask what steps are required by the workers’ compensation carrier. Keep a clear record of when symptoms started, what activity was involved, and any care you receive.' },
      { heading: 'A return-to-work plan should be realistic', body: 'Care may include conservative treatment, rehabilitation, temporary work modifications, and communication with the appropriate providers. Recovery timelines vary, so a plan should be based on your examination and job requirements rather than a promise of a fixed date.' },
    ],
  },
  {
    slug: 'musculoskeletal-sports-injury', title: 'Sports Injuries: Recovering with a Smart Plan', category: 'Sports & activity', readTime: '4 min read', image: '/images/active-tampa-couple.jpg', imageAlt: 'Active adults walking comfortably outdoors',
    description: 'Pain and swelling are only part of the picture. Learn how a progressive plan can support a safer return to activity.',
    introduction: 'Active people can develop an injury through a single event, repeated stress, a rapid training increase, or incomplete recovery. The right response depends on the body part involved, severity, sport, and your goals—not just the calendar.',
    sections: [
      { heading: 'Do not train through an injury blindly', body: 'Pain, swelling, weakness, tenderness, or a loss of normal movement are signals to modify activity and get an evaluation. For a new injury, follow current medical guidance on protecting the area and seeking care when symptoms are significant.' },
      { heading: 'Rehabilitation should match the sport', body: 'A practical plan often builds from comfortable movement to strength, balance, control, and sport-specific demands. The goal is to make the next step feel earned, rather than simply waiting until pain is less noticeable.' },
      { heading: 'Know when urgent care is needed', body: 'A suspected fracture, joint deformity, inability to use the limb, severe swelling, concussion symptoms, or sudden loss of strength requires urgent evaluation.' },
    ],
  },
  {
    slug: 'sports-related-injury', title: 'Foot and Ankle Injuries in Active People', category: 'Sports & activity', readTime: '3 min read', image: '/images/active-tampa-couple.jpg', imageAlt: 'Couple walking on a shaded Florida trail',
    description: 'Foot and ankle pain can change the way you move. Learn when rest and support may help—and when you need an evaluation.',
    introduction: 'Running, jumping, cutting, dancing, and long practices place substantial demand on the feet and ankles. Overuse, missed warmups, uneven ground, footwear, and direct contact can all contribute to pain or reduced function.',
    sections: [
      { heading: 'Notice the symptoms', body: 'Pain, bruising, swelling, tenderness, numbness, or difficulty putting weight on the foot can all signal an injury. A visible change in alignment or inability to walk comfortably should not be ignored.' },
      { heading: 'Support recovery, then rebuild', body: 'Depending on the injury, care may include activity modification, support or immobilization, rehabilitation, footwear guidance, and referral when necessary. Returning too quickly can prolong symptoms, so progress should be based on function as well as comfort.' },
      { heading: 'Get an assessment for significant pain', body: 'Severe swelling, a suspected fracture, persistent instability, loss of sensation, or inability to bear weight needs prompt medical assessment.' },
    ],
  },
  {
    slug: 'what-to-do-if-you-just-had-a-workplace-injury', title: 'What to Do After a Workplace Injury', category: 'Workplace health', readTime: '3 min read', image: '/images/chiropractic-consultation.jpg', imageAlt: 'Patient discussing a care plan with a clinician',
    description: 'A step-by-step overview of reporting a work injury, seeking appropriate care, and planning a safe recovery.',
    introduction: 'An injury at work can be stressful for both the employee and employer. Taking clear early steps helps protect your health, keeps documentation accurate, and makes it easier to understand what care and workplace adjustments may be needed.',
    sections: [
      { heading: 'Address urgent needs first', body: 'For a serious injury or emergency symptoms, call 911 or follow your workplace emergency procedure. Do not delay emergency care because you are uncertain about paperwork.' },
      { heading: 'Report the incident', body: 'Tell a supervisor as soon as possible and follow your employer’s process for an incident report. Include the time, task, location, and symptoms you experienced. Ask where you should seek care under the relevant workers’ compensation process.' },
      { heading: 'Follow through on the care plan', body: 'Attend recommended appointments, communicate changes in symptoms, and discuss appropriate temporary job modifications with the relevant providers. A return-to-work plan should be safe and tailored to your duties.' },
    ],
  },
  {
    slug: 'what-to-do-if-you-just-had-an-accident', title: 'What to Do After a Car Accident', category: 'Auto accidents', readTime: '3 min read', image: '/images/chiropractic-consultation.jpg', imageAlt: 'Chiropractor talking through next steps with a patient',
    description: 'A straightforward checklist for the minutes, days, and weeks after a motor vehicle collision.',
    introduction: 'In the moments after a crash, it is easy to focus on the vehicle and overlook how your body feels. A simple plan can help you stay safe, document what happened, and get the right medical attention.',
    sections: [
      { heading: 'At the scene', body: 'Move to a safe location if you can do so safely, call 911 when anyone may be injured, and contact law enforcement as appropriate. Exchange information, document the scene when safe, and do not minimize concerning symptoms.' },
      { heading: 'In the following days', body: 'Watch for stiffness, pain, reduced motion, headache, dizziness, or other symptoms. Keep a short symptom log and follow any directions from emergency or primary care clinicians. Seek care promptly if symptoms are new or worsening.' },
      { heading: 'Choose care based on your needs', body: 'A chiropractor can evaluate many musculoskeletal concerns and coordinate referral when needed. Emergency symptoms, significant head injury, severe pain, weakness, numbness, or vision changes require urgent medical assessment.' },
    ],
  },
  {
    slug: 'sports-orthopedics', title: 'Sports Orthopedics: Staying Active with Less Guesswork', category: 'Sports & activity', readTime: '4 min read', image: '/images/shoulder-mobility.jpg', imageAlt: 'Shoulder movement assessment for an active adult',
    description: 'Sports injuries involve more than pain relief. A good plan considers diagnosis, training, movement quality, and return-to-play demands.',
    introduction: 'Athletic injuries can affect muscles, tendons, joints, cartilage, and bone. Whether you run, golf, lift, swim, play a team sport, or are newly active, an accurate evaluation helps you make decisions with more confidence.',
    sections: [
      { heading: 'Start with a clear assessment', body: 'Your clinical history, the mechanism of injury, the affected movement, and your activity goals all inform the plan. Some injuries need imaging or specialist care; others can begin with a conservative rehabilitation approach.' },
      { heading: 'Progress from capacity to performance', body: 'Effective rehabilitation usually improves mobility, strength, balance, and control before returning to the highest-demand parts of a sport. Training volume and recovery habits deserve the same attention as the injured area.' },
      { heading: 'Prevent the next setback', body: 'A gradual warmup, sound technique, appropriate equipment, rest, and sensible training increases can reduce risk. If pain repeatedly returns, it is worth reassessing the movement pattern and training plan instead of simply pushing harder.' },
    ],
  },
];

export function findArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
