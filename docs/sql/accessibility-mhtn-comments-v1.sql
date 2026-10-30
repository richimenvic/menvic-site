-- MENVIC / La Paz Ancillary — Comentarios de Matthew (MHTN).
-- Fuente: correo "Re: La Paz Ancillary Accessibility Audit Report" compartido por Ricardo.
-- Este script es aditivo. No modifica menvic_tools.accessibility_check_state ni las RPC v2.
-- Requiere que public.menvic_accessibility_login_v1(text, text) esté disponible
-- y valide PIN/proyecto como en la aplicación vigente.
--
-- Implementar primero en una base de ensayo y verificar los nombres de función
-- y permisos reales del proyecto antes de ejecutar en producción.

BEGIN;

CREATE TABLE IF NOT EXISTS menvic_tools.accessibility_mhtn_comments (
  project_slug text NOT NULL,
  check_id text NOT NULL,
  item_number text NOT NULL,
  status_code text NOT NULL CHECK (status_code IN ('question', 'review', 'verify', 'proceed', 'action', 'conditional')),
  assigned_to text NOT NULL DEFAULT '',
  comment_en text NOT NULL,
  comment_es text NOT NULL,
  PRIMARY KEY (project_slug, check_id)
);

REVOKE ALL ON TABLE menvic_tools.accessibility_mhtn_comments FROM PUBLIC, anon, authenticated;

INSERT INTO menvic_tools.accessibility_mhtn_comments
  (project_slug, check_id, item_number, status_code, assigned_to, comment_en, comment_es)
