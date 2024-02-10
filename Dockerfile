FROM node:latest
WORKDIR /Mancilla_Francisco_ui_garden
COPY package.json ./
RUN npm i --production
COPY . .
CMD ["npm", "run", "storybook"]