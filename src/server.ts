import { app } from './app';

const server = app.listen(3344, () => {
  const address: any = server.address();
  console.log(`${app.locals.name} - ${address.port}`);
});
