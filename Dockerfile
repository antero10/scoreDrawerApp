FROM node
RUN npm install
RUN npm install -g serve
RUN ng build
CMD serve dist/scoreDrawerApp
EXPOSE 5000