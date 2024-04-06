import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Item } from "./Item";

@Entity()
export class ShoppingList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.shoppingLists)
  user: User;

  @OneToMany(() => Item, (item) => item.shoppingList)
  items: Item[];
}