VALUES
  ('edificio-auxiliar-la-paz', 'access-08', '1.8', 'question', 'Ricardo / Sandra', 'Can chairs in the waiting area be removed to create the wheelchair space only when needed? In other words, can the dedicated wheelchair space be occupied by furniture when not in use?', '¿Pueden retirarse las sillas de la sala de espera para habilitar el espacio para silla de ruedas solo cuando se necesite? Es decir, ¿puede ese espacio reservado estar ocupado por mobiliario mientras no se utilice?'),
  ('edificio-auxiliar-la-paz', 'ramp-01', '2.1', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'ramp-02', '2.2', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'ramp-03', '2.3', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'ramp-04', '2.4', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'ramp-05', '2.5', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'ramp-06', '2.6', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'ramp-07', '2.7', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'ramp-10', '2.8', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'ramp-11', '2.9', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'ramp-12', '2.10', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'ramp-13', '2.11', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'ramp-08', '2.12', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'ramp-09', '2.13', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'stairs-08', '3.5', 'question', 'Ricardo / Sandra', 'Please send us your recommendation for the style of tactile strip - can it be a solid surface material with routed grooves inset flush with the surrounding tile of a similar color? This wasn''t a requirement on Santa Cruz; is the municipal code in La Paz different?', 'Enviar una recomendación para el tipo de franja táctil. ¿Puede ser de un material de superficie sólida con ranuras fresadas, enrasado con la baldosa circundante y de un color similar? Este requisito no se aplicó en Santa Cruz. ¿Es diferente la normativa municipal de La Paz?'),
  ('edificio-auxiliar-la-paz', 'stairs-05', '3.6', 'proceed', 'Ricardo', 'Proceed with the update unless you see any issue with the modification.', 'Proceder con la actualización, salvo que se identifique algún inconveniente con la modificación.'),
  ('edificio-auxiliar-la-paz', 'stairs-10', '3.8', 'proceed', 'Ricardo', 'Proceed with the update unless you see any issue with the modification.', 'Proceder con la actualización, salvo que se identifique algún inconveniente con la modificación.'),
  ('edificio-auxiliar-la-paz', 'stairs-06', '3.9', 'proceed', 'Ricardo', 'Proceed with the update unless you see any issue with the modification.', 'Proceder con la actualización, salvo que se identifique algún inconveniente con la modificación.'),
  ('edificio-auxiliar-la-paz', 'elevator-06', '6.7', 'verify', 'Ricardo', 'Confirm the slip resistance rating of the specified flooring material.', 'Confirmar la clasificación de resistencia al deslizamiento del material de piso especificado.'),
  ('edificio-auxiliar-la-paz', 'bath-15', '7.2', 'question', 'Ricardo', 'Clarify what needs to change on the floor plan.', 'Aclarar qué debe modificarse en la planta.'),
  ('edificio-auxiliar-la-paz', 'bath-05', '7.7', 'proceed', 'Ricardo', 'Proceed with the update unless you see any issue with the modification.', 'Proceder con la actualización, salvo que se identifique algún inconveniente con la modificación.'),
  ('edificio-auxiliar-la-paz', 'bath-16', '7.9', 'action', 'Ricardo', 'Provide a detail in the ancillary drawings indicating the required clearance.', 'Incorporar en los planos del Edificio Auxiliar un detalle que indique la separación libre requerida.'),
  ('edificio-auxiliar-la-paz', 'bath-09', '7.14', 'question', 'Ricardo', 'Since this was an issue on the Santa Cruz project, does it need further study on La Paz?', 'Dado que este punto presentó problemas en el proyecto de Santa Cruz, ¿requiere un estudio adicional en La Paz?'),
  ('edificio-auxiliar-la-paz', 'bath-12', '7.17', 'verify', 'Ricardo', 'Confirm the slip resistance rating of the specified flooring material.', 'Confirmar la clasificación de resistencia al deslizamiento del material de piso especificado.'),
  ('edificio-auxiliar-la-paz', 'bath-13', '7.18', 'question', 'Ricardo', 'Clarify what needs to be updated in the ancillary design to comply.', 'Aclarar qué debe actualizarse en el diseño del Edificio Auxiliar para cumplir el requisito.'),
  ('edificio-auxiliar-la-paz', 'service-01', '8.1', 'question', 'Ricardo', 'Do all thermostats and switches need to be at .90-1.00? That seems low for a thermostat which is typically closer to eye level, while switches are closer to hand level. If necessary, should we lower switches to .90 and thermostats to 1.00?', '¿Todos los termostatos e interruptores deben instalarse entre 0,90 y 1,00 m? Esa altura parece baja para los termostatos, normalmente más próximos al nivel de los ojos, mientras que los interruptores se sitúan más cerca del alcance de la mano. Si es necesario, ¿deberíamos situar los interruptores a 0,90 m y los termostatos a 1,00 m?'),
  ('edificio-auxiliar-la-paz', 'dining-01', '9.1', 'question', 'Ricardo', 'Can chairs simply be moved to allow for wheelchair access (what constitutes an "accessible table")?', '¿Basta con mover las sillas para permitir el acceso en silla de ruedas? ¿Qué condiciones definen una «mesa accesible»?'),
  ('edificio-auxiliar-la-paz', 'dining-02', '9.2', 'question', 'Ricardo', 'Can chairs simply be moved to allow for wheelchair access (what constitutes an "accessible table")?', '¿Basta con mover las sillas para permitir el acceso en silla de ruedas? ¿Qué condiciones definen una «mesa accesible»?'),
  ('edificio-auxiliar-la-paz', 'outside-04', '11.5', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'outside-07', '11.6', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'outside-05', '11.7', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'parking-06', '12.4', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'parking-04', '12.5', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'parking-05', '12.6', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'signals-03', '13.3', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'surface-02', '13.4', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'surface-03', '13.5', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'surface-04', '13.6', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'surface-05', '13.7', 'review', 'Albert', 'Please review and verify the items indicated in the report.', 'Revisar y verificar los puntos indicados en el informe.'),
  ('edificio-auxiliar-la-paz', 'surface-07', '13.10', 'question', 'Ricardo', 'Please send us your recommendation for the contrasting strip - should we use the same approach as Santa Cruz?', 'Enviar una recomendación para la franja de contraste. ¿Deberíamos utilizar la misma solución que en Santa Cruz?'),
  ('edificio-auxiliar-la-paz', 'surface-10', '13.13', 'question', 'Ricardo', 'Please send us your recommendation for the contrasting strip - should we use the same approach as Santa Cruz?', 'Enviar una recomendación para la franja de contraste. ¿Deberíamos utilizar la misma solución que en Santa Cruz?'),
  ('edificio-auxiliar-la-paz', 'signals-04', '14.1', 'question', 'Ricardo', 'Is this signage that we need to provide; please clarify.', 'Aclarar si esta señalización debe ser suministrada por nuestro equipo.'),
  ('edificio-auxiliar-la-paz', 'signage-03', '14.4', 'question', 'Ricardo', 'Is there a local signage standard we need to follow; can we not use the Church''s signage standard?', '¿Existe una norma local de señalización que debamos cumplir? ¿Podemos utilizar el estándar de señalización de la Iglesia?'),
  ('edificio-auxiliar-la-paz', 'signage-04', '14.5', 'conditional', 'Ricardo', 'Proceed with the necessary signage locations (per my comment on 14.4 we need to understand the signage graphic requirements that apply, if any).', 'Proceder con las ubicaciones necesarias de la señalización. Conforme al comentario del punto 14.4, queda pendiente determinar los requisitos gráficos aplicables, si los hay.'),
  ('edificio-auxiliar-la-paz', 'signals-05', '14.6', 'conditional', 'Ricardo', 'Proceed with the necessary signage locations (per my comment on 14.4 we need to understand the signage graphic requirements that apply, if any).', 'Proceder con las ubicaciones necesarias de la señalización. Conforme al comentario del punto 14.4, queda pendiente determinar los requisitos gráficos aplicables, si los hay.'),
  ('edificio-auxiliar-la-paz', '__general__', 'General', 'question', 'Ricardo', 'Please confirm which items need to be incorporated into the temple design. Was a similar report generated for the temple?', 'Confirmar qué puntos deben incorporarse al diseño del Templo y si se elaboró un informe equivalente para ese edificio.')
