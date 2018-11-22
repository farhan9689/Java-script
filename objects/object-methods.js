let restorent = {
    name:'madeena',
    guestCapacity:100,
    guestCount:0,
    seatAvailability: function(partySize){
     let available = this.guestCapacity - this.guestCount
     return partySize<=available
    },
    seatParty: function(partySize){
     this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize){
     this.guestCount = this.guestCount - partySize
    }
}
restorent.seatParty(85)
console.log(restorent.seatAvailability(25))
restorent.removeParty(10)
console.log(restorent.seatAvailability(25))