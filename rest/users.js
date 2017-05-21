const pg = require('pg-promise')()
const { ok, created } = require('huncwot/response');

const db = pg('postgres://localhost:5432/widgets')

async function browse(request) {
  const results = await db.any('select * from widgets');

  return ok(results);
}

async function read(request) {
  const { id } = request.params;

  const result = await db.one('select * from widgets where id = $1', id)
  return ok(result)
}

async function edit(request) {
  const { id, name, amount } = request.params;

  await db.none('update widgets set name=$1, amount=$2 where id=$3',
    [name, amount, id])

  return ok({ status: `success: ${id} changed to ${name}` });
}

async function add(request) {
  const { name, amount } = request.params;

  await db.none('insert into widgets(name, amount)' +
    'values(${name}, ${amount})', { name, amount })

  return created({ status: `success: widget ${name}/${amount} created` })
}

async function destroy(request) {
  const { id } = request.params;

  await db.result('delete from widgets where id = $1', id)

  return ok({ status: `success: ${id} destroyed` })
}

module.exports = { browse, read, edit, add, destroy }
