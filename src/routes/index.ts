import { Elysia } from 'elysia';

import { getPosts } from '../controllers/postController';

const Routes = new Elysia({prefix: '/posts'})

    .get('/', async () => getPosts())

export default Routes;