import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity('post')
export class PostEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title:string;

    @Column()
    content: string;

    @Column()
    location: string;

    @Column({
        default: 0
    })
    likecount: number;

    @Column({
        type: 'simple-array',
        default: ''
    })
    comments : string[];
    
    @ManyToMany((type)=> CategoryEntity, categort=>categort.posts,{cascade: true})
    @JoinTable()
    categories: CategoryEntity[];
}
