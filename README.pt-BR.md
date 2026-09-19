<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Ícone do aplicativo Noler">

# Despertador sem anúncios

### Um alarme offline leve para iPhone, iPad e Android

Um despertador focado em acordar você, sem publicidade, monitoramento do sono, horóscopos ou carga de trabalho extra em segundo plano.

Ouça para que serve o seu alarme: “Vamos para a escola”. “Tome seu remédio.” “Vá para o aeroporto.”

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Baixe Noler na App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Obter Noler no Google Play"></a>

Grátis para baixar. Nenhuma conta. Sem assinatura. Nenhuma compra no aplicativo.

O proprietário observou cerca de 3% de consumo de bateria durante a noite com Noler versus 10% com Alarmy no mesmo telefone. Isto foi informal, não um teste laboratorial controlado e não é uma garantia.
</div>

<!-- section:focus -->
## Um despertador focado sem extras não relacionados

Noler é um despertador focado construído com Rust. Ele cria alarmes únicos e repetidos, fala em voz alta o rótulo de cada alarme e mantém registros e configurações de alarme em seu dispositivo.

O aplicativo concentra-se em alarmes em vez de combiná-los com um serviço de estilo de vida mais amplo.

Não há anúncios aguardando após serem descartados, nenhuma análise observando como você usa o aplicativo, nenhuma conta para criar, nenhum serviço de nuvem para manter e nenhum clima, notícias, horóscopo, monitoramento de sono ou máquinas de gravação de ronco não relacionadas funcionando atrás de seu alarme.

<!-- section:spoken-purpose -->
## Ouça a finalidade do seu alarme

Um alarme normal toca, mas meio acordado você pode não se lembrar para que serve. Noler fala o rótulo que você escreveu para esse alarme:

> “Vamos para a escola.”

> “Tome seu remédio.”

> “Saia agora para o aeroporto.”

A mensagem começa no dispositivo quando o alarme dispara. Você ouve o propósito imediatamente, em vez de abrir o aplicativo, ler uma pequena etiqueta ou se perguntar por que o telefone está fazendo barulho. É especialmente útil para atividades escolares, medicamentos, compromissos, culinária, trabalho por turnos e lembretes compartilhados com a família.

<!-- section:comparison -->
## Por que escolher este despertador em Rust em vez do Alarmy?

Rust combina desempenho nativo e segurança de memória, permitindo compartilhar o mesmo núcleo entre iOS e Android. Isso ajuda a manter o Noler pequeno e confiável, sem bibliotecas de anúncios, SDK de análise ou serviços de previsão do tempo, horóscopo e sono. Rust sozinho não comprova economia de bateria. Nosso projeto se apoia na implementação nativa e na ausência de tarefas em segundo plano alheias ao despertador; números de consumo exigem medições em aparelhos físicos.

