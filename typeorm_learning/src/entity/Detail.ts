import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserDetail {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;
}
