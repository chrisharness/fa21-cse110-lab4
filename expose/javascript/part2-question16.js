let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2

};

for (s in statistics){
    if(s[0] == 'r' || statistics[s] % 2){
        console.log(statistics[s]);
    }
}
