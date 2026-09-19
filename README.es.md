<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Icono de la aplicación Noler">

# Despertador sin anuncios

### Una alarma ligera sin conexión para iPhone, iPad y Android

Un despertador enfocado a despertarte, sin publicidad, seguimiento del sueño, horóscopos ni su carga de trabajo extra en segundo plano.

Escuche para qué sirve su alarma: "Vamos a la escuela". "Toma tu medicina". "Salir hacia el aeropuerto".

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Descarga Noler en la App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Obtener Noler desde Google Play"></a>

Gratis para descargar. Sin cuenta. Sin suscripción. Sin compras dentro de la aplicación.

El propietario observó aproximadamente un 3% de consumo de batería durante la noche con Noler frente al 10% con Alarmy en el mismo teléfono. Esto fue informal, no una prueba de laboratorio controlada y no es una garantía.
</div>

<!-- section:focus -->
## Un despertador enfocado y sin extras ajenos

Noler es un reloj despertador enfocado construido con Rust. Crea alarmas únicas y repetidas, pronuncia en voz alta la etiqueta de cada alarma y mantiene registros y configuraciones de alarmas en su dispositivo.

La aplicación se centra en alarmas en lugar de combinarlas con un servicio de estilo de vida más amplio.

No hay anuncios esperando después del cierre, ni análisis que observen cómo usa la aplicación, ni cuenta que crear, ni servicio en la nube que mantener, ni maquinaria no relacionada con el clima, noticias, horóscopos, seguimiento del sueño o registro de ronquidos detrás de su alarma.

<!-- section:spoken-purpose -->
## Escuche el propósito de su alarma

Suena una alarma normal, pero medio despierto es posible que no recuerdes para qué sirve. Noler pronuncia la etiqueta que escribiste para esa alarma:

> "Vamos a la escuela".

> "Toma tu medicina".

> "Sal ahora hacia el aeropuerto".

El mensaje comienza en el dispositivo cuando suena la alarma. Escuchas el propósito inmediatamente en lugar de abrir la aplicación, leer una pequeña etiqueta o preguntarte por qué el teléfono hace ruido. Es especialmente útil para viajes escolares, medicamentos, citas, cocina, trabajo por turnos y recordatorios compartidos con la familia.

<!-- section:comparison -->
## ¿Por qué elegir este despertador en Rust en lugar de Alarmy?

Rust combina rendimiento nativo y seguridad de memoria, y permite compartir un mismo núcleo entre iOS y Android. Así mantenemos Noler pequeño y fiable, sin bibliotecas publicitarias, SDK de analítica ni servicios de meteorología, horóscopos o sueño. Usar Rust no demuestra por sí solo un ahorro de batería. El diseño se basa en la implementación nativa y en prescindir de tareas en segundo plano ajenas al despertador; las cifras de consumo necesitan pruebas en dispositivos físicos.

