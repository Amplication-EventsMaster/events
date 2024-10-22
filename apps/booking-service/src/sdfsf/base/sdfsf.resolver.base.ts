/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Sdfsf } from "./Sdfsf";
import { SdfsfCountArgs } from "./SdfsfCountArgs";
import { SdfsfFindManyArgs } from "./SdfsfFindManyArgs";
import { SdfsfFindUniqueArgs } from "./SdfsfFindUniqueArgs";
import { DeleteSdfsfArgs } from "./DeleteSdfsfArgs";
import { SdfsfService } from "../sdfsf.service";
@graphql.Resolver(() => Sdfsf)
export class SdfsfResolverBase {
  constructor(protected readonly service: SdfsfService) {}

  async _sdfsfsMeta(
    @graphql.Args() args: SdfsfCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Sdfsf])
  async sdfsfs(@graphql.Args() args: SdfsfFindManyArgs): Promise<Sdfsf[]> {
    return this.service.sdfsfs(args);
  }

  @graphql.Query(() => Sdfsf, { nullable: true })
  async sdfsf(
    @graphql.Args() args: SdfsfFindUniqueArgs
  ): Promise<Sdfsf | null> {
    const result = await this.service.sdfsf(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Sdfsf)
  async deleteSdfsf(
    @graphql.Args() args: DeleteSdfsfArgs
  ): Promise<Sdfsf | null> {
    try {
      return await this.service.deleteSdfsf(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
