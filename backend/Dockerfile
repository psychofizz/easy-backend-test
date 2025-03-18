# syntax=docker/dockerfile:1.4

FROM node:lts-buster-slim AS development

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "server" ]

FROM development as dev-envs

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF

HEALTHCHECK CMD curl --fail http://localhost:3000 || exit 1  



