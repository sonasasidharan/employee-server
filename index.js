const jsonserver=require('json-server')
const empserver=jsonserver.create()
const middleware=jsonserver.create()
const router=jsonserver.create()
const PORT=3000 || process.env.PORT

empserver.use(middleware)
empserver.use(router)

empserver.listen(PORT,()=>{
    console.log(`empserver is running at port:${PORT}`)
})
