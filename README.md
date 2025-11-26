# Papo de Gerente — Expo + React Native (scaffold)

## Projeto inicial com três telas principais já wireadas: `Welcome`, `Login` e `Register`. O objetivo deste scaffold é acelerar prototipagem e testes no Expo Go.

Conteúdo

- `App.js` — navegação stack básica entre as telas
- `WelcomeScreen.js`, `LoginScreen.js`, `RegisterScreen.js` — telas principais com layout em cartão e botões sociais (placeholders)
- `img/` — pasta de imagens (coloque sua logo aqui como `Papo_de_Gerente_1.jpg` ou `logo.png`)

Dependências principais

- expo (usado via `expo` CLI)
- react, react-native
- @react-navigation/native

# Papo de Gerente — Expo + React Native

Projeto simples com as telas base já implementadas: `Welcome`, `Login`, `Register` e `Home`.

Rápido (PowerShell)

1. Abra o terminal na pasta do projeto:

```powershell
cd "seu prjeto"
```

2. Instale dependências:

```powershell
npm install
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-svg
```

3. Inicie o Expo:

```powershell
npx expo start -c
```

Principais scripts (em `package.json`)

- `start` — inicia o bundler (Expo)
- `start:android`, `start:ios` — tentam abrir no emulador correspondente
- `start:clean` — inicia com cache limpo

https://github.com/user-attachments/assets/357ec5d1-80a3-47b8-8456-48e6348c4813
