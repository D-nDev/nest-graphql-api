FROM node:16

# Create app directory
WORKDIR /usr/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY yarn.lock ./
COPY prisma ./prisma/

# Install app dependencies
RUN yarn

COPY . .

EXPOSE 4000
# 👇 new migrate and start app script
CMD [ "yarn", "start:dev:docker" ]