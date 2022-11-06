module.exports.getDate = () => {
    var today = new Date();
  
    var currentOffset = today.getTimezoneOffset();
    var ISTOffset = 330;   // IST offset UTC +5:30 

    var todayIST = new Date(today.getTime() + (ISTOffset + currentOffset)*60000);

    var minute = todayIST.getMinutes();
    var hour = todayIST.getHours();
    var date = todayIST.getDate();
    var month = todayIST.toLocaleString('default', { month: 'short' });
        
    var time = month + " " + date + ", " + todayIST.getFullYear() + "-" + hour + ":" + minute

    return time
}