ON CONFLICT (project_slug, check_id) DO NOTHING;

CREATE OR REPLACE FUNCTION public.menvic_accessibility_get_mhtn_v1(
  p_project_slug text,
  p_pin text
)
RETURNS TABLE (
  check_id text,
  item_number text,
  status_code text,
  assigned_to text,
  comment_en text,
  comment_es text
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
BEGIN
  -- Reutiliza la misma comprobación de PIN y proyecto de la aplicación.
  IF NOT EXISTS (
    SELECT 1 FROM public.menvic_accessibility_login_v1(p_project_slug, p_pin)
  ) THEN
    RAISE EXCEPTION 'invalid_access_code';
  END IF;

  RETURN QUERY
  SELECT
    m.check_id,
    m.item_number,
    m.status_code,
    m.assigned_to,
    m.comment_en,
    m.comment_es
  FROM menvic_tools.accessibility_mhtn_comments AS m
  WHERE m.project_slug = p_project_slug
  ORDER BY
    CASE WHEN m.check_id = '__general__' THEN 1 ELSE 0 END,
    CASE WHEN m.check_id = '__general__' THEN NULL ELSE split_part(m.item_number, '.', 1)::integer END NULLS LAST,
    CASE WHEN m.check_id = '__general__' THEN NULL ELSE split_part(m.item_number, '.', 2)::integer END NULLS LAST;
END;
$function$;

REVOKE ALL ON FUNCTION public.menvic_accessibility_get_mhtn_v1(text, text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.menvic_accessibility_get_mhtn_v1(text, text) TO anon;

COMMIT;

-- Validación posterior, con rol administrativo:
-- SELECT count(*) FROM menvic_tools.accessibility_mhtn_comments
-- WHERE project_slug = 'edificio-auxiliar-la-paz'; -- esperado: 46 (45 ítems + 1 general)
-- Comprobar PIN válido e inválido en la nueva RPC, sin alterar las RPC existentes.
