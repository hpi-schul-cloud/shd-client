# build stage
FROM docker.io/node:20-bullseye AS build-stage

## add libraries needed for installing canvas npm package
RUN apt update && apt install -y g++ libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev;

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY babel.config.js .eslintrc.js LICENSE.md .prettierrc.json tsconfig.json tsconfig.build.json .eslintignore .prettierignore index.html ./
COPY public ./public
COPY src ./src
COPY config/webpack ./config/webpack
RUN NODE_ENV=production npm run build

COPY .git ./git
RUN echo "{\"sha\": \"$(git rev-parse HEAD)\", \"version\": \"$(git describe --tags --abbrev=0)\", \"commitDate\": \"$(git log -1 --format=%cd --date=format:'%Y-%m-%dT%H:%M:%SZ')\", \"birthdate\": \"$(date +%Y-%m-%dT%H:%M:%SZ)\"}" > ./dist/version

# run stage
FROM docker.io/nginx:1.27
RUN mkdir /etc/nginx/templates
COPY config/docker/nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build-stage /app/dist /usr/share/nginx/html/frontend

EXPOSE 4100
CMD ["nginx", "-g", "daemon off;"]
