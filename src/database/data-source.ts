import "reflect-metadata";
import { DataSource } from "typeorm";
import { ExpoDriver } from "typeorm/driver/expo/ExpoDriver";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "expo",
  database: "/shopping-list.db",
  driver: ExpoDriver,
  entities: [User],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    // データベースの初期化が成功した場合の処理
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    // 初期化中にエラーが発生した場合の処理
    console.error("Error during Data Source initialization:", err);
  });
