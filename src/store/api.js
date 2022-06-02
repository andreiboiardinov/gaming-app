const base_url = 'https://api.rawg.io/api/'
const API_KEY = process.env.REACT_APP_APIKEY

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;

    if (month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();

    if (day < 10) {
        return `0${day}`
    } else {
        return day
    }
}

const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

export const pageSize = 20;

export const calendar = (page = 1) => `${base_url}games/calendar/2022/6?ordering=-released&page_size=${pageSize}&page=${page}&key=${API_KEY}`

export const trending = (page = 1, order) => `${base_url}games/lists/main?ordering=${order}&page_size=${pageSize}&page=${page}&key=${API_KEY}`
export const popular = (page = 1) => `${base_url}games/lists/popular?page_size=${pageSize}&page=${page}&key=${API_KEY}`
export const upcoming = (page = 1) => `${base_url}games?dates=${currentDate},${nextYear}&ordering=-added&page_size=${pageSize}&page=${page}&key=${API_KEY}`;

export const game = (game_id) => `${base_url}games/${game_id}?key=${API_KEY}`;
export const gameScreenshots = (game_id) => `${base_url}games/${game_id}/screenshots?key=${API_KEY}`;