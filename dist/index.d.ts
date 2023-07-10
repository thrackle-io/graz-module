import * as _cosmjs_cosmwasm_stargate from '@cosmjs/cosmwasm-stargate';
import { SigningCosmWasmClientOptions, CosmWasmClient, SigningCosmWasmClient, InstantiateOptions, InstantiateResult, ExecuteResult } from '@cosmjs/cosmwasm-stargate';
import { ChainInfo, AppCurrency, Key, Keplr } from '@keplr-wallet/types';
import * as _cosmjs_proto_signing from '@cosmjs/proto-signing';
import { Coin, OfflineSigner, OfflineDirectSigner } from '@cosmjs/proto-signing';
import { QueryClient, StargateClient, SigningStargateClient, SigningStargateClientOptions, StdFee, DeliverTxResponse, StakingExtension } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { Height } from 'cosmjs-types/ibc/core/client/v1/client';
import * as _tanstack_react_query from '@tanstack/react-query';
import { UseQueryResult, QueryClientProviderProps } from '@tanstack/react-query';
import { BondStatusString } from '@cosmjs/stargate/build/modules/staking/queries';
import { QueryValidatorsResponse } from 'cosmjs-types/cosmos/staking/v1beta1/query';
import { FC } from 'react';

declare type Dictionary<T = string> = Record<string, T>;
declare type Maybe<T> = T | undefined;

interface ChainInfoWithPath extends ChainInfo {
    path: string;
}

interface GrazChain {
    chainId: string;
    currencies: AppCurrency[];
    path?: string;
    rest: string;
    rpc: string;
    rpcHeaders?: Dictionary;
    gas?: {
        price: string;
        denom: string;
    };
}
/**
 * Helper function to define chain information records (key values).
 *
 * This function does not do anything special else than providing type safety
 * when defining chain informations.
 *
 * @example
 * ```ts
 * import { connect, defineChains } from "graz";
 *
 * const myChains = defineChains({
 *    cosmoshub: {
 *      rpc: "https://rpc.cosmoshub.strange.love",
 *      rest: "https://api.cosmoshub.strange.love",
 *      chainId: "cosmoshub-4",
 *      ...
 *    },
 * });
 *
 * connect(myChains.cosmoshub);
 * ```
 */
declare const defineChains: <T extends Dictionary<GrazChain>>(chains: T) => T;
/**
 * Helper function to define chain information object.
 *
 * This function does not do anything special else than providing type safety
 * when defining chain information.
 *
 * @example
 * ```ts
 * import { connect, defineChain } from "graz";
 *
 * const cosmoshub = defineChain({
 *    rpc: "https://rpc.cosmoshub.strange.love",
 *    rest: "https://api.cosmoshub.strange.love",
 *    chainId: "cosmoshub-4",
 *    ...
 * });
 *
 * connect(cosmoshub);
 * ```
 */
declare const defineChain: <T extends GrazChain>(chain: T) => T;
/**
 * Helper function to define Keplr's `ChainInfo` object.
 *
 * This function does not do anything special else than providing type safety
 * when defining chain information.
 *
 * @example
 * ```ts
 * import { defineChainInfo } from "graz";
 *
 * const cosmoshub = defineChainInfo({
 *   chainId: "cosmoshub-4",
 *   currencies: [ ... ],
 *   path: "cosmoshub",
 *   rest: "https://lcd-cosmoshub.blockapsis.com/",
 *   rpc: "https://rpc-cosmoshub.ecostake.com/",
 *   ...
 * });
 * ```
 */
declare const defineChainInfo: <T extends ChainInfoWithPath | ChainInfo>(chain: T) => T;
/**
 * Provided mainnet chains
 *
 * @example
 * ```ts
 * import { connect, mainnetChains } from "graz";
 * connect(mainnetChains.cosmos);
 * ```
 *
 * @see {@link testnetChains}
 */
declare const mainnetChains: {
    axelar: ChainInfo;
    /** @deprecated kept for compatibilty purposes; change to `mainnetChains.cosmoshub` */
    cosmos: ChainInfo;
    cosmoshub: ChainInfo;
    juno: ChainInfo;
    osmosis: ChainInfo;
    sommelier: ChainInfo;
};
/**
 * Arary version on {@link mainnetChains}
 *
 * @see {@link mainnetChains}
 */
declare const mainnetChainsArray: ChainInfo[];
/**
 * Provided testnet chains
 *
 * @example
 * ```ts
 * import { connect, testnetChains } from "graz";
 * connect(testnetChains.osmosis);
 * ```
 *
 * @see {@link mainnetChains}
 */
declare const testnetChains: {
    crescent: ChainInfo;
    juno: ChainInfo;
    osmosis: ChainInfo;
};
/**
 * Arary version on {@link testnetChains}
 *
 * @see {@link testnetChains}
 */
declare const testnetChainsArray: ChainInfo[];

declare enum WalletType {
    KEPLR = "keplr",
    LEAP = "leap"
}
declare const WALLET_TYPES: WalletType[];

declare type ConnectArgs = Maybe<GrazChain & {
    signerOpts?: SigningCosmWasmClientOptions;
    walletType?: WalletType;
}>;
declare const connect: (args?: ConnectArgs) => Promise<Key>;
declare const disconnect: (clearRecentChain?: boolean) => Promise<void>;
declare const reconnect: () => void;

declare type ExtensionSetup<P extends object = object> = (queryClient: QueryClient) => P;

