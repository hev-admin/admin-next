import dayjs from 'dayjs'

export function log(info) {
  return console.log(`[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] ${info}`)
}
