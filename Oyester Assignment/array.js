let arr=[2,2,2,2,4,4,4,4,5];
let index = {};
let max_sighted = 0,minbirdid=5,maxbirdid = 1;
let min_sighted = 1;
for (let birdid of arr)
{
    if(!index.hasOwnProperty(birdid)){
        index[birdid] = 0;
    }
    index[birdid] +=1;
    max_sighted = Math.max(index[birdid],max_sighted);
    min_sighted = Math.min(index[birdid],min_sighted);
}
for(let [birdid,sightCount] of Object.entries(index)){
    if(sightCount === max_sighted){
        minbirdid = Math.min(minbirdid,birdid);
    }
}
for(let [birdid,sightCount] of Object.entries(index)){
    if(sightCount === min_sighted){
        maxbirdid = Math.max(maxbirdid,birdid);
        break;
    }
}
console.log(minbirdid,maxbirdid);