interface CreateQueryClient {
    (): QueryClient;
    <A extends object>(setupA: ExtensionSetup<A>): QueryClient & A;
    <A extends object, B extends object>(setupA: ExtensionSetup<A>, setupB: ExtensionSetup<B>): QueryClient & A & B;
    <A extends object, B extends object, C extends object>(setupA: ExtensionSetup<A>, setupB: ExtensionSetup<B>, setupC: ExtensionSetup<C>): QueryClient & A & B & C;
    <A extends object, B extends object, C extends object, D extends object>(setupA: ExtensionSetup<A>, setupB: ExtensionSetup<B>, setupC: ExtensionSetup<C>, setupD: ExtensionSetup<D>): QueryClient & A & B & C & D;
    <A extends object, B extends object, C extends object, D extends object, E extends object>(setupA: ExtensionSetup<A>, setupB: ExtensionSetup<B>, setupC: ExtensionSetup<C>, setupD: ExtensionSetup<D>, setupE: ExtensionSetup<E>): QueryClient & A & B & C & D & E;
    <A extends object, B extends object, C extends object, D extends object, E extends object, F extends object>(setupA: ExtensionSetup<A>, setupB: ExtensionSetup<B>, setupC: ExtensionSetup<C>, setupD: ExtensionSetup<D>, setupE: ExtensionSetup<E>, setupF: ExtensionSetup<F>): QueryClient & A & B & C & D & E & F;
    <A extends object, B extends object, C extends object, D extends object, E extends object, F extends object, G extends object>(setupA: ExtensionSetup<A>, setupB: ExtensionSetup<B>, setupC: ExtensionSetup<C>, setupD: ExtensionSetup<D>, setupE: ExtensionSetup<E>, setupF: ExtensionSetup<F>, setupG: ExtensionSetup<G>): QueryClient & A & B & C & D & E & F & G;
    <A extends object, B extends object, C extends object, D extends object, E extends object, F extends object, G extends object, H extends object>(setupA: ExtensionSetup<A>, setupB: ExtensionSetup<B>, setupC: ExtensionSetup<C>, setupD: ExtensionSetup<D>, setupE: ExtensionSetup<E>, setupF: ExtensionSetup<F>, setupG: ExtensionSetup<G>, setupH: ExtensionSetup<H>): QueryClient & A & B & C & D & E & F & G & H;
    <A extends object, B extends object, C extends object, D extends object, E extends object, F extends object, G extends object, H extends object, I extends object>(setupA: ExtensionSetup<A>, setupB: ExtensionSetup<B>, setupC: ExtensionSetup<C>, setupD: ExtensionSetup<D>, setupE: ExtensionSetup<E>, setupF: ExtensionSetup<F>, setupG: ExtensionSetup<G>, setupH: ExtensionSetup<H>, setupI: ExtensionSetup<I>): QueryClient & A & B & C & D & E & F & G & H & I;
}
/**
 * Note: `createQueryClient` creates \@cosmjs/stargate's {@link QueryClient},
 * NOT to be confused with \@tanstack/react-query query client
 */
declare const createQueryClient: CreateQueryClient;

declare const clearRecentChain: () => void;
declare const getActiveChainCurrency: (denom: string) => AppCurrency | undefined;
declare const getRecentChain: () => GrazChain | null;
declare const suggestChain: (chainInfo: ChainInfo) => Promise<ChainInfo>;
interface SuggestChainAndConnectArgs {
    chainInfo: ChainInfo;
    signerOpts?: SigningCosmWasmClientOptions;
    walletType?: WalletType;
    gas?: {
        price: string;
        denom: string;
    };
    rpcHeaders?: Dictionary;
    path?: string;
}
declare const suggestChainAndConnect: ({ chainInfo, ...rest }: SuggestChainAndConnectArgs) => Promise<{
    account: Key;
    chain: ChainInfo;
}>;

interface GrazStore {
    account: Key | null;
    activeChain: GrazChain | null;
    balances: Coin[] | null;
    clients: {
        cosmWasm: CosmWasmClient;
        stargate: StargateClient;
        tendermint: Tendermint34Client;
    } | null;
    defaultChain: GrazChain | null;
    defaultSigningClient: "cosmWasm" | "stargate";
    offlineSigner: (OfflineSigner & OfflineDirectSigner) | null;
    offlineSignerAmino: OfflineSigner | null;
    offlineSignerAuto: (OfflineSigner | OfflineDirectSigner) | null;
    recentChain: GrazChain | null;
    signingClients: {
        cosmWasm: SigningCosmWasmClient;
        stargate: SigningStargateClient;
    } | null;
    status: "connected" | "connecting" | "reconnecting" | "disconnected";
    walletType: WalletType;
    _notFoundFn: () => void;
    _reconnect: boolean;
}

declare type CreateClientArgs = Pick<GrazChain, "rpc" | "rpcHeaders">;
declare const createClients: ({ rpc, rpcHeaders }: CreateClientArgs) => Promise<GrazStore["clients"]>;
declare type CreateSigningClientArgs = CreateClientArgs & {
    offlineSignerAuto: OfflineSigner | OfflineDirectSigner;
    cosmWasmSignerOptions?: SigningCosmWasmClientOptions;
    stargateSignerOptions?: SigningStargateClientOptions;
};
declare const createSigningClients: (args: CreateSigningClientArgs) => Promise<GrazStore["signingClients"]>;

interface ConfigureGrazArgs {
    defaultChain?: GrazChain;
    defaultSigningClient?: GrazStore["defaultSigningClient"];
    defaultWallet?: WalletType;
    onNotFound?: () => void;
}
declare const configureGraz: (args?: ConfigureGrazArgs) => ConfigureGrazArgs;

interface AddressToIbcDomainReturnValue {
    domain: string;
    domainFull: string;
}
/**
 * @see https://docs.ibc.domains/convert_address.html#relevant-bech32-prefixes
 */
