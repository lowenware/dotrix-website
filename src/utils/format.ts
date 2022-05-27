export const formatDateTime = (dateString: string,onlyDate?:boolean) => {
  const date = new Date(dateString);
  const months = ["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."]
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const hour = date.getHours()
  const minuts = date.getMinutes()
  if(onlyDate){
    return`${months[month]} ${day} ${year}`
  }
  return`${months[month]} ${day} ${year} ${hour}:${minuts}`
}