| O que importa | Despertador sem anúncios | Alarmy |
|---|---|---|
| **Filosofia central** | Um despertador focado que faz o trabalho essencial | Uma plataforma mais ampla de sono e rotina matinal |
| **Experiência de despertar exclusiva** | Fala em voz alta a finalidade do alarme – por exemplo, “Vamos para a escola” em vez de um toque inexplicável | Concentra-se em alarmes altos, missões de despertar e recursos de sono |
| **Segurança de fala no dispositivo** | Sistema TTS no dispositivo; O Android adiciona Flite de código aberto quando nenhum mecanismo TTS do sistema está disponível; o som do alarme do sistema operacional é o substituto final | Veja a lista atual do Alarmy para seu comportamento sonoro |
| **Pilha de linguagem e UI** | Rust + Dioxus — um núcleo de aplicativo e interface de usuário leves e compartilhados, com pontes de alarme nativas Swift/Kotlin onde os sistemas operacionais as exigem | Fontes técnicas públicas mencionam [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); a combinação completa de tecnologias da versão atual não foi divulgada. |
| **Tamanho do pacote iOS** | 11.5 MB | 237.5 MB |
| **Diferença de tamanho do iOS** | ≈1/20 | ≈20× |
| **Tamanho da versão do Android** | Pacote de aplicativos de 5.6 MB enviado ao Google Play | O Google Play não publica um tamanho de pacote independente do dispositivo |
| **Publicidade** | Nenhum | Contém anúncios |
| **Assinatura ou compras no aplicativo** | Nenhum | Compras no aplicativo e uma assinatura premium |
| **Conta necessária** | Não - não há sistema de contas | Não comparado; A listagem da loja da Alarmy concentra-se em seu catálogo mais amplo de recursos |
| **Análise ou rastreamento comportamental** | Nenhum | Não comparado; A promessa de Noler é que não inclui nenhum dos dois |
| **Sincronização na nuvem** | Nenhum — os dados do alarme permanecem no dispositivo | Não comparado; Noler deliberadamente não tem camada de nuvem |
| **Recurso meteorológico** | Não | Sim – a listagem do Android do Alarmy diz que a localização pode ser usada para obter o clima depois que o aplicativo for fechado |
| **Recurso horóscopo** | Não | Sim – documentado na central de ajuda do Android da Alarmy |
| **Rastreamento do sono** | Não | Sim |
| **Monitoramento de ronco** | Não | Sim |
| **Sons para dormir / ASMR** | Não | Sim |
| **Carga de trabalho do recurso em segundo plano** | Trabalho relacionado a alarmes; sem feeds on-line não relacionados, rastreamento, anúncios ou trabalho na nuvem | Recursos adicionais habilitados podem envolver trabalho em segundo plano e em rede; nenhuma comparação de potência controlada é reivindicada |
| **Dreno de bateria observado durante a noite** | Cerca de 3% no teste noturno do mesmo telefone do proprietário | Cerca de 10% no mesmo teste |
| **Diferença de bateria nessa observação** | Cerca de 70% menos dreno apenas nesta observação informal | Cerca de 3.3× dreno observado de Noler; não é uma referência geral |
| **Abordagem da bateria** | A economia de bateria é uma prioridade do produto. A operação normal do alarme é totalmente off-line, evitando o trabalho de Wi-Fi/dados móveis, além do uso da bateria causado por clima, horóscopo, análise do sono, anúncios, análises e sincronização na nuvem | Seu maior conjunto de recursos conectados pode realizar trabalhos de rede e processamento além de agendamento e toque de alarmes |
| **Uso normal da rede de dados de alarme** | Zero – alarmes, rótulos, configurações, anexos, fala e agendamento permanecem no dispositivo | Os recursos conectados exigem acesso à rede |
| **Idiomas da interface do usuário** | 39 opções de localidade no aplicativo | 31 códigos de idioma exclusivos listados pelo pacote iOS atual |
| **Idiomas de voz de alarme** | 24 opções, usando a fala no seu dispositivo | Veja a lista da Alarmy para sua cobertura de voz atual |

A comparação de tamanho usa a contagem de bytes de pacote relatada pelo catálogo da Apple para as versões atuais da App Store dos EUA em 19 de setembro de 2026: Noler 11,506,688 bytes e Alarmy 237,476,864 bytes. Os Android App Bundles usam entrega dividida, portanto, o tamanho do download e da instalação do Google Play de cada pessoa varia de acordo com o dispositivo; 5.6 MB é o pacote de upload atual verificado do Noler, não uma medida de tamanho instalado prometida.

As contagens de idiomas usam evidências públicas diferentes: a contagem de Noler vem do seletor de idiomas do aplicativo, enquanto a contagem de Alarmy é a contagem exclusiva de códigos de idioma relatada por seu pacote iOS atual. As 39 opções referem-se à interface do aplicativo e não são uma garantia do estado atual de localização da vitrine.

Alarmy é uma escolha capaz para pessoas que desejam ativamente missões de despertar, análise do sono, monitoramento de ronco, sons do sono, previsão do tempo, horóscopo e um catálogo de recursos premium. Escolha Noler quando quiser que seu aplicativo de alarme continue sendo um aplicativo de alarme.

<!-- section:battery-observation -->
## Nossa observação informal durante a noite: 3% versus 10%