declare type KnownChainPrefix = "agoric" | "chihuahua" | "gravity" | "lum" | "sent" | "akash" | "comdex" | "iaa" | "micro" | "sif" | "axelar" | "cosmos" | "inj" | "osmo" | "somm" | "bcna" | "cro" | "ixo" | "panacea" | "star" | "bitsong" | "desmos" | "juno" | "persistence" | "stars" | "bostrom" | "dig" | "ki" | "regen" | "terra" | "certik" | "emoney" | "kujira" | "rebus" | "umee" | "cheqd" | "evmos" | "like" | "secret" | "vdl";
declare type ChainPrefix = (string & {}) | KnownChainPrefix;
interface DomainDetails {
    expiration: string | null;
    imageData: string | null;
    twitterId: string | null;
    discordId: string | null;
    telegramId: string | null;
    keybaseId: string | null;
    pgpPublicKey: string | null;
}
declare const isIbcDomainPostfix: (value: string) => boolean;
declare const validateAddress: (address: string, prefix: ChainPrefix) => boolean;
declare const getIbcDomainByAdress: (address: string, isTestnet?: boolean) => Promise<AddressToIbcDomainReturnValue | null>;
declare const getAddressesByIbcDomain: (ibcDomain: string, isTestnet?: boolean) => Promise<string[] | null>;
declare const getChainAddressByIbcDomain: (ibcDomain: string, prefix: ChainPrefix, isTestnet?: boolean) => Promise<string | null>;
declare const getIbcDomainDetails: (ibcDomain: string, isTestnet?: boolean) => Promise<DomainDetails | null>;
interface ResolveToChainAddressArgs {
    value: string;
    prefix: ChainPrefix;
    isTestnet?: boolean;
}
declare const resolveToChainAddress: ({ value, prefix, isTestnet }: ResolveToChainAddressArgs) => Promise<string>;

declare const getBalances: (bech32Address: string) => Promise<Coin[]>;
declare const getBalanceStaked: (bech32Address: string) => Promise<Coin | null>;
interface SendTokensArgs {
    senderAddress?: string;
    recipientAddress: string;
    amount: Coin[];
    fee: number | StdFee | "auto";
    memo?: string;
}
declare const sendTokens: ({ senderAddress, recipientAddress, amount, fee, memo, }: SendTokensArgs) => Promise<DeliverTxResponse>;
interface SendIbcTokensArgs {
    senderAddress?: string;
    recipientAddress: string;
    transferAmount: Coin;
    sourcePort: string;
    sourceChannel: string;
    timeoutHeight?: Height;
    timeoutTimestamp?: number;
    fee: number | StdFee | "auto";
    memo?: string;
}
declare const sendIbcTokens: ({ senderAddress, recipientAddress, transferAmount, sourcePort, sourceChannel, timeoutHeight, timeoutTimestamp, fee, memo, }: SendIbcTokensArgs) => Promise<DeliverTxResponse>;
interface InstantiateContractArgs<Message extends Record<string, unknown>> {
    msg: Message;
    label: string;
    fee: StdFee | "auto" | number;
    options?: InstantiateOptions;
    senderAddress: string;
    codeId: number;
}
declare type InstantiateContractMutationArgs<Message extends Record<string, unknown>> = Omit<InstantiateContractArgs<Message>, "codeId" | "senderAddress" | "fee"> & {
    fee?: StdFee | "auto" | number;
};
declare const instantiateContract: <Message extends Record<string, unknown>>({ senderAddress, msg, fee, options, label, codeId, }: InstantiateContractArgs<Message>) => Promise<_cosmjs_cosmwasm_stargate.InstantiateResult>;
interface ExecuteContractArgs<Message extends Record<string, unknown>> {
    msg: Message;
    fee: StdFee | "auto" | number;
    senderAddress: string;
    contractAddress: string;
}
declare type ExecuteContractMutationArgs<Message extends Record<string, unknown>> = Omit<ExecuteContractArgs<Message>, "contractAddress" | "senderAddress" | "fee"> & {
    fee?: StdFee | "auto" | number;
};
declare const executeContract: <Message extends Record<string, unknown>>({ senderAddress, msg, fee, contractAddress, }: ExecuteContractArgs<Message>) => Promise<_cosmjs_cosmwasm_stargate.ExecuteResult>;
declare const getQuerySmart: <TData>(address: string, queryMsg: Record<string, unknown>) => Promise<TData>;
declare const getQueryRaw: (address: string, keyStr: string) => Promise<Uint8Array | null>;

/**
 * Function to check whether given {@link WalletType} or default configured wallet exists.
 *
 * @example
 * ```ts
 * const isSupported = checkWallet();
 * const isKeplrSupported = checkWallet("keplr");
 * ```
 */
declare const checkWallet: (type?: WalletType) => boolean;
/**
 * Function to return {@link Keplr} object and throws and error if it does not exist on `window`.
 *
 * @example
 * ```ts
 * try {
 *   const keplr = getKeplr();
 * } catch (error: Error) {
 *   console.error(error.message);
 * }
 * ```
 *
 * @see https://docs.keplr.app
 */
declare const getKeplr: () => Keplr;
/**
 * Function to return Leap object (which is {@link Keplr}) and throws and error if it does not exist on `window`.
 *
 * @example
 * ```ts
 * try {
 *   const leap = getLeap();
 * } catch (error: Error) {
 *   console.error(error.message);
 * }
 * ```
 *
 * @see https://docs.keplr.app
 */
declare const getLeap: () => Keplr;
/**
 * Function to return wallet object based on given {@link WalletType} or from store and throws an error if it does not
 * exist on `window` or unknown wallet type.
 *
 * @example
 * ```ts
 * const wallet = getWallet();
 * const keplr = getWallet("keplr");
 * ```
 *
 * @see {@link getKeplr}
 */
declare const getWallet: (type?: WalletType) => Keplr;
declare const getAvailableWallets: () => Record<WalletType, boolean>;

interface GrazAdapter {
    name: string;
    id: string;
}

interface MutationEventArgs<TInitial = unknown, TSuccess = TInitial> {
    onError?: (error: unknown, data: TInitial) => unknown;
    onLoading?: (data: TInitial) => unknown;
    onSuccess?: (data: TSuccess) => unknown;
}

interface UseAccountArgs {
    onConnect?: (args: {
        account: Key;
        isReconnect: boolean;
    }) => void;
    onDisconnect?: () => void;
}
/**
 * graz query hook to retrieve account data with optional arguments to invoke
 * given function on connect/disconnect.
 *
 * @example
 * ```tsx
 * import { useAccount } from "graz";
 *
 * // basic example
 * const { data, isConnecting, isConnected, ... } = useAccount();
 *
 * // with event arguments
 * useAccount({
 *   onConnect: ({ account, isReconnect }) => { ... },
 *   onDisconnect: () => { ... },
 * });
 * ```
 */
