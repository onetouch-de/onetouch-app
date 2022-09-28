FROM node:current-alpine as installer
WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN npm run build

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=installer /app/build ./
COPY etc/nginx.conf /etc/nginx/nginx.conf
RUN chown -R nginx:nginx /usr/share/nginx/html \
      && chmod -R 755 /usr/share/nginx/html \
      && chown -R nginx:nginx /var/cache/nginx \
      && chown -R nginx:nginx /var/log/nginx \
      && chown -R nginx:nginx /var/run \
      && chown -R nginx:nginx /etc/nginx
RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

USER nginx
EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]