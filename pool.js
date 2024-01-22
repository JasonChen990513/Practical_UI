

const RockPaperScissorsAddressPool = "0x47b1f0f34f548D9E0CFf176ac63d8715028B3374";
const RockPaperScissorsPoolABI = [
    {
        "anonymous": false,
        "inputs": [],
        "name": "numberofPoolUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address[]",
                "name": "pool",
                "type": "address[]"
            }
        ],
        "name": "sendWaitingPool",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "showArraylenght",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "currentNumber",
                "type": "uint256"
            }
        ],
        "name": "showCurrentNumber",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "showError",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "showGameStatus",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "userOption",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct RockPaperScissors.UserInfo",
                        "name": "user1",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "userOption",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct RockPaperScissors.UserInfo",
                        "name": "user2",
                        "type": "tuple"
                    },
                    {
                        "internalType": "string",
                        "name": "finalResult",
                        "type": "string"
                    }
                ],
                "indexed": false,
                "internalType": "struct RockPaperScissors.GameInfo[]",
                "name": "gameinfo",
                "type": "tuple[]"
            }
        ],
        "name": "showLatestResult",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "logResult",
                "type": "string"
            }
        ],
        "name": "showResult",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "logUserAddress",
                "type": "address"
            }
        ],
        "name": "showUserAddress",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_Number",
                "type": "uint256"
            }
        ],
        "name": "changeNumberofPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getGameHistory",
        "outputs": [
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "userOption",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct RockPaperScissors.UserInfo",
                        "name": "user1",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "userOption",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct RockPaperScissors.UserInfo",
                        "name": "user2",
                        "type": "tuple"
                    },
                    {
                        "internalType": "string",
                        "name": "finalResult",
                        "type": "string"
                    }
                ],
                "internalType": "struct RockPaperScissors.GameInfo[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getNumberofPool",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getSpecificGameHistory",
        "outputs": [
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "userOption",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct RockPaperScissors.UserInfo",
                        "name": "user1",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "userOption",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct RockPaperScissors.UserInfo",
                        "name": "user2",
                        "type": "tuple"
                    },
                    {
                        "internalType": "string",
                        "name": "finalResult",
                        "type": "string"
                    }
                ],
                "internalType": "struct RockPaperScissors.GameInfo",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "option",
                "type": "uint256"
            }
        ],
        "name": "getUserOption",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "latestGameLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "latestGameResult",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "userAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "userOption",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct RockPaperScissors.UserInfo",
                "name": "user1",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "userAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "userOption",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct RockPaperScissors.UserInfo",
                "name": "user2",
                "type": "tuple"
            },
            {
                "internalType": "string",
                "name": "finalResult",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "numberofPool",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "poolUserAddress",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "showNumber",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "showWaitingPoll",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "userAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "userOption",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct RockPaperScissors.UserInfo[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_number",
                "type": "uint256"
            }
        ],
        "name": "updateNumber",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
let submitPoolOption = document.getElementById("submitPoolOption");
let updateNumberofPoolBtn = document.getElementById("UpdateNumberofPool");


const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const writeGameContract = new ethers.Contract(RockPaperScissorsAddressPool, RockPaperScissorsPoolABI, signer);
const readGameContract = new ethers.Contract(RockPaperScissorsAddressPool, RockPaperScissorsPoolABI, provider);

document.getElementById("getPoolInfo").addEventListener('click',() => {
    getPoolInfo();
})

document.getElementById("getPoolResult").addEventListener('click',() => {
    getLatestResult();
})


initial();

function initial(){
    poolEventListener();
    getPoolInfo();
    setnumberofPool();
    gameFinishListener();
    getLatestResult();
    poolNumberListener();
}


//------------------
//Number of pool functions

// set onclick listener for button
updateNumberofPoolBtn.onclick = () => {
    //get user input value
    let UserInput = parseInt(document.getElementById("NumberofPool").value);
    //check the value
    //if value smaller than 0 will inform user
    //else go to update max number of pool
    if(UserInput < 0){
        alert("input must greater than 0 and need to be even")
    }else{
        updateNumberofPool();
    }

}
//update the max number of pool according user input
async function updateNumberofPool() {
    //get user input
    UserInput = parseInt(document.getElementById("NumberofPool").value);
    //create contract object
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    await provider.send("eth_requestAccounts", []);
    //let gameContract = new ethers.Contract(RockPaperScissorsAddressPool, RockPaperScissorsPoolABI, signer);

    //call contract to update data
    try{
        await writeGameContract.changeNumberofPool(UserInput);
    } catch(e){
        // use to catch the error message when user input is odd 
        err = e.data.message;
        alert(err);
    }
    //when game already start, the max pool number cannot be modify.
    readGameContract.on("showGameStatus",(errorMessage)=>{
        alert(errorMessage);
    });
} 