declare const useAccount: ({ onConnect, onDisconnect }?: UseAccountArgs) => {
    data: Key | null;
    isConnected: boolean;
    isConnecting: boolean;
    isDisconnected: boolean;
    isReconnecting: boolean;
    reconnect: () => void;
    status: "connected" | "connecting" | "reconnecting" | "disconnected";
};
/**
 * graz query hook to retrieve list of balances from current account or given address.
 *
 * @param bech32Address - Optional bech32 account address, defaults to connected account address
 *
 * @example
 * ```ts
 * import { useBalances } from "graz";
 *
 * // basic example
 * const { data, isFetching, refetch, ... } = useBalances();
 *
 * // with custom bech32 address
 * useBalances("cosmos1kpzxx2lxg05xxn8mfygrerhmkj0ypn8edmu2pu");
 * ```
 */
declare const useBalances: (bech32Address?: string) => UseQueryResult<Coin[]>;
/**
 * graz query hook to retrieve specific asset balance from current account or given address.
 *
 * @param denom - Asset denom to search
 * @param bech32Address - Optional bech32 account address, defaults to connected account address
 *
 * @example
 * ```ts
 * import { useBalance } from "graz";
 *
 * // basic example
 * const { data, isFetching, refetch, ... } = useBalance("atom");
 *
 * // with custom bech32 address
 * useBalance("atom", "cosmos1kpzxx2lxg05xxn8mfygrerhmkj0ypn8edmu2pu");
 * ```
 */
declare const useBalance: (denom: string, bech32Address?: string) => UseQueryResult<Coin | undefined>;
declare type UseConnectChainArgs = MutationEventArgs<ConnectArgs, Key>;
/**
 * graz mutation hook to execute wallet connection with optional arguments to
 * invoke given functions on error, loading, or success event.
 *
 * @example
 * ```ts
 * import { useConnect, mainnetChains } from "graz";
 *
 * // basic example
 * const { connect, isLoading, isSuccess, ... } = useConnect();
 *
 * // with event arguments
 * useConnect({
 *   onError: (err, chain) => { ... },
 *   onLoading: (chain) => { ... },
 *   onSuccess: (account) => { ... },
 * });
 *
 * // use graz provided chain information
 * connect(mainnetChains.cosmos);
 *
 * // use custom chain information
 * connect({
 *   rpc: "https://rpc.juno.strange.love",
 *   rest: "https://api.juno.strange.love",
 *   chainId: "juno-1",
 *   ...
 * });
 * ```
 *
 * @see {@link connect}
 */
declare const useConnect: ({ onError, onLoading, onSuccess }?: UseConnectChainArgs) => {
    connect: (args?: ConnectArgs) => void;
    connectAsync: (args?: ConnectArgs) => Promise<Key>;
    error: unknown;
    isLoading: boolean;
    isSuccess: boolean;
    isSupported: boolean;
    status: "error" | "idle" | "loading" | "success";
};
/**
 * graz mutation hook to execute wallet disconnection with optional arguments to
 * invoke given functions on error, loading, or success event.
 *
 * @example
 * ```ts
 * import { useDisconnect } from "graz";
 *
 * // basic eaxmple
 * const { disconnect, isLoading, isSuccess, ... } = useDisconnect();
 *
 * // with event arguments
 * useDisconnect({
 *   onError: (err) => { ... },
 *   onLoading: () => { ... },
 *   onSuccess: () => { ... },
 * });
 *
 * // pass `true` on disconnect to clear recent connected chain
 * disconnect(true);
 * ```
 *
 * @see {@link disconnect}
 */
declare const useDisconnect: ({ onError, onLoading, onSuccess }?: MutationEventArgs) => {
    disconnect: (forget?: boolean) => void;
    disconnectAsync: (forget?: boolean) => Promise<void>;
    error: unknown;
    isLoading: boolean;
    isSuccess: boolean;
    status: "error" | "idle" | "loading" | "success";
};
/**
 * graz hook to retrieve offline signer objects (default, amino enabled, and auto).
 *
 * Note: signer objects is initialized after connecting an account.
 *
 * @example
 * ```ts
 * import { useOfflineSigners } from "graz";
 * const { signer, signerAmino, signerAuto } = useOfflineSigners();
 * ```
 */
declare const useOfflineSigners: () => {
    signer: (_cosmjs_proto_signing.OfflineSigner & _cosmjs_proto_signing.OfflineDirectSigner) | null;
    signerAmino: _cosmjs_proto_signing.OfflineSigner | null;
    signerAuto: _cosmjs_proto_signing.OfflineSigner | null;
};
/**
 * graz hook to retrieve offline signer objects (default, amino enabled, and auto).
 *
 * @deprecated prefer using {@link useOfflineSigners}
 * @see {@link useOfflineSigners}
 */
declare const useSigners: () => {
    signer: (_cosmjs_proto_signing.OfflineSigner & _cosmjs_proto_signing.OfflineDirectSigner) | null;
    signerAmino: _cosmjs_proto_signing.OfflineSigner | null;
    signerAuto: _cosmjs_proto_signing.OfflineSigner | null;
};
/**
 * graz query hook to retrieve list of staked balances from current account or given address.
 *
 * @param bech32Address - Optional bech32 account address, defaults to connected account address
 *
 * @example
 * ```ts
 * import { useBalanceStaked } from "graz";
 *
 * // basic example
 * const { data, isFetching, refetch, ... } = useBalanceStaked();
 *
 * // with custom bech32 address
 * useBalanceStaked("cosmos1kpzxx2lxg05xxn8mfygrerhmkj0ypn8edmu2pu");
 * ```
 */
declare const useBalanceStaked: (bech32Address?: string) => UseQueryResult<Coin | null>;

/**
 * graz hook to retrieve connected account's active chain
 *
 * @example
 * ```ts
 * import { useActiveChain } from "graz";
 * const { rpc, rest, chainId, currencies } = useActiveChain();
 * ```
 */
