import { server } from "./server";
import "./connection";

server.start({ port: 8000 }, ({ port }) => {
  console.log(`server start on the:  ${port}`);
});
