# Design — marcmayol.com · «Nocturna»

Sistema de diseño bloqueado de la web. Todo rediseño de página lo lee antes de
tocar código. No se regenera por página: se amplía o se corrige aquí.

Historia: auditoría Hallmark del 28-oct-2026 sobre el neo-brutalismo de agosto →
primera propuesta Split Studio (descartada por Marc) → tres direcciones en Claude
Design → elegida **C · Nocturna** con acento **ámbar**, auditada con Hallmark
(1 crítico · 3 mayores · 5 menores, todos corregidos en la C3).
Maqueta de referencia: proyecto Claude Design «marcmayol.com · rediseño 2026»,
archivo `NocturnaC3.dc.html`.

## Genre
atmospheric (oscuro, de herramienta de IA, con foto real como única imagen)

## Macrostructure family
- Portada: **Photographic (split)** — hero dividido: texto sobre el fondo a la
  izquierda, retrato a la derecha fundido con el fondo. Debajo, bandas de una
  columna con el título encima del contenido.
- «Sobre mí»: Photographic (split) con la historia en bandas.
- Listado del blog: **Index-First** — lista de títulos con fecha en mono a la derecha.
- Artículo: **Long Document** — columna de lectura de 68ch, sin cajas.
- Contacto: una banda con el formulario; el pie no repite la llamada.

## Theme
Valores en `src/styles/tokens.css` (los nombres vienen del sistema anterior:
`paper` = fondo, `ink` = texto).
- fondo `--mm-paper` oklch(15% 0.008 260) · elevado `--mm-paper-2` oklch(19% 0.01 260)
- texto `--mm-ink` oklch(96% 0.005 260) · lectura `--mm-ink-soft` oklch(80% 0.01 260)
- metadatos `--mm-muted` oklch(66% 0.012 260) · filetes `--mm-rule` oklch(30% 0.01 260)
- acento ámbar `--mm-accent` oklch(80% 0.15 70) — CTA, una palabra del titular,
  eyebrow del hero y enlaces. Nunca como fondo de un bloque grande.
- píldora al bajar `--mm-bar` oklch(9% 0.006 260 / 0.96)

## Typography
- Display y texto: Geist (300–600). Titulares a 500, tracking −0.04em, caja normal.
- Lectura a 17–19 px, peso 300 en entradillas.
- Mono: Geist Mono, solo navegación, fechas, metadatos y la eyebrow del hero.
  Mínimo 13 px.
- Fuentes alojadas en `/fonts`, sin Google Fonts.

## Spacing
Rejilla de 4 pt (`--space-*`). Las bandas varían de ritmo: proyectos 72 px,
blog 120 px arriba, pie 120 px.

## Motion
- La única transición con intención: la píldora de navegación pasa de
  transparente a negra (200 ms, `--mm-ease-out`) al dejar la parte de arriba.
- Hover: cambio de color al ámbar. Sin reveals al hacer scroll ni bucles.
- `prefers-reduced-motion`: sin transiciones.

## Microinteractions stance
- Foco visible: anillo de 3 px en ámbar, sin animar.
- Objetivos táctiles de 44 px en móvil; ningún enlace por debajo de 24 px.
- Éxito silencioso en el formulario.

## CTA voice
- Primario: píldora ámbar con texto oscuro, 48 px de alto, «Trabaja conmigo →».
- En la navegación: «contacto» como píldora ámbar al final.

## Nav y pie
- Nav: **N5 Floating pill**, fija. Transparente arriba (con sombra de texto
  sobre la foto), cápsula negra estrecha al bajar.
- Pie: **Ft5 Statement** — «Montemos algo con IA. *Escríbeme.*» con la segunda
  frase en ámbar, botón de contacto y una línea de enlaces en mono.

## Prohibido en este sistema
- Etiquetas de sección en mayúsculas, insignias, «/ SECCIÓN».
- Cifras sin fuente.
- Titulares en mayúsculas.
- Texto de lectura en mono.
- Desenfoque decorativo, el punto de «estado» antes del nombre.
- Cabeceras de sección colgantes (título a la izquierda, contenido a la derecha).

## What pages MUST share
Nav N5, pie Ft5, paleta, Geist + Geist Mono, voz de CTA, filetes de 1 px.

## What pages MAY differ on
Qué bandas lleva cada página y si usan el hero dividido con foto.