| lo que importa | Despertador sin anuncios | Alarmy |
|---|---|---|
| **Filosofía central** | Un despertador enfocado que hace el trabajo esencial. | Una plataforma más amplia para las rutinas matutinas y de sueño |
| **Experiencia de despertador exclusiva** | Dice en voz alta el propósito de la alarma; por ejemplo, "Vamos a la escuela" en lugar de un timbre inexplicable. | Se centra en alarmas fuertes, misiones de despertador y funciones de sueño. |
| **Seguridad del habla en el dispositivo** | Sistema TTS en el dispositivo; Android agrega Flite de código abierto incluido cuando no hay ningún motor TTS del sistema disponible; el sonido de alarma del sistema operativo es el último recurso | Consulte la lista actual de Alarmy para conocer su comportamiento de sonido. |
| **Pila de idiomas y UI** | Rust + Dioxus: una interfaz de usuario y un núcleo de aplicación livianos y compartidos, con puentes de alarma nativos Swift/Kotlin donde los sistemas operativos los requieren. | Las fuentes técnicas públicas hacen referencia a [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); no se ha publicado la combinación completa de tecnologías de la versión actual. |
| **Tamaño del paquete iOS** | 11.5 MB | 237.5 MB |
| **diferencia de tamaño de iOS** | ≈1/20 | ≈20× |
| **Tamaño de lanzamiento de Android** | Paquete de aplicaciones de 5.6 MB subido a Google Play | Google Play no publica un tamaño de paquete independiente del dispositivo |
| **Publicidad** | Ninguno | Contiene anuncios |
| **Suscripción o compras dentro de la aplicación** | Ninguno | Compras dentro de la aplicación y una suscripción premium |
| **Cuenta requerida** | No, no existe un sistema de cuentas. | No comparado; La ficha de Play Store de Alarmy se centra en su catálogo de funciones más amplio |
| **Análisis o seguimiento del comportamiento** | Ninguno | No comparado; La promesa de Noler es que no incluye ninguno de los dos. |
| **Sincronización en la nube** | Ninguno: los datos de la alarma permanecen en el dispositivo | No comparado; Noler deliberadamente no tiene una capa de nubes |
| **Función meteorológica** | No | Sí, la lista de Android de Alarmy dice que la ubicación se puede usar para obtener el clima después de cerrar la aplicación. |
| **Característica del horóscopo** | No | Sí, documentado en el centro de ayuda de Android de Alarmy |
| **Seguimiento del sueño** | No | si |
| **Monitoreo de ronquidos** | No | si |
| **Sonidos para dormir / ASMR** | No | si |
| **Carga de trabajo de funciones en segundo plano** | Trabajos relacionados con alarmas; sin feeds en línea, seguimiento, anuncios ni trabajo en la nube no relacionados | Las funciones adicionales habilitadas pueden implicar trabajo en segundo plano y en red; no se afirma ninguna comparación de potencia controlada |
| **Drenaje de batería observado durante la noche** | Alrededor del 3% en la prueba nocturna del mismo teléfono del propietario | Alrededor del 10% en la misma prueba |
| **Diferencia de batería en esa observación.** | Aproximadamente un 70% menos de drenaje solo en esta observación informal | Aproximadamente 3.3 veces el drenaje observado de Noler; no es un punto de referencia general |
| **Enfoque de batería** | El ahorro de batería es una prioridad del producto. El funcionamiento normal de la alarma está completamente fuera de línea, lo que evita el funcionamiento de Wi-Fi/datos móviles además del uso de la batería causado por el clima, el horóscopo, el análisis del sueño, los anuncios, los análisis y la sincronización en la nube. | Su conjunto más amplio de funciones conectadas puede realizar trabajos de red y procesamiento más allá de programar y hacer sonar alarmas. |
| **Uso normal de la red de datos de alarma** | Cero: las alarmas, etiquetas, configuraciones, archivos adjuntos, voz y programación permanecen en el dispositivo | Las funciones conectadas requieren acceso a la red |
| **Idiomas de la interfaz de usuario** | 39 opciones de configuración regional en la aplicación | 31 códigos de idioma únicos enumerados en el paquete iOS actual |
| **Idiomas de voz de alarma** | 24 opciones, usando la voz en tu dispositivo | Consulte el listado de Alarmy para conocer su cobertura de voz actual. |

La comparación de tamaño utiliza los recuentos de bytes de paquetes informados por el catálogo de Apple para las versiones actuales de la App Store de EE. UU. el 19 de septiembre de 2026: Noler 11,506,688 bytes y Alarmy 237,476,864 bytes. Los paquetes de aplicaciones de Android utilizan la entrega dividida, por lo que el tamaño de descarga e instalación de Google Play de cada persona varía según el dispositivo; 5.6 MB es el paquete de carga de Play actual verificado por Noler, no una medida de tamaño instalado prometida.

Los recuentos de idiomas utilizan evidencia pública diferente: el recuento de Noler proviene del selector de idioma de la aplicación, mientras que el recuento de Alarmy es el recuento de código de idioma único informado por su paquete iOS actual. Las 39 opciones se refieren a la interfaz de la aplicación, no a una garantía del estado actual de localización del escaparate.

Alarmy es una opción capaz para las personas que desean activamente misiones de despertar, análisis del sueño, monitoreo de ronquidos, sonidos del sueño, clima, horóscopo y un catálogo de funciones premium. Elija Noler cuando desee que su aplicación de alarma siga siendo una aplicación de alarma.

<!-- section:battery-observation -->
## Nuestra observación informal durante la noche: 3% versus 10%

