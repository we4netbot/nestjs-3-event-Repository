import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from 'src/event/entities/event.entity';
import { CategoryEntity } from './entities/category.entity';
import { PostEntity } from './entities/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
    controllers: [PostController],
    providers: [PostService,
    {
        provide: 'MAIL_API',
        useValue: 'https://mail.google.com'
    },
],
    imports: [TypeOrmModule.forFeature([PostEntity,CategoryEntity,EventEntity])]
})
export class PostModule {}
