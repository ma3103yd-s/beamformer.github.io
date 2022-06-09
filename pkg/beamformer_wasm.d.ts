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
* @param {number} pert
* @returns {Signal}
*/
  with_pert(pert: number): Signal;
/**
* @param {boolean} coh
* @returns {Signal}
*/
  with_coh(coh: boolean): Signal;
/**
* @param {boolean} coh
*/
  set_coh(coh: boolean): void;
/**
* @param {number} pert
*/
  set_pert(pert: number): void;
/**
* @param {number} n_sensor
*/
  set_n_sensor(n_sensor: number): void;
/**
* @param {number} amp
* @param {number} doa
*/
  add_source(amp: number, doa: number): void;
/**
* @returns {number}
*/
  n_sensor(): number;
/**
* @returns {number}
*/
  n_sources(): number;
/**
*/
  clear(): void;
/**
*/
  random_signal(): void;
/**
* @returns {Signal}
*/
  with_random_signal(): Signal;
/**
* @param {number} L
* @returns {Float64Array}
*/
  beamform(L: number): Float64Array;
/**
* @param {number} L
* @returns {Float64Array}
*/
  capon(L: number): Float64Array;
/**
* @param {number} L
* @returns {Float64Array}
*/
  s_apes(L: number): Float64Array;
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
/**
* @returns {number}
*/
  n_sensor(): number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_ula_free: (a: number) => void;
  readonly ula_new: (a: number, b: number) => number;
  readonly ula_n_sensor: (a: number) => number;
  readonly __wbg_signal_free: (a: number) => void;
  readonly signal_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly signal_with_pert: (a: number, b: number) => number;
  readonly signal_with_coh: (a: number, b: number) => number;
  readonly signal_set_coh: (a: number, b: number) => void;
  readonly signal_set_pert: (a: number, b: number) => void;
  readonly signal_set_n_sensor: (a: number, b: number) => void;
  readonly signal_add_source: (a: number, b: number, c: number) => void;
  readonly signal_n_sensor: (a: number) => number;
  readonly signal_n_sources: (a: number) => number;
  readonly signal_clear: (a: number) => void;
  readonly signal_random_signal: (a: number) => void;
  readonly signal_with_random_signal: (a: number) => number;
  readonly signal_beamform: (a: number, b: number, c: number) => void;
  readonly signal_capon: (a: number, b: number, c: number) => void;
  readonly signal_s_apes: (a: number, b: number, c: number) => void;
  readonly greet: () => void;
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
