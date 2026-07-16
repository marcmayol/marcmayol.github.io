// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Marquee de la home (palabras clave que giran en la barra oscura)
export const marqueeItems = {
    es: ['IA GENERATIVA', 'RAG & AGENTES', 'FORMACIÓN IN-COMPANY', 'LLMS EN PRODUCCIÓN', 'CHARLAS', 'HUGGING FACE'],
    en: ['GENERATIVE AI', 'RAG & AGENTS', 'IN-COMPANY TRAINING', 'LLMS IN PRODUCTION', 'TALKS', 'HUGGING FACE'],
} as const;

// Etiqueta corta de audiencia por charla (mismo orden que speakerTopics)
export const talkAudienceTags = {
    es: ['DEVS · ESTUDIANTES', 'PÚBLICO GENERAL', 'LÍDERES · RRHH', 'TÉCNICO', 'TODOS LOS PÚBLICOS'],
    en: ['DEVS · STUDENTS', 'GENERAL PUBLIC', 'LEADERS · HR', 'TECHNICAL', 'ALL AUDIENCES'],
} as const;

// Proyectos personales (rejilla en la página "Sobre mí")
export const projects = {
    es: [
        {
            name: 'Exercise API',
            tag: 'API · GITHUB PAGES',
            desc: 'API abierta, gratuita y multiidioma de ejercicios de gimnasio: 104 ejercicios con ilustraciones por género, mapas musculares e instrucciones ES/EN. Datos estáticos, sin claves ni límites.',
            repo: 'https://github.com/marcmayol/exercise-api',
            demo: 'https://marcmayol.com/exercise-api',
        },
        {
            name: 'PromptSuite',
            tag: 'LIBRERÍA · PROMPTS',
            desc: 'Librería para gestionar prompts de forma estructurada, con versiones específicas por modelo, en formatos JSON y SQL. Diseñada para la versatilidad, la seguridad y la claridad.',
            repo: 'https://github.com/marcmayol/promptSuite',
            demo: '',
        },
        {
            name: 'LLM-Trace',
            tag: 'LIBRERÍA · OBSERVABILIDAD',
            desc: 'Librería ligera de observabilidad para LLMs: trazado basado en SQLite y sin infraestructura. Integración directa con LangGraph, LangChain, OpenAI, Anthropic, OpenTelemetry y cualquier cliente HTTP.',
            repo: 'https://github.com/llm-trace/llm-trace',
            demo: '',
        },
        {
            name: 'Claude Code Meter',
            tag: 'WINDOWS · PYTHON',
            desc: 'Widget flotante para Windows que muestra el consumo de tokens de Claude Code (hoy, semana y mes) sobre la barra de tareas, con presupuesto propio.',
            repo: 'https://github.com/marcmayol/claude-code-meter',
            demo: '',
        },
    ],
    en: [
        {
            name: 'Exercise API',
            tag: 'API · GITHUB PAGES',
            desc: 'Open, free and multilingual gym-exercise API: 104 exercises with per-gender illustrations, muscle maps and ES/EN instructions. Static data, no keys, no limits.',
            repo: 'https://github.com/marcmayol/exercise-api',
            demo: 'https://marcmayol.com/exercise-api',
        },
        {
            name: 'PromptSuite',
            tag: 'LIBRARY · PROMPTS',
            desc: 'A library to manage prompts in a structured way, with model-specific versions in both JSON and SQL formats. Built for versatility, security and clarity.',
            repo: 'https://github.com/marcmayol/promptSuite',
            demo: '',
        },
        {
            name: 'LLM-Trace',
            tag: 'LIBRARY · OBSERVABILITY',
            desc: 'Lightweight LLM observability library: SQLite-based tracing with zero infrastructure. Drop-in support for LangGraph, LangChain, OpenAI, Anthropic, OpenTelemetry and any HTTP client.',
            repo: 'https://github.com/llm-trace/llm-trace',
            demo: '',
        },
        {
            name: 'Claude Code Meter',
            tag: 'WINDOWS · PYTHON',
            desc: 'A floating Windows widget that shows Claude Code token usage (today, this week and this month) above the taskbar, with its own budget.',
            repo: 'https://github.com/marcmayol/claude-code-meter',
            demo: '',
        },
    ],
} as const;

export const SITE_TITLE = 'Marc Mayol';
export const SITE_DESCRIPTION = 'Marc Mayol Gen AI Developer & Researcher conocimientos sobre IA Generativa, productos de Google y desarrollo de inteligencia artificial';
export const  APPLICATION_NAME = 'Marc Mayol personal blog site';
export const speakerTopics = {"es":[
        {
            title: "La IA y el Programador Junior",
            description: "Cómo utilizar correctamente la inteligencia artificial al iniciarse en2 el mundo de la programación profesional.",
            audience: "Programadores noveles, estudiantes y personas que comienzan en2 el sector tecnológico"
        },
        {
            title: "El Futuro de la IA",
            description: "Una exploración sobre cómo la inteligencia artificial transformará diversos sectores y nuestra vida cotidiana.",
            audience: "Profesionales interesados en2 IA, entusiastas de la tecnología y público general"
        },
        {
            title: "La IA y el Trabajo",
            description: "Análisis del impacto de la inteligencia artificial en2 el mundo laboral y cómo prepararse para los empleos del futuro.",
            audience: "Líderes empresariales, profesionales de recursos humanos y orientadores laborales"
        },
        {
            title: "Introducción a Hugging Face",
            description: "Una guía para comenzar con Hugging Face y aprovechar sus herramientas en2 proyectos de IA.",
            audience: "Desarrolladores, investigadores y estudiantes interesados en2 procesamiento de lenguaje natural"
        },
        {
            title: "Prompting: Cómo Hablar con la Inteligencia Artificial",
            description: "Técnicas y mejores prácticas para interactuar eficazmente con modelos de IA a través de prompts.",
            audience: "Usuarios de IA, desarrolladores y cualquier persona interesada en2 comunicación hombre-máquina"
        }
    ],"en": [
        {
            title: "AI and the Junior Developer",
            description: "How to properly use artificial intelligence when starting out in the world of professional programming.",
            "audience": "Junior developers, students, and individuals beginning their careers in tech"
        },
        {
            title: "The Future of AI",
            description: "An exploration of how artificial intelligence will transform various industries and our daily lives.",
            audience: "AI professionals, tech enthusiasts, and the general public"
        },
        {
            title: "AI and the Future of Work",
            description: "An analysis of the impact of artificial intelligence on the job market and how to prepare for future careers.",
            audience: "Business leaders, HR professionals, and career advisors"
        },
        {
            title: "Getting Started with Hugging Face",
            description: "A guide to getting started with Hugging Face and leveraging its tools for AI projects.",
            audience: "Developers, researchers, and students interested in natural language processing"
        },
        {
            title: "Prompting: How to Talk to Artificial Intelligence",
            description: "Techniques and best practices for effectively interacting with AI models through prompts.",
            audience: "AI users, developers, and anyone interested in human-machine communication"
        }
    ]}
