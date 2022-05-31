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

export const popular = (popularCurrentPage = 1) => `${base_url}games/lists/popular?key=${API_KEY}&page_size=${pageSize}&page=${popularCurrentPage}`