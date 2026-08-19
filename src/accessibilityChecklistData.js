// Checklist normativo de accesibilidad.
// Las referencias "PDF p." corresponden a la página física del PDF
// LEY AUTONOMA Nº 80-14 TEXTOS ORDENADOS ANEXO VII (29 páginas).

export const sections = [
  {
    id: 'access',
    title: 'Acceso y circulación',
    items: [
      ['access-01', 'Ruta accesible continua desde el exterior hasta el edificio', 'Comprobar que el recorrido desde el exterior hasta el edificio sea continuo, accesible y esté libre de obstáculos que impidan el paso.', 'Anexo VII · PDF pp. 3 y 10'],
      ['access-02', 'Acceso principal mediante rampa cuando exista desnivel', 'Cuando el acceso presente un desnivel, comprobar que se resuelva mediante una rampa accesible.', 'Anexo VII · PDF p. 3'],
      ['access-03', 'Pasillos generales: ancho libre mínimo 1,20 m', 'Verificar un ancho libre mínimo de 1,20 m en los pasillos generales.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['access-04', 'Giros de hasta 90°: ancho libre mínimo 1,00 m', 'En giros de hasta 90°, comprobar un ancho libre mínimo de 1,00 m.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['access-05', 'Giros mayores de 90°: ancho libre mínimo 1,20 m', 'En giros mayores de 90°, comprobar un ancho libre mínimo de 1,20 m.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['access-06', 'Cruce frecuente de dos sillas de ruedas: ancho libre mínimo 1,50 m', 'Cuando se prevea el cruce frecuente de dos sillas de ruedas, verificar un ancho libre mínimo de 1,50 m.', 'Anexo VII · PDF p. 3'],
      ['access-07', 'Espacios de espera accesibles: mínimo 1,20 × 1,20 m', 'Reservar en las áreas de espera un espacio accesible mínimo de 1,20 × 1,20 m.', 'Anexo VII · PDF p. 3'],
      ['access-08', 'Espacios de espera accesibles debidamente señalizados', 'Comprobar que cada espacio reservado para silla de ruedas esté claramente identificado y señalizado.', 'Anexo VII · PDF p. 3'],
    ],
  },

  {
    id: 'ramps',
    title: 'Rampas',
    items: [
      ['ramp-01', 'Rampa: ancho libre mínimo 0,90 m', 'Comprobar un ancho libre mínimo de 0,90 m.', 'Anexo VII · PDF p. 3'],
      ['ramp-02', 'Descansos de rampa: dimensión mínima 1,20 m', 'Verificar que los descansos tengan una dimensión mínima de 1,20 m.', 'Anexo VII · PDF p. 3'],
      ['ramp-03', 'Espacio de giro Ø 1,20 m al inicio y al final de la rampa', 'Comprobar que al inicio y al final de la rampa pueda inscribirse un círculo de 1,20 m de diámetro.', 'Anexo VII · PDF p. 3'],
      ['ramp-04', 'Tramos de 10–15 m: pendiente máxima 6 %', 'Para tramos de 10 a 15 m, comprobar una pendiente longitudinal máxima del 6 %.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['ramp-05', 'Tramos de 3–10 m: pendiente máxima 8 %', 'Para tramos de 3 a 10 m, comprobar una pendiente longitudinal máxima del 8 %.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['ramp-06', 'Tramos de 1,50–3 m: pendiente máxima 10 %', 'Para tramos de 1,50 a 3 m, comprobar una pendiente longitudinal máxima del 10 %.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['ramp-07', 'Tramos de hasta 1,50 m: pendiente máxima 12 %', 'Para tramos de hasta 1,50 m, comprobar una pendiente longitudinal máxima del 12 %.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['ramp-10', 'Desnivel de 0,80–0,90 m: pendiente máxima 6 %', 'Para salvar un desnivel de entre 0,80 y 0,90 m, comprobar una pendiente máxima del 6 %.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['ramp-11', 'Desnivel de 0,30–0,80 m: pendiente máxima 8 %', 'Para salvar un desnivel de entre 0,30 y 0,80 m, comprobar una pendiente máxima del 8 %.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['ramp-12', 'Desnivel de 0,18–0,30 m: pendiente máxima 10 %', 'Para salvar un desnivel de entre 0,18 y 0,30 m, comprobar una pendiente máxima del 10 %.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['ramp-13', 'Desnivel de hasta 0,18 m: pendiente máxima 12 %', 'Para salvar un desnivel de hasta 0,18 m, comprobar una pendiente máxima del 12 %.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['ramp-08', 'Rampas de doble circulación: pasamanos central', 'Cuando exista doble circulación, comprobar la disposición de un pasamanos intermedio central.', 'Anexo VII · PDF p. 3'],
      ['ramp-09', 'Pasamanos continuos en todo el recorrido y descansos', 'Comprobar que los pasamanos sean continuos durante todo el recorrido y los descansos.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
    ],
  },

  {
    id: 'stairs',
    title: 'Escaleras y pasamanos',
    items: [
      ['stairs-01', 'Huellas con borde o arista redondeada', 'Comprobar que el borde de la huella sea redondeado y no presente una arista peligrosa.', 'Anexo VII · PDF p. 3'],
      ['stairs-02', 'Encuentro entre huella y contrahuella a 90°', 'Comprobar que el encuentro entre la huella y la contrahuella forme un ángulo de 90°.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 21'],
      ['stairs-03', 'Huella: profundidad mínima 28 cm', 'Verificar una profundidad mínima de huella de 28 cm según el esquema gráfico.', 'Anexo VII · gráfico: PDF p. 21'],
      ['stairs-04', 'Máximo 18 peldaños consecutivos por tramo', 'Comprobar que cada tramo no exceda los 18 peldaños consecutivos representados en el esquema gráfico.', 'Anexo VII · gráfico: PDF p. 21'],
      ['stairs-08', 'Pavimento táctil de advertencia al inicio y al final de la escalera', 'Comprobar la colocación de pavimento táctil o señalizador al inicio y al final de la escalera para advertir del cambio de nivel.', 'Anexo VII · gráfico: PDF p. 21'],
      ['stairs-05', 'Pasamanos: altura 0,90 m', 'Comprobar que el pasamanos esté a 0,90 m de altura respecto al piso terminado.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['stairs-09', 'Pasamanos continuos en todo el recorrido y descansos', 'Comprobar que los pasamanos sean continuos durante todo el recorrido y los descansos.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 20'],
      ['stairs-10', 'Extremos de los pasamanos con terminación curvada o retorno seguro', 'Comprobar que los extremos de los pasamanos tengan una terminación curvada o un retorno seguro que evite enganches o golpes.', 'Anexo VII · PDF p. 3'],
      ['stairs-06', 'Pasamanos: sección de agarre Ø 3,5–5 cm', 'Verificar que la sección de agarre del pasamanos tenga un diámetro aproximado de entre 3,5 y 5 cm y permita un agarre continuo y seguro.', 'Anexo VII · PDF p. 3 · gráfico: PDF p. 21'],
      ['stairs-07', 'Separación entre pasamanos y muro u obstáculos: mínimo 4 cm', 'Mantener una separación mínima de 4 cm entre el pasamanos y el muro u otros obstáculos.', 'Anexo VII · gráfico: PDF p. 21'],
    ],
  },

  {
    id: 'doors',
    title: 'Puertas',
    items: [
      ['doors-01', 'Puertas: ancho libre de paso mínimo 0,80 m', 'Verificar un ancho libre de paso mínimo de 0,80 m.', 'Anexo VII · PDF p. 4'],
      ['doors-04', 'Manillas accionables sin giro de muñeca', 'Comprobar que las manillas puedan accionarse sin necesidad de realizar un giro circular de muñeca.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 22'],
      ['doors-03', 'Puertas correderas con mecanismo de apertura accesible', 'Comprobar que el mecanismo permita una apertura y un cierre fáciles y seguros.', 'Anexo VII · PDF p. 4'],
      ['doors-02', 'Puertas giratorias con entrada accesible alternativa', 'Si existe una puerta giratoria, comprobar que haya una entrada accesible alternativa.', 'Anexo VII · PDF p. 4'],
      ['doors-06', 'Puertas de emergencia claramente señalizadas', 'Comprobar que las puertas de emergencia cuenten con señalización claramente visible.', 'Anexo VII · PDF p. 5'],
    ],
  },

  {
    id: 'windows',
    title: 'Ventanas',
    items: [
      ['doors-05', 'Antepecho: altura máxima 0,85 m cuando corresponda', 'Revisar que la altura del antepecho permita la visibilidad desde una posición sentada cuando corresponda.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 22'],
      ['windows-02', 'Visibilidad desde silla de ruedas: altura de ojos aprox. 1,20 m', 'Comprobar que exista una línea de visión adecuada desde una silla de ruedas, considerando una altura de ojos aproximada de 1,20 m.', 'Anexo VII · gráfico: PDF p. 22'],
      ['windows-03', 'Visibilidad de una persona de pie: altura de ojos aprox. 1,60 m', 'Comprobar que exista una línea de visión adecuada para una persona de pie, considerando una altura de ojos aproximada de 1,60 m.', 'Anexo VII · gráfico: PDF p. 22'],
    ],
  },

  {
    id: 'elevator',
    title: 'Ascensor — si existe',
    items: [
      ['elevator-01', 'Cabina: dimensiones libres mínimas 0,90 × 1,20 m', 'Comprobar que las dimensiones libres interiores de la cabina sean como mínimo 0,90 × 1,20 m.', 'Anexo VII · PDF p. 4'],
      ['elevator-02', 'Cabina: altura libre interior mínima 2,10 m', 'Verificar una altura libre interior mínima de 2,10 m.', 'Anexo VII · PDF p. 4'],
      ['elevator-03', 'Botonera interior: altura entre 0,90 y 1,20 m', 'Comprobar que los controles interiores estén ubicados entre 0,90 y 1,20 m de altura.', 'Anexo VII · PDF p. 4'],
      ['elevator-04', 'Botón de llamada exterior: altura entre 0,90 y 1,20 m', 'Comprobar que el botón de llamada exterior esté ubicado entre 0,90 y 1,20 m de altura.', 'Anexo VII · PDF p. 4'],
      ['elevator-05', 'Botones con identificación táctil en alto relieve', 'Comprobar que los botones dispongan de identificación táctil en alto relieve.', 'Anexo VII · PDF p. 4'],
      ['elevator-07', 'Información equivalente en Braille', 'Comprobar que la información disponga de identificación equivalente en Braille.', 'Anexo VII · PDF p. 4'],
      ['elevator-06', 'Piso de cabina antideslizante', 'Verificar que el piso de la cabina tenga un acabado seguro y antideslizante.', 'Anexo VII · PDF p. 4'],
    ],
  },

  {
    id: 'bathrooms',
    title: 'Baño accesible',
    items: [
      ['bath-14', 'Baño o unidad sanitaria accesible', 'Confirmar que el proyecto disponga de un baño o una unidad sanitaria accesible cuando corresponda.', 'Anexo VII · PDF p. 4'],
      ['bath-15', 'Distribución conforme al esquema gráfico de referencia de 2,00 × 2,00 m', 'Contrastar la distribución del baño con el esquema gráfico de referencia de 2,00 × 2,00 m.', 'Anexo VII · gráfico: PDF p. 25'],
      ['bath-01', 'Puerta abatible o corredera: ancho libre mínimo 0,80 m', 'Verificar que la puerta sea abatible o corredera y tenga un ancho libre mínimo de 0,80 m.', 'Anexo VII · PDF p. 4'],
      ['bath-02', 'Espacio suficiente para giro y transferencia de silla de ruedas', 'Comprobar que existan áreas libres suficientes para la maniobra, el giro y la transferencia desde una silla de ruedas.', 'Anexo VII · gráficos: PDF pp. 23 y 25'],
      ['bath-03', 'Inodoro: altura del asiento entre 0,40 y 0,45 m', 'Comprobar que la altura terminada del asiento del inodoro esté entre 0,40 y 0,45 m.', 'Anexo VII · PDF p. 4'],
      ['bath-04', 'Barras de apoyo a ambos lados del inodoro', 'Verificar que existan barras de apoyo adecuadas a ambos lados del inodoro.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 23'],
      ['bath-05', 'Al menos una barra lateral abatible', 'Comprobar que exista al menos una barra lateral abatible cuando corresponda.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 23'],
      ['bath-06', 'Barras de apoyo: sección de agarre Ø 3,5–5 cm', 'Verificar que la sección de agarre de las barras de apoyo tenga un diámetro de entre 3,5 y 5 cm.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 23'],
      ['bath-16', 'Separación entre barras de apoyo y pared: 5 cm', 'Comprobar una separación de 5 cm entre las barras de apoyo y la pared.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 23'],
      ['bath-07', 'Lavamanos sin pedestal y con espacio inferior libre', 'Comprobar que el lavamanos no tenga pedestal y mantenga libre el espacio inferior necesario para la aproximación.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 24'],
      ['bath-17', 'Lavamanos: altura 0,80 m', 'Verificar que el lavamanos esté ubicado a la altura indicada de 0,80 m.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 24'],
      ['bath-18', 'Espacio para aproximación frontal u oblicua al lavamanos', 'Comprobar que exista espacio suficiente para la aproximación frontal u oblicua de una silla de ruedas al lavamanos.', 'Anexo VII · gráfico: PDF p. 24'],
      ['bath-08', 'Grifería de palanca o monomando', 'Comprobar que la grifería sea de palanca o monomando y no requiera un agarre o giro difícil.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 24'],
      ['bath-09', 'Espejo: borde inferior a una altura máxima de 0,90 m', 'Verificar que el borde inferior del espejo esté a una altura máxima de 0,90 m para permitir su uso desde una silla de ruedas.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 24'],
      ['bath-10', 'Accesorios: altura entre 0,70 y 1,20 m', 'Comprobar que los accesorios de uso habitual estén ubicados entre 0,70 y 1,20 m de altura.', 'Anexo VII · PDF p. 4'],
      ['bath-11', 'Urinario para adultos: altura 0,60 m, si existe', 'Si existe urinario para adultos, verificar que esté a la altura indicada de 0,60 m.', 'Anexo VII · PDF p. 4 · gráfico: PDF p. 24'],
      ['bath-12', 'Piso homogéneo y antideslizante en seco y mojado', 'Comprobar que el piso sea continuo, estable y antideslizante tanto en seco como en mojado.', 'Anexo VII · PDF pp. 4 y 13'],
      ['bath-13', 'Iluminación automática vinculada al cierre de la puerta', 'Comprobar el sistema de iluminación automática vinculado al cierre de la puerta indicado en el Anexo.', 'Anexo VII · PDF p. 4'],
    ],
  },

  {
    id: 'services',
    title: 'Instalaciones y servicios',
    items: [
      ['service-01', 'Interruptores, pulsadores, timbres, alarmas y controles: altura entre 0,90 y 1,00 m', 'Comprobar que los elementos de uso habitual, incluidas botoneras, zumbadores y porteros electrónicos, estén ubicados entre 0,90 y 1,00 m de altura.', 'Anexo VII · PDF p. 5'],
      ['service-02', 'Ductos de basura: altura máxima 1,00 m, si existen', 'Si existen ductos de basura, comprobar que queden al ras del muro y a una altura máxima de 1,00 m.', 'Anexo VII · PDF p. 5'],
      ['service-05', 'Elementos de uso habitual accesibles desde silla de ruedas', 'Comprobar que los elementos de servicio representados puedan alcanzarse y utilizarse desde una silla de ruedas.', 'Anexo VII · gráfico: PDF p. 22'],
    ],
  },

  {
    id: 'dining',
    title: 'Comedor — si existe',
    items: [
      ['dining-01', 'Al menos una mesa accesible', 'Comprobar que exista al menos una mesa destinada a uso accesible.', 'Anexo VII · PDF p. 5'],
      ['dining-02', 'Mesa con espacio suficiente para aproximación de silla de ruedas', 'Verificar que la superficie y el espacio inferior permitan la aproximación adecuada de una silla de ruedas.', 'Anexo VII · PDF p. 5'],
    ],
  },

  {
    id: 'safety',
    title: 'Seguridad y evacuación',
    items: [
      ['safety-01', 'Salidas y puertas de emergencia claramente señalizadas', 'Comprobar que las salidas y puertas de emergencia estén identificadas mediante señalización clara y visible.', 'Anexo VII · PDF p. 5'],
      ['service-03', 'Sistema de detección de incendios perceptible por personas con discapacidad', 'Revisar que el sistema de detección y alarma pueda ser percibido por personas con discapacidad.', 'Anexo VII · PDF p. 5'],
      ['service-04', 'Servicios y elementos accesibles debidamente señalizados', 'Comprobar que las adaptaciones, adecuaciones y servicios accesibles estén correctamente señalizados y sean visibles.', 'Anexo VII · PDF p. 5'],
    ],
  },

  {
    id: 'outside',
    title: 'Recorridos exteriores',
    items: [
      ['outside-01', 'Franja peatonal accesible libre de obstáculos', 'Mantener la franja peatonal accesible libre de obstáculos y elementos salientes que dificulten el paso.', 'Anexo VII · PDF p. 10 · gráfico: PDF p. 27'],
      ['outside-02', 'Pavimentos firmes, homogéneos y antideslizantes', 'Comprobar que los pavimentos sean continuos, estables y antideslizantes.', 'Anexo VII · PDF p. 10'],
      ['outside-03', 'Rejillas y tapas de registro al mismo nivel del pavimento', 'Comprobar que las rejillas y tapas estén ancladas y niveladas con la superficie del pavimento.', 'Anexo VII · PDF p. 10'],
      ['outside-06', 'Mobiliario urbano fuera de la franja libre peatonal', 'Comprobar que el mobiliario urbano no invada ni obstaculice la franja libre peatonal.', 'Anexo VII · PDF p. 10'],
      ['outside-04', 'Rampas en pasos peatonales: pendiente máxima 8 %', 'Comprobar que la pendiente del rebaje o rampa del paso peatonal no supere el 8 %.', 'Anexo VII · PDF p. 10 · gráficos: PDF pp. 27 y 28'],
      ['outside-07', 'Paso peatonal accesible: ancho libre mínimo 1,20 m', 'Verificar un ancho libre mínimo de 1,20 m en el paso peatonal accesible.', 'Anexo VII · PDF p. 10 · gráfico: PDF p. 27'],
      ['outside-05', 'Cambios de nivel y obstáculos señalizados con pavimento táctil de advertencia', 'Comprobar que los cambios de nivel y obstáculos estén advertidos mediante pavimento táctil.', 'Anexo VII · PDF pp. 10 y 13 · gráfico: PDF p. 28'],
    ],
  },

  {
    id: 'parking',
    title: 'Estacionamiento accesible — si existe',
    items: [
      ['parking-01', 'Plaza de estacionamiento reservada para personas con discapacidad', 'Comprobar que exista una reserva permanente de plazas de estacionamiento accesibles.', 'Anexo VII · PDF p. 10'],
      ['parking-02', 'Pavimento nivelado, firme y antideslizante', 'Verificar que el pavimento de la plaza sea nivelado, firme y antideslizante.', 'Anexo VII · PDF p. 10'],
      ['parking-03', 'Plaza accesible con señalización horizontal', 'Comprobar que la plaza accesible disponga de señalización horizontal.', 'Anexo VII · PDF p. 10 · gráfico: PDF p. 29'],
      ['parking-06', 'Plaza accesible con señalización vertical', 'Comprobar que la plaza accesible disponga de señalización vertical.', 'Anexo VII · PDF p. 10 · gráfico: PDF p. 29'],
      ['parking-04', 'Plaza perpendicular u oblicua: mínimo 3,50 × 5,00 m', 'Comprobar las dimensiones mínimas indicadas para una plaza perpendicular u oblicua.', 'Anexo VII · PDF p. 10 · gráfico: PDF p. 29'],
      ['parking-05', 'Plaza paralela: mínimo 3,50 × 6,50 m', 'Comprobar las dimensiones mínimas indicadas para una plaza paralela.', 'Anexo VII · PDF p. 10'],
    ],
  },

  {
    id: 'surfaces',
    title: 'Pavimentos, texturas y contraste',
    items: [
      ['surface-01', 'Pisos sin relieves ni irregularidades que dificulten la circulación', 'Comprobar que el piso no presente relieves o irregularidades que interfieran con el desplazamiento.', 'Anexo VII · PDF p. 13'],
      ['signals-02', 'Pisos estables y antideslizantes en seco y mojado', 'Verificar que los pisos sean estables y resistentes al deslizamiento tanto en seco como en mojado.', 'Anexo VII · PDF p. 13'],
      ['signals-03', 'Pavimento táctil de advertencia ante obstáculos', 'Utilizar pavimento táctil de advertencia para señalar la presencia de obstáculos.', 'Anexo VII · PDF p. 13'],
      ['surface-02', 'Pavimento táctil de advertencia en escaleras', 'Comprobar la señalización táctil de advertencia asociada a las escaleras.', 'Anexo VII · PDF p. 13'],
      ['surface-03', 'Pavimento táctil de advertencia en rampas', 'Comprobar la señalización táctil de advertencia asociada a las rampas.', 'Anexo VII · PDF p. 13'],
      ['surface-04', 'Pavimento táctil de advertencia en cambios de nivel', 'Comprobar la señalización táctil de advertencia en los cambios de nivel.', 'Anexo VII · PDF p. 13'],
      ['surface-05', 'Pavimento táctil de señalización en cambios de dirección', 'Comprobar la colocación de pavimento táctil de señalización en los cambios de dirección.', 'Anexo VII · PDF p. 13'],
      ['signals-01', 'Contraste visual entre puertas y su entorno', 'Comprobar que las puertas tengan suficiente contraste visual respecto a las superficies de su entorno.', 'Anexo VII · PDF p. 13'],
      ['surface-06', 'Contraste visual de los pasamanos', 'Comprobar que los pasamanos se distingan visualmente de las superficies próximas.', 'Anexo VII · PDF p. 13'],
      ['surface-07', 'Contraste visual en los bordes de las escaleras', 'Comprobar que los bordes relevantes de las escaleras estén claramente destacados mediante contraste visual.', 'Anexo VII · PDF p. 13'],
      ['surface-08', 'Contraste visual de los elementos relevantes del baño', 'Comprobar que los elementos relevantes del baño puedan distinguirse mediante contraste visual.', 'Anexo VII · PDF p. 13'],
      ['surface-09', 'Contraste visual de las salidas', 'Comprobar que las salidas se distingan claramente mediante contraste visual.', 'Anexo VII · PDF p. 13'],
      ['surface-10', 'Contraste visual en los cambios de nivel', 'Comprobar que los cambios de nivel estén claramente destacados mediante contraste visual.', 'Anexo VII · PDF p. 13'],
    ],
  },

  {
    id: 'signage',
    title: 'Señalización',
    items: [
      ['signals-04', 'Señales de orientación ubicadas en lugares accesibles', 'Comprobar que la información de orientación esté ubicada de forma accesible y sea fácil de comprender.', 'Anexo VII · PDF p. 15'],
      ['signage-01', 'Señales direccionales con secuencia lógica y continua', 'Comprobar que la información direccional mantenga una secuencia lógica y continua durante el recorrido.', 'Anexo VII · PDF p. 15'],
      ['signage-02', 'Señales funcionales ubicadas en puntos claramente visibles', 'Comprobar que la información funcional esté ubicada donde pueda identificarse fácilmente.', 'Anexo VII · PDF p. 15'],
      ['signage-03', 'Señalización visual diferenciada por forma, color y símbolo gráfico', 'Comprobar que la señalización visual sea legible y pueda diferenciarse claramente por su forma, color y símbolo gráfico.', 'Anexo VII · PDF p. 15'],
      ['signage-04', 'Señalización táctil en relieve, con contraste y legible al tacto', 'Verificar que la señalización táctil tenga relieve contrastado, sea legible al tacto y no presente bordes lacerantes.', 'Anexo VII · PDF p. 15'],
      ['signals-05', 'Señalización táctil: altura entre 0,70 y 1,20 m', 'Comprobar que la señalización táctil esté ubicada entre 0,70 y 1,20 m de altura.', 'Anexo VII · PDF p. 15'],
      ['signals-07', 'Símbolos internacionales de accesibilidad donde correspondan', 'Aplicar correctamente los símbolos internacionales correspondientes a silla de ruedas, sordera o hipoacusia y deficiencia visual.', 'Anexo VII · PDF pp. 15–16'],
      ['signals-06', 'Tamaño de las señales adecuado a la distancia de lectura', 'Para distancias menores de 50 m, comprobar el dimensionamiento indicado mediante A = L² / 2000.', 'Anexo VII · PDF p. 15'],
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
