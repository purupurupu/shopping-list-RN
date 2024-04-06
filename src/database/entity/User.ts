import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ShoppingList } from "./ShoppingList";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => ShoppingList, (shoppingList) => shoppingList.user)
  shoppingLists: ShoppingList[];
}
