<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/7d/df/ef7ddfbd-793f-e33c-ed47-7a23c793eb52/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="160" alt="Ícone da aplicação Noler">

# Despertador sem publicidade

### Um alarme offline leve para iPhone, iPad e Android

Um despertador focado em acordá-lo, sem publicidade, monitorização do sono, horóscopos ou carga de trabalho extra em segundo plano.

Ouça para que serve o seu alarme: “Vamos para a escola”. “Tome o seu medicamento.” “Vá para o aeroporto.”

<a href="https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" height="60" alt="Descarregue o Noler na App Store"></a>
<a href="https://play.google.com/store/apps/details?id=com.noler.app"><img src="assets/google-play-badge.png" height="60" alt="Obter Noler no Google Play"></a>

Grátis para download. Nenhuma conta. Sem subscrição. Sem compra no aplicação.

O proprietário observou cerca de 3% de consumo de bateria durante a noite com Noler versus 10% com Alarmy no mesmo telefone. Isto foi informal, não um teste laboratorial controlado e não é uma garantia.
</div>

<!-- section:focus -->
## Um despertador focado sem extras não relacionados

Noler é um despertador focado construído com Rust. Cria alarmes únicos e repetidos, fala em voz alta o rótulo de cada alarme e mantém registos e definições de alarme no seu dispositivo.

A aplicação concentra-se em alarmes em vez de os combinar com um serviço de estilo de vida mais amplo.

Não há anúncios à espera após serem descartados, nenhuma análise a observar como utiliza a aplicação, nenhuma conta para criar, nenhum serviço de cloud para manter e nenhum tempo, notícias, horóscopo, monitorização do sono ou máquinas de gravação de ressonar não relacionadas a funcionar atrás do seu alarme.

<!-- section:spoken-purpose -->
## Ouça a finalidade do seu alarme

Um alarme normal toca, mas meio acordado pode não se lembrar para que serve. Noler diz o rótulo que escreveu para este alarme:

> “Vamos para a escola.”

> “Tome o seu medicamento.”

> “Saia já para o aeroporto.”

A mensagem começa no dispositivo quando o alarme dispara. Ouve o propósito imediatamente, em vez de abrir a aplicação, ler uma pequena etiqueta ou perguntar-se porque é que o telefone está a fazer barulho. É especialmente útil para atividades escolares, medicação, compromissos, culinária, trabalho por turnos e lembretes partilhados com a família.

<!-- section:comparison -->
## Porquê escolher este despertador em Rust em vez do Alarmy?

Rust combina desempenho nativo e segurança de memória, permitindo partilhar o mesmo núcleo entre iOS e Android. Isto ajuda a manter o Noler pequeno e fiável, sem bibliotecas de publicidade, SDK de análise ou serviços de meteorologia, horóscopo e sono. Rust, por si só, não comprova poupança de bateria. O projeto assenta na implementação nativa e na ausência de tarefas em segundo plano alheias ao despertador; os valores de consumo exigem medições em dispositivos físicos.