declare const useActiveChain: () => GrazChain | null;
/**
 * graz hook to retrieve specific connected account's currency
 *
 * @param denom - Currency denom to search
 *
 * @example
 * ```ts
 * import { useActiveChainCurrency } from "graz";
 * const { data: currency, ... } = useActiveChainCurrency("juno");
 * ```
 */
declare const useActiveChainCurrency: (denom: string) => UseQueryResult<AppCurrency | undefined>;
/**
 * graz hook to retrieve active chain validators with given query client and optional bond status
 *
 * @param queryClient - \@cosmjs/stargate query client object with {@link StakingExtension}
 * @param status - Validator bond status string (defaults to BOND_STATUS_BONDED)
 *
 * @example
 * ```ts
 * import { useActiveChainValidators, useQueryClient } from "graz";
 * import { setupStakingExtension } from "@cosmjs/stargate";
 *
 * const queryClient = useQueryClient(setupStakingExtension);
 * const { data: response, ... } = useActiveChainValidators(queryClient);
 * ```
 */
declare const useActiveChainValidators: <T extends QueryClient & StakingExtension>(queryClient: T | undefined, status?: BondStatusString) => UseQueryResult<QueryValidatorsResponse>;
/**
 * graz hook to retrieve last connected chain info
 *
 * @example
 * ```ts
 * import { useRecentChain, connect, mainnetChains } from "graz";
 * const { data: recentChain, clear } = useRecentChain();
 * try {
 *   connect(mainnetChains.cosmos);
 * } catch {
 *   connect(recentChain);
 * }
 * ```
 *
 * @see {@link useActiveChain}
 */
declare const useRecentChain: () => {
    data: GrazChain | null;
    clear: () => void;
};
declare type UseSuggestChainArgs = MutationEventArgs<ChainInfo>;
/**
 * graz mutation hook to suggest chain to a Wallet
 *
 * @example
 * ```ts
 * import { useSuggestChain } from "graz";
 * const { suggest, isLoading, isSuccess, ... } = useSuggestChain();
 *
 * suggest({
 *    rpc: "https://rpc.cosmoshub.strange.love",
 *    rest: "https://api.cosmoshub.strange.love",
 *    chainId: "cosmoshub-4",
 *    ...
 * });
 * ```
 */
declare const useSuggestChain: ({ onError, onLoading, onSuccess }?: UseSuggestChainArgs) => {
    error: unknown;
    isLoading: boolean;
    isSuccess: boolean;
    suggest: _tanstack_react_query.UseMutateFunction<ChainInfo, unknown, ChainInfo, unknown>;
    suggestAsync: _tanstack_react_query.UseMutateAsyncFunction<ChainInfo, unknown, ChainInfo, unknown>;
    status: "error" | "idle" | "loading" | "success";
};
declare type UseSuggestChainAndConnectArgs = MutationEventArgs<SuggestChainAndConnectArgs, {
    chain: ChainInfo;
    account: Key;
}>;
/**
 * graz mutation hook to suggest chain to a Wallet and connect account
 * afterwards
 *
 * @example
 * ```ts
 * import { useSuggestChainAndConnect } from "graz";
 *
 * // basic example
 * const { suggestAndConnect } = useSuggestChainAndConnect();
 *
 * // with event arguments
 * useSuggestChainAndConnect({
 *   onError: (err, chainInfo) => { ... },
 *   onLoading: () => { ... },
 *   onSuccess: ({ account, chain }) => { ... },
 * });
 *
 * // suggest and connect usage
 * suggestAndConnect({
 *   chainInfo: {
 *     rpc: "https://rpc.cosmoshub.strange.love",
 *     rest: "https://api.cosmoshub.strange.love",
 *     chainId: "cosmoshub-4",
 *     ...
 *   },
 *   ...
 * });
 * ```
 */
declare const useSuggestChainAndConnect: ({ onError, onLoading, onSuccess }?: UseSuggestChainAndConnectArgs) => {
    error: unknown;
    isLoading: boolean;
    isSuccess: boolean;
    isSupported: boolean;
    status: "error" | "idle" | "loading" | "success";
    suggestAndConnect: _tanstack_react_query.UseMutateFunction<{
        account: Key;
        chain: ChainInfo;
    }, unknown, SuggestChainAndConnectArgs, unknown>;
    suggestAndConnectAsync: _tanstack_react_query.UseMutateAsyncFunction<{
        account: Key;
        chain: ChainInfo;
    }, unknown, SuggestChainAndConnectArgs, unknown>;
};

