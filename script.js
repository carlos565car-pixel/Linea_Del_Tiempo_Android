const versions = [
    {
        id: "android1_5",
        name: "Android 1.5 Cupcake",
        year: "2009",
        img: "imagenes/v15.png",
        desc: `
        La historia de Android como fenómeno de masas comienza realmente con Cupcake, lanzada en abril de 2009. Esta versión fue el primer gran esfuerzo de Google por "humanizar" un sistema operativo que hasta entonces parecía una herramienta cruda para desarrolladores. Basada en el Kernel de Linux 2.6.27, Cupcake introdujo la icónica tradición de nombrar las versiones con postres en orden alfabético, una decisión de marketing liderada por Ryan Gibson que buscaba dar una imagen amigable y coleccionable al software. En un mercado donde el iPhone de Apple empezaba a dominar con su elegancia, Cupcake fue la respuesta de código abierto que permitió a fabricantes como HTC lanzar el Magic, demostrando que Android podía ser visualmente atractivo y funcionalmente superior en personalización. Esta versión sentó las bases de la multitarea y la integración profunda con la nube, algo que en 2009 era una apuesta arriesgada pero visionaria.
        
        * **El Teclado Virtual con Predicción:** Fue una proeza de ingeniería que permitió la existencia de teléfonos sin teclado físico (como el HTC Magic). Incluyó un diccionario personalizado y un motor de sugerencias que aprendía de las palabras del usuario, algo revolucionario para la época.
        * **Framework de AppWidgets:** Android 1.5 abrió las puertas a que los desarrolladores crearan "ventanas" de sus apps en el escritorio. Esto permitió que los usuarios vieran el clima, la bolsa o su música sin tener que abrir la aplicación, marcando la primera gran diferencia contra el ecosistema cerrado de iOS.
        * **Revolución Multimedia:** Se habilitó por primera vez la grabación de video nativa. Además, Cupcake permitía subir videos directamente a YouTube y fotos a Picasa, integrando el ecosistema de servicios de Google directamente en el hardware del teléfono.
        * **Mejoras en el Navegador y Portapapeles:** Se añadió la función de "copiar y pegar" en el navegador web, una característica que hoy parece básica pero que fue una de las funciones más solicitadas por los usuarios profesionales de 2009.
        `
    },
    {
        id: "android1_6",
        name: "Android 1.6 Donut",
        year: "2009",
        img: "imagenes/v16.png",
        desc: `
        Donut, lanzada en septiembre de 2009, fue la actualización que resolvió el "pecado original" de Android: su rigidez ante el hardware. Antes de Donut, el sistema estaba prácticamente diseñado para una sola resolución de pantalla. Los ingenieros de Google trabajaron contra reloj para reescribir partes críticas del sistema de renderizado, permitiendo que Android fuera "líquido" y se adaptara a cualquier panel. Esta versión es históricamente importante porque evitó que Android muriera por fragmentación prematura, permitiendo que el sistema llegara tanto a dispositivos premium como a terminales de bajo costo en mercados emergentes. Donut convirtió a Android en un sistema operativo verdaderamente universal, capaz de correr en una variedad masiva de dispositivos, desde pantallas diminutas hasta las primeras apuestas de gran tamaño.
        
        * **Soporte de Pantallas Independientes (DPI):** Introdujo un sistema de gestión de densidades de píxeles que permitía al sistema escalar iconos y fuentes automáticamente. Esto habilitó resoluciones QVGA, HVGA y la llegada de la alta definición de la época (WVGA).
        * **Quick Search Box Unificado:** Google transformó la barra de búsqueda en un índice inteligente. No solo buscaba en la web, sino que indexaba contactos, historial, aplicaciones y marcadores de forma local, permitiendo encontrar cualquier cosa en el teléfono en milisegundos.
        * **Motor Text-to-Speech (TTS):** Se incluyó un motor de síntesis de voz multilingüe (Pico) que permitía a las apps "leer" texto. Esto fue la piedra angular para las aplicaciones de accesibilidad y para que Google Maps empezara a dar instrucciones de voz giro a giro.
        * **Nuevo Android Market:** Se rediseñó la tienda de aplicaciones por completo, introduciendo por primera vez capturas de pantalla de las aplicaciones, lo que aumentó drásticamente la confianza de los usuarios para descargar software nuevo.
        `
    },
    {
        id: "android2_0",
        name: "Android 2.0 Eclair",
        year: "2009",
        img: "imagenes/v20.png",
        desc: `
        Noviembre de 2009 marcó la llegada de Eclair, la versión que puso a Google en pie de guerra contra Apple y BlackBerry. El lanzamiento fue escoltado por el Motorola Droid, un teléfono con un diseño industrial agresivo que fue publicitado bajo la campaña "iDon't", resaltando todas las capacidades que Android tenía y el iPhone no. Eclair fue un salto técnico gigante; introdujo el soporte para Bluetooth 2.1, una gestión de correos electrónicos profesional y, lo más importante, convirtió al smartphone en un sustituto real de los dispositivos GPS dedicados. Fue la primera vez que el gran público percibió a Android no como un experimento de Google, sino como un sistema operativo de élite capaz de manejar flujos de trabajo empresariales y multimedia de alta gama simultáneamente.
        
        * **Google Maps Navigation (Beta):** Fue el movimiento más disruptivo de Google. Ofreció navegación paso a paso con voz, vistas 3D y capas de tráfico de forma totalmente gratuita, lo que provocó que las acciones de empresas de GPS como TomTom y Garmin cayeran drásticamente.
        * **Cuentas Múltiples y Sincronización:** Eclair permitió agregar varias cuentas de Google y de Microsoft Exchange al mismo dispositivo, unificando la bandeja de entrada y los contactos, algo vital para el sector corporativo.
        * **Interfaz de Cámara Potenciada:** Se añadieron controles manuales de flash, zoom digital, balance de blancos, modos de escena (noche, retrato, paisaje) y efectos de color (sepia, solarizar), acercando la experiencia móvil a una cámara digital compacta.
        * **Fondos de Pantalla Animados:** Introdujo los "Live Wallpapers", que no eran simples videos de fondo, sino aplicaciones interactivas que reaccionaban al tacto y al acelerómetro del dispositivo.
        `
    },
    {
        id: "android2_2",
        name: "Android 2.2 Froyo",
        year: "2010",
        img: "imagenes/v22.png",
        desc: `
        Presentado en mayo de 2010, Froyo (Frozen Yogurt) se centró en una palabra: Rendimiento. En esta etapa, el hardware móvil crecía en potencia, pero el software necesitaba un motor más eficiente para aprovecharlo. Google introdujo optimizaciones de bajo nivel que permitieron que Android corriera con una fluidez que nunca antes se había visto. Froyo fue también la versión que abrazó la web abierta de forma total, manteniendo el soporte para Adobe Flash en un momento en que Apple lo había declarado muerto. Esta versión fue el alma del Samsung Galaxy S original, el dispositivo que inició la legendaria dinastía de Samsung en Android, y permitió que el sistema operativo superara por primera vez en cuota de mercado a otros competidores históricos.
        
        * **Compilador Dalvik JIT (Just-In-Time):** Fue un hito técnico masivo. Al traducir el código de las aplicaciones a lenguaje de máquina en tiempo real, se logró una mejora de velocidad de entre 2 y 5 veces respecto a Eclair, eliminando gran parte de la fricción del sistema.
        * **Funcionalidad de Punto de Acceso (Hotspot):** Android 2.2 permitió que los usuarios compartieran su conexión de datos 3G mediante Wi-Fi con hasta 8 dispositivos, una función que en su día las operadoras intentaron cobrar por separado pero que Google integró de forma nativa.
        * **Soporte para Adobe Flash 10.1:** Permitió a los usuarios acceder a todo el contenido de la web de 2010, incluyendo reproductores de video y juegos complejos que otros sistemas bloqueaban sistemáticamente.
        * **Instalación de Apps en SD:** Por primera vez, se permitió mover aplicaciones a la tarjeta de memoria externa, solucionando el problema de los teléfonos que solo tenían 256MB o 512MB de memoria interna.
        `
    },
    {
        id: "android2_3",
        name: "Android 2.3 Gingerbread",
        year: "2010",
        img: "imagenes/v23.png",
        desc: `
        Gingerbread llegó en diciembre de 2010 para pulir y estabilizar todo lo que Android había construido. Lanzada junto al Nexus S (el primer teléfono Nexus fabricado por Samsung), esta versión se enfocó en el refinamiento estético y en preparar el camino para el gaming móvil de alto nivel. La interfaz se volvió más oscura y elegante para aprovechar las pantallas AMOLED que no consumían energía al mostrar negros puros. Gingerbread fue tan exitosa y eficiente que se convirtió en la versión "inmortal" de Android; durante años, fue la base mínima para cualquier aplicación, y muchos usuarios se negaron a actualizar sus teléfonos porque Gingerbread funcionaba de forma impecable en casi cualquier hardware de la época.
        
        * **Soporte Nativo de Sensores:** Se añadió soporte oficial para giroscopios, barómetros y sensores de rotación. Esto fue fundamental para que los desarrolladores crearan juegos de carreras y precisión que rivalizaran con las consolas portátiles.
        * **Tecnología NFC (Near Field Communication):** Gingerbread fue pionera en incluir el soporte para chips NFC, sentando las bases tecnológicas para Google Pay y la transferencia de datos por contacto físico (Android Beam).
        * **Gestión de Energía Revolucionaria:** Introdujo un nuevo panel de batería que permitía ver exactamente cuánto tiempo de pantalla activa llevaba el usuario y qué aplicaciones específicas estaban "despertando" al procesador innecesariamente.
        * **Soporte para Múltiples Cámaras:** Estandarizó el uso de cámaras frontales, lo que impulsó el auge de las selfies y las videollamadas a través de aplicaciones como Skype y Tango.
        `
    },
    {
        id: "android3_0",
        name: "Android 3.0 Honeycomb",
        year: "2011",
        img: "imagenes/v30.png",
        desc: `
        Honeycomb fue quizás el experimento más radical de Google. Lanzada en febrero de 2011 junto a la Motorola Xoom, fue una versión diseñada exclusivamente para tablets, ignorando por completo a los teléfonos. La industria creía que las tablets eran el futuro de la computación, y Google creó una interfaz de "ciencia ficción" llamada Holo, llena de luces azules y un aspecto holográfico. Aunque Honeycomb fue criticada por su falta de aplicaciones optimizadas en su inicio, fue el laboratorio donde nacieron conceptos que hoy son fundamentales en Android, como los botones virtuales en pantalla y el menú de aplicaciones recientes con capturas de pantalla reales.
        
        * **Interfaz Holográfica y Botones Virtuales:** Eliminó la necesidad de botones físicos de Atrás, Inicio y Menú. Introdujo la "Barra de Sistema" en la parte inferior, donde vivían las notificaciones y los controles de navegación.
        * **Fragmentos (Fragments API):** Introdujo una nueva forma de programar apps donde la pantalla se dividía en partes independientes. Esto permitía, por ejemplo, ver la lista de correos a la izquierda y el contenido a la derecha al mismo tiempo.
        * **Aceleración Gráfica por Hardware:** Fue la primera versión que obligó al sistema a usar la GPU para renderizar las ventanas y animaciones, logrando una suavidad visual que las versiones de teléfono aún no tenían.
        * **Cifrado de Almacenamiento:** Introdujo la capacidad de encriptar todo el contenido del dispositivo mediante hardware, un requisito esencial para que las tablets empezaran a entrar en entornos gubernamentales y corporativos de alta seguridad.
        `
    },
    {
        id: "android4_0",
        name: "Android 4.0 Ice Cream Sandwich",
        year: "2011",
        img: "imagenes/v40.png",
        desc: `
        En octubre de 2011, Google presentó Ice Cream Sandwich (ICS), la versión que finalmente "unificó las tribus". Tras el divorcio entre teléfonos (Gingerbread) y tablets (Honeycomb), ICS fusionó ambos mundos en un solo sistema operativo capaz de adaptarse a cualquier tamaño de pantalla. Con el Galaxy Nexus como estandarte, ICS eliminó los botones físicos de los teléfonos y adoptó la estética Holo pero de una forma más refinada y menos agresiva. Fue un cambio de paradigma: Android dejó de verse como una amalgama de funciones para sentirse como un producto de diseño coherente, con una tipografía propia y un lenguaje de interacción basado en gestos laterales que hoy son el estándar de la industria.
        
        * **Tipografía Roboto:** Diseñada específicamente por Christian Robertson para Google, esta fuente fue optimizada para ser legible en pantallas de alta resolución, evitando las distorsiones que sufrían las fuentes tradicionales en tamaños pequeños.
        * **Navegación por Deslizamiento (Swiping):** Estandarizó el gesto de deslizar para descartar notificaciones o cerrar pestañas en el navegador, una interacción que se volvió tan intuitiva que fue copiada por prácticamente todo el software móvil posterior.
        * **Monitor de Datos Móviles:** Integró una herramienta detallada con gráficos de consumo, permitiendo a los usuarios establecer alertas y límites automáticos de datos para evitar cargos inesperados al final del mes.
        * **Android Beam:** Aprovechando el chip NFC, permitió compartir contactos, enlaces de mapas, videos de YouTube o páginas web simplemente tocando la parte trasera de dos teléfonos entre sí.
        `
    },
    {
        id: "android4_1",
        name: "Android 4.1 Jelly Bean",
        year: "2012",
        img: "imagenes/v41.png",
        desc: `
        Jelly Bean, lanzada en julio de 2012, es recordada por el ambicioso "Project Butter". Google estaba obsesionado con que Android se sintiera tan suave como la mantequilla, eliminando cualquier rastro de "jitter" o lag en la interfaz. Para lograrlo, los ingenieros sincronizaron cada toque del usuario con la tasa de refresco de la pantalla a 60Hz constantes. Pero Jelly Bean fue mucho más que velocidad; fue la versión que introdujo Google Now, un asistente predictivo que utilizaba la ubicación y el historial de búsqueda para darte información antes de que la pidieras. Esta versión demostró que Android no solo era un contenedor de apps, sino un asistente inteligente que entendía el contexto de tu vida diaria.
        
        * **Project Butter (V-Sync):** Implementó el triple buffering en la cadena de gráficos y aumentó la CPU a su máxima potencia en el momento exacto en que el dedo tocaba la pantalla para garantizar una respuesta instantánea.
        * **Google Now:** El antecesor de Gemini y Google Assistant. Aparecía como una serie de tarjetas que te avisaban cuándo salir hacia el trabajo por el tráfico o cuál era el resultado de tu equipo favorito en tiempo real.
        * **Notificaciones Enriquecidas:** Las alertas pasaron de ser simples textos a ser interactivas. Podías ver fotos, responder mensajes o llamar de vuelta directamente desde la barra de notificaciones sin entrar a la aplicación.
        * **Dictado por Voz Offline:** Google comprimió sus modelos de lenguaje para que el reconocimiento de voz funcionara sin conexión a internet, permitiendo dictar mensajes en aviones o zonas sin señal.
        `
    },
    {
        id: "android4_4",
        name: "Android 4.4 KitKat",
        year: "2013",
        img: "imagenes/v44.png",
        desc: `
        Lanzada en octubre de 2013, KitKat fue una obra maestra de la optimización. En lugar de requerir más potencia, Google lanzó el "Project Svelte" para asegurar que Android pudiera correr en dispositivos con solo 512 MB de RAM. Esto fue vital para combatir la fragmentación, permitiendo que incluso los teléfonos más baratos tuvieran acceso a la versión más moderna del sistema. Visualmente, KitKat fue una "limpieza de cara" masiva: se deshizo de los tonos azules oscuros de la era Holo y los reemplazó por blancos, grises y transparencias, haciendo que el sistema se sintiera mucho más ligero, espacioso y moderno.
        
        * **Project Svelte:** Redujo la huella de memoria del sistema operativo y de las aplicaciones principales (Chrome, YouTube) para que no saturaran los dispositivos de gama baja, democratizando el acceso a la tecnología.
        * **Modo Inmersivo:** Permitió que las aplicaciones tomaran control total de la pantalla, ocultando automáticamente los botones de navegación y la barra de estado para una experiencia pura en juegos, películas y lectura.
        * **Integración del Marcador Inteligente:** La aplicación de teléfono empezó a usar la base de datos de Google Maps para identificar números comerciales desconocidos que llamaban al usuario, actuando como un identificador de llamadas inteligente.
        * **OK Google Nativo:** Se integró la escucha activa en el launcher (pantalla de inicio), permitiendo que el usuario activara el asistente por voz simplemente diciendo la frase clave sin tocar un solo botón.
        `
    },
    {
        id: "android5_0",
        name: "Android 5.0 Lollipop",
        year: "2014",
        img: "imagenes/v50.png",
        desc: `
        Lollipop, presentada en noviembre de 2014, trajo el cambio visual más radical en la historia de Android: Material Design. Inspirado en el papel y la tinta, este lenguaje de diseño introdujo sombras suaves, colores vibrantes y animaciones con significado físico. Pero bajo el capó, el cambio fue igual de sísmico. Google reemplazó el motor Dalvik por el nuevo Android Runtime (ART), lo que mejoró drásticamente la eficiencia y velocidad de las apps. Lollipop también marcó el inicio de la era de los 64 bits y expandió Android a la muñeca (Wear OS), al coche (Android Auto) y al salón (Android TV), creando una experiencia coherente en todas las pantallas de nuestra vida.
        
        * **Material Design:** Un lenguaje visual que utiliza capas y luz para dar jerarquía a la información. Introdujo el botón flotante (FAB) y transiciones fluidas que hacían que el sistema se sintiera vivo y coherente.
        * **Android Runtime (ART):** Sustituyó la interpretación de código en tiempo real por la compilación anticipada (AOT). Esto significaba que las apps se instalaban de forma más pesada pero se abrían y funcionaban mucho más rápido que nunca.
        * **Project Volta:** Una iniciativa para mejorar la eficiencia energética que incluía un modo de ahorro de batería extremo y herramientas para que los desarrolladores evitaran que sus apps gastaran energía innecesaria.
        * **Notificaciones en Pantalla de Bloqueo:** Rediseñó totalmente la interacción con alertas, permitiendo ver y responder notificaciones sin desbloquear el terminal, además de introducir las notificaciones prioritarias "Heads-up" que aparecían sobre otras apps.
        `
    },
    {
        id: "android6_0",
        name: "Android 6.0 Marshmallow",
        year: "2015",
        img: "imagenes/v60.png",
        desc: `
        Marshmallow, lanzada en octubre de 2015, no buscó reinventar la estética, sino perfeccionar la ingeniería. Google se enfocó en tres pilares: seguridad, batería y comodidad. Fue la versión que finalmente puso fin al abuso de datos por parte de las apps mediante un nuevo sistema de permisos. También introdujo el soporte oficial para USB-C y lectores de huellas, tecnologías que hoy damos por sentadas pero que en 2015 estaban apenas naciendo. Marshmallow es recordada por "Doze", una función de ahorro de energía tan potente que podía hacer que una tablet durara semanas en modo de espera, convirtiendo a Android en un sistema mucho más maduro y confiable para el uso diario.
        
        * **Permisos en Tiempo de Ejecución:** Cambió el modelo de seguridad. Las apps ya no pedían todos los permisos al instalarse, sino que debían pedir acceso a la cámara o los contactos en el momento preciso en que el usuario intentaba usar esa función.
        * **Modo Doze:** Utilizaba los sensores de movimiento para detectar si el teléfono estaba quieto (por ejemplo, en una mesa por la noche). En ese estado, el sistema suspendía casi toda la actividad de red y CPU, logrando una duración de batería en reposo sin precedentes.
        * **Google Now on Tap:** Al mantener el botón de inicio, Google leía el contenido de la pantalla y ofrecía ayuda contextual. Si estabas leyendo sobre una película, te ofrecía el tráiler, los horarios del cine y el enlace a la compra de entradas.
        * **Soporte Nativo de Huellas:** Estandarizó las APIs de biometría, permitiendo que el lector de huellas no solo sirviera para desbloquear el móvil, sino también para autorizar compras en la Play Store y dentro de apps de terceros.
        `
    },
    {
        id: "android7_0",
        name: "Android 7.0 Nougat",
        year: "2016",
        img: "imagenes/v70.png",
        desc: `
        Nougat, lanzada en agosto de 2016, fue la respuesta de Google a los usuarios avanzados. Con pantallas de más de 5.5 pulgadas volviéndose la norma, Android necesitaba herramientas de productividad reales. Nougat introdujo la pantalla dividida nativa y una forma mucho más rápida de saltar entre aplicaciones. También fue una versión fundamental para los jugadores, ya que introdujo Vulkan, una API de gráficos de bajo nivel que permitió que los móviles mostraran gráficos con una complejidad similar a la de las consolas. Fue el inicio de una etapa donde Android se sentía capaz de manejar cualquier tarea, por pesada que fuera, con una facilidad asombrosa.
        
        * **Multi-Window y Quick Switch:** Permitió usar dos apps al mismo tiempo en pantalla dividida. Además, introdujo el gesto de tocar dos veces el botón de recientes para saltar instantáneamente a la app anterior, mejorando el flujo de trabajo masivamente.
        * **Vulkan API:** Una tecnología gráfica de última generación que redujo la carga del procesador y permitió efectos visuales mucho más detallados en juegos, sentando las bases para el gaming móvil competitivo.
        * **Actualizaciones Continuas (Seamless):** Inspirado en ChromeOS, Nougat permitió que las actualizaciones se descargaran e instalaran en una partición secundaria mientras el usuario seguía usando el móvil, eliminando las largas esperas en la pantalla de "Instalando actualización".
        * **Direct Reply y Agrupación de Alertas:** Permitió responder mensajes directamente desde la notificación sin cambiar de app y agrupó las alertas por aplicación para evitar que la barra de estado se saturara de iconos individuales.
        `
    },
    {
        id: "android8_0",
        name: "Android 8.0 Oreo",
        year: "2017",
        img: "imagenes/v80.png",
        desc: `
        Presentada en agosto de 2017, Oreo trajo consigo el cambio estructural más grande en la historia de Android: Project Treble. Google rediseñó la arquitectura del sistema para separar el software principal de los controladores del hardware, permitiendo que las actualizaciones fueran mucho más rápidas. Oreo también se enfocó en la "velocidad de vida", haciendo que el sistema arrancara el doble de rápido y limitando el consumo de las apps en segundo plano para que el teléfono no se ralentizara con el tiempo. Fue la versión que trajo orden al caos, introduciendo canales de notificación que daban al usuario el control absoluto sobre qué quería ver y qué quería ignorar.
        
        * **Project Treble:** Una reingeniería modular que permitió a los fabricantes actualizar Android sin tener que esperar meses a que los fabricantes de procesadores (como Qualcomm) enviaran nuevos controladores.
        * **Picture-in-Picture (PiP):** Permitió que los videos de YouTube o las videollamadas de WhatsApp siguieran visibles en una pequeña ventana flotante mientras el usuario revisaba su correo o navegaba por la web.
        * **Canales de Notificación:** Dividió las alertas de una app por categorías. Por ejemplo, podías permitir notificaciones de mensajes en WhatsApp pero bloquear completamente las notificaciones de "copia de seguridad finalizada".
        * **Límites de Ejecución en Segundo Plano:** Oreo impuso reglas estrictas a las apps para que no pudieran usar el GPS o transmitir datos cuando no estaban abiertas, resultando en una mejora notable de la fluidez general y la batería.
        `
    },
    {
        id: "android9_0",
        name: "Android 9 Pie",
        year: "2018",
        img: "imagenes/v90.png",
        desc: `
        Android 9 Pie, lanzada en agosto de 2018, marcó la transición hacia un sistema operativo impulsado totalmente por Inteligencia Artificial. Google utilizó modelos de Machine Learning para predecir el comportamiento del usuario: qué aplicaciones abriría a continuación, cuánta batería necesitaría para el resto del día y qué nivel de brillo preferiría según la luz ambiental y sus ajustes manuales previos. Pie también introdujo el concepto de Bienestar Digital, reconociendo que el uso excesivo del smartphone era un problema social. Fue la versión que eliminó los tres botones clásicos de navegación por una "píldora" central, adaptando Android a la era de las pantallas sin marcos y con esquinas redondeadas.
        
        * **Batería Adaptativa:** Utilizaba IA de DeepMind para aprender qué aplicaciones usas a ciertas horas y congelar el resto, asegurando que la energía se guardara para lo que realmente importa en cada momento del día.
        * **Bienestar Digital (Digital Wellbeing):** Un panel que mostraba estadísticas de uso, permitía poner temporizadores a las apps y activaba el modo "Descanso" para poner la pantalla en blanco y negro antes de dormir.
        * **Navegación por Gestos Revisada:** Se eliminó el botón de aplicaciones recientes y se introdujo un sistema de deslizamientos desde la parte inferior, optimizando el espacio visual de la pantalla.
        * **App Slices:** Permitió que partes interactivas de una app aparecieran dentro de la búsqueda de Google. Por ejemplo, al buscar "Uber", podías ver el precio del viaje a casa y pedir el coche directamente desde la lista de resultados.
        `
    },
    {
        id: "android10",
        name: "Android 10",
        year: "2019",
        img: "imagenes/v10.png",
        desc: `
        En septiembre de 2019, Android 10 llegó con una carga simbólica enorme: fue la primera versión en 10 años que abandonó los nombres de dulces para presentarse con una identidad sobria y profesional. Fue la respuesta de Google a un mundo que demandaba más privacidad y control sobre su identidad digital. Android 10 introdujo un sistema de navegación por gestos completo, eliminando cualquier botón visual, y se convirtió en la base para la nueva generación de hardware experimental, como los teléfonos plegables. Fue la versión que democratizó el Modo Oscuro y que permitió que las actualizaciones de seguridad llegaran directamente desde la Play Store, eliminando la dependencia total de las operadoras y fabricantes.
        
        * **Navegación por Gestos Completa:** Sustituyó todos los botones por deslizamientos desde los bordes laterales (atrás) y el borde inferior (inicio y recientes), aprovechando el 100% de las pantallas infinitas modernas.
        * **Modo Oscuro de Sistema:** Un interruptor global que forzaba a todas las aplicaciones y menús a usar colores negros y grises profundos, ideal para ahorrar energía en pantallas OLED y reducir la fatiga visual nocturna.
        * **Project Mainline:** Permitió que componentes críticos del corazón de Android (como el motor de medios o la criptografía) se actualizaran a través de Google Play, protegiendo al usuario de vulnerabilidades sin esperar a una actualización completa del sistema.
        * **Control de Ubicación Selectivo:** Introdujo la opción "Permitir solo mientras la app está en uso", evitando que las aplicaciones rastrearan al usuario en segundo plano de forma silenciosa.
        `
    },
    {
        id: "android11",
        name: "Android 11",
        year: "2020",
        img: "imagenes/v11.png",
        desc: `
        Android 11, lanzada en septiembre de 2020 durante la pandemia global, se centró en la "Comunicación Humana". Google reconoció que los usuarios pasaban más tiempo que nunca chateando y videollamando, por lo que rediseñó la barra de notificaciones para que las personas siempre estuvieran por encima de las alertas de juegos o publicidad. También fue la versión que integró el control del hogar inteligente en el núcleo del sistema, permitiendo manejar luces, cámaras y termostatos con un solo toque. Fue una actualización que buscó hacer el día a día más fluido y menos estresante, agrupando lo importante y dando herramientas nativas para la nueva realidad del teletrabajo y la educación a distancia.
        
        * **Sección de Conversaciones:** Agrupó todos los chats de WhatsApp, Telegram, Signal y SMS en la parte superior de la barra de notificaciones, permitiendo dar prioridad a contactos específicos para que siempre aparezcan primero.
        * **Burbujas de Chat (Bubbles):** Expandió la función de "cabezas de chat" a todas las aplicaciones de mensajería, permitiendo tener conversaciones flotantes mientras navegas por otras apps.
        * **Grabador de Pantalla Nativo:** Finalmente eliminó la necesidad de apps de terceros, permitiendo grabar video y audio (interno y externo) de lo que sucede en el móvil con un solo botón en el panel de ajustes rápidos.
        * **Menú de Control de Dispositivos:** Al mantener presionado el botón de encendido, aparecía un panel dedicado para gestionar todos los dispositivos inteligentes de la casa mediante Google Home sin abrir ninguna aplicación.
        `
    },
    {
        id: "android12",
        name: "Android 12",
        year: "2021",
        img: "imagenes/v12.png",
        desc: `
        Lanzada en octubre de 2021, Android 12 trajo "Material You", el cambio visual más ambicioso desde 2014. Google decidió que el usuario debía ser el diseñador de su propio teléfono. Mediante un motor de extracción de color, el sistema operativo pasó a ser camaleónico, adaptándose al fondo de pantalla elegido por el usuario. Pero no todo fue estética; Android 12 introdujo un panel de privacidad radical que mostraba exactamente qué apps habían accedido a los datos del usuario en las últimas 24 horas. Fue una versión que equilibró la expresión personal extrema con una seguridad de grado militar, convirtiendo al smartphone en un dispositivo mucho más personal, vibrante y transparente.
        
        * **Material You y Motor de Temas Dinámicos:** El sistema analiza los colores de tu fondo de pantalla y crea una paleta de colores personalizada que se aplica a los relojes, botones, iconos de apps y menús de todo el sistema.
        * **Dashboard de Privacidad:** Un centro de control único que muestra una línea del tiempo de cada vez que una aplicación accedió a la cámara, el micrófono o la ubicación, permitiendo revocar permisos al instante.
        * **Indicadores de Sensores en Vivo:** Añadió un punto verde brillante en la esquina de la pantalla para avisar en tiempo real si el micro o la cámara están activos, junto con interruptores globales para apagar estos sensores por completo.
        * **Ubicación Aproximada:** Permitió a los usuarios dar a las apps de clima o noticias una ubicación "borrosa" en lugar de las coordenadas exactas, protegiendo la privacidad del hogar.
        `
    },
    {
        id: "android13",
        name: "Android 13",
        year: "2022",
        img: "imagenes/v13.png",
        desc: `
        Android 13, lanzada en agosto de 2022, se centró en el refinamiento y en la expansión del ecosistema. Tras la revolución visual de la versión anterior, Google trabajó en pulir los detalles: desde la personalización de los iconos de aplicaciones de terceros hasta la mejora del audio inalámbrico de alta fidelidad. Fue la versión que "resucitó" las tablets de Google con la Pixel Tablet, optimizando la interfaz para pantallas grandes y mejorando la multitarea con una barra de tareas similar a la de un ordenador. Android 13 fue una declaración de madurez, demostrando que el sistema operativo era capaz de ofrecer una experiencia premium tanto en un teléfono compacto como en una tablet de productividad.
        
        * **Idiomas por Aplicación:** Una función muy solicitada que permite tener el sistema en español pero configurar, por ejemplo, la app de un banco o de noticias en inglés o alemán de forma independiente.
        * **Permisos de Notificación Obligatorios:** Las aplicaciones recién instaladas ya no pueden enviarte alertas por defecto. Ahora deben pedirte permiso explícito mediante una ventana emergente la primera vez que las abres.
        * **Bluetooth LE Audio:** Introdujo el soporte para la próxima generación de audio inalámbrico, que permite una latencia mucho más baja, mejor calidad de sonido y la capacidad de transmitir a múltiples auriculares simultáneamente.
        * **Selector de Fotos Privado:** En lugar de dar permiso a una aplicación para ver "toda tu galería", ahora puedes elegir compartir solo fotos específicas mediante una interfaz segura del sistema.
        `
    },
    {
        id: "android14",
        name: "Android 14",
        year: "2023",
        img: "imagenes/v14.png",
        desc: `
        Android 14, lanzada en octubre de 2023, se enfocó en la longevidad del hardware y en la expresión creativa. Con pantallas cada vez más brillantes y cámaras de nivel profesional, el sistema se optimizó para soportar Ultra HDR y para dar al usuario un control total sobre su pantalla de bloqueo. Pero lo más importante fue lo que sucedió "debajo": Google trabajó en reducir el consumo de las tareas en segundo plano para que los teléfonos duraran más tiempo encendidos y se calentaran menos. También introdujo mejoras masivas en accesibilidad, reconociendo que la tecnología debe ser usable por todos, sin importar sus capacidades visuales o auditivas.
        
        * **Personalización de la Pantalla de Bloqueo:** Permitió cambiar las tipografías del reloj, los widgets y los accesos directos laterales, además de introducir fondos de pantalla generados por IA.
        * **Soporte de Ultra HDR:** Permitió que las fotos capturadas con sensores modernos se mostraran con un rango dinámico real, haciendo que las luces brillen y las sombras tengan detalle sin perder fidelidad de color.
        * **Health Connect Integrado:** Los datos de salud (pasos, sueño, calorías) se unificaron en el núcleo del sistema, permitiendo que apps como Fitbit, Strava y Google Fit compartan datos de forma privada y segura.
        * **Escalado de Texto Inteligente:** Introdujo un escalado no lineal que permite que el texto pequeño crezca hasta un 200% sin que el texto que ya es grande se desborde o rompa el diseño de la interfaz.
        `
    },
    {
        id: "android15",
        name: "Android 15",
        year: "2025",
        img: "imagenes/v15r.png",
        desc: `
        Android 15 representa el amanecer de la Inteligencia Artificial Generativa integrada en el ADN del dispositivo. Lanzada en 2025, esta versión ha dejado de ser un simple lanzador de aplicaciones para convertirse en un asistente personal proactivo impulsado por Gemini. Se enfoca en resolver los problemas de seguridad del mundo real, como el robo físico de dispositivos, y en ofrecer una privacidad extrema mediante compartimentos estancos dentro del software. Con Android 15, el teléfono es capaz de entender el contexto físico y digital del usuario, protegiéndolo de estafas en tiempo real y permitiendo una productividad multitarea que antes solo era posible en ordenadores de sobremesa.
        
        * **Espacio Privado (Private Space):** Crea un perfil de usuario paralelo y oculto donde puedes guardar aplicaciones bancarias, de citas o documentos confidenciales. Cuando se bloquea, estas apps desaparecen de la multitarea y de la lista de apps, requiriendo una autenticación distinta.
        * **Detección de Robo por IA:** Utiliza los acelerómetros y modelos de IA para detectar el movimiento específico de alguien arrebatando el teléfono de la mano del usuario y corriendo. El sistema bloquea la pantalla instantáneamente antes de que el ladrón pueda acceder a nada.
        * **Conectividad Satelital Nativa:** Permite enviar mensajes de texto y alertas de emergencia SOS mediante conexión directa a satélites cuando no hay cobertura de red terrestre, vital para senderistas o zonas de desastre.
        * **Multitarea para Plegables y Tablets:** Introdujo la capacidad de anclar una barra de tareas permanente y de guardar "pares de aplicaciones" (por ejemplo, Gmail y Calendario) para abrirlos siempre juntos en pantalla dividida con un solo toque.
        `
    }
];

