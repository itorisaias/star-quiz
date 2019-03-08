import moment from 'moment'

moment.locale('pt-BR')

export default (date, format = '') => {
  if (!date) return ''
  return moment(date).format(format)
}
