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
import { ReleaseWhereInput } from "./ReleaseWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ReleaseListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ReleaseWhereInput,
  })
  @ValidateNested()
  @Type(() => ReleaseWhereInput)
  @IsOptional()
  @Field(() => ReleaseWhereInput, {
    nullable: true,
  })
  every?: ReleaseWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReleaseWhereInput,
  })
  @ValidateNested()
  @Type(() => ReleaseWhereInput)
  @IsOptional()
  @Field(() => ReleaseWhereInput, {
    nullable: true,
  })
  some?: ReleaseWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReleaseWhereInput,
  })
  @ValidateNested()
  @Type(() => ReleaseWhereInput)
  @IsOptional()
  @Field(() => ReleaseWhereInput, {
    nullable: true,
  })
  none?: ReleaseWhereInput;
}
export { ReleaseListRelationFilter as ReleaseListRelationFilter };