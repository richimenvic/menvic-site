# Herramienta interna — Revisión de Accesibilidad

Ruta prevista: `/tools/accesibilidad`

## Objetivo

Checklist compartido para revisar en Revit los criterios de accesibilidad del edificio auxiliar del proyecto La Paz, tomando como fuente la Ley Autónoma Nº 80-14, Textos Ordenados, Anexo VII — Barreras Arquitectónicas.

## Usuarios iniciales

La interfaz trabaja únicamente con dos nombres operativos:

- Ricardo
- Javier

No hay autenticación por correo en la versión inicial. El nombre identifica quién está trabajando, asignando o cerrando un punto.

## Acceso

La herramienta solicita un PIN interno. El PIN se valida en Supabase y **no se guarda en el código del sitio ni en este repositorio**. El navegador conserva el PIN únicamente durante la sesión de la pestaña mediante `sessionStorage`.

Esta primera versión es una barrera interna ligera, no un sistema de identidad fuerte. Si la herramienta aumenta de alcance, migrar a Supabase Auth con usuarios autorizados.

## Persistencia

Se reutiliza el proyecto Supabase de `pymenvic-licensing`, pero los datos de esta herramienta quedan aislados en el esquema privado `menvic_tools`; no se usan ni modifican tablas `license_*`.

Migración aplicada en Supabase:

`create_menvic_accessibility_checklist_v1`

Objetos principales:

- `menvic_tools.accessibility_projects`
- `menvic_tools.accessibility_check_state`
- `public.menvic_accessibility_login_v1`
- `public.menvic_accessibility_get_state_v1`
- `public.menvic_accessibility_update_check_v1`

El rol `anon` no tiene acceso directo al esquema `menvic_tools`. Solo puede ejecutar los tres RPC anteriores, que validan el PIN antes de leer o escribir.

## Estado de cada punto

Cada criterio puede quedar como:

- `pending` — pendiente
- `done` — cumple/revisado
- `na` — no aplica

Además guarda:

- responsable: Ricardo / Javier / sin asignar;
- observación o diferencia encontrada;
- quién realizó el último cambio;
- fecha del último cambio;
- quién cerró el punto y cuándo.

## Comportamiento de interfaz

- Al marcar un punto como cumple, la fila pasa a verde claro.
- Los puntos `N/A` quedan en gris.
- Se muestra progreso global.
- Hay filtros para todos, pendientes, revisados y puntos con observación.
- Se puede copiar la lista de pendientes.
- La pantalla sincroniza el estado compartido aproximadamente cada 15 segundos.
- La ruta se marca `noindex, nofollow` y no aparece en la navegación pública.

## Seguridad

La publishable key de Supabase es pública por diseño y se usa únicamente como identificación de cliente. No añadir nunca `service_role`, secret keys ni credenciales privadas al frontend.

La protección real de datos en esta versión depende de:

1. esquema de tablas no expuesto al rol `anon`;
2. RPC con `SECURITY DEFINER` limitado al rol `anon`;
3. validación del PIN mediante hash en servidor;
4. validación estricta de actor, responsable y estado dentro del RPC.


## Comentarios de MHTN — v1

La columna `MHTN` recoge la respuesta de Matthew al correo
`Re: La Paz Ancillary Accessibility Audit Report`, separada del estado normativo.

- 45 ítems del checklist tienen comentarios bilingües y etiquetas de coordinación.
  Una observación general consulta la aplicación al diseño del Templo.
- Base: `menvic_tools.accessibility_mhtn_comments` (esquema privado, RLS activo),
  separada de los 106 registros originales `accessibility_check_state`.
- RPC de lectura: `public.menvic_accessibility_get_mhtn_v1(text,text)`, exige
  PIN mediante la función de login existente.
- La barra de filtros incorpora **«Con comentario MHTN (n)»** y muestra solo los puntos con respuesta de MHTN; el contador se calcula a partir de los comentarios recibidos. Las filas afectadas presentan una marca lateral discreta.
- En la web, los comentarios MHTN son de solo lectura. Las etiquetas
  «Consulta», «Proceder», etc., no significan ejecución ni aprobación contractual.
- No se modifican el estado de cumplimiento, las observaciones originales,
  los responsables, las evidencias ni la generación del informe.

### Implementación y comprobaciones del 30 de octubre de 2026

La tabla y la RPC se aplicaron al proyecto Supabase `ttnzobxsdeoazhqtiayw`
mediante la CLI vinculada del repositorio privado de `pymenvic-licensing`.
Se verificaron 46 filas (45 por ítem y una general), los 106 estados
originales conservados, permiso `EXECUTE` para `anon` sobre la RPC,
sin acceso directo a la tabla y rechazo de PIN inválido.

El SQL con comentarios del correo se conserva en el repositorio **privado**
`richimenvic/pymenvic-licensing`, rama
`docs/menvic-accessibility-mhtn`, archivo
`docs/menvic-accessibility-mhtn-v1.sql`.
No incluir ese archivo en el contenido público de `menvic-site`.

La verificación final en navegador de la función con un PIN válido y el
despliegue GitHub Pages se registran por separado cuando estén confirmados.


## Respuestas MENVIC a MHTN y filtrado para impresión — v2 (2026-10-30)

- La primera columna (casilla de revisión) es ahora **solo de lectura** en la interfaz. Los estados y observaciones existentes se conservan; el selector `Cumple / No cumple / N/A` continúa operativo.
- **Respuesta MENVIC** es una columna independiente de `MHTN` y de `Estado`. Los puntos con comentario MHTN ofrecen un editor para respuesta en español e inglés, con estado interno `Borrador` o `Lista para enviar`. «Lista» no implica envío, aprobación ni cambio contractual.
- Los borradores se guardan explícitamente (botón o Ctrl+Enter) mediante `public.menvic_accessibility_update_mhtn_response_v1`. Las respuestas se cargan por `public.menvic_accessibility_get_mhtn_responses_v1` y se sincronizan periódicamente con el checklist. Se registran actor y fecha de edición.
- Los campos de respuesta se encuentran en la tabla privada `menvic_tools.accessibility_mhtn_comments`; no alteran el texto original de MHTN ni los 106 estados de auditoría. Ambos endpoints requieren PIN y los roles web carecen de permiso directo para modificar la tabla.
- Se distinguen filtros de **Consultas MENVIC**, **Acciones MENVIC**, **Revisión Albert**, **Consultas por responder** y **Respuestas listas**, además de los anteriores.
- El botón **Imprimir consultas MENVIC** genera un documento específico para las consultas dirigidas a Ricardo/Sandra/Javier/MENVIC (12 puntos y la consulta general del Templo, según la carga inicial). Incluye ambas versiones del comentario MHTN y las respuestas guardadas, o marca su ausencia. Excluye revisiones de Albert y acciones que no son preguntas. Al activar **Consultas por responder**, el botón imprime únicamente las que aún no estén marcadas como `Lista para enviar`.
- La impresión se realiza en el navegador autenticado; el documento no se guarda en Supabase ni se envía a MHTN. El botón antiguo de PDF del checklist completo permanece disponible.
- Código de interfaz: `src/components/MhtnResponseEditor.jsx` y `src/mhtnConsultationPrint.js`. SQL versionado en repositorio privado `richimenvic/pymenvic-licensing`, rama `feat/accessibility-mhtn-responses`, archivo `docs/menvic-accessibility-mhtn-responses-v1.sql`.
