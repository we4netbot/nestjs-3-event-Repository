import { EventTypesEnum } from "src/enums/event-types.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('event')
export class EventEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'character',
        length: 20
    })
    massage: EventTypesEnum;

    @Column()
    content: string;

    @Column()
    reftype: string;

    @Column()
    refid: number;

}
