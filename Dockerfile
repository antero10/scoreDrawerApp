FROM node
RUN npm install
RUN npm install -g serve
CMD serve dist/scoreDrawerApp
EXPOSE 5000