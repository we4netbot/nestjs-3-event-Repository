import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { CreatePostDto } from './dtos/create-post.dto';
import { PaginationDto } from './dtos/pagination.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService){}

    @Get('/')
    AllPost(@Query() query :PaginationDto) {
        return this.postService.findAll(query);
    }

    @Get('/:id')
    onePost(@Param('id', ParseIntPipe) id: number) {
        return this.postService.findOne(+id);
    }

    @Get('DC')
    @HttpCode(HttpStatus.GONE)
    getDeprecate() {
        return `its a deprecate request pls change it!`
    }

    @Get('/get')
    getbyRes(@Res() res) {
        res.status(HttpStatus.GONE).send('get by @Res')
    }

    @Post()
    newPost(@Body() body: CreatePostDto) {
        return this.postService.create(body)
    }

    @Put('/:id')
    updatePost(@Param('id', ParseIntPipe) id, @Body() body: UpdatePostDto) {
        return this.postService.update(+id, body)
    }

    @Patch('/:id')
    editPost(@Param('id', ParseIntPipe) id, @Body() body: UpdatePostDto) {
        return this.postService.update(+id, body)
    }

    @Patch('/:type/:id')
    eventPost(@Param('type') type, @Param('id', ParseIntPipe) id, @Body('content')content){
        return this.postService.goEvents(+id,type,content)        
    }

    @Delete('/:id')
    deletePost(@Param('id', ParseIntPipe) id) {
        return this.postService.delete(+id);
    }
}
