import {
	pgTable,
	serial,
	text,
	timestamp,
	boolean,
	integer,
	primaryKey
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const traits = pgTable('traits', {
	id: serial('id').primaryKey(),
	name: text('name'),
	description: text('description'),
	imageName: text('imageName'),
	hasEmblem: boolean('hasEmblem')
});

export const traitsRelations = relations(traits, ({ many }) => ({
	bonuses: many(traitBonuses),
	championTraits: many(championTraits)
}));

export const traitBonuses = pgTable('traitBonuses', {
	id: serial('id').primaryKey(),
	amount: integer('amount'),
	bonus: text('bonus'),
	traitId: integer('traitId')
});

export const traitBonusesRelations = relations(traitBonuses, ({ one }) => ({
	trait: one(traits, {
		fields: [traitBonuses.traitId],
		references: [traits.id]
	})
}));

export const champions = pgTable('champion', {
	id: serial('id').primaryKey(),
	name: text('name'),
	cost: integer('cost'),
	imageName: text('imageName')
});

export const championsRelations = relations(champions, ({ many }) => ({
	championTraits: many(championTraits),
	teamChampions: many(teamChampions)
}));

export const championTraits = pgTable(
	'championTraits',
	{
		championId: integer('championId')
			.notNull()
			.references(() => champions.id),
		traitId: integer('traitId')
			.notNull()
			.references(() => traits.id)
	},
	(t) => ({
		pk: primaryKey(t.championId, t.traitId)
	})
);

export const championTraitsRelations = relations(championTraits, ({ one }) => ({
	champion: one(champions, {
		fields: [championTraits.championId],
		references: [champions.id]
	}),
	trait: one(traits, {
		fields: [championTraits.traitId],
		references: [traits.id]
	})
}));

export const items = pgTable('items', {
	id: serial('id').primaryKey(),
	name: text('name'),
	imageName: text('imageName'),
	component1: integer('component1'),
	component2: integer('component2'),
	health: integer('health'),
	mana: integer('mana'),
	armor: integer('armor'),
	magicresist: integer('magicresist'),
	abilitypower: integer('abilitypower'),
	attackdamage: integer('attackdamage'),
	attackspeed: integer('attackspeed'),
	crit: integer('crit'),
	range: integer('range')
});

export const teams = pgTable('teams', {
	id: serial('id').primaryKey(),
	userId: integer('userId'),
	createdAt: timestamp('createdAt').defaultNow(),
	updatedAt: timestamp('updatedAt').defaultNow()
});

export const teamsRelations = relations(teams, ({ one, many }) => ({
	author: one(users, {
		fields: [teams.userId],
		references: [users.id]
	}),
	champions: many(teamChampions)
}));

export const teamChampions = pgTable('teamChampions', {
	id: serial('id').primaryKey(),
	teamId: integer('teamId'),
	championId: integer('championId'),
	championLevel: integer('championLevel'),
	firstItemId: integer('firstItemId'),
	secondItemId: integer('secondItemId'),
	thirdItemId: integer('thirdItemId'),
	row: integer('row'),
	column: integer('column')
});

export const teamChampionsRelations = relations(teamChampions, ({ one }) => ({
	team: one(teams, {
		fields: [teamChampions.teamId],
		references: [teams.id]
	}),
	champion: one(champions, {
		fields: [teamChampions.championId],
		references: [champions.id]
	})
}));

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	username: text('username'),
	password: text('password'),
	createdAt: timestamp('createdAt').defaultNow(),
	updatedAt: timestamp('updatedAt').defaultNow()
});

export const usersRelations = relations(users, ({ many }) => ({
	teams: many(teams)
}));
