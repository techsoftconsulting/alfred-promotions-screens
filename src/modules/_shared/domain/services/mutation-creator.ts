import Mutation from "../models/mutation";
import MutationOptions from "../models/mutation-options";
import { UseMutationValue } from "../models/use-mutation-value";

export default interface MutationCreator {
  execute(
    query: Mutation,
    queryFn: any,
    options?: MutationOptions
  ): UseMutationValue;
}