En el teléfono del propietario, una prueba nocturna mostró aproximadamente un 3% de uso de la batería con Noler frente a aproximadamente un 10% con Alarmy. Dicho de otra manera, Alarmy usó aproximadamente 3.3 veces más batería en esa observación nocturna, mientras que el consumo de Noler fue aproximadamente un 70% menor.

Esta fue una comparación de primera mano con el mismo teléfono, en lugar de una certificación de laboratorio controlada. Los resultados de la batería varían según el teléfono, el estado de la batería, el sistema operativo, la intensidad de la señal, la configuración de la alarma y las funciones habilitadas. Los números exactos no están garantizados en todos los dispositivos, pero el motivo para priorizar la batería está integrado en el producto.

<!-- section:battery-workload -->
## Menos redes significa menos trabajo de batería

Cada característica de fondo adicional tiene un costo. Se debe recuperar el tiempo. Se debe recuperar el contenido del horóscopo. El seguimiento del sueño y los ronquidos requiere un seguimiento ampliado. Los anuncios y los análisis requieren código, tráfico de red y procesamiento. Las cuentas en la nube requieren sincronización.

Noler no hace nada de eso durante el uso normal de la alarma. No necesita Wi-Fi ni datos móviles para almacenar, programar, hablar o hacer sonar una alarma. Al permanecer completamente fuera de línea para su trabajo principal, evita activar la radio de la red para ver el tiempo, el horóscopo, la publicidad, los análisis, la cuenta o el tráfico de sincronización en la nube.

El producto es la opción más duradera para ahorrar batería: en primer lugar, no inicie trabajos no relacionados. Menos responsabilidades en segundo plano significan menos oportunidades de consumir tiempo de CPU, tiempo de Wi-Fi/radio móvil, memoria y batería más allá del trabajo que realmente necesita una alarma.

### Cómo se probará una comparación numérica de baterías

Un simulador no puede proporcionar una comparación válida de la batería del teléfono: funciona con el procesador, la radio y la fuente de alimentación de la computadora. Cualquier afirmación futura de que "usa X veces menos batería" provendrá de pruebas coincidentes de dispositivos físicos.

El punto de referencia ejecutará ambas aplicaciones en el mismo modelo, versión del sistema operativo, rango de estado de la batería, red, brillo, volumen y temperatura. Medirá dos escenarios revelados por separado: una alarma básica similar y la experiencia predeterminada normal de cada aplicación. Se alternará el orden de las pruebas, se detendrán las aplicaciones no relacionadas, los dispositivos comenzarán con la misma carga y temperatura y cada escenario se repetirá al menos cinco veces.

La medición de Android utilizará estadísticas de la batería del sistema y datos de energía del hardware cuando sea compatible. La medición de iOS utilizará las trazas de energía de Instruments en un iPhone físico. Los resultados informarán la duración de la prueba, la configuración exacta, la mediana del consumo energético, el rango entre ejecuciones y los archivos de seguimiento sin procesar. Hasta que exista esa evidencia controlada, el resultado publicado del 3% frente al 10% sigue estando claramente identificado como la observación nocturna del dispositivo real del propietario, no como una garantía para todos los teléfonos.

<!-- section:package-size -->
## Un paquete pequeño con un conjunto de funciones específicas

En iOS, el paquete actual de Noler tiene aproximadamente 11.5 MB, en comparación con los 237.5 MB de Alarmy, aproximadamente 20 veces más pequeño. El paquete de aplicaciones de Android actual subido a Google Play es de 5.6 MB.

Esa diferencia no es un accidente. Noler no incluye una plataforma para dormir, un sistema de publicidad, una capa de análisis, un sistema de cuentas en la nube, un servicio de noticias, un servicio meteorológico ni un horóscopo. Descargas un despertador y obtienes un despertador.

<!-- section:privacy -->
## Privado por diseño

El uso normal de la alarma no envía datos de alarma a ninguna parte.

- Sin identificación de publicidad
- Sin cuenta ni inicio de sesión
- Sin SDK de análisis
- Sin seguimiento de comportamiento
- Sin copia de seguridad ni sincronización en la nube
- Sin servicio remoto de datos de alarma
- Sin solicitud de red de origen cruzado en segundo plano

Los registros de alarma, las etiquetas, las configuraciones, los archivos adjuntos, la voz y la programación de notificaciones permanecen en su dispositivo. Las páginas activas de Términos, Privacidad y soporte se abren solo cuando las selecciona explícitamente en Configuración.

