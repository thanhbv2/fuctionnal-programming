const fetch = require('node-fetch')

const getFromApi = baseUrl => endpoint => cb =>
  fetch(`${baseUrl}/${endpoint}`)
    .then(res => res.json())
    .then(data => cb(data))
    .catch(err => console.log('===============>', err.message))



const getGithubAPI = getFromApi('https://api.github.com')

const getGithubUsers = getGithubAPI('users')
const getGithubRepos = getGithubAPI('repositories')

getGithubUsers(data => {
  data.map(user => console.log('===============>', user.login))
})


getGithubUsers(data => {
  data.map(user => console.log('===============>', user.avatar_url))
})


