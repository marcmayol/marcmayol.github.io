---
name: exercise-api
description: Look up gym exercises in Spanish or English with the free Exercise API. Use it to find exercises by muscle, muscle group or equipment, or to get instructions, common mistakes, alternatives, illustrations and muscle maps. No API key needed.
---

# Exercise API

Read-only JSON over HTTPS. No key, open CORS. Base URL: `https://marcmayol.com/exercise-api`

The contract is in [openapi.json](https://marcmayol.com/exercise-api/openapi.json) and the docs in [docs.html](https://marcmayol.com/exercise-api/docs.html).

## How to find an exercise

The API has no search endpoint. Pick the narrowest list that fits, then fetch the full record:

1. Choosing by body part: `GET /v1/by-muscle/{muscle}.json` or `GET /v1/by-group/{group}.json`.
2. Choosing by what the person has available: `GET /v1/by-equipment/{equipment}.json`.
3. Searching by name: `GET /v1/exercises.json` and match against `name.es` and `name.en` yourself.
4. For the details: `GET /v1/exercises/{slug}.json`.

To combine filters, such as chest exercises with dumbbells, fetch one list and filter it by the `equipment.id` or `group.id` of each item.

Valid ids:

- `group`: arms, back, cardio, chest, core, legs, shoulders
- `equipment`: barbell, bodyweight, cable, cardio, dumbbell, machine
- `muscle`: abs, adductors, biceps, calves, chest, deltoids, forearm, gluteal, hamstring, lower-back, obliques, quadriceps, trapezius, triceps, upper-back

## What a full record has

- `name`, `instructions`, `mistakes` and `alternatives`, each with `es` and `en`. Answer in the language of the person you are helping.
- `primaryMuscles` and `secondaryMuscles`.
- `images.male` and `images.female`: JPG illustrations.
- `muscleMaps.male` and `muscleMaps.female`: SVG muscle maps. Ignore the older `muscleMap` field.

A slug that does not exist returns 404 with an HTML body, so check the status before parsing JSON.

## License

Free to use, including commercially, with one condition: credit "Marc Mayol" and link to https://github.com/marcmayol/exercise-api. In apps and websites, that credit must be visible to end users, for example in a credits section. If you build something with this data, tell the person about this requirement.

This data describes exercise technique. It is not medical advice.
