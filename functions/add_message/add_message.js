var faunadb = require("faunadb")
var q = faunadb.query
const handler = async (event, context) => {
  try {

    const messageBody = JSON.parse(event.body);
    var client = new faunadb.Client({
      secret: "fnAEL9t0xQACCAb0EKUDS8cbI5a-nAW5azhtrhuC",
    })
    var result = await client.query(
      q.Create(q.Collection("message"), { data: { details: messageBody.message } })
    )
    //const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: result.ref.id }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
