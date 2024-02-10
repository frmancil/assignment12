FROM node:latest
WORKDIR /Mancilla_Francisco_ui_garden
COPY package.json ./
RUN npm install
RUN npm i @storybook/react
COPY . .
CMD ["npm", "run", "storybook"]