interface UseQueryClient {
    (): UseQueryResult<QueryClient>;
    <A extends object>(setupA: ExtensionSetup<A>): UseQueryResult<QueryClient & A>;
    <A extends object, B extends object>(setupA: ExtensionSetup<A>, setupB: ExtensionSetup<B>): UseQueryResult<QueryClient & A & B>;
    <A extends object, B extends object, C extends object>(setupA: ExtensionSetup<A>, setupB: ExtensionSetup<B>, setupC: ExtensionSetup<C>): UseQueryResult<QueryClient & A & B & C>;
    <A extends object, B extends object, C extends object, D extends object>(setupA: ExtensionSetup<A>, setupB: ExtensionSetup<B>, setupC: ExtensionSetup<C>, setupD: ExtensionSetup<D>): UseQueryResult<QueryClient & A & B & C & D>;
    <A extends object, B extends object, C extends object, D extends object, E extends object>(setupA: ExtensionSetup<A>, setupB: ExtensionSetup<B>, setupC: ExtensionSetup<C>, setupD: ExtensionSetup<D>, setupE: ExtensionSetup<E>): UseQueryResult<QueryClient & A & B & C & D & E>;
    <A extends object, B extends object, C extends object, D extends object, E extends object, F extends object>(setupA: ExtensionSetup<A>, setupB: ExtensionSetup<B>, setupC: ExtensionSetup<C>, setupD: ExtensionSetup<D>, setupE: ExtensionSetup<E>, setupF: ExtensionSetup<F>): UseQueryResult<QueryClient & A & B & C & D & E & F>;
    <A extends object, B extends object, C extends object, D extends object, E extends object, F extends object, G extends object>(setupA: ExtensionSetup<A>, setupB: ExtensionSetup<B>, setupC: ExtensionSetup<C>, setupD: ExtensionSetup<D>, setupE: ExtensionSetup<E>, setupF: ExtensionSetup<F>, setupG: ExtensionSetup<G>): UseQueryResult<QueryClient & A & B & C & D & E & F & G>;
    <A extends object, B extends object, C extends object, D extends object, E extends object, F extends object, G extends object, H extends object>(setupA: ExtensionSetup<A>, setupB: ExtensionSetup<B>, setupC: ExtensionSetup<C>, setupD: ExtensionSetup<D>, setupE: ExtensionSetup<E>, setupF: ExtensionSetup<F>, setupG: ExtensionSetup<G>, setupH: ExtensionSetup<H>): UseQueryResult<QueryClient & A & B & C & D & E & F & G & H>;
    <A extends object, B extends object, C extends object, D extends object, E extends object, F extends object, G extends object, H extends object, I extends object>(setupA: ExtensionSetup<A>, setupB: ExtensionSetup<B>, setupC: ExtensionSetup<C>, setupD: ExtensionSetup<D>, setupE: ExtensionSetup<E>, setupF: ExtensionSetup<F>, setupG: ExtensionSetup<G>, setupH: ExtensionSetup<H>, setupI: ExtensionSetup<I>): UseQueryResult<QueryClient & A & B & C & D & E & F & G & H & I>;
}
/**
 * graz query hook to create and use {@link QueryClient} similar when using {@link QueryClient.withExtensions}.
 *
 * Note: `useQueryClient` returns \@cosmjs/stargate's {@link QueryClient},
 * NOT to be confused with \@tanstack/react-query useQueryClient.
 *
 * @example
 * ```ts
 * // example without extensions
 * import { useQueryClient } from "graz";
 *
 * const queryClient = useQueryClient();
 *
 * // example with extensions
 * import { useQueryClient } from "graz";
 * import { setupAuthExtension, setupIbcExtension } from "@cosmjs/stargate";
 *
 * const queryClientWithExtensions = useQueryClient(setupAuthExtension, setupIbcExtension);
 * ```
 *
 * @see {@link createQueryClient}
 */
declare const useQueryClient: UseQueryClient;

/**
 * graz query hook to retrieve a CosmWasmClient, StargateClient and Tendermint34Client. If there's no given arguments it will be using the current connected client
 *
 * @example
 * ```ts
 * import { useClient } from "graz";
 *
 * // use connected client's cosmwasm client
 * const { data, isFetching, refetch, ... } = useClient();
 *
 * // initialize new custom client from given arguments
 * useClient({ rpc: "https://rpc.cosmoshub.strange.love", });
 * ```
 */
declare const useClients: (args?: CreateClientArgs) => UseQueryResult<GrazStore["clients"]>;
/**
 * graz query hook to retrieve a SigningCosmWasmClient. If there's no given args it will be using the current connected signer
 *
 * @example
 * ```ts
 * import { useSigningClient } from "graz";
 *
 * // get connected client's cosmwasm client
 * const { data, isFetching, refetch, ... } = useSigningClient();
 *
 * // initialize new custom client with given args
 * useSigningClient({
 *   rpc: "https://rpc.cosmoshub.strange.love",
 *   offlineSigner: customOfflineSigner,
 *   ...
 * });
 * ```
 */
declare const useSigningClients: (args?: CreateSigningClientArgs) => UseQueryResult<GrazStore["signingClients"]>;

/**
 * graz query hook to retrieve an ibc domain from given address.
 *
 * @param address - Optional, if address undefined this hook won't run
 * @param isTestnet - Optional for pointing to testnet
 *
 * @example
 * ```ts
 * import { useAddressToIbcDomain } from "graz";
 *
 * // basic example
 * const { data, isFetching, refetch, ... } = useAddressToIbcDomain({
 *  address: "cosmos1g3jjhgkyf36pjhe7u5cw8j9u6cgl8x929ej430",
 * });
 *
 * ```
 */
declare const useAddressToIbcDomain: ({ address, isTestnet, }: {
    address?: string | undefined;
    isTestnet?: boolean | undefined;
}) => UseQueryResult<AddressToIbcDomainReturnValue | null>;
/**
 * graz query hook to retrieve an addresses from given ibc domain.
 *
 * @param ibcDomain - Optional ibc domain, if ibc domain undefined this hook won't run
 * @param isTestnet - Optional for pointing to testnet
 *
 * @example
 * ```ts
 * import { useIbcDomainToAddresses } from "graz";
 *
 * // basic example
 * const { data, isFetching, refetch, ... } = useIbcDomainToAddresses({
 *  ibcDomain: "kikiding.cosmos",
 * });
 *
 * ```
 */
declare const useIbcDomainToAddresses: ({ ibcDomain, isTestnet, }: {
    ibcDomain?: string | undefined;
    isTestnet?: boolean | undefined;
}) => UseQueryResult<string[] | null>;
/**
 * graz query hook to retrieve an address from given ibc domain and prefix.
 *
 * @param ibcDomain - Optional ibc domain, if ibc domain undefined this hook won't run
 * @param prefix - Optional string or bech32 prefix of the destination chain, for instance "cosmos", "somm", etc
 * @param isTestnet - Optional for pointing to testnet
 *
 * @example
 * ```ts
 * import { useIbcDomainToChainAddress } from "graz";
 *
 * // basic example
 * const { data, isFetching, refetch, ... } = useIbcDomainToChainAddress({
 *  ibcDomain: "kikiding.cosmos",
 *  prefix: "osmo"
 * });
 *
 * ```
 */
