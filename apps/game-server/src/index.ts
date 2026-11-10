import { createHealthServer } from './health';

const port = Number(process.env.PORT ?? 4000);

createHealthServer().listen(port, () => {
  console.log(`Game server listening on http://localhost:${port}`);
});
