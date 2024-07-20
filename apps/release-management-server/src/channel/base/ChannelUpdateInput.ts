/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, IsOptional, IsEnum } from "class-validator";
import { EnumChannelPlatform } from "./EnumChannelPlatform";

@InputType()
class ChannelUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumChannelPlatform,
  })
  @IsEnum(EnumChannelPlatform)
  @IsOptional()
  @Field(() => EnumChannelPlatform, {
    nullable: true,
  })
  platform?: "Option1" | null;
}

export { ChannelUpdateInput as ChannelUpdateInput };