declare const useIbcDomainToChainAddress: ({ ibcDomain, prefix, isTestnet, }: {
    ibcDomain?: string | undefined;
    prefix?: ChainPrefix | undefined;
    isTestnet?: boolean | undefined;
}) => UseQueryResult<string | null>;
/**
 * graz query hook to retrieve a ibc domain details from given ibc domain.
 *
 * @param ibcDomain - Optional ibc domain, if ibc domain undefined this hook won't run
 * @param isTestnet - Optional for pointing to testnet
 *
 * @example
 * ```ts
 * import { useIbcDomainDetails } from "graz";
 *
 * // basic example
 * const { data, isFetching, refetch, ... } = useIbcDomainDetails({
 *  ibcDomain: "kikiding.cosmos",
 * });
 *
 * ```
 */
declare const useIbcDomainDetails: ({ ibcDomain, isTestnet }: {
    ibcDomain?: string | undefined;
    isTestnet?: boolean | undefined;
}) => UseQueryResult<DomainDetails | null, unknown>;
declare type UseResolveToChainAddressArgs = MutationEventArgs<ResolveToChainAddressArgs, string>;
/**
 * graz mutation hook to resolve an Ibc domain or an address to bech32 address from given string
 *
 * @example
 * ```ts
 * import { useResolveToChainAddress } from "graz";
 *
 * // basic example
 * const { resolveToChainAddress } = useResolveToChainAddress();
 *
 * // with event arguments
 * useResolveToChainAddress({
 *   onError: (err, args) => { ... },
 *   onLoading: () => { ... },
 *   onSuccess: ({ account, address }) => { ... },
 * });
 *
 * // resolveToChainAddress usage
 * resolveToChainAddress({
 *   value: "kikiding.cosmos",
 *   prefix: "osmo"
 *   ...
 * });
 * ```
 */
declare const useResolveToChainAddress: ({ onError, onLoading, onSuccess }?: UseResolveToChainAddressArgs) => {
    error: unknown;
    isLoading: boolean;
    isSuccess: boolean;
    resolveToChainAddress: _tanstack_react_query.UseMutateFunction<string, unknown, ResolveToChainAddressArgs, unknown>;
    resolveToChainAddressAsync: _tanstack_react_query.UseMutateAsyncFunction<string, unknown, ResolveToChainAddressArgs, unknown>;
    status: "error" | "idle" | "loading" | "success";
};

/**
 * graz mutation hook to send tokens. Note: if `senderAddress` undefined, it will use current connected account address.
 *
 * @example
 * ```ts
 * import { useSendTokens } from "graz";
 *
 * // basic example
 * const { sendTokens } = useSendTokens();
 *
 * sendTokens({
 *    recipientAddress: "cosmos1g3jjhgkyf36pjhe7u5cw8j9u6cgl8x929ej430";
 *    amount: [coin];
 *    ...
 * })
 * ```
 *
 * @see {@link sendTokens}
 */
declare const useSendTokens: ({ onError, onLoading, onSuccess, }?: MutationEventArgs<SendTokensArgs, DeliverTxResponse>) => {
    error: unknown;
    isLoading: boolean;
    isSuccess: boolean;
    sendTokens: _tanstack_react_query.UseMutateFunction<DeliverTxResponse, unknown, SendTokensArgs, unknown>;
    sendTokensAsync: _tanstack_react_query.UseMutateAsyncFunction<DeliverTxResponse, unknown, SendTokensArgs, unknown>;
    status: "error" | "idle" | "loading" | "success";
};
/**
 * graz mutation hook to send IBC tokens. Note: if `senderAddress` undefined, it will use current connected account address.
 *
 *
 * @example
 * ```ts
 * import { useSendIbcTokens } from "graz";
 *
 * // basic example
 * const { sendIbcTokens } = useSendIbcTokens();
 *
 * sendIbcTokens({
 *    recipientAddress: "cosmos1g3jjhgkyf36pjhe7u5cw8j9u6cgl8x929ej430",
 *    transferAmount: coin,
 *    ...
 * })
 * ```
 */
declare const useSendIbcTokens: ({ onError, onLoading, onSuccess, }?: MutationEventArgs<SendIbcTokensArgs, DeliverTxResponse>) => {
    error: unknown;
    isLoading: boolean;
    isSuccess: boolean;
    sendIbcTokens: _tanstack_react_query.UseMutateFunction<DeliverTxResponse, unknown, SendIbcTokensArgs, unknown>;
    sendIbcTokensAsync: _tanstack_react_query.UseMutateAsyncFunction<DeliverTxResponse, unknown, SendIbcTokensArgs, unknown>;
    status: "error" | "idle" | "loading" | "success";
};
declare type UseInstantiateContractArgs<Message extends Record<string, unknown>> = {
    codeId: number;
} & MutationEventArgs<InstantiateContractMutationArgs<Message>, InstantiateResult>;
/**
 * graz mutation hook to instantiate a CosmWasm smart contract when supported.
 *
 * @example
 * ```ts
 * import { useInstantiateContract } from "graz"
 *
 * const { instantiateContract: instantiateMyContract } = useInstantiateContract({
 *   codeId: 4,
 *   onSuccess: ({ contractAddress }) => console.log('Address:', contractAddress)
 * })
 *
 * const instantiateMessage = { foo: 'bar' };
 * instantiateMyContract({
 *  msg: instatiateMessage,
 *  label: "test"
 * });
 * ```
 */
declare const useInstantiateContract: <Message extends Record<string, unknown>>({ codeId, onError, onLoading, onSuccess, }: UseInstantiateContractArgs<Message>) => {
    error: unknown;
    isLoading: boolean;
    isSuccess: boolean;
    instantiateContract: _tanstack_react_query.UseMutateFunction<InstantiateResult, unknown, InstantiateContractMutationArgs<Message>, unknown>;
    instantiateContractAsync: _tanstack_react_query.UseMutateAsyncFunction<InstantiateResult, unknown, InstantiateContractMutationArgs<Message>, unknown>;
    status: "error" | "idle" | "loading" | "success";
};
declare type UseExecuteContractArgs<Message extends Record<string, unknown>> = {
    contractAddress: string;
} & MutationEventArgs<ExecuteContractMutationArgs<Message>, ExecuteResult>;
/**
 * graz mutation hook for executing transactions against a CosmWasm smart
 * contract.
 *
 * @example
 * ```ts
 * import { useExecuteContract } from "graz"
 *
 * interface GreetMessage {
 *   name: string;
 * }
 *
 * interface GreetResponse {
 *   message: string;
 * }
 *
 * const contractAddress = "cosmosfoobarbaz";
 * const { executeContract } = useExecuteContract<ExecuteMessage>({ contractAddress });
 * executeContract({ msg: {
 *   foo: "bar"
 * }}, {
 *   onSuccess: (data: GreetResponse) => console.log('Got message:', data.message);
 * });
 * ```
 */
