/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query


exports.handler = (event, context) => {
  console.log('Function `projects-read-all` invoked')
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
  }) 
  return client.query(q.Paginate(q.Match(q.Ref('indexes/all_projects'))))
    .then((response) => {
      const projectsRefs = response.data
      console.log('Project refs', projectRefs)
      console.log(`${projectRefs.length} projects found`)
      // create new query out of project refs. http://bit.ly/2LG3MLg
      const getAllProjectDataQuery = projectRefs.map((ref) => {
        return q.Get(ref)
      })
      // then query the refs
      return client.query(getAllProjectDataQuery).then((ret) => {
        return {
          statusCode: 200,
          body: JSON.stringify(ret)
        }
      })
    }).catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}