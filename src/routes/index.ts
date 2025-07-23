import { Elysia } from 'elysia';

import { getPosts } from '../controllers/PostController';

const Routes = new Elysia({prefix: '/posts'})

    .get('/', async () => getPosts())

export default Routes;