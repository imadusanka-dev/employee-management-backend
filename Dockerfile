FROM node:20

WORKDIR /app

COPY . .

RUN npm install -g pnpm
RUN pnpm install

RUN pnpm run build

EXPOSE 3001

CMD ["sh", "-c", "pnpm db:migrate && pnpm db:seed && pnpm run start:prod"]