No telefone do proprietário, um teste noturno mostrou cerca de 3% de uso da bateria com Noler versus cerca de 10% com Alarmy. Dito de outra forma, o Alarmy usou cerca de 3.3 vezes mais bateria naquela observação noturna, enquanto o consumo de Noler foi cerca de 70% menor.

Esta foi uma comparação em primeira mão com o mesmo telefone, em vez de uma certificação de laboratório controlada. Os resultados da bateria variam de acordo com o telefone, a integridade da bateria, o sistema operacional, a intensidade do sinal, as configurações de alarme e os recursos ativados. Os números exatos não são garantidos em todos os dispositivos, mas o motivo para priorizar a bateria está embutido no produto.

<!-- section:battery-workload -->
## Menos rede significa menos bateria

Cada recurso extra de plano de fundo tem um custo. O tempo deve ser buscado. O conteúdo do horóscopo deve ser obtido. O rastreamento do sono e do ronco requer monitoramento prolongado. Anúncios e análises exigem código, tráfego de rede e processamento. As contas na nuvem requerem sincronização.

Noler não faz nada disso durante o uso normal do alarme. Não precisa de Wi-Fi ou dados móveis para armazenar, agendar, falar ou tocar um alarme. Ao permanecer totalmente off-line para seu trabalho principal, ele evita ativar o rádio da rede para previsão do tempo, horóscopo, publicidade, análise, conta ou tráfego de sincronização na nuvem.

O produto é a escolha mais durável para economizar bateria: em primeiro lugar, não inicie trabalhos não relacionados. Menos responsabilidades em segundo plano significam menos oportunidades de consumir tempo de CPU, tempo de Wi-Fi/rádio móvel, memória e bateria além do trabalho que um alarme realmente precisa.

### Como uma comparação numérica de bateria será testada

Um simulador não pode fornecer uma comparação válida entre bateria e telefone: ele funciona com o processador, o rádio e a fonte de alimentação do computador. Qualquer afirmação futura de “usa X vezes menos bateria” virá de testes de dispositivos físicos correspondentes.

O benchmark executará ambos os aplicativos no mesmo modelo, versão do sistema operacional, faixa de integridade da bateria, rede, brilho, volume e temperatura. Ele medirá dois cenários divulgados separadamente: um alarme básico semelhante e a experiência padrão normal de cada aplicativo. A ordem dos testes será alternada, aplicativos não relacionados serão interrompidos, os dispositivos começarão com a mesma carga e temperatura e cada cenário será repetido pelo menos cinco vezes.

A medição do Android usará estatísticas da bateria do sistema e dados de energia do hardware quando compatível. A medição do iOS usará traços de energia da Instruments em um iPhone físico. Os resultados reportarão a duração do teste, configurações exatas, resultado de energia mediana, faixa de execução a execução e arquivos de rastreamento brutos. Até que exista essa evidência controlada, o resultado publicado de 3% versus 10% permanece claramente identificado como a observação do dispositivo real durante a noite, e não como uma garantia para todos os telefones.

<!-- section:package-size -->
## Um pacote pequeno com um conjunto de recursos focado

No iOS, o pacote Noler atual tem cerca de 11.5 MB, em comparação com os 237.5 MB do Alarmy – cerca de 20 vezes menor. O Android App Bundle atual carregado no Google Play tem 5.6 MB.

Essa diferença não é um acidente. Noler não inclui plataforma de sono, sistema de publicidade, camada analítica, sistema de conta em nuvem, feed de notícias, serviço meteorológico ou feed de horóscopo. Você baixa um despertador e recebe um despertador.

<!-- section:privacy -->
## Privado por design

O uso normal de alarme não envia dados de alarme para lugar nenhum.

- Sem ID de publicidade
- Sem conta ou login
- Sem SDK analítico
- Sem rastreamento comportamental
- Sem backup ou sincronização na nuvem
- Nenhum serviço remoto de dados de alarme
- Nenhuma solicitação de rede de origem cruzada em segundo plano

Registros de alarme, rótulos, configurações, anexos, fala e agendamento de notificações permanecem no seu dispositivo. As páginas ativas de Termos, Privacidade e suporte são abertas somente quando você as seleciona explicitamente em Configurações.

