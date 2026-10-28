# Design — marcmayol.com

Sistema de diseño bloqueado de la web. Todo rediseño de página lo lee antes de
tocar código. No se regenera por página: se amplía o se corrige aquí.

Origen: auditoría Hallmark del 28-oct-2026 (1 crítico · 5 mayores · 4 menores)
sobre el sistema anterior (Marquee Hero, ago-2026). Maqueta de referencia en
Claude Design: «marcmayol.com · rediseño 2026» → `Portada.dc.html`.

## Genre
editorial (neo-brutalist: tinta, papel, bordes gruesos, sin radios)

## Macrostructure family
- Portada y «Sobre mí»: **Split Studio** — dípticos afirmación / prueba real que
  alternan de lado (`.dip` y `.dip--rev`). Las pruebas son siempre enlaces a cosas
  que existen: repos, modelos, apps, artículos, charlas.
- Listado del blog: **Index-First** — la página es la lista; fecha, título y entradilla.
- Artículo: **Long Document** — una columna de lectura, sin cajas.
- Contacto: Split Studio de una sola fila (texto / formulario).

## Theme
Se conserva la marca. Los valores viven en `src/styles/tokens.css`.
- `--mm-paper`      oklch(95.53% 0.0070 88.6)
- `--mm-paper-2`    oklch(100% 0 0)
- `--mm-ink`        oklch(18.09% 0.0054 39.3)
- `--mm-ink-soft`   oklch(27.49% 0.0070 67.5)
- `--mm-rule`       oklch(86.86% 0.0163 82.8)
- `--mm-rule-dark`  oklch(40% 0.005 40)
- `--mm-accent`     oklch(56.76% 0.2084 27.1)  (rojo de marca, #d62828)
- `--mm-accent-ink` oklch(53.95% 0.2009 27.3)
- El rojo ocupa como mucho una zona por pantalla: el CTA principal, una palabra
  del titular o el pie. Nunca dos bloques rojos seguidos.

## Typography
- Display: Archivo 900, roman, tracking −0.035em, mayúsculas solo en H1 y en la
  frase del pie (frases cortas).
- Títulos de sección y de artículo: Archivo 800–900 en caja normal (nada de
  títulos largos en mayúsculas).
- Texto de lectura: Archivo 400, 17 px mínimo (`--text-md`), entradillas a 22 px.
- Mono (Space Mono 400/700): solo fechas, metadatos, etiquetas de proyecto y la
  navegación. Nunca frases de lectura.
- Fuentes alojadas en `/fonts` (subconjunto latino), sin Google Fonts.

## Spacing
Rejilla de 4 pt con nombres (`--space-*` en `tokens.css`). Las secciones NO usan
todas el mismo padding: el hero respira más (`--space-3xl`) que los dípticos.

## Motion
- Easings: `--mm-ease-out`, `--mm-ease-in`, `--mm-ease-in-out`.
- Sin reveals al hacer scroll. Sin bucles decorativos (adiós marquee y cursor).
- Único gesto: el CTA principal con sombra dura que se hunde 3 px al pasar.
- `prefers-reduced-motion`: sin transiciones.

## Microinteractions stance
- Éxito silencioso en el formulario (mensaje en línea, sin toast).
- Hover = subrayado rojo grueso o inversión tinta/papel. Foco: anillo de 3 px, nunca animado.
- Objetivos táctiles de 44 px en móvil.

## CTA voice
- Primario: bloque rojo, borde de tinta de 3 px, sombra dura 6 px, texto mono 700.
- Secundario: bloque papel o tinta con borde de 3 px, sin sombra.
- Copia en imperativo corto con flecha: «Trabaja conmigo →», «Escríbeme →».

## Nav y pie
- Nav: **N7 Brutal slab** — wordmark «Marc Mayol» en Archivo 900 a la izquierda
  con borde derecho, fila de enlaces mono en mayúsculas, idioma, y «Contacto»
  como losa de tinta al final. Borde inferior de 3 px.
- Pie: **Ft5 Statement** — fondo rojo, una frase grande de cierre, tres botones
  (escribir, LinkedIn, GitHub) y una línea de metadatos. Sustituye a los bloques
  de contacto que se repetían en cada página.

## Prohibido en este sistema
- Etiquetas «/ SECCIÓN» o insignias negras encima de cada titular.
- Cifras sin fuente («+6», «10+», «∞»).
- Cromo dibujado (terminales falsas, `$ whoami`).
- Texto de lectura en mono.
- La newsletter repetida en más de un sitio por página.

## What pages MUST share
Wordmark, nav N7, pie Ft5, paleta, tipografía, voz de CTA y bordes de 3 px.

## What pages MAY differ on
El orden y número de dípticos, y qué prueba acompaña a cada afirmación.
