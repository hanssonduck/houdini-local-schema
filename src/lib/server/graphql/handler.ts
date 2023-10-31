import type { RequestHandler } from '@sveltejs/kit';
import { createYoga } from 'graphql-yoga';
import { schema } from './schema';

export const handler = createYoga({ schema }) satisfies RequestHandler;
