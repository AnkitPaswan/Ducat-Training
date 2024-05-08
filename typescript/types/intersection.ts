//intersection type

interface College{ 
    collegeName: string;
}
interface Sports{ 
    sportsName: string;
}
let student : College & Sports = { 
   collegeName : "DUCAT",
   sportsName : "Cricket"
}