declare const useExecuteContract: <Message extends Record<string, unknown>>({ contractAddress, onError, onLoading, onSuccess, }: UseExecuteContractArgs<Message>) => {
    error: unknown;
    isLoading: boolean;
    isSuccess: boolean;
    executeContract: _tanstack_react_query.UseMutateFunction<ExecuteResult, unknown, ExecuteContractMutationArgs<Message>, unknown>;
    executeContractAsync: _tanstack_react_query.UseMutateAsyncFunction<ExecuteResult, unknown, ExecuteContractMutationArgs<Message>, unknown>;
    status: "error" | "idle" | "loading" | "success";
};
/**
 * graz query hook for dispatching a "smart" query to a CosmWasm smart
 * contract.
 *
 * @param address - The address of the contract to query
 * @param queryMsg - The query message to send to the contract
 * @returns A query result with the result returned by the smart contract.
 */
declare const useQuerySmart: <TData, TError>(address?: string, queryMsg?: Record<string, unknown>) => UseQueryResult<TData, TError>;
/**
 * graz query hook for dispatching a "raw" query to a CosmWasm smart contract.
 *
 * @param address - The address of the contract to query
 * @param key - The key to lookup in the contract storage
 * @returns A query result with raw byte array stored at the key queried.
 */
declare const useQueryRaw: <TError>(address?: string, key?: string) => UseQueryResult<Uint8Array | null, TError>;

/**
 * graz hook which returns boolean whether Keplr Wallet is supported
 *
 * @example
 * ```ts
 * import { useCheckKeplr } from "graz";
 *
 * const { data: isSupported } = useCheckKeplr();
 * ```
 *
 * @deprecated prefer using {@link useCheckWallet}
 */
declare const useCheckKeplr: () => UseQueryResult<boolean>;
/**
 * graz query hook to check whether given {@link WalletType} or default configured wallet is supported
 *
 * @example
 * ```ts
 * import { useCheckWallet } from "graz";
 *
 * const { data: isSupported } = useCheckWallet();
 * const { data: isKeplrSupported } = useCheckWallet("keplr");
 * ```
 */
declare const useCheckWallet: (type?: WalletType) => UseQueryResult<boolean>;

declare type GrazProviderProps = Partial<QueryClientProviderProps> & {
    grazOptions?: ConfigureGrazArgs;
};
/**
 * Provider component which extends `@tanstack/react-query`'s {@link QueryClientProvider} with built-in query client
 * and various `graz` side effects
 *
 * @example
 * ```tsx
 * // example next.js application in _app.tsx
 * export default function CustomApp({ Component, pageProps }: AppProps) {
 *   return (
 *     <GrazProvider>
 *       <Component {...pageProps} />
 *     </GrazProvider>
 *   );
 * }
 * ```
 *
 * @see https://tanstack.com/query
 */
declare const GrazProvider: FC<GrazProviderProps>;

/**
 * Graz custom hook to track `keplr_keystorechange` event and reconnect state
 *
 * **Note: only use this hook if not using graz's provider component.**
 */
declare const useGrazEvents: () => null;
/**
 * Null component to run {@link useGrazEvents} without affecting component tree.
 *
 * **Note: only use this component if not using graz's provider component.**
 */
declare const GrazEvents: FC;

export { AddressToIbcDomainReturnValue, ChainInfoWithPath, ChainPrefix, ConfigureGrazArgs, ConnectArgs, CreateClientArgs, CreateQueryClient, CreateSigningClientArgs, Dictionary, DomainDetails, ExecuteContractArgs, ExecuteContractMutationArgs, GrazAdapter, GrazChain, GrazEvents, GrazProvider, GrazProviderProps, InstantiateContractArgs, InstantiateContractMutationArgs, KnownChainPrefix, Maybe, ResolveToChainAddressArgs, SendIbcTokensArgs, SendTokensArgs, SuggestChainAndConnectArgs, UseAccountArgs, UseConnectChainArgs, UseExecuteContractArgs, UseInstantiateContractArgs, UseQueryClient, UseResolveToChainAddressArgs, UseSuggestChainAndConnectArgs, UseSuggestChainArgs, WALLET_TYPES, WalletType, checkWallet, clearRecentChain, configureGraz, connect, createClients, createQueryClient, createSigningClients, defineChain, defineChainInfo, defineChains, disconnect, executeContract, getActiveChainCurrency, getAddressesByIbcDomain, getAvailableWallets, getBalanceStaked, getBalances, getChainAddressByIbcDomain, getIbcDomainByAdress, getIbcDomainDetails, getKeplr, getLeap, getQueryRaw, getQuerySmart, getRecentChain, getWallet, instantiateContract, isIbcDomainPostfix, mainnetChains, mainnetChainsArray, reconnect, resolveToChainAddress, sendIbcTokens, sendTokens, suggestChain, suggestChainAndConnect, testnetChains, testnetChainsArray, useAccount, useActiveChain, useActiveChainCurrency, useActiveChainValidators, useAddressToIbcDomain, useBalance, useBalanceStaked, useBalances, useCheckKeplr, useCheckWallet, useClients, useConnect, useDisconnect, useExecuteContract, useGrazEvents, useIbcDomainDetails, useIbcDomainToAddresses, useIbcDomainToChainAddress, useInstantiateContract, useOfflineSigners, useQueryClient, useQueryRaw, useQuerySmart, useRecentChain, useResolveToChainAddress, useSendIbcTokens, useSendTokens, useSigners, useSigningClients, useSuggestChain, useSuggestChainAndConnect, validateAddress };
