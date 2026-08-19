// Checklist normativo de accesibilidad.
// Las referencias "PDF p." corresponden a la página física del PDF
// LEY AUTONOMA Nº 80-14 TEXTOS ORDENADOS ANEXO VII (29 páginas).

export const sections = [
  {
    id: 'access',
    title: 'Acceso y circulación',
    items: [
      ['access-01', 'Existe ruta accesible continua desde el exterior hasta el edificio', 'Comprobar que el recorrido de llegada sea accesible y transitable, sin interrupciones u obstáculos que impidan el acceso.', 'Anexo VII · PDF pp. 3 y 10'],
      ['access-02', 'Acceso principal mediante rampa cuando exista desnivel', 'Cuando el acceso presente desnivel, comprobar que se resuelva mediante rampa accesible.', 'Anexo VII · PDF p. 3'],
      ['access-03', 'Pasillos generales ≥ 1.20 m', 'Verificar un ancho libre mínimo de 1.20 m en pasillos generales.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['access-04', 'Giro ≤ 90°: ancho ≥ 1.00 m', 'En giros de hasta 90°, comprobar un ancho libre mínimo de 1.00 m.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['access-05', 'Giro > 90°: ancho ≥ 1.20 m', 'En giros mayores de 90°, comprobar un ancho libre mínimo de 1.20 m.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['access-06', 'Cruce frecuente de 2 sillas de ruedas: ancho ≥ 1.50 m', 'Cuando se prevea circulación frecuente de dos sillas de ruedas, verificar 1.50 m de ancho mínimo.', 'Anexo VII · PDF p. 3'],
      ['access-07', 'Espacios de espera accesibles ≥ 1.20 × 1.20 m', 'Reservar un espacio accesible mínimo de 1.20 × 1.20 m en áreas de espera.', 'Anexo VII · PDF p. 3'],
      ['access-08', 'Espacios accesibles de espera debidamente señalizados', 'Comprobar que el espacio reservado para silla de ruedas esté identificado y señalizado.', 'Anexo VII · PDF p. 3'],
    ],
  },

  {
    id: 'ramps',
    title: 'Rampas',
    items: [
      ['ramp-01', 'Ancho de rampa ≥ 0.90 m', 'Comprobar un ancho libre mínimo de 0.90 m.', 'Anexo VII · PDF p. 3'],
      ['ramp-02', 'Descansos ≥ 1.20 m', 'Verificar descansos con dimensión mínima de 1.20 m.', 'Anexo VII · PDF p. 3'],
      ['ramp-03', 'Espacio de giro de Ø 1.20 m al inicio y final', 'Al inicio y al final debe poder inscribirse un círculo de 1.20 m de diámetro.', 'Anexo VII · PDF p. 3'],
      ['ramp-04', 'Pendiente ≤ 6% para tramos de 10–15 m', 'Aplicar la pendiente longitudinal máxima indicada para esta longitud.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['ramp-05', 'Pendiente ≤ 8% para tramos de 3–10 m', 'Aplicar la pendiente longitudinal máxima indicada para esta longitud.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['ramp-06', 'Pendiente ≤ 10% para tramos de 1.50–3 m', 'Aplicar la pendiente longitudinal máxima indicada para esta longitud.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['ramp-07', 'Pendiente ≤ 12% para tramos ≤ 1.50 m', 'Aplicar la pendiente longitudinal máxima indicada para esta longitud.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['ramp-10', 'Desnivel de 0.80–0.90 m: pendiente ≤ 6%', 'Para un desnivel a salvar entre 0.80 y 0.90 m, comprobar una pendiente máxima de 6%.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['ramp-11', 'Desnivel de 0.30–0.80 m: pendiente ≤ 8%', 'Para un desnivel a salvar entre 0.30 y 0.80 m, comprobar una pendiente máxima de 8%.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['ramp-12', 'Desnivel de 0.18–0.30 m: pendiente ≤ 10%', 'Para un desnivel a salvar entre 0.18 y 0.30 m, comprobar una pendiente máxima de 10%.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['ramp-13', 'Desnivel ≤ 0.18 m: pendiente ≤ 12%', 'Para un desnivel a salvar de hasta 0.18 m, comprobar una pendiente máxima de 12%.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['ramp-08', 'Rampas de doble circulación con pasamanos central', 'Cuando exista doble circulación, verificar pasamanos intermedio central.', 'Anexo VII · PDF p. 3'],
      ['ramp-09', 'Pasamanos continuos durante todo el recorrido', 'Comprobar continuidad del pasamanos durante el recorrido y los descansos.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
    ],
  },

  {
    id: 'stairs',
    title: 'Escaleras y pasamanos',
    items: [
      ['stairs-01', 'Huellas con borde/arista redondeada', 'Revisar que el borde de la huella no presente una arista peligrosa.', 'Anexo VII · PDF p. 3'],
      ['stairs-02', 'Encuentro huella–contrahuella a 90°', 'Comprobar la geometría del encuentro entre huella y contrahuella.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 21'],
      ['stairs-03', 'Huella ≥ 28 cm', 'Verificar la dimensión mínima indicada en el esquema gráfico.', 'Anexo VII · gráfico: PDF p. 21'],
      ['stairs-04', 'Máximo 18 peldaños consecutivos según esquema gráfico', 'Comprobar que el tramo no exceda el máximo representado.', 'Anexo VII · gráfico: PDF p. 21'],
      ['stairs-08', 'Pavimento señalizador al inicio y final', 'Verificar franja o pavimento señalizador en los extremos de la escalera.', 'Anexo VII · gráfico: PDF p. 21'],
      ['stairs-05', 'Pasamanos a 0.90 m', 'Comprobar la altura del pasamanos respecto al piso terminado.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['stairs-09', 'Pasamanos continuos', 'Verificar continuidad durante todo el recorrido y descansos.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['stairs-10', 'Extremos de pasamanos curvados', 'Comprobar una terminación segura y curvada.', 'Anexo VII · PDF p. 3'],
      ['stairs-06', 'Sección de agarre aprox. Ø 3.5–5 cm', 'Verificar sección de agarre adecuada y fijación firme.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 21'],
      ['stairs-07', 'Separación del pasamanos respecto a obstáculos ≥ 4 cm', 'Mantener separación suficiente respecto a muro u obstáculos.', 'Anexo VII · gráfico: PDF p. 21'],
    ],
  },

  {
    id: 'doors',
    title: 'Puertas',
    items: [
      ['doors-01', 'Ancho libre ≥ 0.80 m', 'Verificar el ancho libre mínimo de paso.', 'Anexo VII · PDF p. 4'],
      ['doors-04', 'Manillas no circulares', 'Comprobar que puedan accionarse sin giro circular de muñeca.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 22'],
      ['doors-03', 'Puertas correderas con mecanismo adecuado', 'Revisar un sistema de desplazamiento apropiado.', 'Anexo VII · PDF p. 4'],
      ['doors-02', 'Si existe puerta giratoria, existe entrada accesible alternativa', 'La puerta giratoria no sustituye una entrada accesible.', 'Anexo VII · PDF p. 4'],
      ['doors-06', 'Puertas de emergencia claramente señalizadas', 'Comprobar señalización visible de las puertas de emergencia.', 'Anexo VII · PDF p. 5'],
    ],
  },

  {
    id: 'windows',
    title: 'Ventanas',
    items: [
      ['doors-05', 'Antepecho ≤ 0.85 m cuando corresponda', 'Revisar la altura del antepecho para permitir visibilidad desde una posición sentada.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 22'],
      ['windows-02', 'Revisada visibilidad desde silla de ruedas, aprox. 1.20 m de altura de ojo', 'Comprobar visuales tomando como referencia la altura indicada para usuario en silla de ruedas.', 'Anexo VII · gráfico: PDF p. 22'],
      ['windows-03', 'Revisada visibilidad de usuario de pie, aprox. 1.60 m', 'Comprobar visuales tomando como referencia la altura indicada para usuario de pie.', 'Anexo VII · gráfico: PDF p. 22'],
    ],
  },

  {
    id: 'elevator',
    title: 'Ascensor — si existe',
    items: [
      ['elevator-01', 'Cabina libre ≥ 0.90 × 1.20 m', 'Comprobar las dimensiones libres mínimas interiores.', 'Anexo VII · PDF p. 4'],
      ['elevator-02', 'Altura interior mínima 2.10 m', 'Verificar la altura libre interior mínima.', 'Anexo VII · PDF p. 4'],
      ['elevator-03', 'Botonera interior entre 0.90–1.20 m', 'Comprobar la altura accesible de los controles interiores.', 'Anexo VII · PDF p. 4'],
      ['elevator-04', 'Botón de llamada exterior entre 0.90–1.20 m', 'Comprobar la altura accesible del pulsador exterior.', 'Anexo VII · PDF p. 4'],
      ['elevator-05', 'Botones en alto relieve', 'Revisar identificación táctil en alto relieve.', 'Anexo VII · PDF p. 4'],
      ['elevator-07', 'Información equivalente en Braille', 'Comprobar identificación equivalente mediante Braille.', 'Anexo VII · PDF p. 4'],
      ['elevator-06', 'Piso de cabina antideslizante', 'Verificar un acabado de piso seguro y antideslizante.', 'Anexo VII · PDF p. 4'],
    ],
  },

  {
    id: 'bathrooms',
    title: 'Baño accesible',
    items: [
      ['bath-14', 'Existe baño/unidad sanitaria accesible', 'Confirmar que el proyecto disponga de una unidad sanitaria accesible cuando corresponda.', 'Anexo VII · PDF p. 4'],
      ['bath-15', 'Comparado con esquema gráfico de referencia de 2.00 × 2.00 m', 'Contrastar la distribución con el esquema gráfico de referencia.', 'Anexo VII · gráfico: PDF p. 25'],
      ['bath-01', 'Puerta abatible o corredera ≥ 0.80 m', 'Verificar ancho libre y tipo de puerta.', 'Anexo VII · PDF p. 4'],
      ['bath-02', 'Espacio suficiente para giro y transferencia de silla de ruedas', 'Comprobar áreas libres de maniobra y transferencia.', 'Anexo VII · gráficos: PDF pp. 23 y 25'],
      ['bath-03', 'Inodoro con asiento entre 0.40–0.45 m', 'Comprobar la altura terminada del asiento.', 'Anexo VII · PDF p. 4'],
      ['bath-04', 'Barras de apoyo a ambos lados del inodoro', 'Verificar apoyos laterales adecuados.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 23'],
      ['bath-05', 'Al menos una barra lateral abatible', 'Comprobar la disposición de una barra abatible cuando corresponda.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 23'],
      ['bath-06', 'Barras Ø 3.5–5 cm', 'Verificar el diámetro o sección de agarre.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 23'],
      ['bath-16', 'Barras separadas 5 cm de la pared', 'Comprobar la separación respecto del muro.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 23'],
      ['bath-07', 'Lavamanos sin pedestal', 'Dejar libre el espacio inferior para aproximación.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 24'],
      ['bath-17', 'Altura de lavamanos 0.80 m', 'Verificar la altura indicada.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 24'],
      ['bath-18', 'Aproximación frontal u oblicua al lavamanos', 'Comprobar espacio de aproximación para silla de ruedas.', 'Anexo VII · gráfico: PDF p. 24'],
      ['bath-08', 'Grifería de palanca o monomando', 'Evitar mecanismos de difícil agarre o giro.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 24'],
      ['bath-09', 'Borde inferior de espejo ≤ 0.90 m', 'Verificar utilización desde silla de ruedas.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 24'],
      ['bath-10', 'Accesorios entre 0.70–1.20 m', 'Comprobar altura de accesorios de uso habitual.', 'Anexo VII · PDF p. 4'],
      ['bath-11', 'Urinario adulto a 0.60 m, si existe', 'Verificar la altura indicada para adultos.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 24'],
      ['bath-12', 'Piso homogéneo y antideslizante en seco y mojado', 'Comprobar acabado continuo, estable y seguro.', 'Anexo VII · PDF pp. 4 y 13'],
      ['bath-13', 'Iluminación automática vinculada al cierre de puerta, según Anexo', 'Comprobar el sistema automático indicado para el recinto sanitario.', 'Anexo VII · PDF p. 4'],
    ],
  },

  {
    id: 'services',
    title: 'Instalaciones y servicios',
    items: [
      ['service-01', 'Interruptores, pulsadores, timbres, alarmas y controles entre 0.90–1.00 m', 'Incluye botoneras, zumbadores, porteros electrónicos y elementos análogos.', 'Anexo VII · PDF p. 5'],
      ['service-02', 'Ductos de basura, si existen, ≤ 1.00 m', 'Comprobar que queden al ras del muro y dentro de la altura máxima.', 'Anexo VII · PDF p. 5'],
      ['service-05', 'Elementos de uso habitual accesibles desde silla de ruedas', 'Comprobar alcance y operación de los elementos de servicio representados.', 'Anexo VII · gráfico: PDF p. 22'],
    ],
  },

  {
    id: 'dining',
    title: 'Comedor — si existe',
    items: [
      ['dining-01', 'Existe al menos una mesa accesible', 'Comprobar que exista por lo menos una mesa destinada a uso accesible.', 'Anexo VII · PDF p. 5'],
      ['dining-02', 'La mesa permite aproximación de silla de ruedas', 'Verificar que superficie y espacio inferior permitan el acercamiento.', 'Anexo VII · PDF p. 5'],
    ],
  },

  {
    id: 'safety',
    title: 'Seguridad y evacuación',
    items: [
      ['safety-01', 'Salidas y puertas de emergencia señalizadas', 'Comprobar señalización clara de las puertas y salidas de emergencia.', 'Anexo VII · PDF p. 5'],
      ['service-03', 'Sistema de detección de incendios perceptible por personas con discapacidad', 'Revisar que equipos e instalaciones faciliten la percepción de la alarma.', 'Anexo VII · PDF p. 5'],
      ['service-04', 'Señalización de accesibilidad actualizada y visible', 'Toda adaptación, adecuación o servicio accesible debe estar señalizado.', 'Anexo VII · PDF p. 5'],
    ],
  },

  {
    id: 'outside',
    title: 'Recorridos exteriores',
    items: [
      ['outside-01', 'Franja peatonal libre de obstáculos', 'Mantener libre de obstáculos y salientes la franja peatonal.', 'Anexo VII · PDF p. 10 · gráfico: PDF p. 27'],
      ['outside-02', 'Pavimentos firmes, homogéneos y antideslizantes', 'Comprobar continuidad, estabilidad y seguridad.', 'Anexo VII · PDF p. 10'],
      ['outside-03', 'Rejillas y tapas de registro al mismo nivel del pavimento', 'Deben quedar ancladas y niveladas con la superficie.', 'Anexo VII · PDF p. 10'],
      ['outside-06', 'Mobiliario urbano fuera de la franja libre peatonal', 'El mobiliario no debe constituir impedimento para el peatón.', 'Anexo VII · PDF p. 10'],
      ['outside-04', 'Rampas de pasos peatonales con pendiente ≤ 8%', 'Comprobar la pendiente máxima del rebaje o rampa.', 'Anexo VII · PDF p. 10 · gráficos: PDF pp. 27 y 28'],
      ['outside-07', 'Ancho de paso peatonal accesible ≥ 1.20 m', 'Verificar el ancho libre mínimo del paso.', 'Anexo VII · PDF p. 10 · gráfico: PDF p. 27'],
      ['outside-05', 'Cambios de nivel y obstáculos señalizados mediante pavimento táctil', 'Comprobar advertencia táctil en obstáculos y desniveles.', 'Anexo VII · PDF pp. 10 y 13 · gráfico: PDF p. 28'],
    ],
  },

  {
    id: 'parking',
    title: 'Estacionamiento accesible — si existe',
    items: [
      ['parking-01', 'Existe reserva de estacionamiento para personas con discapacidad', 'Comprobar la reserva permanente de plazas accesibles.', 'Anexo VII · PDF p. 10'],
      ['parking-02', 'Pavimento nivelado, firme y antideslizante', 'Verificar las condiciones del pavimento.', 'Anexo VII · PDF p. 10'],
      ['parking-03', 'Señalización horizontal', 'Comprobar señalización horizontal de la plaza.', 'Anexo VII · PDF p. 10 · gráfico: PDF p. 29'],
      ['parking-06', 'Señalización vertical', 'Comprobar señalización vertical de la plaza.', 'Anexo VII · PDF p. 10 · gráfico: PDF p. 29'],
      ['parking-04', 'Plaza perpendicular/oblicua: 3.50 × 5.00 m', 'Comprobar ancho y largo indicados.', 'Anexo VII · PDF p. 10 · gráfico: PDF p. 29'],
      ['parking-05', 'Plaza paralela: 3.50 × 6.50 m', 'Comprobar ancho y largo indicados.', 'Anexo VII · PDF p. 10'],
    ],
  },

  {
    id: 'surfaces',
    title: 'Pavimentos, texturas y contraste',
    items: [
      ['surface-01', 'Pisos sin relieves que dificulten la circulación', 'Evitar irregularidades que interfieran con el desplazamiento.', 'Anexo VII · PDF p. 13'],
      ['signals-02', 'Pisos estables y antideslizantes en seco y mojado', 'Verificar estabilidad y resistencia al deslizamiento.', 'Anexo VII · PDF p. 13'],
      ['signals-03', 'Pavimento táctil en obstáculos', 'Utilizar franja señalizadora para advertir obstáculos.', 'Anexo VII · PDF p. 13'],
      ['surface-02', 'Pavimento táctil en escaleras', 'Comprobar señalización táctil asociada a escaleras.', 'Anexo VII · PDF p. 13'],
      ['surface-03', 'Pavimento táctil en rampas', 'Comprobar señalización táctil asociada a rampas.', 'Anexo VII · PDF p. 13'],
      ['surface-04', 'Pavimento táctil en cambios de nivel', 'Comprobar advertencia táctil en desniveles.', 'Anexo VII · PDF p. 13'],
      ['surface-05', 'Pavimento táctil en cambios de sentido', 'Comprobar franjas señalizadoras en cambios de dirección.', 'Anexo VII · PDF p. 13'],
      ['signals-01', 'Contraste visual en puertas', 'Usar contraste para destacar las puertas respecto del entorno.', 'Anexo VII · PDF p. 13'],
      ['surface-06', 'Contraste visual en pasamanos', 'Facilitar la identificación visual del pasamanos.', 'Anexo VII · PDF p. 13'],
      ['surface-07', 'Contraste visual en bordes de escaleras', 'Destacar visualmente los bordes relevantes.', 'Anexo VII · PDF p. 13'],
      ['surface-08', 'Contraste visual en baños', 'Aplicar contraste a elementos relevantes del baño.', 'Anexo VII · PDF p. 13'],
      ['surface-09', 'Contraste visual en salidas', 'Destacar visualmente las salidas.', 'Anexo VII · PDF p. 13'],
      ['surface-10', 'Contraste visual en cambios de nivel', 'Destacar visualmente cambios de nivel.', 'Anexo VII · PDF p. 13'],
    ],
  },

  {
    id: 'signage',
    title: 'Señalización',
    items: [
      ['signals-04', 'Señales orientadoras en lugares accesibles', 'Ubicar información orientadora de forma accesible y comprensible.', 'Anexo VII · PDF p. 15'],
      ['signage-01', 'Señales direccionales con secuencia lógica', 'Comprobar continuidad y lógica de la información direccional.', 'Anexo VII · PDF p. 15'],
      ['signage-02', 'Señales funcionales en puntos visibles', 'Ubicar información funcional donde pueda identificarse fácilmente.', 'Anexo VII · PDF p. 15'],
      ['signage-03', 'Señalización visual claramente definida por forma, color y gráfico', 'Comprobar legibilidad y diferenciación visual.', 'Anexo VII · PDF p. 15'],
      ['signage-04', 'Señalización táctil en relieve y con contraste', 'Verificar relieve contrastado, legible al tacto y no lacerante.', 'Anexo VII · PDF p. 15'],
      ['signals-05', 'Señalización táctil entre 0.70–1.20 m', 'Comprobar la altura de colocación indicada.', 'Anexo VII · PDF p. 15'],
      ['signals-07', 'Símbolos internacionales de accesibilidad donde correspondan', 'Aplicar correctamente símbolos de silla de ruedas, sordera/hipoacusia y deficiencia visual.', 'Anexo VII · PDF pp. 15–16'],
      ['signals-06', 'Tamaño de señales revisado según distancia de lectura', 'Para distancias menores de 50 m, comprobar A = L² / 2000.', 'Anexo VII · PDF p. 15'],
    ],
  },
]

export const allItems = sections.flatMap((section) =>
  section.items.map(([id, title, detail, source]) => ({
    id,
    sectionId: section.id,
    sectionTitle: section.title,
    title,
    detail,
    source,
  })),
)
