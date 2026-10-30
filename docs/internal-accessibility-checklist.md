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


## Comentarios de MHTN — propuesta v1 (pendiente de instalación)

Para la respuesta de Matthew al correo `Re: La Paz Ancillary Accessibility Audit Report`,
se ha preparado una columna `MHTN` en la vista del checklist.

- Los comentarios de MHTN se guardan por `check_id` estable en
  `menvic_tools.accessibility_mhtn_comments`, separados de
  `menvic_tools.accessibility_check_state`.
- Se incluyen 45 comentarios por ítem y una observación general sobre
  la posible aplicación de requisitos al edificio del Templo.
- El registro guarda la referencia numérica visible, una categoría orientativa
  de coordinación, la persona mencionada, el comentario en inglés del correo
  (con las menciones personales separadas en su propio campo) y la traducción
  al español. Las categorías no significan conformidad ni aprobación contractual.
- La interfaz muestra una etiqueta en la columna y ambos idiomas al abrir
  el detalle del punto. La consulta general aparece bajo el checklist.
- Los nuevos comentarios son de solo lectura desde la web.
  La importación y las modificaciones posteriores requieren gestión administrativa.
- La funcionalidad no cambia los estados, observaciones, responsables,
  evidencias ni datos de cumplimiento existentes. No modifica el PDF del informe.

### Instalación y validación pendiente

El archivo `docs/sql/accessibility-mhtn-comments-v1.sql` contiene la
creación de la tabla privada, la carga inicial y la nueva RPC de lectura
`public.menvic_accessibility_get_mhtn_v1`.

**Antes de ejecutar SQL:** confirmar con el administrador de la base
`ttnzobxsdeoazhqtiayw` que el esquema privado y la firma/comportamiento
de `public.menvic_accessibility_login_v1(text,text)` coinciden con lo
documentado. La conexión disponible en esta sesión no tiene permisos sobre
este proyecto; por tanto, no está verificado en su base real.

Verificar en un entorno de ensayo: 46 filas para el proyecto, PIN válido,
PIN inválido (acceso denegado), ausencia de acceso directo del rol `anon`
a la tabla, visualización de MHTN en escritorio/móvil, y conservación de los
106 estados originales. Aplicar primero el SQL y después integrar el código
de la rama en `main` mediante el procedimiento de publicación autorizado.
No se ha publicado ni aplicado en producción desde esta sesión.
