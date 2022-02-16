"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TteokmillSparrowsWhitelist__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class TteokmillSparrowsWhitelist__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.TteokmillSparrowsWhitelist__factory = TteokmillSparrowsWhitelist__factory;
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "addr",
                type: "address",
            },
        ],
        name: "add",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "address",
            },
        ],
        name: "added",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "isOwner",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "address",
            },
        ],
        name: "whitelist",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "addr",
                type: "address",
            },
        ],
        name: "forceCancel",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
];
const _bytecode = "0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3610881806100cf6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638f32d59b1161005b5780638f32d59b146101815780639b19251a146101a3578063f2fde38b146101ff578063f6f8c1341461024357610088565b80630a3b0a4f1461008d578063715018a6146100d15780637f440103146100db5780638da5cb5b14610137575b600080fd5b6100cf600480360360208110156100a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610287565b005b6100d9610397565b005b61011d600480360360208110156100f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104d0565b604051808215151515815260200191505060405180910390f35b61013f6104f0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610189610519565b604051808215151515815260200191505060405180910390f35b6101e5600480360360208110156101b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610570565b604051808215151515815260200191505060405180910390f35b6102416004803603602081101561021557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610590565b005b6102856004803603602081101561025957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610616565b005b60011515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514156102e557600080fd5b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b61039f610519565b610411576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60016020528060005260406000206000915054906101000a900460ff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b60026020528060005260406000206000915054906101000a900460ff1681565b610598610519565b61060a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610613816106eb565b50565b61061e610519565b610690576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610771576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806108306026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a165627a7a72305820528b0aa746babd0171d482876f8c0d83d48af2c43d3213d59815e5d5072f8b860029";
//# sourceMappingURL=TteokmillSparrowsWhitelist__factory.js.map