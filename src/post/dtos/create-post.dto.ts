import { IsString, Length } from "class-validator";

export class CreatePostDto {
    @IsString()
    @Length(3, 30)
    title: string;

    @IsString()
    content: string;

    @IsString()
    location: string;

    @IsString({each: true})
    categories: string[];
}
