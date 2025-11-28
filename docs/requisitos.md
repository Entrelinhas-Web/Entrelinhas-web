# Entrelinhas – BackLog e Especificações

## 1. Visão Geral do Sistema

O **Entrelinhas** é uma aplicação web voltada ao autoconhecimento emocional, permitindo que usuários registrem momentos e sentimentos do seu dia como em um diário emocional digital.  
A proposta é oferecer um espaço seguro e confortável para que o usuário expresse suas emoções, refletindo sobre seu estado emocional e compreendendo padrões ao longo do tempo.

O sistema também permitirá que psicólogos acompanhem pacientes, analisem tendências emocionais e forneçam feedbacks personalizados, funcionando como uma ferramenta complementar ao acompanhamento terapêutico.

A interface seguirá uma estética pixel art, remetendo a um ambiente acolhedor e tranquilo. O design será voltado para o uso noturno, utilizando cores suaves que remetem ao momento de descanso, simbolizando o fechamento emocional do dia e incentivando a introspecção.



## 2. Objetivos Principais

- Permitir o registro de emoções, pensamentos e desabafos pelo usuário;  
- Facilitar o acompanhamento psicológico por profissionais da área;  
- Oferecer insights visuais e analíticos aos usuários e psicólogos sobre o bem-estar emocional;  
- Proporcionar uma experiência imersiva e confortável, com estética acolhedora e intuitiva;  
- Estimular o autoconhecimento e a consciência emocional de forma leve e acessível.



## 3. Perfis de Usuário

- **Usuário Comum:** registra e revisita emoções, buscando autoconhecimento e acompanhamento pessoal.  
- **Psicólogo:** acompanha pacientes, analisa padrões emocionais e fornece feedbacks e devolutivas.



## 4. Requisitos Funcionais

### 4.1. Módulo de Usuário

- **RF01** – O sistema deve permitir o cadastro e login de usuários (usuário comum e psicólogo).  
- **RF02** – O sistema deve permitir a edição de perfil, incluindo nome, avatar e preferências de privacidade (como permitir a análise por Inteligências Artificiais).  
- **RF03** – O sistema deve permitir a recuperação de senha via e-mail de cadastro.  

---

### 4.2. Módulo de Diário Emocional

- **RF04** – O usuário deve poder registrar uma emoção selecionando um tipo pré-determinado (alegria, tristeza, raiva, ansiedade, etc.) e uma intensidade (de 1 a 5 estrelas).  
- **RF05** – O registro deve conter título, descrição/desabafo (opcional), data e causa(s).  
- **RF06** – O sistema deve permitir edição e exclusão de registros.  
- **RF07** – O sistema deve apresentar um histórico de registros, organizado por data.  
- **RF08** – O usuário deve poder filtrar seus registros por emoção e por data/período.  
- **RF09** – O usuário deve poder buscar registros através de palavras presentes tanto no título quanto na descrição/desabafo.  
- **RF10** – O sistema deve gerar um Mapa Emocional que apresente visualmente a variação emocional ao longo do tempo (em formatos como linha do tempo, gráfico de barras ou gráfico radar), permitindo observar padrões e recorrências. 

---

### 4.3. Módulo de Acompanhamento Psicológico

- **RF11** – O sistema deve permitir que psicólogos se cadastrem como profissionais, validando a categoria no momento do registro.  
- **RF12** – O usuário/paciente deve poder vincular-se a um psicólogo através de convite, código de acesso ou aceitação mútua.  
- **RF13** – O psicólogo deve poder visualizar registros emocionais dos pacientes vinculados.  
- **RF14** – O psicólogo deve poder filtrar os registros dos pacientes por período, emoção e intensidade.  
- **RF15** – O psicólogo deve poder buscar registros através de palavras presentes tanto no título quanto na descrição/desabafo do paciente.  
- **RF16** – O psicólogo deve poder enviar feedbacks textuais diretamente aos registros dos pacientes.  
- **RF17** – O sistema deve permitir que o psicólogo avalie o progresso geral e individual de seus pacientes.  
- **RF18** – O psicólogo deve ter acesso a um dashboard analítico que permita visualização agregada de grupos de pacientes (análise coletiva) ou individual, contendo:  
  - Tendências emocionais por período exibidas em gráficos;  
  - Relatório de principais causas e gatilhos de emoções;  
  - Média de intensidade emocional;  
  - Comparativo entre períodos (semanal, mensal, trimestral).  

---

### 4.4. Requisitos Futuros / Extensões

- **RF19** – Implementar análise automática de emoções com IA, identificando padrões de causas mais comuns e incomuns para cada emoção.  
- **RF20** – Implementar sistema automatizado com IA para recomendação de atividades que estimulem a recorrência de emoções recomendadas pelo psicólogo.  
- **RF21** – Permitir que psicólogos exportem relatórios em PDF com histórico e gráficos dos pacientes.  
- **RF22** – Integrar o sistema com aplicativos externos de agenda (como Google Calendar e Notion).  



## 5. Requisitos de Interface

- **RI01** – O layout deve seguir uma estética *pixel art*.  
- **RI02** – A paleta de cores deve incluir tons suaves, com detalhes claros para contraste, evocando tranquilidade e conforto.  
- **RI03** – Cada emoção deve ter uma cor que a represente, possibilitando uma interface mais única e identificável para os usuários.  
- **RI04** – A tipografia deve ser minimalista, inspirada em estilos retrô e monoespaçados.  
- **RI05** – O sistema deve ser totalmente responsivo, adaptando-se a telas de dispositivos móveis e desktops.  
- **RI06** – O design deve priorizar intuição na navegação, evitando poluição visual e garantindo clareza das ações principais.  

---

## 6. Fluxo de Uso

![Fluxo de Uso do Sistema](./fluxoDeUso.svg)
