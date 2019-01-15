FROM node
COPY ./ /app
WORKDIR /app
RUN npm install -g @angular/cli 
RUN npm install -g typescript 
RUN npm install -g serve
RUN npm install
RUN ng build
CMD serve dist/scoreDrawerApp
EXPOSE 5000