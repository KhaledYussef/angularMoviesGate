import { Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";
@Injectable({
    providedIn: "root",
})
export class CryptService {
    private secret: string = "Mi53c_ReT*K3y+04";
    constructor() {}

    encryptUsingAES256(val: string): string {
        let _key = CryptoJS.enc.Utf8.parse(this.secret);
        let _iv = CryptoJS.enc.Utf8.parse(this.secret);
        let encrypted = CryptoJS.AES.encrypt(JSON.stringify(val), _key, {
            keySize: 16,
            iv: _iv,
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        });
        return encrypted.toString();
    }
    //**************************************/
    decryptUsingAES256(val: string): string {
        let _key = CryptoJS.enc.Utf8.parse(this.secret);
        let _iv = CryptoJS.enc.Utf8.parse(this.secret);

        return CryptoJS.AES.decrypt(val, _key, {
            keySize: 16,
            iv: _iv,
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        }).toString(CryptoJS.enc.Utf8);
    }
}
