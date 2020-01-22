const fetchWrapper = async (uri, method = 'GET', json, options = {}) => {

  try {
    return await fetch(uri, {
      method,
      body: method !== 'GET' ? JSON.stringify(json) : undefined,
      ...options
    }).then(res => res.json())
  } catch (error) {
    console.error(error)
    return { error }
  }
}

const api = {
  todos: 'https://jsonplaceholder.typicode.com/todos',
  todo: 'https://jsonplaceholder.typicode.com/todos'
}

export { fetchWrapper as fetch, api }