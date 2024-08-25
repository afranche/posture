import { Sequelize } from "sequelize";

declare module "bun" {
  interface Env {
    DATABASE_URL: string;
  }
}

export default new Sequelize(Bun.env.DATABASE_URL);
