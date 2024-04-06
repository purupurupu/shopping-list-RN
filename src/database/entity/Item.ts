import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ShoppingList } from "./ShoppingList";
import { Category } from "./Category";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  memo: string;

  @Column()
  checked: boolean;

  @ManyToOne(() => ShoppingList, (shoppingList) => shoppingList.items)
  shoppingList: ShoppingList;

  @ManyToOne(() => Category, (category) => category.items)
  category: Category;
}
