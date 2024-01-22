//https://docs.ethers.org/v5/getting-started/#getting-started--connecting
//declare contract address and abi
const RockPaperScissorsAddress = "0x052Dd51Ad222ece76792b0Cc769B00Dd51f47D59";
const RockPaperScissorsABI = [
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

//document.getElementById("getInfo").addEventListener("click",getnumber());

//get the button element and set the onclick listener
let getNumberBtn = document.getElementById("getInfo");
let setNumberBtn = document.getElementById("UpdateNumber");
getNumberBtn.onclick = () => {
    getnumber();
    };

setNumberBtn.onclick = () => {
    setNumber();
    };


async function getnumber(){
    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    //Create the contract object
    const gameContract = new ethers.Contract(RockPaperScissorsAddress, RockPaperScissorsABI, provider);

    //call contract to get the number
    const num = await gameContract.showNumber();
    console.log(num.toString());
    document.getElementById("showResult").innerHTML = num.toString();
};


async function setNumber(){
    

    let provider = new ethers.providers.Web3Provider(window.ethereum);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    const signer = provider.getSigner();
    //MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);
    let gameContract = new ethers.Contract(RockPaperScissorsAddress, RockPaperScissorsABI, signer);

    //Get user input and call contract to update the number
    //let userName = prompt("Please enter your name:");
    let setNum = document.getElementById("setNumber").value;
    await gameContract.updateNumber(setNum);

    //listening the transaction log
    gameContract = new ethers.Contract(RockPaperScissorsAddress, RockPaperScissorsABI, provider);
    gameContract.once("showCurrentNumber", (currentNumber) => {
        console.log(currentNumber.toString());
    });
    
}

//init the wallet address
async function onInit() {
    await window.ethereum.enable();
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(account)
    //  window.ethereum.on('accountsChanged', function (accounts) {
    //     // Time to reload your interface with accounts[0]!
    //     console.log(accounts[0])
    //    });
}

//onInit();





