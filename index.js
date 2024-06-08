const jsonserver=require('json-server')
const empserver=jsonserver.create()
const middleware=jsonserver.defaults()
const router=jsonserver.router('db.json')
const PORT=3000 || process.env.PORT

empserver.use(middleware)
empserver.use(router)

empserver.listen(PORT,()=>{
    console.log(`empserver is running at port:${PORT}`)
})
