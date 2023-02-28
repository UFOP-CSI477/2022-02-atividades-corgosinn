import express from 'express'
const app = express();

import blood_types_routes from "../blood_types_routes.js"
import collections_locations_routes from "../collections_locations_routes.js"
import donations_routes from "../donations_routes.js"
import person_routes from "../person_routes.js"

app.get('/', ( request, response ) => {
    response.send('Página inicial da aplicação');
});

app.use('/blood_types',blood_types_routes)
app.use('/collection_locations',collections_locations_routes)
app.use('/person',person_routes)
app.use('/donations',donations_routes)


export default app