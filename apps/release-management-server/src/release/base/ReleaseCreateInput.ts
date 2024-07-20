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
import { EnumReleaseChannels } from "./EnumReleaseChannels";
import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
} from "class-validator";
import { EnumReleaseFeatures } from "./EnumReleaseFeatures";
import { Type } from "class-transformer";

@InputType()
class ReleaseCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumReleaseChannels,
    isArray: true,
  })
  @IsEnum(EnumReleaseChannels, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumReleaseChannels], {
    nullable: true,
  })
  channels?: Array<"Option1">;

  @ApiProperty({
    required: false,
    enum: EnumReleaseFeatures,
    isArray: true,
  })
  @IsEnum(EnumReleaseFeatures, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumReleaseFeatures], {
    nullable: true,
  })
  features?: Array<"Option1">;

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
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;
}

export { ReleaseCreateInput as ReleaseCreateInput };