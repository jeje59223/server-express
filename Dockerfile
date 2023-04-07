FROM node:16
RUN node -v
RUN echo toto
COPY *.json ./
COPY server.ts ./
COPY node_modules ./node_modules/

#RUN npm i
#RUN npm run build
RUN ls
RUN npm start