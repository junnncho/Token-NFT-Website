/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  KIP17ReceiverMock,
  KIP17ReceiverMockInterface,
} from "../KIP17ReceiverMock";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "operator",
        type: "address",
      },
      {
        name: "from",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "onKIP17Received",
    outputs: [
      {
        name: "",
        type: "bytes4",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "retval",
        type: "bytes4",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        name: "gas",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516020806102878339810180604052602081101561003057600080fd5b50516000805460e09290921c63ffffffff1990921691909117905561022d8061005a6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636745782b14610030575b600080fd5b6100f66004803603608081101561004657600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561008157600080fd5b82018360208201111561009357600080fd5b803590602001918460018302840111640100000000831117156100b557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610113945050505050565b604080516001600160e01b03199092168252519081900360200190f35b60007f28fa6e16458f9c24aa59ddd4085264573006dbe30304837873c7deafc702b038858585855a60405180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b838110156101b457818101518382015260200161019c565b50505050905090810190601f1680156101e15780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a15060005460e01b94935050505056fea165627a7a72305820dbcc35b6d885e25c89127bee4417fc9bfac5d6fba38e71a45149f051629d3b850029";

export class KIP17ReceiverMock__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    retval: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KIP17ReceiverMock> {
    return super.deploy(retval, overrides || {}) as Promise<KIP17ReceiverMock>;
  }
  getDeployTransaction(
    retval: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(retval, overrides || {});
  }
  attach(address: string): KIP17ReceiverMock {
    return super.attach(address) as KIP17ReceiverMock;
  }
  connect(signer: Signer): KIP17ReceiverMock__factory {
    return super.connect(signer) as KIP17ReceiverMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KIP17ReceiverMockInterface {
    return new utils.Interface(_abi) as KIP17ReceiverMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KIP17ReceiverMock {
    return new Contract(address, _abi, signerOrProvider) as KIP17ReceiverMock;
  }
}
