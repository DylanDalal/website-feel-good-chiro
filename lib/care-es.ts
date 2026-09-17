import type { CarePage } from './care';
const consulta = {
  image: '/images/chiropractic-consultation.jpg',
  imageAlt: 'Un quiropráctico y una paciente conversando sobre su cuidado',
};
const actividad = {
  image: '/images/active-tampa-couple.jpg',
  imageAlt: 'Dos adultos disfrutando de una caminata soleada',
};
const movimiento = {
  image: '/images/shoulder-mobility.jpg',
  imageAlt: 'Evaluación manual del movimiento del hombro',
};
export const carePagesEs: CarePage[] = [
  {
    slug: 'quiropractica',
    title: 'Quiropráctico en Tampa, FL',
    label: 'Cuidado quiropráctico',
    kind: 'service',
    headline: 'El buen cuidado empieza con una buena conversación.',
    description:
      'Cuidado quiropráctico personalizado en Tampa con el Dr. Frankie Amarillas: evaluación, tratamiento manual y rehabilitación. Se habla español.',
    intro:
      'Una espalda adolorida. Un cuello rígido. Algo que ya no se mueve como antes. En Feel Good Chiropractic, su cita empieza con lo que usted siente y con aquello a lo que quiere volver.',
    ...consulta,
    sections: [
      {
        heading: 'Sus metas forman parte del plan.',
        paragraphs: [
          'Tal vez quiera pasar la jornada de trabajo con más comodidad, girar la cabeza al conducir o volver al gimnasio. Traiga esos detalles. Ayudan al Dr. Frankie a conectar el examen con lo que de verdad importa en su día a día.',
          'Su historial de salud, su movimiento y sus síntomas guían el siguiente paso. Puede ser cuidado quiropráctico, rehabilitación, otra opción de tratamiento o una referencia cuando se necesite otro tipo de atención.',
        ],
      },
      {
        heading: 'Más que un ajuste.',
        paragraphs: [
          'Un plan de cuidado puede combinar tratamiento manual con formas prácticas de moverse, trabajar y hacer ejercicio. Las técnicas se eligen después del examen y se conversan con usted antes de comenzar.',
        ],
        points: [
          'Manipulación articular o movilización más suave, cuando sea apropiado',
          'Técnicas de tejidos blandos para los músculos y tejidos circundantes',
          'Ejercicios funcionales y rehabilitación',
          'Orientación ergonómica para el trabajo y la rutina diaria',
        ],
      },
      {
        heading: 'Entienda sus opciones.',
        paragraphs: [
          'La manipulación espinal es una opción sin medicamentos para algunos problemas musculoesqueléticos. Los beneficios varían y no es apropiada para toda persona ni para toda condición. Puede haber molestia temporal; converse con el Dr. Frankie sobre riesgos, alternativas y cualquier condición de salud.',
          'Usted debe saber qué se le recomienda, por qué y cómo se evaluará su progreso. Feel Good Chiropractic no exige contratos a largo plazo. Haga preguntas, comparta sus preferencias y avísele a la oficina si sus síntomas cambian.',
        ],
      },
      {
        heading: 'Cuidado en distintas etapas de la vida.',
        paragraphs: [
          'La edad, las lesiones previas, la salud ósea y otras condiciones médicas pueden influir en el examen y en las opciones de tratamiento. Los adultos mayores deben comentar sobre medicamentos, osteoporosis, caídas y procedimientos anteriores.',
          'Para un niño o adolescente, llame a la oficina para conversar el motivo de la visita, la disponibilidad de citas y la participación del padre, madre o tutor. Traiga las recomendaciones del equipo de salud del menor. Las molestias de espalda relacionadas con el embarazo también deben conversarse con su proveedor prenatal.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Tengo que recibir un ajuste?',
        answer:
          'Puede conversar su nivel de comodidad y sus preferencias antes de cualquier tratamiento. El examen ayuda a determinar las opciones adecuadas, y usted puede preguntar por alternativas a una técnica en particular.',
      },
      {
        question: '¿Cuántas visitas voy a necesitar?',
        answer:
          'No existe un número fijo para todas las personas. Las recomendaciones dependen de su historial, los hallazgos, sus metas y su respuesta al cuidado. Pregunte cómo se reevaluará el plan conforme avance.',
      },
      {
        question: '¿Puedo venir con un diagnóstico o estudios de imagen?',
        answer:
          'Sí. Traiga los informes pertinentes y una lista de sus medicamentos y otros proveedores de salud. La información existente ayuda a guiar la conversación; aun así puede ser necesaria una evaluación adicional.',
      },
    ],
    related: ['terapia-de-tejidos-blandos', 'acupuntura', 'descompresion-cox'],
    source: {
      label: 'NCCIH: Manipulación espinal',
      url: 'https://www.nccih.nih.gov/health/spinal-manipulation-what-you-need-to-know',
    },
  },
  {
    slug: 'acupuntura',
    title: 'Acupuntura en Tampa, FL',
    label: 'Acupuntura',
    kind: 'service',
    headline: 'Un poco de espacio para concentrarnos en usted.',
    description:
      'Conozca la acupuntura en Tampa con el Dr. Frankie Amarillas, acupunturista certificado: qué esperar y cómo puede encajar en su plan de cuidado.',
    intro:
      '¿Tiene curiosidad por la acupuntura? No necesita saber qué esperar antes de entrar. El Dr. Frankie conversará sus preguntas y le ayudará a decidir si tiene sentido para usted.',
    ...consulta,
    sections: [
      {
        heading: 'En qué consiste la acupuntura.',
        paragraphs: [
          'La acupuntura utiliza agujas muy finas colocadas en puntos seleccionados del cuerpo. Feel Good Chiropractic usa agujas estériles de un solo uso. El Dr. Frankie cuenta con la credencial de Acupunturista Certificado además de su formación quiropráctica.',
          'Su visita comienza con una conversación sobre síntomas, historial de salud y metas. Informe a la oficina sobre medicamentos, embarazo, trastornos de sangrado, dispositivos implantados y reacciones previas a tratamientos.',
        ],
      },
      {
        heading: 'Dónde puede encajar.',
        paragraphs: [
          'La investigación sugiere que la acupuntura puede ayudar a algunas personas con dolor de espalda o cuello, dolor por osteoartritis de rodilla y ciertos dolores de cabeza. La evidencia y los resultados varían según la condición; no es una cura para todo ni un sustituto de la atención médica necesaria.',
          'Si está considerando la acupuntura para el dolor, el estrés, el sueño u otra preocupación de bienestar, traiga esa pregunta a la consulta. El Dr. Frankie puede explicarle las opciones disponibles y si conviene coordinar con otro proveedor.',
        ],
      },
      {
        heading: 'Sepa qué sigue.',
        paragraphs: [
          'Dígale al Dr. Frankie si le ponen nervioso las agujas. Su comodidad y su consentimiento son parte de la conversación durante toda la visita. Las sensaciones varían, y el tratamiento no debe ser algo que sienta presión por tolerar.',
          'La cantidad y el espaciamiento de las visitas dependen de su plan individual y de su respuesta. Pregunte qué cambios observar, cuándo dar seguimiento y cómo encajaría la acupuntura junto al cuidado quiropráctico o la rehabilitación.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Duele la acupuntura?',
        answer:
          'Las experiencias varían. Algunas personas notan una sensación breve al colocar la aguja, mientras que otras notan muy poco. Comente cualquier molestia para que el tratamiento pueda ajustarse o detenerse.',
      },
      {
        question: '¿Hay efectos secundarios?',
        answer:
          'Puede haber molestia leve o moretones. Las complicaciones graves son poco comunes pero posibles, sobre todo con una técnica inadecuada. Converse su historial médico y sus riesgos personales antes del tratamiento.',
      },
      {
        question: '¿La acupuntura puede ser parte de mi cuidado quiropráctico?',
        answer:
          'Puede conversarse como una parte de un plan individualizado. Combinar tratamientos no es automáticamente mejor para toda preocupación; las recomendaciones deben reflejar sus necesidades y su respuesta.',
      },
    ],
    related: [
      'quiropractica',
      'terapia-de-tejidos-blandos',
      'descompresion-cox',
    ],
    source: {
      label: 'NCCIH: Acupuntura, eficacia y seguridad',
      url: 'https://www.nccih.nih.gov/health/acupuncture-effectiveness-and-safety',
    },
  },
  {
    slug: 'descompresion-cox',
    title: 'Descompresión Espinal Cox en Tampa',
    label: 'Descompresión Cox',
    kind: 'service',
    headline: 'Un enfoque más suave para hablar del dolor de espalda.',
    description:
      'Conozca la flexión-distracción lumbar Cox en Feel Good Chiropractic en Tampa: en qué consiste la técnica y cómo se evalúa si es adecuada para usted.',
    intro:
      'Cuando el dolor de espalda interrumpe su día una y otra vez, ayuda entender las opciones que tiene delante. La flexión-distracción lumbar Cox es una de las técnicas que ofrece el Dr. Frankie.',
    ...consulta,
    sections: [
      {
        heading: '¿Qué es la flexión-distracción Cox?',
        paragraphs: [
          'Esta técnica manual utiliza una mesa de tratamiento especializada y un movimiento controlado de la zona lumbar. Suele describirse como descompresión espinal o flexión-distracción. El movimiento y la presión los aplica el profesional y se ajustan a cada paciente.',
          'Es una técnica no quirúrgica. Es distinta de una operación para descomprimir la columna, y recomendar una no significa que la otra sea innecesaria.',
        ],
      },
      {
        heading: 'Primero va la evaluación.',
        paragraphs: [
          'El dolor de espalda, el dolor que se extiende hacia una pierna o un diagnóstico previo de disco pueden plantear dudas sobre si este enfoque es adecuado. Esos síntomas por sí solos no establecen que usted sea candidato.',
          'Traiga sus informes de imagen previos y los detalles de cirugías, implantes, preocupaciones de salud ósea y otra atención médica. El Dr. Frankie considerará sus hallazgos, explicará las opciones y recomendará una referencia cuando corresponda.',
        ],
      },
      {
        heading: 'Un plan con margen para adaptarse.',
        paragraphs: [
          'Si se recomienda el tratamiento, pregunte qué se sentirá, qué riesgos aplican en su caso y qué alternativas existen. Coméntele al Dr. Frankie los síntomas que note durante y después de la sesión.',
          'El progreso debe evaluarse según su comodidad, su función y sus metas. Los ejercicios, los cambios en la actividad diaria y otros cuidados pueden formar parte de la conversación. Ninguna técnica puede prometer reparar un disco ni garantizar que usted evitará una cirugía.',
        ],
      },
    ],
    faqs: [
      {
        question:
          '¿La descompresión espinal sirve para todo problema de espalda?',
        answer:
          'No. Su historial médico y el examen importan. Una cirugía previa, la fragilidad ósea, síntomas neurológicos nuevos y otras condiciones pueden cambiar cuáles opciones son apropiadas.',
      },
      {
        question:
          '¿Puedo preguntar por una hernia de disco o estenosis espinal?',
        answer:
          'Sí. Traiga su diagnóstico y cualquier informe. El Dr. Frankie puede conversar si el cuidado conservador es apropiado, si hace falta una evaluación adicional y cómo coordinar con su médico tratante.',
      },
      {
        question: '¿Debo cancelar una cita con un especialista?',
        answer:
          'Mantenga las citas médicas y de especialistas que le hayan recomendado. El cuidado quiropráctico debe encajar dentro de un plan coordinado, y los síntomas urgentes o progresivos requieren evaluación médica.',
      },
    ],
    related: ['quiropractica', 'quiropractica-deportiva', 'acupuntura'],
  },
  {
    slug: 'quiropractica-deportiva',
    title: 'Quiropráctico Deportivo en Tampa',
    label: 'Deporte y rehabilitación',
    kind: 'service',
    headline: 'Para aquello a lo que no puede esperar volver.',
    description:
      'Quiropráctica deportiva y rehabilitación funcional en Tampa con el Dr. Frankie Amarillas, Practicante Quiropráctico Deportivo Certificado.',
    intro:
      'Su carrera de la mañana. Una ronda de golf. El próximo entrenamiento. Ya sea que la actividad sea su rutina o su escape de fin de semana, sus metas ayudan a dar forma a su plan de recuperación.',
    ...actividad,
    sections: [
      {
        heading: 'No hace falta ser profesional.',
        paragraphs: [
          'El Dr. Frankie es Practicante Quiropráctico Deportivo Certificado. Su enfoque reúne una evaluación del movimiento, cuidado manual cuando es adecuado, y entrenamiento funcional y rehabilitación.',
          'Cuéntele sobre la actividad, cuándo comenzaron los síntomas, los cambios recientes en su entrenamiento y qué necesita lograr para sentirse listo para volver. Una lesión nueva y una molestia recurrente pueden requerir pasos distintos.',
        ],
      },
      {
        heading: 'Reconstruir con un propósito.',
        paragraphs: [
          'La rehabilitación debe corresponder a las exigencias de su actividad. Un plan puede trabajar el movimiento cómodo, la fuerza, la coordinación y el aumento gradual de la carga. La meta es conectar lo que hace en la oficina con lo que necesita fuera de ella.',
        ],
        points: [
          'Conversar sobre correr, levantar pesas, deportes de cancha, golf y ejercicio diario',
          'Revisar el volumen de entrenamiento, la recuperación y los hábitos de movimiento',
          'Fijar metas útiles para volver a la actividad',
          'Coordinar una referencia cuando se necesiten estudios o atención de especialista',
        ],
      },
      {
        heading: 'Una conversación honesta sobre el regreso.',
        paragraphs: [
          'Menos dolor es solo una parte de la recuperación. La confianza, la fuerza y la capacidad de tolerar la actividad también cuentan. Converse cómo se medirá el progreso y cuándo cambiar el plan.',
          'Una sospecha de fractura, una deformidad articular, la incapacidad de usar una extremidad o síntomas de conmoción cerebral necesitan evaluación médica pronta. No siga adelante con una lesión importante mientras espera una cita.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Pueden ayudarme si apenas estoy retomando el ejercicio?',
        answer:
          'Traiga sus preguntas sobre el movimiento, el dolor recurrente y cómo construir una rutina de actividad. El Dr. Frankie puede evaluar sus preocupaciones y conversar un punto de partida apropiado.',
      },
      {
        question:
          '¿La quiropráctica deportiva es lo mismo que la cirugía ortopédica?',
        answer:
          'No. El Dr. Frankie ofrece cuidado quiropráctico y rehabilitación. Un cirujano ortopédico u otro especialista puede ser apropiado para ciertas lesiones; la referencia puede ser parte del plan.',
      },
      {
        question: '¿Puedo reservar un examen físico deportivo?',
        answer:
          'Llame a la oficina para preguntar por la disponibilidad actual, los requisitos de su organización y cualquier formulario que deba completarse antes de agendar.',
      },
    ],
    related: [
      'terapia-de-tejidos-blandos',
      'quiropractica',
      'descompresion-cox',
    ],
    source: {
      label: 'NIAMS: Lesiones deportivas, diagnóstico y tratamiento',
      url: 'https://www.niams.nih.gov/health-topics/sports-injuries/diagnosis-treatment-and-steps-to-take',
    },
  },
  {
    slug: 'terapia-de-tejidos-blandos',
    title: 'Terapia de Tejidos Blandos en Tampa',
    label: 'Tejidos blandos',
    kind: 'service',
    headline: 'Cuidado para los músculos que tanto trabajan.',
    description:
      'Conozca las técnicas de tejidos blandos asistidas por instrumento, el tratamiento de pin-and-stretch y la rehabilitación en Feel Good Chiropractic en Tampa.',
    intro:
      'A veces la conversación empieza con un hombro tenso, una espalda cansada o un movimiento que se siente limitado. El cuidado de tejidos blandos puede ser una parte de entender y atender esas preocupaciones.',
    ...movimiento,
    sections: [
      {
        heading: 'Una mirada más cercana al movimiento.',
        paragraphs: [
          'Los músculos y los tejidos que los rodean trabajan junto con sus articulaciones para ayudarle a moverse. El Dr. Frankie considera cómo los síntomas afectan ese movimiento, junto con las exigencias del trabajo, el ejercicio y las lesiones previas.',
          'El examen ayuda a determinar si el cuidado manual de tejidos blandos corresponde en su plan. No toda zona que se siente tensa necesita el mismo tratamiento.',
        ],
      },
      {
        heading: 'Técnicas elegidas para usted.',
        paragraphs: [
          'Entre las especialidades publicadas del Dr. Frankie están la manipulación de tejidos blandos asistida por instrumento y el tratamiento de pin-and-stretch. Estos enfoques usan presión manual o un instrumento de tratamiento, a veces combinados con movimiento.',
          'Pregunte por el motivo de una técnica y cómo se espera que se sienta. Coméntele al Dr. Frankie sobre condiciones de la piel, medicamentos, moretones o sensibilidad antes del tratamiento, y dígalo si una técnica le resulta incómoda.',
        ],
      },
      {
        heading: 'Llévelo a su día a día.',
        paragraphs: [
          'Su plan también puede incluir movilidad, fortalecimiento o un cambio en la actividad que sigue irritando la zona. El tratamiento manual y un plan útil para casa pueden conversarse en conjunto.',
          'Si busca una cita de masaje por separado, llame a la oficina para conocer los servicios y la disponibilidad actuales. Las técnicas de tejidos blandos dentro del cuidado quiropráctico no son necesariamente lo mismo que un masaje reservado aparte.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Más presión siempre es mejor?',
        answer:
          'La intensidad debe ser apropiada para sus hallazgos y su tolerancia. Más presión no es una meta en sí misma. Converse la molestia, la sensibilidad y sus preferencias antes del tratamiento.',
      },
      {
        question: '¿Puedo preguntar por la tensión muscular recurrente?',
        answer:
          'Sí. Explique cuándo regresa y qué actividades la modifican. Ese patrón puede ayudar a guiar el examen y la conversación sobre los siguientes pasos prácticos.',
      },
    ],
    related: ['quiropractica', 'quiropractica-deportiva', 'acupuntura'],
  },
];
export function findCareEs(slug: string) {
  return carePagesEs.find((page) => page.slug === slug);
}
