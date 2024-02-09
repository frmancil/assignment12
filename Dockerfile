FROM node:latest
WORKDIR /Mancilla_Francisco_ui_garden
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "storybook"]