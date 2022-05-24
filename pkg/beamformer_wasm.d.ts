/* tslint:disable */
/* eslint-disable */
/**
*/
export function greet(): void;
/**
*/
export class Signal {
  free(): void;
/**
* @param {ULA} ula
* @param {number} N
* @param {Float64Array} amp
* @param {Float64Array} doA
* @returns {Signal}
*/
  static new(ula: ULA, N: number, amp: Float64Array, doA: Float64Array): Signal;
/**
* @param {number} amp
* @param {number} doa
*/
  add_source(amp: number, doa: number): void;
/**
* @returns {Signal}
*/
  with_random_signal(): Signal;
/**
* @param {number} L
* @returns {Float64Array}
*/
  beamform(L: number): Float64Array;
}
/**
*/
export class ULA {
  free(): void;
/**
* @param {number} n_sensor
* @param {number} d
* @returns {ULA}
*/
  static new(n_sensor: number, d: number): ULA;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly greet: () => void;
  readonly __wbg_ula_free: (a: number) => void;
  readonly ula_new: (a: number, b: number) => number;
  readonly __wbg_signal_free: (a: number) => void;
  readonly signal_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly signal_add_source: (a: number, b: number, c: number) => void;
  readonly signal_with_random_signal: (a: number) => number;
  readonly signal_beamform: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
