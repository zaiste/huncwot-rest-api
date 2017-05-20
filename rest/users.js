const { ok, created } = require('huncwot/response');

function browse(request) {
  return ok([
    { name: 'User 1', age: 11 },
    { name: 'User 2', age: 21 },
  ]);
}

function read(request) {
  return ok({ name: 'User 1', age: 11 })
}

function edit(request) {
  const { id, name } = request.params;

  return ok({ status: `success: ${id} changed to ${name}` });
}

function add(request) {
  const { name } = request.params;

  return created({ status: `success: ${name} created` })
}

function destroy(request) {
  const { id } = request.params;

  return ok({ status: `success: ${id} destroyed` })
}

module.exports = { browse, read, edit, add, destroy }
