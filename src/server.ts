import express from "express"
import http from "http"

export const application = express();
export let httpServer: any;

export const Main = () => {
  console.log("started server successfully")

  application.use(express.urlencoded({ extended: true }))
  application.use(express.json())

  httpServer = http.createServer(application)
  httpServer.listen(4000, () => {
    console.log("listening on 4000")
  })
}

export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);

Main()
