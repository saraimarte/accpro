import _ from 'lodash';
console.log("shuffle is running")
var activities = [
    "Purchasing equipment",
    "Paying dividends",
    "Selling products",
    "Buying inventory",
    "Hiring new employees",
    "Paying salaries",
    "Hosting a Marketing campaign",
    "Hosting a conference",
    "Purchasing supplies",
    "Interviewing job applicants",
    "Investing in stocks",
    "Attending an industry conference",
    "Selling handmade bracelets to a retailer for cash",    
    "Paying a vendor $1,000 for printing marketing materials",
    "Discussing paying a creditor",
    "Collaborating with team members on a project",
    "Signing a contract",  
    "Paying Rent", 
    "Selling a delivery truck",
    "Collecting $2,000 payment from a customer who made a purchase on credit",
    "Making a digital art piece for a customer" ,
    "Designing a new company logo",
    "Telling a creditor that you will pay them tomorrow"
]
var answers = ['Yes', 'Yes', 'Yes', 'Yes', 'No', 'Yes', 
'No', 'No', 'Yes', 'No', 'Yes', 'No', 'Yes', 'Yes', 'No', 
'No', 'No', 'Yes', 'Yes', 'Yes', 'Yes', 'No', 'No']

export function shuffle(arr1, arr2) {
    if (arr1.length !== arr2.length){
        throw new Error("Arrays must have the same length");
    }
    const joinedArr = _.zip(arr1, arr2);
    const shuffledArr = _.shuffle(joinedArr);
    const [shuffledArr1, shuffledArr2] = _.unzip(shuffledArr);
    return [shuffledArr1, shuffledArr2];
}

var [activities, answers] = shuffle(activities, answers);
export var activities;
export var answers; 