| O que importa | Despertador sem publicidade | Alarmy |
|---|---|---|
| **Filosofia central** | Um despertador focado que faz o trabalho essencial | Uma plataforma mais ampla de sono e rotina matinal |
| **Experiência de despertar exclusiva** | Fala em voz alta a finalidade do alarme – por exemplo, “Vamos para a escola” em vez de um toque inexplicável | Concentra-se em alarmes altos, missões de despertar e recursos de sono |
| **Segurança da fala no dispositivo** | Sistema TTS no dispositivo; O Android adiciona o Flite de código aberto quando não está disponível nenhum motor TTS do sistema; o som do alarme do sistema operativo é o substituto final | Veja a lista atual do Alarmy para o seu comportamento sonoro |
| **Pilha de linguagem e UI** | Rust + Dioxus — um núcleo de aplicação e interface de utilizador leves e partilhados, com pontes de alarme nativas Swift/Kotlin onde os sistemas operativos as exigem | Fontes técnicas públicas referem [iOS: Swift](https://medium.com/delightroom/swift-performance-%ED%96%A5%EC%83%81-%EC%8B%9C%ED%82%A4%EA%B8%B0-feat-method-dispatch-493ac4fc7782) · [Android: Kotlin/Java, Jetpack/Compose](https://kr.linkedin.com/jobs/view/android-developer-at-%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A3%B8-alarmy-3766282589); a combinação completa de tecnologias da versão atual não foi divulgada. |
| **Tamanho do pacote iOS** | 11.5 MB | 237.5 MB |
| **Diferença de tamanho do iOS** | ≈1/20 | ≈20× |
| **Tamanho da versão do Android** | Pacote de aplicações de 5.6 MB enviado para o Google Play | O Google Play não publica um tamanho de pacote independente do dispositivo |
| **Publicidade** | Nenhum | Contém anúncios |
| **Subscrição ou compras no aplicação** | Nenhum | Compras na aplicação e uma subscrição premium |
| **Conta necessária** | Não - não existe sistema de contas | Não comparado; A listagem da loja da Alarmy centra-se no seu catálogo mais amplo de recursos |
| **Análise ou rastreio comportamental** | Nenhum | Não comparado; A promessa de Noler é que não inclui nenhum dos dois |
| **Sincronização na nuvem** | Nenhum — os dados do alarme permanecem no dispositivo | Não comparado; Noler não tem deliberadamente camada de nuvens |
| **Recurso meteorológico** | Não | Sim – a listagem do Android do Alarmy diz que a localização pode ser utilizada para obter o tempo depois de a aplicação ser fechada |
| **Recurso horóscopo** | Não | Sim – documentado na central de ajuda Android da Alarmy |
| **Rastreamento do sono** | Não | Sim |
| **Monitorização de ronco** | Não | Sim |
| **Sons para dormir / ASMR** | Não | Sim |
| **Carga de trabalho do recurso em segundo plano** | Trabalho relacionado com alarmes; sem feeds online não relacionados, rastreio, anúncios ou trabalho na nuvem | Os recursos adicionais ativados podem envolver trabalho em segundo plano e em rede; nenhuma comparação de potência controlada é reivindicada |
| **Dreno da bateria observado durante a noite** | Cerca de 3% no teste noturno do mesmo telefone do proprietário | Cerca de 10% no mesmo teste |
| **Diferença de bateria nesta observação** | Cerca de 70% menos de dreno apenas nesta observação informal | Cerca de 3.3× dreno observado de Noler; não é uma referência geral |
| **Abordagem da bateria** | A poupança de bateria é uma prioridade do produto. A operação normal do alarme é totalmente offline, evitando o trabalho de Wi-Fi/dados móveis, além do uso da bateria causado pelo clima, horóscopo, análise do sono, anúncios, análises e sincronização na nuvem | O seu maior conjunto de recursos ligados pode realizar trabalhos de rede e processamento para além de agendamento e toque de alarmes |
| **Utilização normal da rede de dados de alarme** | Zero – os alarmes, etiquetas, definições, anexos, fala e agendamento permanecem no dispositivo | Os recursos ligados exigem acesso à rede |
| **Idiomas da interface do utilizador** | 39 opções de localidade na aplicação | 31 códigos de idioma únicos listados pelo pacote iOS atual |
| **Idiomas de voz de alarme** | 24 opções, utilizar a fala no seu dispositivo | Veja a lista da Alarmy para a sua cobertura de voz atual |

A comparação de tamanhos utiliza a contagem de bytes de pacote reportada pelo catálogo da Apple para as versões atuais da App Store dos EUA a 19 de setembro de 2026: Noler 11,506,688 bytes e Alarmy 237,476,864 bytes. Os Android App Bundles utilizam a entrega dividida, pelo que o tamanho do download e da instalação do Google Play de cada pessoa varia de acordo com o dispositivo; 5.6 MB é o pacote de upload actual verificado do Noler, não uma medida de tamanho instalado prometida.

As contagens de idiomas utilizam diferentes provas públicas: a contagem de Noler vem do seletor de idiomas da aplicação, enquanto a contagem de Alarmy é a contagem única de códigos de idioma reportada pelo seu pacote iOS atual. As 39 opções referem-se à interface da aplicação e não são uma garantia do estado atual de localização da montra.

Alarmy é uma escolha capaz para pessoas que desejam ativamente missões de despertar, análise do sono, monitorização do ressonar, sons do sono, previsão do tempo, horóscopo e um catálogo de características premium. Escolha Noler quando quiser que a sua aplicação de alarme continue a ser uma aplicação de alarme.

<!-- section:battery-observation -->
## A nossa observação informal durante a noite: 3% versus 10%

No telefone do proprietário, um teste noturno mostrou cerca de 3% de utilização da bateria com Noler versus cerca de 10% com Alarmy. Dito de outra forma, o Alarmy utilizou cerca de 3.3 vezes mais bateria nessa observação noturna, enquanto o consumo do Noler foi cerca de 70% inferior.

Esta foi uma comparação em primeira mão com o mesmo telefone, em vez de uma certificação laboratorial controlada. Os resultados da bateria variam de acordo com o telefone, a integridade da bateria, o sistema operativo, a intensidade do sinal, as definições de alarme e as características ativadas. Os números exatos não são garantidos em todos os dispositivos, mas a razão para dar prioridade à bateria está incorporada no produto.

<!-- section:battery-workload -->
## Menos rede significa menos bateria

Cada recurso extra de fundo tem um custo. O tempo deve ser procurado. O conteúdo do horóscopo deve ser obtido. O rastreio do sono e do ressonar requer uma monitorização prolongada. Os anúncios e análises exigem código, tráfego de rede e processamento. As contas na nuvem requerem sincronização.

Noler não faz nada disto durante a utilização normal do alarme. Não precisa de Wi-Fi ou dados móveis para armazenar, agendar, falar ou tocar um alarme. Ao permanecer totalmente offline para o seu trabalho principal, evita ativar o rádio da rede para previsão do tempo, horóscopo, publicidade, análise, conta ou tráfego de sincronização na nuvem.

O produto é a escolha mais durável para poupar bateria: em primeiro lugar, não inicie trabalhos não relacionados. Menos responsabilidades em segundo plano significam menos oportunidades de consumir tempo de CPU, tempo de Wi-Fi/rádio móvel, memória e bateria para além do trabalho que um alarme realmente necessita.

### Como será testada uma comparação numérica de baterias

Um simulador não pode fornecer uma comparação válida entre a bateria e o telefone: funciona com o processador, o rádio e a fonte de alimentação do computador. Qualquer afirmação futura de “usa X vezes menos bateria” virá de testes de dispositivos físicos correspondentes.

O benchmark irá executar ambas as aplicações no mesmo modelo, versão do sistema operativo, gama de integridade da bateria, rede, brilho, volume e temperatura. Irá medir dois cenários divulgados separadamente: um alarme básico semelhante e a experiência padrão normal de cada aplicação. A ordem dos testes será alternada, as aplicações não relacionadas serão interrompidas, os dispositivos começarão com a mesma carga e temperatura e cada cenário será repetido pelo menos cinco vezes.

A medição do Android utilizará estatísticas da bateria do sistema e dados de energia do hardware quando compatível. A medição do iOS utilizará os traços de energia da Instruments num iPhone físico. Os resultados reportarão a duração do teste, as definições exatas, o resultado de energia mediana, a gama de execução a execução e os ficheiros de rastreio brutos. Até que exista esta evidência controlada, o resultado publicado de 3% versus 10% permanece claramente identificado como a observação do dispositivo real durante a noite, e não como uma garantia para todos os telefones.

<!-- section:package-size -->
## Um pequeno pacote com um conjunto de recursos focado

No iOS, o pacote Noler atual tem cerca de 11.5 MB, em comparação com os 237.5 MB do Alarmy – cerca de 20 vezes mais pequeno. O Android App Bundle atual carregado no Google Play tem 5.6 MB.

Esta diferença não é um acidente. Noler não inclui plataforma de sono, sistema de publicidade, camada analítica, sistema de conta na nuvem, feed de notícias, serviço meteorológico ou feed de horóscopo. Descarrega um despertador e recebe um despertador.

<!-- section:privacy -->
## Privado por design

A utilização normal de alarme não envia dados de alarme para lado nenhum.

- Sem ID de publicidade
- Sem conta ou login
- Sem SDK analítico
- Sem rastreio comportamental
- Sem backup ou sincronização na cloud
- Sem serviço remoto de dados de alarme
- Sem pedido de rede de origem cruzada em segundo plano

Os registos de alarme, etiquetas, definições, anexos, fala e agendamento de notificações permanecem no seu dispositivo. As páginas ativas de Termos, Privacidade e suporte são abertas apenas quando as seleciona explicitamente em Definições.

<!-- section:speech-fallback -->
## Um alarme falante que explica porque está a tocar

Dê a um alarme um rótulo como “Escola”, “Medicina”, “Aeroporto” ou “Telefonar à mãe”. Quando toca, Noler pode falar esse rótulo em voz alta usando a fala disponível no seu dispositivo.

A sua estratégia de som no dispositivo é específica da plataforma. Ambas as plataformas utilizam um sistema de conversão de texto em voz para o rótulo do alarme. No Android, uma voz Flite leve e de código aberto integrada assume o controlo quando um dispositivo não tem um motor TTS de sistema utilizável. O som do alarme do sistema operativo continua a ser o nível de segurança final.

Apenas no Android, o motor de código aberto Flite incluído fornece uma voz inglesa de recurso se não existir um motor de voz do sistema utilizável. As vozes dependem dos idiomas instalados. O modo opcional para manter a aplicação ativa está desligado por predefinição e pode consumir mais bateria.

O som do alarme alternativo destina-se a impedir que uma voz indisponível produza um alarme silencioso.

<!-- section:features -->
## O que ganha

- Alarmes únicos e repetidos durante a semana
- Etiquetas de alarme faladas
- Botões grandes para adiar e parar o alarme
- Uma visão clara do próximo alarme programado
- Anexos e definições locais
- Armazenamento no dispositivo sem conta
- Uma interface escura e sem distrações
- Suporte para iPhone, iPad e Android
- 39 opções de localidade da UI
- 24 opções de idioma de voz de alarme

<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/c3/0b/0cc30b91-a689-82a9-07e1-fef80feb752f/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.28.36.png/320x480bb.jpg" width="260" alt="Lista de alarmes Noler e ecrã de alarme seguinte">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/25/e4/3425e445-96e9-08a5-a44a-a0f68bee112a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.29.15.png/320x480bb.jpg" width="260" alt="Ecrã do despertador Noler">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ee/7c/35/ee7c357e-20f3-7723-bc78-d904de02817c/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-07-12_at_04.30.29.png/320x480bb.jpg" width="260" alt="Ecrã de definições de alarme Noler">
</div>

<!-- section:ui-languages -->
## 39 opções de localidade de interface

árabe, catalão, chinês simplificado, chinês tradicional, croata, checo, dinamarquês, neerlandês, inglês australiano, inglês canadiano, inglês britânico, inglês americano, finlandês, francês, francês canadiano, alemão, grego, hebraico, hindi, húngaro, indonésio, italiano, japonês, coreano, malaio, norueguês bokmål, polaco, português do Brasil, português europeu, romeno, russo, eslovaco, espanhol, espanhol latino-americano, sueco, tailandês, turco, ucraniano e vietnamita.

<!-- section:voice-languages -->
## 24 opções de idioma de voz de alarme

árabe (Egito), bengalês (Bangladeche), neerlandês (Países Baixos), inglês (Índia), inglês americano, francês (França), alemão (Alemanha), hindi (Índia), indonésio (Indonésia), italiano (Itália), japonês (Japão), coreano (Coreia do Sul), marata (Índia), polaco (Polónia), português do Brasil, romeno (Roménia), russo (Rússia), espanhol (Estados Unidos), tâmil (Índia), telugu (Índia), tailandês (Tailândia), turco (Turquia), ucraniano (Ucrânia) e vietnamita (Vietname).

A disponibilidade e a pronúncia da voz dependem das vozes de conversão de texto em voz instaladas pelo fabricante do dispositivo ou pelo sistema operativo. O substituto Flite incluído é apenas para Android e fala inglês; ambas as plataformas têm uma funcionalidade de som de alarme quando a fala não pode ser utilizada.

<!-- section:downloads -->
## Descarregue o despertador grátis

| Plataforma | Download oficial |
|---|---|
| iPhone e iPad | [Descarregue na Apple App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062) |
| Android | [Descarregue no Google Play](https://play.google.com/store/apps/details?id=com.noler.app) |

<!-- section:sources -->
## Fontes para a comparação

- [Noler na App Store](https://apps.apple.com/us/app/alarm-no-ads-zero-data-usage/id6765933062)
- [Noler no Google Play](https://play.google.com/store/apps/details?id=com.noler.app)
- [Alarmy na App Store](https://apps.apple.com/us/app/alarmy-loud-alarm-clock/id1163786766)
- [Alarmy no Google Play](https://play.google.com/store/apps/details?id=droom.sleepIfUCan)
- [Ajuda do Alarmy Android: configuração do horóscopo](https://alarmy-android.zendesk.com/hc/en-us/articles/360004222553--Horoscope-How-do-I-set-the-zodiac)

Os recursos da loja e os tamanhos dos pacotes podem sofrer alterações. Comparação verificada a 19 de setembro de 2026. Alarmy é uma marca registada do seu respetivo proprietário; este projeto não é afiliado nem endossado pela Alarmy ou DelightRoom.

---

Este repositório contém informação sobre o produto. O código da aplicação é proprietário e não é publicado aqui. O motor de voz Flite incluído é de código aberto.

<div align="center">
  <strong>Acorde com um despertador focado, sem anúncios ou tracking.</strong>
</div>
