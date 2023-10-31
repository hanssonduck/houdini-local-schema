import type { RequestHandler } from '@sveltejs/kit';
import { createYoga } from 'graphql-yoga';
import { schema } from './schema';

export const handler = createYoga({
	fetchAPI: {
		fetch,
		Request,
		Response,
		Headers,
		FormData,
		ReadableStream,
		WritableStream,
		TransformStream,
		Blob,
		crypto,
		btoa,
		TextEncoder,
		TextDecoder,
		URLPattern,
		URL,
		URLSearchParams
	},
	schema
}) satisfies RequestHandler;
