import { Signer, BytesLike, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155ReceiverMock, ERC1155ReceiverMockInterface } from "../ERC1155ReceiverMock";
export declare class ERC1155ReceiverMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(recRetval: BytesLike, recReverts: boolean, batRetval: BytesLike, batReverts: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC1155ReceiverMock>;
    getDeployTransaction(recRetval: BytesLike, recReverts: boolean, batRetval: BytesLike, batReverts: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC1155ReceiverMock;
    connect(signer: Signer): ERC1155ReceiverMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516080806107e78339810180604052608081101561003057600080fd5b5080516020808301516040840151606090940151929390929091610079907f01ffc9a700000000000000000000000000000000000000000000000000000000906100e9811b901c565b6001805463ffffffff191660e095861c1764ff000000001916640100000000941515949094029390931768ffffffff00000000001916650100000000009290941c9190910292909217600160481b60ff0219166901000000000000000000921515929092029190911790556101b7565b7fffffffff00000000000000000000000000000000000000000000000000000000808216141561017a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b610621806101c66000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806301ffc9a714610051578063214cdb801461008c578063bc197c81146100b5578063f23a6e61146101f9575b600080fd5b6100786004803603602081101561006757600080fd5b50356001600160e01b03191661028c565b604080519115158252519081900360200190f35b6100b3600480360360208110156100a257600080fd5b50356001600160e01b0319166102ab565b005b6101dc600480360360a08110156100cb57600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156100fe57600080fd5b82018360208201111561011057600080fd5b803590602001918460208302840111600160201b8311171561013157600080fd5b919390929091602081019035600160201b81111561014e57600080fd5b82018360208201111561016057600080fd5b803590602001918460208302840111600160201b8311171561018157600080fd5b919390929091602081019035600160201b81111561019e57600080fd5b8201836020820111156101b057600080fd5b803590602001918460018302840111600160201b831117156101d157600080fd5b5090925090506102b7565b604080516001600160e01b03199092168252519081900360200190f35b6101dc600480360360a081101561020f57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b81111561024e57600080fd5b82018360208201111561026057600080fd5b803590602001918460018302840111600160201b8311171561028157600080fd5b509092509050610423565b6001600160e01b03191660009081526020819052604090205460ff1690565b6102b481610516565b50565b6001546000906901000000000000000000900460ff161561030c57604051600160e51b62461bcd02815260040180806020018281038252602f8152602001806105c7602f913960400191505060405180910390fd5b7f0bcad9224ba33b574e9c85298de2f44b4c80015a21aa5df474896444909863d889898989898989895a604051808a6001600160a01b03166001600160a01b03168152602001896001600160a01b03166001600160a01b0316815260200180602001806020018060200185815260200184810384528b8b82818152602001925060200280828437600083820152601f01601f19169091018581038452898152602090810191508a908a0280828437600083820152601f01601f191690910185810383528781526020019050878780828437600083820152604051601f909101601f19169092018290039e50909c50505050505050505050505050a15060015465010000000000900460e01b98975050505050505050565b600154600090600160201b900460ff161561047257604051600160e51b62461bcd02815260040180806020018281038252602981526020018061059e6029913960400191505060405180910390fd5b7f20dfa9f79060c8c4d7fe892c97c71bcf6e3b63d1dcf66fea7aefc0211628cf298787878787875a604080516001600160a01b03808a168252881660208201529081018690526060810185905260a0810182905260c06080820181815290820184905260e08201858580828437600083820152604051601f909101601f19169092018290039a509098505050505050505050a15060015460e01b9695505050505050565b6001600160e01b031980821614156105785760408051600160e51b62461bcd02815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff1916600117905556fe4552433131353552656365697665724d6f636b3a20726576657274696e67206f6e20726563656976654552433131353552656365697665724d6f636b3a20726576657274696e67206f6e2062617463682072656365697665a165627a7a72305820136579babd2217cadf0746d119a58a12d4ee6042db35ce48d924ae5ffea035850029";
    static readonly abi: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    static createInterface(): ERC1155ReceiverMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1155ReceiverMock;
}
//# sourceMappingURL=ERC1155ReceiverMock__factory.d.ts.map