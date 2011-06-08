/**
 
 * $Id: KR.js 643 2009-07-09 15:19:14Z wingedfox $
 
 *
 
 * Korean IME implementation
 
 *
 
 * This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 
 *
 
 * @author Konstantin Wiolowan
 
 * @copyright 2007-2009 Konstantin Wiolowan <wiolowan@mail.ru>
 
 * @version $Rev: 643 $
 
 * @lastchange $Author: wingedfox $ $Date: 2009-07-09 19:19:14 +0400 (Чтв, 09 Июл 2009) $
 
 */
VirtualKeyboard.Langs.KR = new
function () {
    var i = this;
    i.Jamo = {
        'ㄱ': [14, 44032, 1],
        'ㄲ': [6, 44620, 2],
        'ㄳ': [4, -1, 3],
        'ㄴ': [14, 45208, 4],
        'ㄵ': [4, -1, 5],
        'ㄶ': [4, -1, 6],
        'ㄷ': [6, 45796, 7],
        'ㄸ': [2, 46384, 0],
        'ㄹ': [14, 46972, 8],
        'ㄺ': [4, -1, 9],
        'ㄻ': [4, -1, 10],
        'ㄼ': [4, -1, 11],
        'ㄽ': [4, -1, 12],
        'ㄾ': [4, -1, 13],
        'ㄿ': [4, -1, 14],
        'ㅀ': [4, -1, 15],
        'ㅁ': [6, 47560, 16],
        'ㅂ': [14, 48148, 17],
        'ㅃ': [2, 48736, 0],
        'ㅄ': [4, -1, 18],
        'ㅅ': [14, 49324, 19],
        'ㅆ': [6, 49912, 20],
        'ㅇ': [6, 50500, 21],
        'ㅈ': [6, 51088, 22],
        'ㅉ': [2, 51676, 0],
        'ㅊ': [6, 52264, 23],
        'ㅋ': [6, 52852, 24],
        'ㅌ': [6, 53440, 25],
        'ㅍ': [6, 54028, 26],
        'ㅎ': [6, 54616, 27],
        'ㅏ': [1, 0, 0],
        'ㅐ': [1, 28, 0],
        'ㅑ': [1, 56, 0],
        'ㅒ': [1, 84, 0],
        'ㅓ': [1, 112, 0],
        'ㅔ': [1, 140, 0],
        'ㅕ': [1, 168, 0],
        'ㅖ': [1, 196, 0],
        'ㅗ': [1, 224, 0],
        'ㅛ': [1, 336, 0],
        'ㅜ': [1, 364, 0],
        'ㅠ': [1, 476, 0],
        'ㅡ': [1, 504, 0],
        'ㅣ': [1, 560, 0]
    };
    i.VV2V = [0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 224, 224, 0, 0, 364, 364, 364, 0, 0, 504, 0];
    i.V2VV = [0, 0, 0, 0, 0, 0, 0, 0,
    {
        'ㅏ': 252,
        'ㅐ': 280,
        'ㅣ': 308
    },
    0, 0, 0, 0,
    {
        'ㅓ': 392,
        'ㅔ': 420,
        'ㅣ': 448
    },
    0, 0, 0, 0,
    {
        'ㅣ': 532
    },
    0, 0];
    i.CV2C = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'.split('');
    i.C2CC = {
        'ㄱ': 'ㄲ',
        'ㄷ': 'ㄸ',
        'ㅂ': 'ㅃ',
        'ㅅ': 'ㅆ',
        'ㅈ': 'ㅉ'
    };
    i.CC2C = {
        'ㄲ': 'ㄱ',
        'ㄸ': 'ㄷ',
        'ㅃ': 'ㅂ',
        'ㅆ': 'ㅅ',
        'ㅉ': 'ㅈ'
    };
    i.PP2P = [0, 0, 1, 1, 0, 4, 4, 0, 0, 8, 8, 8, 8, 8, 8, 8, 0, 0, 17, 0, 19, 0, 0, 0, 0, 0, 0, 0];
    i.PP2PC = [0, [0, 44032],
        [0, 44620],
        [1, 49324],
        [0, 45208],
        [4, 51088],
        [4, 54616],
        [0, 45796],
        [0, 46972],
        [8, 44032],
        [8, 47560],
        [8, 48148],
        [8, 49324],
        [8, 53440],
        [8, 54028],
        [8, 54616],
        [0, 47560],
        [0, 48148],
        [17, 49324],
        [0, 49324],
        [0, 49912],
        [0, 50500],
        [0, 51088],
        [0, 52264],
        [0, 52852],
        [0, 53440],
        [0, 54028],
        [0, 54616]
    ];
    i.P2PP = [0,
    {
        'ㄱ': 2,
        'ㅅ': 3
    },
    0, 0,
    {
        'ㅈ': 5,
        'ㅎ': 6
    },
    0, 0, 0,
    {
        'ㄱ': 9,
        'ㅁ': 10,
        'ㅂ': 11,
        'ㅅ': 12,
        'ㅌ': 13,
        'ㅍ': 14,
        'ㅎ': 15
    },
    0, 0, 0, 0, 0, 0, 0, 0,
    {
        'ㅅ': 18
    },
    0,
    {
        'ㅅ': 20
    },
    0, 0, 0, 0, 0, 0, 0, 0];
    i.flags = 0;
    i.parseHangul = function (I) {
        if (I == '' || I.length > 1) return null;
        var l = I.charCodeAt();
        if (l < 0x3131 || l > 0xD7A3) return null;
        else if (l < 0x314F && l > 0x3130) return [i.Jamo[I][1], -1, 0];
        l -= 44032;
        var o = [];
        o[0] = 44032 + 588 * (l / 588 >> 0);
        l %= 588;
        o[1] = 28 * (l / 28 >> 0);
        o[2] = l % 28;
        return o
    };
    i.charProcessor = function (I, l, o, O, Q) {
        var _ = i.Jamo[I];
        if (!O) O = i.parseHangul(l);
        if (O == null) {
            if (!_) {
                return [I, 0]
            } else {
                if (_[0] & 2) return [I, 1];
                else
                return [I, 0]
            }
        } else {
            if (I == '\u0008') {
                if (O[2]) {
                    return [String.fromCharCode(O[0] + O[1] + i.PP2P[O[2]]), 1]
                } else if (O[1] > -1) {
                    var c = i.VV2V[O[1] / 28];
                    if (c) return [String.fromCharCode(O[0] + c), 1];
                    else
                    return [i.CV2C[(O[0] - 44032) / 588], 1]
                } else if (i.CC2C[l]) {
                    return [i.CC2C[l], 1]
                } else {
                    i.flags = 0;
                    r[14, 44032, 1],eturn ['', 0]
                }
            } else if (!_) {
                i.flags = 0;
                return [l + I, 0]
            } else if (O[2]) {
                if (_[0] & 2) {
                    var C = i.P2PP[O[2]][I];
                    if (C) return [String.fromCharCode(O[0] + O[1] + C), 1];
                    else
                    return [l + I, 1]
                } else if (_[0] & 1) {
                    if (Q && O[2] == 21) return [l + String.fromCharCode(50500 + _[1]), 1];
                    return [String.fromCharCode(O[0] + O[1] + i.PP2PC[O[2]][0]) + String.fromCharCode(i.PP2PC[O[2]][1] + i.Jamo[I][1]), 1]
                } else {
                    return [l + I, 0]
                }
            } else if (O[1] > -1) {
                i.flags &= ~3;
                if (_[0] & 4) {
                    return [String.fromCharCode(O[0] + O[1] + _[2]), 1]
                } else if (_[0] & 1) {
                    if (Q) {
                        var e;
                        if (i.flags & 4 && (e = '\u3153\u3154\u3163'.indexOf(I)) != -1) {
                            i.flags &= ~4;
                            return [String.fromCharCode(O[0] + [392, 308, 448][e]), 1]
                        }
                    }
                    var v = i.V2VV[O[1] / 28][I];
                    if (v) {
                        return [String.fromCharCode(O[0] + v), 1]
                    } else {
                        if (Q) {
                            return [l + String.fromCharCode(50500 + _[1]), 1]
                        } else
                        return [l + I, 0]
                    }
                } else
                return [l + I, 1]
            } else if (_[0] & 1) {
                return [String.fromCharCode(i.Jamo[l][1] + _[1]), 1]
            } else {
                if (l == I && i.C2CC[l]) return [i.C2CC[l], 1];
                else
                return [l + I, 1]
            }
        }
    }
};
