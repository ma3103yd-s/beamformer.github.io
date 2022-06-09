import * as wasm from './beamformer_wasm_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/
export function greet() {
    wasm.greet();
}

/**
*/
export class ULA {

    static __wrap(ptr) {
        const obj = Object.create(ULA.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_ula_free(ptr);
    }
    /**
    * @param {number} n_sensor
    * @param {number} d
    * @returns {ULA}
    */
    static new(n_sensor, d) {
        const ret = wasm.ula_new(n_sensor, d);
        return ULA.__wrap(ret);
    }
}

export function __wbg_alert_5c532e1b5d082677(arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
};

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