//listener when max number of pool change, the UI will display the latest data
function poolNumberListener(){
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    //const gameContract = new ethers.Contract(RockPaperScissorsAddressPool, RockPaperScissorsPoolABI, provider);
    readGameContract.on("numberofPoolUpdate",()=>{
        setnumberofPool();
    })
}
//change the HTML contect according to smart contract
async function setnumberofPool(){
    let numberofPooltext = document.getElementById("CurrentNumberofPool");
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    //const gameContract = new ethers.Contract(RockPaperScissorsAddressPool, RockPaperScissorsPoolABI, provider);
    let numberofPool = await readGameContract.getNumberofPool();
    numberofPooltext.innerHTML = "Current number of pool is: " + numberofPool;
}
//---------------------------------
//Submit user option to smart contract
//set the onclick listener for user select option
//pass the value to the call contract function
document.getElementById("submitPoolOption").addEventListener("click", () => {
    //get user input
    let userSubmit = parseInt(getSelectedValue());
    //check user input, if not equal to 1, 2 or 3 then cannot continue
    if(userSubmit== 1||userSubmit== 2||userSubmit== 3){
        GameStart(parseInt(userSubmit));
    }

});
//call the smart contract to strat the game
async function GameStart(option){
    //Create the contract object and call the play function
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    await provider.send("eth_requestAccounts", []);
    //let gameContract = new ethers.Contract(RockPaperScissorsAddressPool, RockPaperScissorsPoolABI, signer);
    //call smart contract and upload the user input
    await writeGameContract.getUserOption(option);

    //the listener is uesd to inform user cannot join in to same metch
    readGameContract.once("showError",(errorMessage)=>{
        alert(errorMessage);
    }) 
};

//user to get user input from radio button
function getSelectedValue() {
    // Get all radio buttons with name "options"
    const radioButtons = document.getElementsByName("options");
  
    // Loop through radio buttons to find the selected one
    let selectedValue;
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        selectedValue = radioButton.value;
        break;
      }
    }
  
    if (selectedValue === undefined) {
        alert("Please select an option");
    }

    return selectedValue;
}

//--------------------------------------
// get latest game metch functions 

//use to update the UI
//call snart contract to get the latest data
async function getLatestResult(){
    let displayResult = document.getElementById("displayResult"); // declare where is the information display 
    //create the contract object
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    //const gameContract = new ethers.Contract(RockPaperScissorsAddressPool, RockPaperScissorsPoolABI, provider);
    //call contract and get the array length
    const number = await readGameContract.latestGameLength();
    const latestResultLenght = parseInt(number.toString());

    displayResult.innerHTML = ""; // Clear existing content
    let htmlString;
    //get the data from smart contract
    //loop how many times depend on the array length 
    for(let i = 0 ; i < latestResultLenght; i++){
        let latestResult = await readGameContract.latestGameResult(i);
        //change the number to relative word
        let user1Option = convertToString(latestResult[0].userOption.toString());
        let user2Option = convertToString(latestResult[1].userOption.toString());
        //store the information in to htmlString
        if(i == 0){
            htmlString = "<h2>" + latestResult[2] + "</h2>"+
                        "<p>User1:" + latestResult[0].userAddress +" Option: "+ user1Option +"</p>"+
                        "<p>User2:" + latestResult[1].userAddress +" Option: "+ user2Option +"</p>" +
                        "<br>";
        }
        else{
            htmlString = htmlString + "<h2>" + latestResult[2] + "</h2>"+
            "<p>User1:" + latestResult[0].userAddress +" Option: "+ user1Option +"</p>"+
            "<p>User2:" + latestResult[1].userAddress +" Option: "+ user2Option +"</p>" +
            "<br>";
        }
        //display the information
        displayResult.innerHTML = htmlString;
    }
}

//convert the number to string and display on UI
function convertToString(number){
    if(number == "1"){
        return "Rock";
    }else if(number == "2"){
        return "Paper";
    }else{
        return "Scissors";
    }
}

//set a listener to update the information when new game metch finish
async function gameFinishListener(){
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    //const gameContract = new ethers.Contract(RockPaperScissorsAddressPool, RockPaperScissorsPoolABI, provider);
    readGameContract.on("showLatestResult",(result)=>{
        getLatestResult();
    });
}

//-----------------------------------------------
// Show User in Pool functions
// call data when website load
async function getPoolInfo(){
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    //const gameContract = new ethers.Contract(RockPaperScissorsAddressPool, RockPaperScissorsPoolABI, provider);
    const userAddresses = await readGameContract.poolUserAddress();
    setInfoText(userAddresses);
}


// read data from contract and display to UI
async function setInfoText(userAddresses) {
    let string = ""; // init the string

    for(let i = 0 ; i < userAddresses.length; i++){
        if(string == ""){
            string = "User"+ (i+1) + ": " + userAddresses[i];
        }
        else{
            string = string + "\nUser"+ (i+1) + ": " + userAddresses[i];
        }
    }

    if(userAddresses.length == 0){
        document.getElementById("showPoolPlayer").innerHTML = "There are no participant in the pool";
    }else{
        document.getElementById("showPoolPlayer").innerHTML = string;
    }
}

//set the listener for the pool change
async function poolEventListener() {
    //create the contract object
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    //let gameContract = new ethers.Contract(RockPaperScissorsAddressPool, RockPaperScissorsPoolABI, provider);
    //set the listener
    //when new user come in to pool will trigger the event condition and send message to here
    readGameContract.on("sendWaitingPool", (userAddresses) => {
        console.log(userAddresses);
        setInfoText(userAddresses);
    });
};



