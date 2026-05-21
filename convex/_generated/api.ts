/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED OR MAINTAINED FOR BOOTSTRAPPING.
 * Run `npx convex dev` after adding or renaming Convex functions.
 * @module
 */
import type { ApiFromModules, FilterApi, FunctionReference } from "convex/server";
import { anyApi } from "convex/server";
import type * as contact from "../contact.js";

declare const typedApi: ApiFromModules<{
  contact: typeof contact;
}>;

export const api = anyApi as unknown as FilterApi<
  typeof typedApi,
  FunctionReference<any, "public">
>;

export const internal = anyApi as unknown as FilterApi<
  typeof typedApi,
  FunctionReference<any, "internal">
>;
