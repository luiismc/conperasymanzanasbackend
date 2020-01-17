FROM node:10.15.0
# set working directory
WORKDIR /app

ENV APP_NAME='Como peras y manzanas Dashboard'

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

# add app
COPY . /app

# start app
CMD ng serve 