// ===== RENDERIZADO DE LA LÍNEA DEL TIEMPO =====
const container = document.getElementById("timeline-content");

versions.forEach(v => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.onclick = () => openModal(v.id);

    item.innerHTML = `
        <div class="icon-box"><img src="${v.img}" alt="${v.name}"></div>
        <div class="dot"></div>
        <div class="year">${v.year}</div>
    `;

    container.appendChild(item);
});

// ===== FUNCIONES DEL MODAL =====
function openModal(id) {
    const v = versions.find(x => x.id === id);

    // Formateador de texto: Transforma saltos de línea y viñetas en HTML legible
    const formattedDesc = v.desc
        .replace(/\n/g, '<br>')
        .replace(/\* \*\*(.*?)\*\*/g, '<li><strong>$1</strong>')
        .replace(/\*\*/g, '');

    document.getElementById("modal-title").innerText = v.name;
    document.getElementById("modal-content").innerHTML = `
        <img src="${v.img}" style="width: 120px; display: block; margin: 0 auto 20px;">
        <div style="text-align: left; font-family: 'Segoe UI', sans-serif; line-height: 1.7; font-size: 1.05rem; color: #fff; padding: 10px;">
            ${formattedDesc}
        </div>
    `;

    document.getElementById("overlay").style.display = "flex";
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
}

// Cerrar al hacer clic fuera del modal (en el overlay)
window.onclick = function(event) {
    const overlay = document.getElementById("overlay");
    if (event.target == overlay) {
        closeModal();
    }
}