<!-- section:speech-fallback -->
## Um alarme falante que explica por que está tocando

Dê a um alarme um rótulo como “Escola”, “Medicina”, “Aeroporto” ou “Ligar para a mãe”. Quando toca, Noler pode falar esse rótulo em voz alta usando a fala disponível no seu dispositivo.

Sua estratégia de som no dispositivo é específica da plataforma. Ambas as plataformas usam sistema de conversão de texto em fala para o rótulo do alarme. No Android, uma voz Flite leve e de código aberto integrada assume o controle quando um dispositivo não possui um mecanismo TTS de sistema utilizável. O som do alarme do sistema operacional continua sendo o nível de segurança final.

Só no Android, o motor de código aberto Flite incluído oferece uma voz em inglês quando não há um motor de voz do sistema utilizável. As vozes dependem dos idiomas instalados. O modo opcional para manter o app ativo vem desligado e pode gastar mais bateria.

O som do alarme alternativo destina-se a impedir que uma voz indisponível produza um alarme silencioso.

<!-- section:features -->
## O que você ganha

- Alarmes únicos e repetidos durante a semana
- Etiquetas de alarme faladas
- Botões grandes para adiar e parar o alarme
- Uma visão clara do próximo alarme programado
- Anexos e configurações locais
- Armazenamento no dispositivo sem conta
- Uma interface escura e sem distrações
- Suporte para iPhone, iPad e Android
- 39 opções de localidade da UI
- 24 opções de idioma de voz de alarme

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Lista de alarmes Noler e próxima tela de alarme">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Tela do despertador Noler">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Tela de configurações de alarme Noler">
</div>

<!-- section:ui-languages -->
## 39 opções de localidade de interface

árabe, catalão, chinês simplificado, chinês tradicional, croata, tcheco, dinamarquês, holandês, inglês (Austrália), inglês (Canadá), inglês (Reino Unido), inglês (Estados Unidos), finlandês, francês, francês (Canadá), alemão, grego, hebraico, hindi, húngaro, indonésio, italiano, japonês, coreano, malaio, bokmål norueguês, polonês, português (Brasil), português (Portugal), romeno, russo, eslovaco, espanhol, espanhol (América Latina), sueco, tailandês, turco, ucraniano e vietnamita.

<!-- section:voice-languages -->
## 24 opções de idioma de voz de alarme

árabe (Egito), bengali (Bangladesh), holandês (Países Baixos), inglês (Índia), inglês (Estados Unidos), francês (França), alemão (Alemanha), hindi (Índia), indonésio (Indonésia), italiano (Itália), japonês (Japão), coreano (Coreia do Sul), marati (Índia), polonês (Polônia), português (Brasil), romeno (Romênia), russo (Rússia), espanhol (Estados Unidos), tâmil (Índia), télugo (Índia), tailandês (Tailândia), turco (Turquia), ucraniano (Ucrânia) e vietnamita (Vietnã).

A disponibilidade e a pronúncia da voz dependem das vozes de conversão de texto em fala instaladas pelo fabricante do dispositivo ou pelo sistema operacional. O substituto Flite incluído é apenas para Android e fala inglês; ambas as plataformas têm um recurso de som de alarme quando a fala não pode ser usada.

<!-- section:downloads -->
## Baixe o despertador grátis

| Plataforma | Download oficial |
|---|---|
| iPhone e iPad | [Baixe na Apple App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Baixe no Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Fontes para a comparação

- [Noler na App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler no Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy na App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy no Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Ajuda do Alarmy Android: configuração do horóscopo](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Os recursos da loja e os tamanhos dos pacotes podem mudar. Comparação verificada em 19 de setembro de 2026. Alarmy é uma marca registrada de seu respectivo proprietário; este projeto não é afiliado ou endossado pela Alarmy ou DelightRoom.

---

Este repositório apresenta o produto. O código do aplicativo é proprietário e não está publicado aqui. O motor de voz Flite incluído é de código aberto.

<div align="center">
  <strong>Acorde com um despertador focado, sem anúncios ou rastreamento.</strong>
</div>
