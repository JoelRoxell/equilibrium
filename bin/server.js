import { config } from '../config';
import server from '../server';

const port = config.server_port,
  host = config.server_host;

server.listen(port, function () {
  console.log(`ENV_MODE: ${process.env.NODE_ENV}`);
  console.log(`Server is now running at http://${host}:${port}.`);
});
