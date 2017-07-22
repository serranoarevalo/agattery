function checkBattery(){
        navigator.getBattery().then(function(battery){
            var level = battery.level * 100;
            var charging = battery.charging;
            if(charging && level === 100){
                chrome.notifications.create({
                  type:"basic",
                  iconUrl: "/icons/icon48.png",
                  title:"Agattery",
                  message: "Hi love! Unplug your battery ❤️",
                })
            }
        }
    )
}

setInterval(function(){
    checkBattery()
}, 60000)