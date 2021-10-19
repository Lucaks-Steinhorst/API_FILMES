import axios from 'axios'

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'content-type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWYxZTJjZjE3ZGMwOWY4MjFiYmE5NzRhYzRjNGYwMSIsInN1YiI6IjYxNDEzZDdmOWEzYzQ5MDA4YzVlMGM1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._iIV6heCgOBo5btl5qL8yYVEf0XKIWZAKwYFJjEBbpM'
    }
})

export default apiFilmes