import { type SchemaTypeDefinition } from 'sanity'
import { blogType } from './blogType'
import { categoryType } from './categoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType, categoryType],
}
