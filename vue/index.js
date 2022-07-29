import express from 'express';
import { router } from './api'
import cors from 'cors'
import uploader from 'express-fileupload'
import e from 'cors';

export default (app, http) => {
  app.use((rq,rs,next)=>{
    console.log(` ${rq.method} request for ${rq.url}`)
    next()
  })
  app.use('/imgs',express.static('./vue/uploads/'))
  app.use('/videos',express.static('./vue/video/'))
  app.use(cors())
  app.use(uploader({
    createParentPath: true
}))
  app.use('/api',router)
}
