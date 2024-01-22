//declare contract address and abi
const RockPaperScissorsAddressfor2 = "0xa1896752c8de8396077b2caDc74A5Cd0C11c80E1";
const RockPaperScissorsfor2ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user1",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "user2",
                "type": "address"
            }
        ],
        "name": "inputOption",
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
        "name": "getGameHistoryLength",
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
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getUser1",
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
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "play",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "user1address",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "user2address",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
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
        "name": "userEnterOption",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

let CurrentUserAddress;
let playGame = document.getElementById("playGame");
let submitOption = document.getElementById("submitOption");
submitOption.disabled = true;
let string;
let i = 0;
const p3provider = new ethers.providers.Web3Provider(window.ethereum);
const p3signer = p3provider.getSigner();
const p3writeGameContract = new ethers.Contract(RockPaperScissorsAddressfor2, RockPaperScissorsfor2ABI, p3signer);
const p3readGameContract = new ethers.Contract(RockPaperScissorsAddressfor2, RockPaperScissorsfor2ABI, p3provider);
// for(let i = 0; i < 5; i++){
//     string = string + "\nUser"+ i + ": " + 123;
// }

initpage();

function initpage(){
    onInit();
    initCheckUser();
    checkUserOption();
}

playGame.onclick = () => {
    //submitOption.disabled = false;
    Game();

    // if(string == undefined){
    //     i++;
    //     string = "User"+ i + ": " + 123;
    //     document.getElementById("showPlayer").innerHTML = string;
    //     console.log(string);
    // }
    // else{
    //     i++;
    //     string = string + "\nUser"+ i + ": " + 123;
    //     document.getElementById("showPlayer").innerHTML = string;
    //     console.log(string);
    // }
}

submitOption.onclick = () => {
    submitUserOption();
}

//avoid user refresh page and resend the option 
async function checkUserOption(){
    //get length
    //const provider = new ethers.providers.Web3Provider(window.ethereum);
    let gameHistoryLength = await p3readGameContract.getGameHistoryLength();
    if(gameHistoryLength != 0){
        //use length to get the latest one
        await p3provider.send("eth_requestAccounts", []);

        let latestGame = await p3writeGameContract.getSpecificGameHistory(gameHistoryLength-1);

        //if alreasy got option then disable the button
        if(CurrentUserAddress == latestGame.user1.userAddress.toLowerCase()){
            if(latestGame.user1.userOption.toString() != "0"){
                //alert("You already select option and it cannot change");
                submitOption.disabled = true;
            }
        }else{
            if(latestGame.user2.userOption.toString() != "0"){
                //alert("You already select option and it cannot change");
                submitOption.disabled = true;
            }
        }
        
    }
}

async function submitUserOption(){
    if( await checkUserQualification() == true){
        let option = parseInt(getSelectedValue1()); 
        if(option !== undefined){
            //submitOption.disabled = true;
            console.log(option);
            try{
                uploadOption(option);
            } catch(e) {
                err = e.data.message;
                alert(err);
            }
            
            
        }
    }else{
        alert("You are not on the list for this game.");
    }
}

async function initCheckUser(){
    if(await checkUserQualification()){
        submitOption.disabled = false;
    }else{
        //alert("You are not on the list for this game.");
    }    
}

async function checkUserQualification(){

    //const provider = new ethers.providers.Web3Provider(window.ethereum);
    let user1address = (await p3readGameContract.user1address()).toLowerCase();
    let user2address = (await p3readGameContract.user2address()).toLowerCase();
    
    if(user1address.toString().toLowerCase() == CurrentUserAddress.toString().toLowerCase() || user2address.toString().toLowerCase() == CurrentUserAddress.toString().toLowerCase()){
        return true;
    } else{
        return false;
    }
}

async function Game(){

    //declare provider signer and connect to matamask 
    //const provider = new ethers.providers.Web3Provider(window.ethereum);
    //const signer = provider.getSigner();
    await p3provider.send("eth_requestAccounts", []);

    //Create the contract object and call the play function
    await p3writeGameContract.play();
    console.log("finish register")
    //set listener to check 2 user already prepare to play the game
    //show the user 1 and 2 information
    p3readGameContract.once("inputOption", (user1, user2) => {
        //alert("welcome user1: " + user1 + " and user2: " + user2 + " to play this game")
        
        document.getElementById("showPlayer").innerHTML = "User1: " + user1 + " \nUser2: " + user2;
        if(user1.toLowerCase() == CurrentUserAddress || user2.toLowerCase() == CurrentUserAddress){
            submitOption.disabled = false;
        }
        

    });

}

async function uploadOption(option){
    //let option = document.getElementById("setOption").value;

    //declare provider signer and connect to matamask 
    //const provider = new ethers.providers.Web3Provider(window.ethereum);
    //const signer = provider.getSigner();
    await p3provider.send("eth_requestAccounts", []);
    //Create the contract object.  Call the userEnterOption function and submit user option
    await p3writeGameContract.userEnterOption(option);
    //get the final result and show it
    p3readGameContract.once("showResult", (logResult) => {
        alert(logResult);
        document.getElementById("finalResult").innerHTML = logResult;
        submitOption.disabled = true;
    });
}

//init the wallet address
async function onInit() {
    //await window.ethereum.enable();
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(account)
    CurrentUserAddress = account;

    //  window.ethereum.on('accountsChanged', function (accounts) {
    //     // Time to reload your interface with accounts[0]!
    //     console.log(accounts[0])
    //    });
}

function getSelectedValue1() {
    // Get all radio buttons with name "options"
    const radioButtons = document.getElementsByName("options1");
  
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



