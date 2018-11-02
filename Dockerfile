# First get latest node docker and copy the project.
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# After that use nxinx to run the project
FROM nginx:alpine
COPY --from=node /app/dist/LabCrudRobots /usr/share/nginx/html