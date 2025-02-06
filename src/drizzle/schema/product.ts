import { relations } from 'drizzle-orm'
import { pgTable, text, integer, pgEnum } from 'drizzle-orm/pg-core'

import { CourseProductTable } from './courseProduct'
import { createdAt, id, updatedAt } from '../schemaHelpers'

export const productStatuses = ['public', 'private'] as const
export type ProductStatus = (typeof productStatuses)[number]
export const productStatusEnum = pgEnum('product_status', productStatuses)

export const ProductTable = pgTable('products', {
	id,
	name: text().notNull(),
	description: text().notNull(),
	imageUrl: text().notNull(),
	priceInDollars: integer().notNull(),
	status: productStatusEnum().notNull().default('private'),
	createdAt,
	updatedAt,
})

export const ProductRelationships = relations(ProductTable, ({ many }) => ({
	courseProducts: many(CourseProductTable),
}))