<!-- section:speech-fallback -->
## Una alarma parlante que explica por qué suena

Asigne a una alarma una etiqueta como "Escuela", "Medicina", "Aeropuerto" o "Llamar a mamá". Cuando suena, Noler puede pronunciar esa etiqueta en voz alta utilizando la voz disponible en su dispositivo.

Su estrategia de sonido en el dispositivo es específica de la plataforma. Ambas plataformas utilizan el sistema de texto a voz para la etiqueta de alarma. En Android, una voz Flite de código abierto, liviana y empaquetada toma el control cuando un dispositivo no tiene un motor TTS de sistema utilizable. El sonido de la alarma del sistema operativo sigue siendo el piso de seguridad final.

Solo en Android, el motor de código abierto Flite incluido aporta una voz inglesa de respaldo si no hay un motor de voz del sistema utilizable. Las voces dependen de los idiomas instalados. El modo opcional para mantener la aplicación activa viene desactivado y puede consumir más batería.

El sonido de la alarma alternativa tiene como objetivo evitar que una voz no disponible produzca una alarma silenciosa.

<!-- section:features -->
## lo que obtienes

- Alarmas únicas y repetidas entre semana
- Etiquetas de alarma habladas
- Botones grandes para posponer y detener la alarma
- Una vista clara de la próxima alarma programada
- Archivos adjuntos y configuraciones locales
- Almacenamiento en el dispositivo sin cuenta
- Una interfaz oscura y sin distracciones
- Compatibilidad con iPhone, iPad y Android
- 39 opciones de configuración regional de la interfaz de usuario
- 24 opciones de idioma de voz de alarma

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Lista de alarmas de Noler y siguiente pantalla de alarma">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Pantalla del despertador Noler">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Pantalla de configuración de alarma Noler">
</div>

<!-- section:ui-languages -->
## 39 opciones de configuración regional de la interfaz

árabe, catalán, chino simplificado, chino tradicional, croata, checo, danés, neerlandés, inglés australiano, inglés canadiense, inglés británico, inglés estadounidense, finés, francés, francés canadiense, alemán, griego, hebreo, hindi, húngaro, indonesio, italiano, japonés, coreano, malayo, noruego bokmal, polaco, portugués de Brasil, portugués de Portugal, rumano, ruso, eslovaco, español, español latinoamericano, sueco, tailandés, turco, ucraniano y vietnamita.

<!-- section:voice-languages -->
## 24 opciones de idioma de voz de alarma

árabe (Egipto), bengalí (Bangladés), neerlandés (Países Bajos), inglés (India), inglés estadounidense, francés (Francia), alemán (Alemania), hindi (India), indonesio (Indonesia), italiano (Italia), japonés (Japón), coreano (Corea del Sur), maratí (India), polaco (Polonia), portugués de Brasil, rumano (Rumanía), ruso (Rusia), español (Estados Unidos), tamil (India), telugu (India), tailandés (Tailandia), turco (Turquía), ucraniano (Ucrania) y vietnamita (Vietnam).

La disponibilidad y pronunciación de la voz dependen de las voces de texto a voz instaladas por el fabricante del dispositivo o el sistema operativo. El paquete alternativo de Flite es solo para Android y habla inglés; Ambas plataformas tienen un sonido de alarma alternativo cuando no se puede utilizar la voz.

<!-- section:downloads -->
## Descarga el despertador gratis

| Plataforma | Descarga oficial |
|---|---|
| iPhone y iPad | [Descargar en Apple App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| androide | [Consíguelo en Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Fuentes para la comparación

- [Noler en la App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler en Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy en la App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy en Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Ayuda de Alarmy Android: configuración del horóscopo](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Las características de la tienda y los tamaños de los paquetes pueden cambiar. Comparación verificada el 19 de septiembre de 2026. Alarmy es una marca comercial de su respectivo propietario; Este proyecto no está afiliado ni respaldado por Alarmy o DelightRoom.

---

Este repositorio presenta el producto. El código de la aplicación es propietario y no se publica aquí; el motor de voz Flite incluido es de código abierto.

<div align="center">
  <strong>Despiértate con un despertador enfocado, sin anuncios ni seguimiento.</strong>
</div>
