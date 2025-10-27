# Entrelinhas-web
Projeto que visa uma aplicação web que forneça funcionalidades que torne possível o controle emocional através do registro de momentos.

## Executando o Projeto
### 1. Baixando as dependências
Para baixar as dependências, basta executar em seu terminal:
```
cd Entrelinhas-web
npm install
```

### 2. Compilando o TailwindCSS
Caso precise deseje fazer alterações e acompanhar as mudanças visualmente em tempo real, execute:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Se precisar fazer alterações apenas uma vez, basta executar:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css
```

### 3. Abrindo o Projeto
Para visualizar o projeto, execute:
```
npm run dev
```

Abra o navegador e acesse o endereço sugerido no terminal.