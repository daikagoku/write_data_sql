function convertToTime(time){
	const t = {
		day:time.getDay(),
		date:time.getUTCDate(),
		month:time.getMonth()+1,
		year:time.getFullYear(),
		hours:time.getHours(),
		seconds:time.getSeconds(),
		minutes:time.getMinutes(),
		milliseconds:time.getMilliseconds(),
		timezone:time.getTimezoneOffset()
	};
	return ""+t.year+"-"+t.month+"-"+t.date+" "+t.hours+":"+t.minutes+":"+t.seconds+"";
};